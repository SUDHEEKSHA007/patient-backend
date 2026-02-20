const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Home Route (Fix Cannot GET /)
app.get("/", (req, res) => {
  res.send("Patient Backend API is Running 🚀");
});

// Sample API
app.get("/patients", (req, res) => {
  res.json([
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Sudheeksha", age: 20 }
  ]);
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});