const path = require('path'); 
// const mongoose = require('mongoose');

const express = require('express');

const hostRouter = require('./routes/hostRouter');
const storeRouter = require('./routes/storeRouter');
const { default: mongoose } = require('mongoose');

const app = express();

// make public folder available to server
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());    


app.use('/host', hostRouter);
app.use(storeRouter);

app.use((req, res)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

mongoose.connect("")

app.listen(7000, () => {
    console.log('Server started on port http://localhost:7000'); 
});