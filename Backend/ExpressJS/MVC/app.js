const path = require('path'); 

const express = require('express');

const homeRouter = require('./routes/homeRouter');
const addListingRouter = require('./routes/addListingRouter');
const aboutRouter = require('./routes/about');

const app = express();

// make public folder available to server
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));

app.use(homeRouter);
app.use(addListingRouter);
app.use(aboutRouter);


app.use((req, res)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3001, () => {
    console.log('Server started on port http://localhost:3001');
});