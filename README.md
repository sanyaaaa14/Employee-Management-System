
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
Email: bhatiasanya1410@gmail.com
---

## 🌐 Live Deployment

🟢 The app is live here: [Employee Management System on Netlify](https://ornate-clafoutis-625f33.netlify.app/)



---

## 🔐 Login Credentials

### 👑 Admin
- **Email:** `admin@me.com`
- **Password:** `123`

> 📌 After login, **please refresh the page once** to ensure the Admin Dashboard loads properly.

---

### 👷‍♂️ Employees (5 preloaded)

Each employee has the same password: `123`

| Employee | Email                    |
|----------|--------------------------|
| 1        | `employee1@example.com`  |
| 2        | `employee2@example.com`  |
| 3        | `employee3@example.com`  |
| 4        | `employee4@example.com`  |
| 5        | `employee5@example.com`  |

> Employees can log in using their email & password to view and manage their assigned tasks.

---



---



This project is open source and available under the [MIT License](LICENSE).
>>>>>>> 648d9e254cdb84b3def7c6dea91aef4dad906bd8
