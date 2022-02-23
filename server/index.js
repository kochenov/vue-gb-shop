const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

const catalog_path = path.resolve(__dirname, "./data/products.json");
const cart_path = path.resolve(__dirname, "./data/cart.json");
const static_dir = path.resolve(__dirname, "../dist/");

app.use(express.static(static_dir));
app.use(express.json());

app.get("/api/v1/catalog", (req, res) => {
  fs.readFile(catalog_path, "utf-8", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

app.get("/api/v1/product/:id", (req, res) => {
  fs.readFile(catalog_path, "utf-8", (err, data) => {
    if (!err) {
      const products = JSON.parse(data);
      products.forEach((value) => {
        if (value.id == req.params.id) {
          res.send(JSON.stringify(value));
        }
      });
      //console.log(products);
      //res.send(JSON.stringify(product));
    } else {
      res.status(500).send(err);
    }
  });
});

app.get("/api/v1/cart", (req, res) => {
  fs.readFile(cart_path, "utf-8", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.status(500).send(err);
    }
  });
});

app.post("/api/v1/cart", (req, res) => {
  fs.readFile(cart_path, "utf-8", (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);
      let productCart = cart.find((item) => item.id === req.body.id);
      if (typeof productCart === "undefined") {
        cart.push(req.body);
      }
      fs.writeFile(cart_path, JSON.stringify(cart), "utf-8", () => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});
app.put("/api/v1/cart/:id", (req, res) => {
  fs.readFile(cart_path, "utf-8", (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);

      cart.forEach((product) => {
        if (req.params.id == product.id) {
          product.count = req.body.count;
        }
      });

      fs.writeFile(cart_path, JSON.stringify(cart), "utf-8", () => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});
app.delete("/api/v1/cart/delete/:id", (req, res) => {
  fs.readFile(cart_path, "utf-8", (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);

      cart.forEach((value, index) => {
        if (req.params.id == value.id) {
          cart.splice(index, 1);
        }
      });
      fs.writeFile(cart_path, JSON.stringify(cart), "utf-8", () => {
        res.send(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
