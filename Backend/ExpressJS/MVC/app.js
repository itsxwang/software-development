// core
const path = require('path'); 

// external
const express = require('express');

// local
const homeRouter = require('./routes/homeRouter');
const addListingRouter = require('./routes/addListingRouter');
const aboutRouter = require('./routes/about');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));

app.use(homeRouter);
app.use(addListingRouter);
app.use(aboutRouter);


app.use((req, res)=> {
    res.status(404).send("<h1> Page not found </h1>");
});

app.listen(3001, () => {
    console.log('Server started on port http://localhost:3001');
});