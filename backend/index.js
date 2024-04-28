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
//bug

app.get("/getViewproduct/:search", async (req, res) => {
    const {search} = req.params; 
    pool.query('SELECT * FROM product_detail WHERE product_name LIKE $1',[`%${search}%`], (err, result) => {
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