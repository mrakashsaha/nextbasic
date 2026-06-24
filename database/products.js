const sqlite = require('better-sqlite3');
const db = sqlite('products.sqlite');

export default function getproducts() {
    return db.prepare(
        `SELECT * FROM products`
    ).all();
}