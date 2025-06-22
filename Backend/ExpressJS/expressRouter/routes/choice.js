// core
const path = require("path");

// external
const express = require("express");

// local
const pathUtil = require("../utils/pathUtil");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.post("/choice", (req, res) => {
  // change user url to choice
  const { name, age, hobby, dream } = req.body;
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Thank You, ${name}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height:100vh;
  margin:0;
}
h1 {
  font-size:2.5rem;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding:20px;
  border-radius:12px;
  text-align:left;
  max-width:300px;
  margin:20px;
  box-shadow:0px 4px 15px rgba(0,0,0,0.3);
}
.card h2 {
  font-size:1.5rem;
}
.card p {
  font-size:1rem;
}
.btn {
  display:inline-block;
  padding:10px 20px;
  font-size:1rem;
  color:#fff;
  text-decoration:none;
  background:#ff6f61;
  border-radius:30px;
  margin-top:20px;
  transition:background 0.3s;
}
.btn:hover {
  background:#ff3f31;
}
.cards {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}
</style>
</head>
<body>
<h1>Thank You, ${name}! 👏</h1>
<div class="cards">
  <div class="card">
    <h2>Age</h2>
    <p>${age}</p>
  </div>
  <div class="card">
    <h2>Hobby</h2>
    <p>${hobby}</p>
  </div>
  <div class="card">
    <h2>Dream Destination</h2>
    <p>${dream}</p>
  </div>
</div>
<a class="btn" href="/">Go Home</a>
</body>
</html>`);
});

module.exports = router;
