const express= require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('./database');

router.post('/signup',async(req,res)=>{
    const {username, lastName, email, password, confirmPassword } = req.body;
    console.log(req.body)
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, lastName, email, passwordUser) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [username, lastName, email, hashedPassword]);
    const token = jwt.sign({ username, lastName, email }, 'secretKey');

    res.json({ token ,username});
});
router.get('/user', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, 'secretKey');
      res.json({ user: decoded });
      histr
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  });
module.exports = router;
