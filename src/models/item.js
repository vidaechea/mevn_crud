const mongoose = require('mongoose');
const schema = mongoose.Schema;

const item = new schema({
   name: {type: String},
   price: {type: Number}
}, {
    collection: 'items'
});


module.exports = mongoose.model('item', item);