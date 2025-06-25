const path = require('path'); 

const express = require('express');

const hostRouter = require('./routes/hostRouter');
const storeRouter = require('./routes/storeRouter');

const app = express();

// make public folder available to server
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));


app.use(hostRouter);
app.use(storeRouter);

app.use((req, res)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});


app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});