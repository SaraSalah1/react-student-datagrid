# 📝 React Student Management System with Authentication

A modern React application to **manage student records** with a secure **login page**.  
Users can log in, add, edit, delete, and select students.  
The project demonstrates **React hooks**, **component composition**, **form handling**, **dynamic table updates**, **localStorage persistence**, and **responsive UI design** with Tailwind CSS and Material-UI.

---

## 🚀 Features

### Authentication

- Responsive login page with username and password fields  
- Inline validation with error messages  
- Focus handling for empty fields  
- Navigate to main student management table on successful login  
- Reusable components: `InputField`, `ErrorMessage`, `SignInButton`  

### Student Management Table

- Add new students with roll number, name, semester, and department  
- Edit student details directly in table cells  
- Delete single or multiple selected students  
- Checkbox selection for all or individual students  
- Persistent data using **localStorage**  
- Reusable components: `InputRow`, `ActionButtons`, `StudentGrid`  
- Styled with Tailwind CSS and Material-UI `DataGrid`  

---

## 🎨 Technologies Used

- **React.js**  
- **JavaScript (ES6)**  
- **Tailwind CSS**  
- **Material-UI (MUI)**  
- **React Router**  
- **React Icons**  
- **localStorage API**  

---

## 📸 Screenshots

### 1. Login Page
<img src="https://github.com/user-attachments/assets/4b1547c2-5d82-4ec9-9860-f7897abc482c" width="600" />

### 2. Student Management Table
<img src="https://github.com/user-attachments/assets/564eaf09-e01a-4c10-9b68-5814aad1a389" width="600" />

### 3. Add/Delete Students
<img src="https://github.com/user-attachments/assets/93eb26c5-c1ef-45d5-84c2-c764d46098d5" width="600" />

---

## 🛠 Installation & Run

```bash
git clone https://github.com/SaraSalah1/react-student-datagrid.git
cd react-student-datagrid
npm install   # or yarn install
npm start     # or yarn start
```

Open in your browser: `http://localhost:3000`

---

## 💻 Usage

### Login

1. Username: `sara`  
2. Password: `1234`  
3. Click **Sign In**  
4. Inline error messages appear for invalid credentials  

### Manage Students

- Add students using **Full Name**, **Semester**, **Department** → click **Add Student**  
- Select one or multiple students → click **Delete Selected**  
- Edit student details directly in the table  
- Updates are saved automatically in **localStorage**  

---

## 🧩 Code Snippets

**Add New Student**
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
};
```

**Delete Selected Students**
```javascript
const deleteSelected = () => {
  setRows(rows.filter((r) => !selectionModel.includes(r.roll)));
  setSelectionModel([]);
};
```

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/YourFeature`  
3. Commit changes: `git commit -m "Add some feature"`  
4. Push the branch: `git push origin feature/YourFeature`  
5. Open a Pull Request  

---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 **Project Repository:** [react-student-datagrid](https://github.com/SaraSalah1/react-student-datagrid)

---

## 📝 License

This project is licensed under the **MIT License**.
