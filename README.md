# Turbo Monorepo with Firebase Integration

This project is a monorepo setup using [Turborepo](https://turbo.build/repo). It includes multiple applications and shared libraries, with Firebase Authentication and Firestore integrated into the backend. The Firebase credentials (Service Account Key) are required for Firebase Admin SDK integration.

## Project Structure

- `apps/` - Contains different apps (e.g., frontend, backend, etc.)
- `packages/shared/` - Shared libraries between different applications
- `config/` - Contains Firebase Admin SDK logic for backend operations
- `package.json` - Dependencies and build configuration for the whole monorepo
- `turbo.json` - Turborepo configuration

## Prerequisites

1. **Firebase Service Account Credentials**
   - The Firebase service account credentials (`serviceAccountKey.json`) should be stored securely. This JSON file is used to initialize the Firebase Admin SDK for authentication and Firestore operations.
   - If you haven't received this file yet, please check your email for the attached credentials. Ensure it is placed in the `config/` folder or any appropriate folder within the `backend-repo` directory.

2. **Node.js & npm**
   - Ensure that you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
   - This project uses `npm` for managing dependencies.

## Installation

### 1. Clone the repository

Clone the repository into your local machine:

```bash
git clone git@github.com:dijekarim/ebuddy-monorepo.git
cd ebuddy-monorepo
```

### 2. Install Dependency
```bash
npm install
```

## Running Turborepo
Turborepo is used for building and managing tasks in the monorepo. You can run tasks across all apps with Turborepo:

```bash
npm run build   # Builds the entire monorepo
npm run dev     # Runs development servers for all apps
```

Turborepo will intelligently cache and parallelize tasks, improving the development speed for monorepo projects.

### 4. Front End Server
It should start on http://localhost:3000 by default

### 5. Back End Server
It Should start on http://localhost:5000 by default

### 6. Default firebase auth login:
email: `admin@ebuddy.tes`
password: `admin123`

