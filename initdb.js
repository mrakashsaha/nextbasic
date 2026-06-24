const sqlite = require('better-sqlite3');

const db = sqlite('products.sqlite');


db.prepare(
    `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        image TEXT

    )`
).run();


db.prepare(
    `INSERT INTO products (name, price, image) values
    ('Banana', 20, 'banana.jpg')
    `
).run();
db.prepare(
    `INSERT INTO products (name, price, image) values
    ('Orange', 40, 'orange.jpg')
    `
).run();


const products = db.prepare(
    `SELECT * FROM products`
).all();


console.log(products);