//server.js
const path = require('path');
const express = require('express');
const layout = require('express-layout');

const routes = require('./routes');
const app = express();

app.set('views', path.join(__dirname), 'views');
app.set('view engine', 'ejs');

const middlewares = [
    layout(),
    expess.static(path.join(__dirname, 'public')),
];
