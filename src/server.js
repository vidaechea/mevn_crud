const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/item.js')
const app = express();

mongoose.connect('mongodb://localhost/mevn-crud')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/item', itemRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
   console.log('Server run port', app.get('port'),);
});