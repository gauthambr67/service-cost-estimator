require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    {
      name: "Exterior Work",
      sortOrder: 10,
    },
    {
      name: "Interior Work",
      sortOrder: 20,
    },
    {
      name: "Mechanical Work",
      sortOrder: 30,
    },
    {
      name: "Electrical Work",
      sortOrder: 40,
    },
    {
      name: "Tyres and Wheels",
      sortOrder: 50,
    },
    {
      name: "Lubricants",
      sortOrder: 60,
    },
    {
      name: "Service Packages",
      sortOrder: 70,
    },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: "Detailing", emoji: "✨", category: categories[0], price: 75 },
    {
      name: "Dent Removal (per panel)",
      emoji: "🔨",
      category: categories[0],
      price: 175,
    },
    {
      name: "Painting (per panel)",
      emoji: "🎨",
      category: categories[0],
      price: 200,
    },
    {
      name: "Paint Correction (per panel)",
      emoji: "🖌",
      category: categories[0],
      price: 145,
    },
    {
      name: "Teflon Coating",
      emoji: "🛡",
      category: categories[0],
      price: 1200,
    },
    { name: "Deep Cleaning", emoji: "🪣", category: categories[1], price: 120 },
    {
      name: "Stain Removal (per seat)",
      emoji: "🧼",
      category: categories[1],
      price: 75,
    },
    {
      name: "Fabric Rejuvenation",
      emoji: "🌟",
      category: categories[1],
      price: 250,
    },
    { name: "AC Refresh", emoji: "🔄", category: categories[1], price: 90 },
    {
      name: "Replacing Filters",
      emoji: "🧻",
      category: categories[2],
      price: 60,
    },
    { name: "Brake Overhaul", emoji: "𓇳", category: categories[2], price: 75 },
    {
      name: "Clutch Assembly Replacement",
      emoji: "⚙⚙",
      category: categories[2],
      price: 250,
    },
    {
      name: "Gearbox Overhaul",
      emoji: "⚙️",
      category: categories[2],
      price: 350,
    },
    {
      name: "Spark Plug Replacement",
      emoji: "🔌",
      category: categories[2],
      price: 60,
    },
    {
      name: "ICE Debugging/Update",
      emoji: "📟",
      category: categories[3],
      price: 95,
    },
    {
      name: "Headlight Bulb Replacement",
      emoji: "🚘",
      category: categories[3],
      price: 40,
    },
    {
      name: "Taillight Bulb Replacement",
      emoji: "🚥",
      category: categories[3],
      price: 40,
    },
    {
      name: "Turn Indicator Bulb Replacement",
      emoji: "💡",
      category: categories[3],
      price: 25,
    },
    {
      name: "Battery Recharge",
      emoji: "🪫",
      category: categories[3],
      price: 60,
    },
    {
      name: "Battery Replacement",
      emoji: "🔋",
      category: categories[3],
      price: 45,
    },
    {
      name: "Wheel Alignment",
      emoji: "🛞",
      category: categories[4],
      price: 175,
    },
    {
      name: "Wheel Balancing",
      emoji: "🛞",
      category: categories[4],
      price: 190,
    },
    { name: "Wheel Rotation", emoji: "🛞", category: categories[4], price: 40 },
    {
      name: "Swapping Tyre Set",
      emoji: "🛞",
      category: categories[4],
      price: 40,
    },
    {
      name: "Engine Oil Change",
      emoji: "🛢",
      category: categories[5],
      price: 40,
    },
    {
      name: "Lubricant Refill",
      emoji: "🍶",
      category: categories[5],
      price: 20,
    },
    {
      name: "Washer-fluid Refill",
      emoji: "☔",
      category: categories[5],
      price: 10,
    },
    {
      name: "Brake Fluid Check and Top-up",
      emoji: "✅",
      category: categories[5],
      price: 60,
    },
    {
      name: "Quick Service (5k Km)",
      emoji: "⏱",
      category: categories[6],
      price: 150,
    },
    {
      name: "Annual Service (10k Km)",
      emoji: "🗓️",
      category: categories[6],
      price: 250,
    },
    {
      name: "Safety Inspection",
      emoji: "📋",
      category: categories[6],
      price: 175,
    },
  ]);

  console.log(items);
  process.exit();
})();