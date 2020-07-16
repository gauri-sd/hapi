// const Mongoose      = require('mongoose'),
//         Schema      = Mongoose.Schema;

// let ItemListSchema = new Schema(
//     {
//         item_id: {type: Schema.Types.Number},
//         name: {type: Schema.Types.String},
//         price: {type: Schema.Types.String},
//     },
//     { minimize: true },
// )

// module.exports = Mongoose.model("item_list", ItemListSchema, "item_list");

const mongoose = require('mongoose');

const url='mongodb://localhost:27017/Task3'
mongoose.connect(url);

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema,'Product');