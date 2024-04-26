const express =require('express');
const router = express.Router();
const pool = require('./database');
router.get("/getProductData",async(req,res)=>{
 pool.query("SELECT * FROM product_detail",(err,result)=>{
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


router.get("/getProductData/:id", async (req, res) => {
    const { id } = req.params;
    pool.query("SELECT * FROM product_detail WHERE id = $1", [id], (err, result) => {
        try {
            if (err) {
                throw err;
            }
            res.send(result.rows[0]);
        } catch (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
        }
    });
});

module.exports = router;