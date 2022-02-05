const express = require('express');
const path = require('path');
var url = require('url');
const app = express();
const port = 3000;

// Set EJS as a Web Templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/test', (req, res) => {
    res.render('test');
});

app.get('/QR-Code-Component', (req, res) => {
    res.render('challenges/index');
});

// Set 404 Error page
app.get('*',(req, res, next) => {
    res.status(404).render('404');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server booming at http://localhost:${port}`);
});