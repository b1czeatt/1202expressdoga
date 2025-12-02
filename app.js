import express from "express";
import * as db from "../data/db.js.";
import { getProductById } from "./data/db";

const app = express;
app.use(express.json());

app.get("/api/products", (req, res) => {
  const allproducts = db.getAllProducts();
  return res.status(200).json(allproducts);
});

app.post("/api/products", (req, res) => {
  const { name, price, amount } = req.body;
  if (!name || !price || !amount) {
    return res.status(404).json("Product not found!");
  }
  db.createProduct(name, price, amount);
  return res.status(201).json({ message: "Product created" });
});

app.put("/api/products/:id", (req, res) => {
  const id = req.param.id;
  const product = getProductById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { name, price, amount } = req.body;
  if (!name || !price || !amount) {
    return res.status(400).json("Invalid credentials");
  }
  return res.status(200).json({ message: "Product updated!" });
});

app.listen(3311, () => {
  console.log("Server runs!");
});

export default app;
