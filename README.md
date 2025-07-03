<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# 💼 Employee Management System

A role-based React web application that streamlines task management between admins and employees. This project uses LocalStorage to simulate authentication, task assignment, and real-time task tracking — all without a backend.

---

## 🚀 Features

- 🔐 **Login Authentication**
  - Simulated login using LocalStorage
  - One preloaded admin and five employees

- 🧑‍💼 **Admin Dashboard**
  - Assign tasks to employees
  - View employee list and task statistics

- 👷‍♂️ **Employee Dashboard**
  - Track assigned tasks by status: New, Active, Completed, and Failed
  - Update task status

- 🧠 **State Management**
  - Managed using React’s local state and props

- 🗂️ **LocalStorage Integration**
  - Persistent data without a database

---

## 🛠️ Tech Stack

- **React.js** with JSX
- **Vite** for fast build and dev server
- **LocalStorage** for data persistence
- **Modular Components** for clean structure

---

## 📁 Folder Structure

```
src/
├── assets/                 # Static images (e.g., logos)
├── components/
│   ├── Auth/               # Login Component
│   ├── Dashboard/          # Admin & Employee Dashboards
│   ├── TaskList/           # Task status components (New, Active, etc.)
│   ├── Others/             # Header, CreateTask, AllTask, etc.
├── context/                # AuthProvider for role-based control
├── utils/                  # LocalStorage helpers
├── App.jsx
├── main.jsx
```

---

## 🧪 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanyaaaa14/employee-management-system.git
   cd employee-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** at:
   [http://localhost:5173](http://localhost:5173)



## ✍️ Author

**Sanya Bhatia**  
[LinkedIn](https://www.linkedin.com/in/sanyabhatia/)  
Email: your-bhatiasanya1410@gmail.com

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> 648d9e254cdb84b3def7c6dea91aef4dad906bd8
