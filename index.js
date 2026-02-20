const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Home route (fixes Cannot GET /)
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Fake database
let patients = [];

// CREATE patient
app.post("/patients", (req, res) => {
  const patient = req.body;
  patient.id = Date.now();
  patients.push(patient);
  res.json({ message: "Patient created", patient });
});

// LIST patients
app.get("/patients", (req, res) => {
  res.json(patients);
});

// UPDATE patient
app.put("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = patients.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Patient not found" });
  }

  patients[index] = { ...patients[index], ...req.body };
  res.json({ message: "Patient updated", patient: patients[index] });
});

// DELETE patient
app.delete("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);
  patients = patients.filter(p => p.id !== id);
  res.json({ message: "Patient deleted" });
});

// Render port fix
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});