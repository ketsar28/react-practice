# React Practice - E-Commerce Application

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9.7-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, full-featured e-commerce web application built with React, Redux Toolkit, and Tailwind CSS. This project demonstrates best practices in modern React development including state management, routing, authentication, and responsive design.

[Demo](#) • [Report Bug](https://github.com/ketsar28/react-practice/issues) • [Request Feature](https://github.com/ketsar28/react-practice/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)
- [Screenshots](#screenshots)
- [Connect With Me](#connect-with-me)
- [License](#license)

---

## 🎯 About The Project

This is a practice project showcasing a modern e-commerce application built with React. The application includes essential features such as user authentication, product browsing, shopping cart management, and a dark mode toggle. It serves as a comprehensive example of building scalable React applications with modern tools and best practices.

### Why This Project?

- 🚀 Learn modern React patterns and best practices
- 🎨 Implement responsive design with Tailwind CSS
- 🔄 Master state management with Redux Toolkit
- 🔐 Handle authentication and protected routes
- 🌙 Implement dark mode with Context API
- 📱 Build mobile-responsive user interfaces

---

## ✨ Features

- ✅ **User Authentication**
  - Login and Registration system
  - JWT token management
  - Protected routes
  - Session persistence

- 🛍️ **Product Management**
  - Product listing with detailed views
  - Product detail pages
  - Dynamic product loading

- 🛒 **Shopping Cart**
  - Add/remove items from cart
  - Real-time price calculations
  - Cart persistence with localStorage
  - Quantity management

- 🎨 **UI/UX Features**
  - Dark mode toggle
  - Responsive design
  - Modern and clean interface
  - Smooth transitions and animations

- 🔧 **Technical Features**
  - Redux Toolkit for state management
  - React Router for navigation
  - Context API for theme management
  - Custom hooks for reusable logic
  - Component-based architecture

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool

### Additional Libraries
- **Axios** - HTTP client for API requests
- **jwt-decode** - JWT token decoding
- **ESLint** - Code linting and formatting

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ketsar28/react-practice.git
   cd react-practice
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   # Create a .env file in the root directory
   # Add your environment variables
   VITE_API_URL=your_api_url_here
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
# or
yarn dev
```
The application will open at `http://localhost:5173`

#### Production Build
```bash
npm run build
# or
yarn build
```

#### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
react-practice/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Elements/    # Reusable UI elements
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── AuthNavigation/
│   │   ├── Fragments/   # Component fragments
│   │   │   ├── FormLogin.jsx
│   │   │   ├── FormRegister.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── TableCart.jsx
│   │   └── Layouts/     # Layout components
│   │       ├── AuthLayouts.jsx
│   │       └── Navbar.jsx
│   ├── context/         # React Context providers
│   │   ├── DarkMode.jsx
│   │   └── TotalPriceContext.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useLogin.jsx
│   ├── pages/           # Page components
│   │   ├── login.jsx
│   │   ├── register.jsx
│   │   ├── products.jsx
│   │   ├── detailProduct.jsx
│   │   ├── profile.jsx
│   │   └── notfound.jsx
│   ├── redux/           # Redux store and slices
│   │   ├── store.js
│   │   └── slices/
│   │       └── cartSlice.js
│   ├── services/        # API services
│   │   ├── login.service.js
│   │   └── product.service.js
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Application entry point
├── .eslintrc.cjs        # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

---

## 💡 Key Concepts Demonstrated

### State Management
- **Redux Toolkit** for global state (cart management)
- **Context API** for theme and user context
- **Local state** with useState and useReducer

### Routing
- **Protected routes** for authenticated users
- **Dynamic routing** for product details
- **Nested routes** for better organization

### Component Patterns
- **Atomic Design** principle (Elements, Fragments, Layouts)
- **Custom Hooks** for reusable logic
- **Higher-Order Components** for route protection

### Performance Optimization
- **Code splitting** with React.lazy
- **Memoization** with useMemo and useCallback
- **Optimized re-renders** with Redux selectors

---

## 📸 Screenshots

_Add your application screenshots here_

---

## 🤝 Connect With Me

<div align="center">

### Muhammad Ketsar Ali Abi Wahid

Software Engineering Graduate | Technology Enthusiast | Open Source Advocate

[![GitHub](https://img.shields.io/badge/GitHub-ketsar28-181717?style=for-the-badge&logo=github)](https://github.com/ketsar28/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ketsarali-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ketsarali/)
[![Instagram](https://img.shields.io/badge/Instagram-ketsar.aaw-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ketsar.aaw/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-ketsar-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/ketsar)
[![Streamlit](https://img.shields.io/badge/Streamlit-ketsar28-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://share.streamlit.io/user/ketsar28)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact_Me-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=6285155343380&text=Hi%20Ketsar!)

**Email:** jsdevprofes@gmail.com

</div>

---

## 📄 License

```
Copyright (c) 2024 Muhammad Ketsar Ali Abi Wahid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star!**

Made with ❤️ by [Muhammad Ketsar Ali Abi Wahid](https://github.com/ketsar28)

</div>
