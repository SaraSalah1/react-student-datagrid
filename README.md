# 📝 React Student Management System with Authentication

A modern React application for managing student records, featuring a secure authentication system.  
Users can log in, add new students, edit existing records, delete single or multiple rows, and persist data using `localStorage`.  
This project demonstrates **React Hooks**, **form validation**, **dynamic tables**, **component composition**, and **responsive UI** using Tailwind CSS and Material-UI.

---

## 🚀 Features

### 🔐 Authentication
- Responsive login page with username/password fields  
- Inline validation with instant error feedback  
- Auto-focus for missing fields  
- Redirect to the student management dashboard after successful login  
- Reusable UI components: `InputField`, `ErrorMessage`, `SignInButton`

### 📋 Student Management Dashboard
- Add new students (name, semester, department)  
- Edit student details directly in the table  
- Delete single or multiple students  
- Select all or specific rows using checkboxes  
- Random unique roll numbers generated automatically  
- Data persistence using browser **localStorage**  
- Reusable components: `InputRow`, `ActionButtons`, `StudentGrid`  
- Styled using **Tailwind CSS** and **Material-UI DataGrid**

---

## 🎨 Technologies Used

- **React.js**
- **JavaScript (ES6)**
- **Tailwind CSS**
- **Material-UI (MUI)**
- **React Router**
- **React Icons**
- **LocalStorage API**

---

## 📸 Screenshots

### 1. Login Page
<img src="https://github.com/user-attachments/assets/4b1547c2-5d82-4ec9-9860-f7897abc482c" width="600" />

*Clean login form with validation and error messaging.*

### 2. Student Management Table
<img src="https://github.com/user-attachments/assets/564eaf09-e01a-4c10-9b68-5814aad1a389" width="600" />

*Editable rows with dynamic updates and selection checkboxes.*

### 3. Add / Delete Students
<img src="https://github.com/user-attachments/assets/93eb26c5-c1ef-45d5-84c2-c764d46098d5" width="600" />

*Add students easily and delete single or multiple rows.*

---

## 🛠 Installation & Run

### 1. Clone the repository
```bash
git clone https://github.com/SaraSalah1/react-student-datagrid.git
```

### 2. Navigate to the project folder
```bash
cd react-student-datagrid
```

### 3. Install dependencies
#### Using npm:
```bash
npm install
```
#### Using yarn:
```bash
yarn install
```

### 4. Start the development server
#### Using npm:
```bash
npm start
```
#### Using yarn:
```bash
yarn start
```

### 5. Open in your browser
```
http://localhost:3000
```

---

## 💻 Usage

### 🔐 Login
1. Username: **sara**  
2. Password: **1234**  
3. Click **Sign In** to access the dashboard  
4. Invalid entries trigger instant error messages  

### 👩‍🎓 Manage Students
- Add a student → Fill fields → Click **Add Student**  
- Edit any field directly in the table  
- Select rows using checkboxes  
- Delete single or multiple rows  
- All data automatically saved in `localStorage`

---

## 🧩 Code Snippets

### 🔐 Authentication — Input Handling
```javascript
const handleChange = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value });
  setError("");
};
```

### 🔐 Authentication — Login Logic
```javascript
const handleSignIn = () => {
  if (!inputs.user) return userRef.current.focus();
  if (!inputs.password) return passwordRef.current.focus();

  let msg = "";
  if (inputs.user !== savedUsername) msg += "Invalid username. ";
  if (inputs.password !== savedPassword) msg += "Invalid password.";

  if (msg) {
    setError(msg);
    return;
  }

  navigate("/home");
};
```

### ➕ Add New Student
```javascript
const saveNewRow = () => {
  if (!newRow.name) return nameRef.current.focus();
  if (!newRow.semester) return semesterRef.current.focus();
  if (!newRow.department) return departmentRef.current.focus();

  let newRoll;
  do {
    newRoll = Math.floor(Math.random() * 10000);
  } while (rows.some((r) => r.roll === newRoll));

  setRows([{ roll: newRoll, ...newRow }, ...rows]);
  setNewRow({ name: "", semester: "", department: "" });
  setIsAddingRow(false);
};
```

### 🗑️ Delete Selected Students
```javascript
const deleteSelected = () => {
  setRows(rows.filter((r) => !selectionModel.includes(r.roll)));
  setSelectionModel([]);
};
```

---

## 📂 Project Structure

```
src/
├─ components/
│  ├─ auth/
│  │  ├─ Auth.jsx
│  │  ├─ InputField.jsx
│  │  ├─ ErrorMessage.jsx
│  │  └─ SignInButton.jsx
│  ├─ DataTable/
│  │  ├─ DataTable.jsx
│  │  ├─ InputRow.jsx
│  │  ├─ ActionButtons.jsx
│  │  └─ StudentGrid.jsx
├─ App.jsx
└─ index.js
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add some feature"
   ```
4. Push the branch:  
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request  

---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 **Repository:** https://github.com/SaraSalah1/react-student-datagrid  

---

## 📝 License
This project is licensed under the **MIT License**.
