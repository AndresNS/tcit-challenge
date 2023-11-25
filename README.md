# TCIT Challenge

## Project Overview

This repository contains both the frontend and backend components of the TCIT Challenge. The frontend is a React app, and the backend is built with Node.js, Express, and PostgreSQL using Prisma.

## Prerequisites

To run the project, ensure you have the following installed:

- Node.js
- PostgreSQL [Download Here](https://www.postgresql.org/download/)

## Installation and Setup

### Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:

   - Create a new PostgreSQL database.

   - Configure the database connection in the `.env` file. You can use the provided `.env.example` as a template.

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the backend server:

   ```bash
   npm run dev
   ```

The backend server should now be running at `http://localhost:3001`.

### Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the `client` folder with the following content:

   ```env
   REACT_APP_API_URL=http://localhost:3001
   ```

4. Start the React app:

   ```bash
   npm start
   ```

The React app should now be running at `http://localhost:3000`.

## Usage

Now that both the frontend and backend are set up, you can access the application by navigating to `http://localhost:3000` in your web browser.
