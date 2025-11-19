# 📝 React Student Management System with Authentication

A modern React application to **manage student records** with a secure **login page**. Users can log in, add, edit, delete, and select students. The project demonstrates **React hooks**, **component composition**, **form handling**, **dynamic table updates**, **localStorage persistence**, and **responsive UI design** with Tailwind CSS and Material-UI.

---

## 🚀 Features

### **Authentication**

* Responsive login page with username and password fields.
* Inline validation with error messages for invalid credentials.
* Focus handling for empty fields.
* Navigate to the main student management table on successful login.
* Reusable components: `InputField`, `ErrorMessage`, `SignInButton`.

### **Student Management Table**

* Add new students with roll number, name, semester, and department.
* Edit student details directly in table cells.
* Delete single or multiple selected students.
* Checkbox selection for all or individual students.
* Persistent data using browser `localStorage`.
* Reusable components: `InputRow`, `ActionButtons`, `StudentGrid`.
* Styled with Tailwind CSS and Material-UI `DataGrid`.

---

## 🎨 Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **Tailwind CSS**
* **Material-UI (MUI)**
* **React Router**
* **React Icons**
* **localStorage API**

---

## 📸 Screenshots

### 1. Login Page

<img src="https://github.com/user-attachments/assets/4b1547c2-5d82-4ec9-9860-f7897abc482c" alt="Login Page" width="600" />

*Responsive login form with username, password, and sign-in button.*

### 2. Student Management Table

<img src="https://github.com/user-attachments/assets/564eaf09-e01a-4c10-9b68-5814aad1a389" alt="Student Table" width="600" />

*Editable rows with checkboxes for selection.*

### 3. Add/Delete Students

<img src="https://github.com/user-attachments/assets/93eb26c5-c1ef-45d5-84c2-c764d46098d5" alt="Add/Delete Students" width="600" />

*Add students using input fields, delete single or multiple rows.*

---

## 🛠 Installation & Run

### Clone the repository

```bash
git clone https://github.com/SaraSalah1/react-student-datagrid.git
```

### Navigate to the project folder

```bash
cd react-student-datagrid
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

### Open in your browser

```
http://localhost:3000
```

---

## 💻 Usage

### **Login**

1. Enter the username: `sara`.
2. Enter the password: `1234`.
3. Click **Sign In** to navigate to the student management page.
4. Inline error messages appear for invalid credentials.

### **Manage Students**

1. Fill in **Full Name**, **Semester**, and **Department**, then click **Add Student**.
2. Select one or multiple students using checkboxes, then click **Delete Selected**.
3. Edit student details directly in the table.
4. All updates are automatically saved in `localStorage`.

---

## 🧩 Code Snippets

### Authentication: Input Handling

```javascript
const handleChange = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value });
  setError("");
};
```

### Authentication: Sign In

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

### Add New Student

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

### Delete Selected Students

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

* Fork the repository
* Create a feature branch: `git checkout -b feature/YourFeature`
* Commit changes: `git commit -m "Add some feature"`
* Push to the branch: `git push origin feature/YourFeature`
* Open a Pull Request

---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**
📦 [View the project on GitHub](https://github.com/SaraSalah1/react-student-datagrid)

---

## 📝 License

This project is licensed under the MIT License
