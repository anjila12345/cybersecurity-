const express = require('express')
const app = express();
require('./database/mongoose')
const user2Router = require('./router/users');
const  gameboard= require('./router/game');
const path = require("path");
const bodyParser = require('body-parser');
const publicdirectory = path.join(__dirname, 'public');
const cors = require('cors');
const auth =require('./middleware/auth')
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(publicdirectory));
app.use(express.json());

app.use(user2Router);
app.use(gameboard)

app.listen("3000");
console.log('Server runs at http://localhost:' + 3000);