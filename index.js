var mongoose = require("mongoose");
var schema = require('./schema')
var Product = mongoose.model("Product", schema, "product");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});

function insert (c, p, d, q, m) {
    var product = new Product({
        code: c,
        price: p,
        description: d,
        quantity: q,
        minimum: m
    });
    
    product.save((error) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(product);
    });
}

function find () {
    Product.find({ $where : "this.minimum > this.quantity"}, (error, doc) => {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(doc);
        process.exit(0);
    });
}

/*insert('a', 100, 'USB 16gb', 20, 10);
insert('b', 150, 'USB 64gb', 5, 10);
insert('3', 120, 'USB 32gb', 8, 10);*/

find();