const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = require("./itemSchema");

const lineItemSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    hours: { type: Number, default: 0 },
    item: itemSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
lineItemSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

lineItemSchema.virtual("extHours").get(function () {
  return this.item.hours * this.qty;
});

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("totalHours").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extHours, 0);
});

orderSchema.virtual("totalQty").get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual("orderId").get(function () {
  return this.id;
});

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemId)
  );
  if (lineItem) {
    lineItem.qty++;
  } else {
    const Item = mongoose.model("Item");
    const item = await Item.findById(itemId);
    const newLineItem = { item };
    cart.lineItems.push(newLineItem);
  }
  return cart.save();
};

orderSchema.methods.setItemQty = function (itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemId)
  );
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model("Order", orderSchema);
