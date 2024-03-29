const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database");
const bcrypt = require("bcrypt");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/createUser", async(req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
   console.log(hashedPassword);
    pool.query("INSERT INTO userInfo (email, passwordUser) VALUES ($1, $2)", [email,hashedPassword], (err, result) => {
        try {
            if (err) {
                throw err;
            }
            res.send(result.rows); 
        } catch (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
        }
    });
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
    }
);