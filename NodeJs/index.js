const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const { mongoose } = require("./db.js");
const employeeController = require('./controllers/employeeController.js')

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200' }));

app.listen(3000, () => console.log('Node Server started at port number : 3000'));

app.use('/employees', employeeController);