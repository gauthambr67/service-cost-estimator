const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    emoji: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true, default: 0 },
    hours: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
