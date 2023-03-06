const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true, default: 0 },
    date: { type: Date},
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
