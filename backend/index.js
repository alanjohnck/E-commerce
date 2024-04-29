const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database");
const bcrypt = require("bcrypt");
const app = express();
const userAuthentication = require("./authenticationRoute");
const productData = require("./productData");
app.use(cors());
app.use(bodyParser.json());

app.use('/',userAuthentication);
app.use('/',productData);

app.post("/addToCart",async(req,res)=>{
    const {product_id,image,product_name,product_material,price}=req.body;
    pool.query("SELECT * FROM cart WHERE product_id=$1",[product_id],(err,result)=>{
        try {
            if (err) {
                throw err;
            }
            if(result.rows.length>0){
                res.send("Product already added to cart")
            }else{
                pool.query("INSERT INTO cart (product_image,product_name,product_material,product_price,product_id) VALUES ($1, $2, $3,$4,$5)", [image,product_name,product_material,price,product_id], (err, result) => {
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
            }
        } catch (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
        }
    })
});

app.delete("/removeFromCart",async(req,res)=>{
    console.log(req.body);
    const{cart_id}=req.body;
   pool.query("DELETE FROM cart WHERE cart_id = $1",[cart_id],(err,result)=>{
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
})

app.get("/getCartData",async(req,res)=>{
    pool.query("SELECT * FROM cart",(err,result)=>{
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
})

app.get("/getOfferDetails",async(req,res)=>{
    pool.query("SELECT * FROM offers",(err,result)=>{
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
})

app.get('/getUser',async(req,res)=>{
    const{username}=req.body;
    console.log(username)
    pool.query("SELECT id FROM users where username= $1",[username],(err,result)=>{
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

})


app.get('/getAddress',async(req,res)=>{
    const username = req.query.username;
    pool.query('SELECT * FROM useraddress WHERE firstName = $1', [username],(err,result)=>{
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
})
app.post("/addAddress", async (req, res) => {
    const { firstname,lastname, address_name, state_name, district, pincode, phone_number,email } = req.body;
    pool.query("INSERT INTO useraddress (firstname,lastname, address_name, state_name, district, pincode, phone_number,email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [firstname, lastname, address_name, state_name, district, pincode, phone_number, email], (err, result) => {
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


app.get("/getViewproduct/:search", async (req, res) => {
    const {search} = req.params; 
    if(search=='all'){
        pool.query('SELECT * FROM product_detail', (err, result) => {
            try {
                if (err) {
                    throw err;
                }
                res.send(result.rows); 
                return ;
            } catch (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
     }else
     if(search=='fashion' || search=='furniture' || search=='books' || search=='tech' ||search=='travel'){
        pool.query('SELECT * FROM product_detail WHERE category = $1',[search], (err, result) => {
            try {
                if (err) {
                    throw err;
                }
                res.send(result.rows); 
                return ;
            } catch (err) {
                console.error('Error executing query:', err);
                res.status(500).send('Error executing query');
            }
        });
     }else{
    pool.query('SELECT * FROM product_detail WHERE product_name LIKE $1',[`%${search}%`],async (err, result) => {
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
  }
});
app.post('/addOrder', async (req, res) => {
    try {
      const { product_id, address_id } = req.body;
      const date = new Date().toISOString().slice(0, 10);
      await pool.query('INSERT INTO orders (product_id, address_id, date) VALUES ($1, $2, $3)', [product_id, address_id, date]);
      res.status(200).json({ message: 'Order added successfully' });
    } catch (error) {
      console.error('Error adding order:', error);
      res.status(500).json({ error: 'Error adding order' });
    }
  });
  
app.listen(8000, () => {
    console.log("Server is running on port 8000");
    }
);