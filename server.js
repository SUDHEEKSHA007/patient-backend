const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ✅ CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Patient Schema
const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Patient = mongoose.model("Patient", PatientSchema);

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Patient Backend API with MongoDB is Running 🚀");
});

// ✅ CREATE Patient
app.post("/patients", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.send(patient);
});

// ✅ LIST Patients
app.get("/patients", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// ✅ UPDATE Patient
app.put("/patients/:id", async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// ✅ DELETE Patient
app.delete("/patients/:id", async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// ✅ PORT FIX FOR CLOUD
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));