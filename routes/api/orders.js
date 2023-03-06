const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/order");
const { route } = require("./items");

router.get("/cart", ordersCtrl.cart);

router.get("/user", ordersCtrl.forUser);

router.post("/cart/items/:id", ordersCtrl.addToCart);

router.post("/cart/estimate", ordersCtrl.checkout);

router.put("/cart/qty", ordersCtrl.setItemQtyInCart);

module.exports = router;