const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const route = require('./routes');

//CONNECT TO MONGODB
//const db = require('./config/db');
//db.connect();

const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());
//HTTP logger
app.use(morgan('common'));

//routes
route(app);

//listen port
const port = 8000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));