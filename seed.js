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
    { name: "Detailing", emoji: "โจ", category: categories[0], price: 75, hours: 2},
    {
      name: "Dent Removal (per panel)",
      emoji: "๐จ",
      category: categories[0],
      price: 175,
      hours: 4,
    },
    {
      name: "Painting (per panel)",
      emoji: "๐จ",
      category: categories[0],
      price: 200,
      hours: 6,
    },
    {
      name: "Paint Correction (per panel)",
      emoji: "๐",
      category: categories[0],
      price: 145,
      hours: 6,
    },
    {
      name: "Teflon Coating",
      emoji: "๐ก",
      category: categories[0],
      price: 1200,
      hours: 16,
    },
    { name: "Deep Cleaning", emoji: "๐ชฃ", category: categories[1], price: 120 },
    {
      name: "Stain Removal (per seat)",
      emoji: "๐งผ",
      category: categories[1],
      price: 75,
      hours: 4,
    },
    {
      name: "Fabric Rejuvenation",
      emoji: "๐",
      category: categories[1],
      price: 250,
      hours: 4,
    },
    { name: "AC Refresh", emoji: "๐", category: categories[1], price: 90 },
    {
      name: "Replacing Filters",
      emoji: "๐งป",
      category: categories[2],
      price: 60,
      hours: 1,
    },
    { name: "Brake Overhaul", emoji: "๐ณ", category: categories[2], price: 75, hours:2, },
    {
      name: "Clutch Assembly Replacement",
      emoji: "โโ",
      category: categories[2],
      price: 250,
      hours: 16,
    },
    {
      name: "Gearbox Overhaul",
      emoji: "โ๏ธ",
      category: categories[2],
      price: 350,
      hours: 24,
    },
    {
      name: "Spark Plug Replacement",
      emoji: "๐",
      category: categories[2],
      price: 60,
      hours: 1,
    },
    {
      name: "ICE Debugging/Update",
      emoji: "๐",
      category: categories[3],
      price: 95,
      hours: 4,
    },
    {
      name: "Headlight Bulb Replacement",
      emoji: "๐",
      category: categories[3],
      price: 40,
      hours: 1,
    },
    {
      name: "Taillight Bulb Replacement",
      emoji: "๐ฅ",
      category: categories[3],
      price: 40,
      hours: 1,
    },
    {
      name: "Turn Indicator Bulb Replacement",
      emoji: "๐ก",
      category: categories[3],
      price: 25,
      hours: 1,
    },
    {
      name: "Battery Recharge",
      emoji: "๐ชซ",
      category: categories[3],
      price: 60,
      hours: 2,
    },
    {
      name: "Battery Replacement",
      emoji: "๐",
      category: categories[3],
      price: 45,
      hours: 1,
    },
    {
      name: "Wheel Alignment",
      emoji: "๐",
      category: categories[4],
      price: 175,
      hours: 1,
    },
    {
      name: "Wheel Balancing",
      emoji: "๐",
      category: categories[4],
      price: 190,
      hours: 1,
    },
    { name: "Wheel Rotation", emoji: "๐", category: categories[4], price: 40 },
    {
      name: "Swapping Tyre Set",
      emoji: "๐",
      category: categories[4],
      price: 40,
      hours: 1,
    },
    {
      name: "Engine Oil Change",
      emoji: "๐ข",
      category: categories[5],
      price: 40,
      hours: 1,
    },
    {
      name: "Lubricant Refill",
      emoji: "๐ถ",
      category: categories[5],
      price: 20,
      hours: 1,
    },
    {
      name: "Washer-fluid Refill",
      emoji: "โ",
      category: categories[5],
      price: 10,
      hours: 1,
    },
    {
      name: "Brake Fluid Check and Top-up",
      emoji: "โ",
      category: categories[5],
      price: 60,
      hours: 1,
    },
    {
      name: "Quick Service (5k Km)",
      emoji: "โฑ",
      category: categories[6],
      price: 150,
      hours: 2,
    },
    {
      name: "Annual Service (10k Km)",
      emoji: "๐๏ธ",
      category: categories[6],
      price: 250,
      hours: 6,
    },
    {
      name: "Safety Inspection",
      emoji: "๐",
      category: categories[6],
      price: 175,
      hours: 2,
    },
  ]);

  console.log(items);
  process.exit();
})();
