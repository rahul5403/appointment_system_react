# Legal Appointment System

## Overview
This is a **Legal Appointment System** built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **Vite**. The application allows users to browse available lawyers, book appointments, and view their appointment history.

## Features
- List of available lawyers with specialization details
- Book appointments with selected lawyers
- View appointment history
- State management using **Redux Toolkit**
- UI styling with **Tailwind CSS**
- Fast development and bundling with **Vite**

## Tech Stack
- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Build Tool:** Vite
- **State Management:** Redux Toolkit

## Directory Structure
```
rahul5403-appointment_system_react/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── AppointmentForm.jsx
    │   ├── AppointmentHistory.jsx
    │   └── LawyerCard.jsx
    ├── data/
    │   └── mockData.js
    └── store/
        ├── appointmentsSlice.js
        ├── index.js
        └── lawyersSlice.js
```

## Installation & Setup

### Prerequisites
- Node.js (>=16.x recommended)
- npm or yarn

### Steps to Run the Project
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/rahul5403/appointment_system_react.git
   cd appointment_system_react
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173/`

4. **Build for Production:**
   ```sh
   npm run build
   ```

5. **Lint the Code:**
   ```sh
   npm run lint
   ```

## Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview the production build |


