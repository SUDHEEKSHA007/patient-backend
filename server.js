const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// Temporary in-memory database
let patients = [
  { id: 1, name: "John Doe", age: 25, disease: "Fever" },
  { id: 2, name: "Priya", age: 30, disease: "Diabetes" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Patient Backend API is Running 🚀");
});

// ✅ GET all patients
app.get("/patients", (req, res) => {
  res.json(patients);
});

// ✅ POST new patient
app.post("/patients", (req, res) => {
  const newPatient = {
    id: patients.length + 1,
    name: req.body.name,
    age: req.body.age,
    disease: req.body.disease
  };

  patients.push(newPatient);
  res.json({ message: "Patient added successfully", patient: newPatient });
});

// ✅ DELETE patient by ID
app.delete("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  patients = patients.filter(p => p.id !== id);

  res.json({ message: "Patient deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});