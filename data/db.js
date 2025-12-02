import Database from "better-sqlite3"

const db = new Database("./data/database.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, amount INTEGER)").run()

export const getAllProducts = ()=>{
    return db.prepare("SELECT * FROM products").all()
}

export const getProductById=(id)=>{
    db.prepare("SELECT * FROM products WHERE id = ?").get(id)
}
export const createProduct = (name,price,amount)=>{
    db.prepare("INSERT INTO products (name,price,amount) VALUES (?,?,?)").run(name,price,amount)
}

export const updateProduct = (id,name,price,amount)=>{
    db.prepare("UPDATE products SET name = ?, price = ?, amount = ? WHERE id = ?").run(amount,price,name,id)
}

export default db;