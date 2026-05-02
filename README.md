# 🏥 Patient Management Backend API

A simple backend system built using **Node.js** and **Express.js** for managing patient records. This project provides RESTful APIs for creating, reading, updating, and deleting patient data.

---

## 🚀 Features

- Add new patient records
- View all patients
- Get patient by ID
- Update patient details
- Delete patient records
- RESTful API structure
- Lightweight and fast Express backend

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- In-memory storage 
- Thunder Client (for API testing)

---
## 🌐 API Endpoints

### ➕ Create Patient
**POST** `/patients`

Creates a new patient record.

**Request Body:**
```json
{
  "name": "John Doe",
  "age": 25,
  "gender": "male",
  "disease": "fever"
}
```
Response:
```
{
  "message": "Patient created successfully",
  "patient": {
    "id": "123",
    "name": "John Doe"
  }
}
