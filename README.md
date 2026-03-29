# 🚀 Jenkins CI/CD Pipeline for Node.js App

This project demonstrates a complete **CI/CD pipeline using Jenkins**, integrated with GitHub and a Node.js application. The pipeline automates build, test, and deployment processes on every code push.

---

## 🧠 Project Overview

This project shows how **Continuous Integration and Continuous Deployment (CI/CD)** works in a real-world scenario using Jenkins.

Whenever code is pushed to GitHub:
- Jenkins automatically triggers the pipeline
- Installs dependencies
- Runs unit tests
- Deploys the application

---

## 🛠️ Tech Stack

- Jenkins (Automation Server)
- GitHub (Version Control)
- Node.js (Backend)
- Express.js (Web Framework)
- Jest + Supertest (Testing)
- Docker (optional for Jenkins setup)

---

## 📁 Project Structure
jenkins-node-app/
│
├── app.js # Express app
├── server.js # Server entry point
├── app.test.js # Unit tests
├── package.json # Dependencies & scripts
├── Jenkinsfile # CI/CD pipeline definition
└── README.md

---

## ⚙️ CI/CD Pipeline Flow

```
GitHub Push
   ↓
Jenkins Trigger (Webhook)
   ↓
Install Dependencies (npm install)
   ↓
Run Tests (npm test)
   ↓
Start Application
   ↓
Build Status (Success / Failure)

