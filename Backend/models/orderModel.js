const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    address: Object,
    product: Object,
    status: { type: String, default: 'placed' },
    createdAt: { type: Date, default: Date.now }
});


module.exports = model('order', mySchema);