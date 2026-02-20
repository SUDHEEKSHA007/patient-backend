const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Home Route (Fixes Cannot GET /)
app.get("/", (req, res) => {
  res.send("Patient Backend API is Running 🚀");
});

// Sample API Route
app.get("/patients", (req, res) => {
  res.json([
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Sudheeksha", age: 19 }
  ]);
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});