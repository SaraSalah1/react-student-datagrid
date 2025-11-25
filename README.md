# 📝 React Student Management System with Authentication

A modern React application for **managing student records securely**.  
Includes a **login page**, and allows users to **add, edit, delete, and select students**.  
Demonstrates **React Hooks**, **component composition**, **form handling**, **dynamic table updates**, **localStorage persistence**, and **responsive UI design** using **Tailwind CSS** and **Material-UI**.

---

## 🚀 Key Features

### Authentication
- Responsive **login page** with username and password fields.  
- Inline validation for empty or invalid credentials.  
- Focus handling for empty inputs.  
- Navigate to the main student table after successful login.  
- Reusable components: `InputField`, `ErrorMessage`, `SignInButton`.

### Student Management
- Add new students with **roll number, name, semester, and department**.  
- Edit student details directly in table cells.  
- Delete single or multiple selected students.  
- Checkbox selection for all or individual rows.  
- Persistent data saved in **localStorage**.  
- Reusable components: `InputRow`, `ActionButtons`, `StudentGrid`.

### Responsive UI
- Fully responsive design with **Tailwind CSS**.  
- Clean, user-friendly layout for table and forms.  
- Material-UI DataGrid for enhanced table experience.

---

## 🎨 Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend Framework | React.js (Hooks) | Component-based UI and state handling |
| Styling | Tailwind CSS | Responsive modern design |
| UI Components | Material-UI (MUI) | DataGrid and form elements |
| Routing | React Router | Navigation between login and student pages |
| Icons | React Icons | Action buttons and visual elements |
| Storage | localStorage API | Persistent student data |
| Logic | JavaScript (ES6+) | Form handling, table updates, validation |

---

## 📸 Screenshots

### Login Page
<img src="https://github.com/user-attachments/assets/4b1547c2-5d82-4ec9-9860-f7897abc482c" alt="Login Page" width="600" />  
*Responsive login form with username, password, and sign-in button.*

### Student Management Table
<img src="https://github.com/user-attachments/assets/564eaf09-e01a-4c10-9b68-5814aad1a389" alt="Student Table" width="600" />  
*Editable table with checkboxes for selection and action buttons.*

### Add/Delete Students
<img src="https://github.com/user-attachments/assets/93eb26c5-c1ef-45d5-84c2-c764d46098d5" alt="Add/Delete Students" width="600" />  
*Add new student rows and delete selected rows dynamically.*

---

## 🛠 Installation

### Clone Repository
```bash
git clone https://github.com/SaraSalah1/react-student-datagrid.git
```

### Navigate to Project Folder
```bash
cd react-student-datagrid
```

### Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Start Development Server
```bash
# Using npm
npm start

# Using yarn
yarn start
```

### Open in Browser
```
http://localhost:3000
```

---

## 💻 Usage

### Login
1. Enter **username**: `sara`.  
2. Enter **password**: `1234`.  
3. Click **Sign In** to navigate to the student management page.  
4. Inline error messages appear for invalid inputs.

### Manage Students
1. Fill in **Full Name**, **Semester**, and **Department**, then click **Add Student**.  
2. Select one or multiple students using checkboxes, then click **Delete Selected**.  
3. Edit table cells directly for quick updates.  
4. All changes are automatically saved in **localStorage**.

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

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m "Add some feature"
```
4. Push branch:
```bash
git push origin feature/YourFeature
```
5. Open a Pull Request.

---

👩‍💻 **Author:** [Sara Salah](https://github.com/SaraSalah1)  
📦 **Project Repository:** [react-student-datagrid](https://github.com/SaraSalah1/react-student-datagrid)

---

## 📝 License

MIT License
