const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");
const { route } = require("./items");

router.get("/cart", ordersCtrl.cart);

router.get("/user", ordersCtrl.forUser);

router.post("/cart/items/:id", ordersCtrl.addToCart);

router.post("/cart/estimate", ordersCtrl.estimate);

router.put("/cart/qty", ordersCtrl.setItemQtyInCart);

router.delete("/:id", ordersCtrl.deleteOrder);

router.put("/updateorder/:id", ordersCtrl.updateOrder);

module.exports = router;
