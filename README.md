# 📝 Student Management System

A modern React application to manage student records using **MUI DataGrid**. Users can add, edit, delete, and select students. The project demonstrates React hooks, dynamic table updates, localStorage persistence, and responsive UI design with Tailwind CSS.

---

## 🚀 Features

- Add new students with roll, name, semester, and department.
- Edit student details directly in the table cells.
- Delete single or multiple selected students.
- Select all/individual students using checkboxes.
- Persistent data stored in browser `localStorage`.
- Responsive UI with Tailwind CSS.
- Uses Material-UI `DataGrid` for enhanced table features.

---

## 🎨 Technologies Used

- **React.js**  
- **JavaScript (ES6)**  
- **Tailwind CSS**  
- **Material-UI (MUI)**  
- **localStorage API**  

---

## 📸 Screenshots


### 1. Main Table View
<img src="https://github.com/user-attachments/assets/ba868f03-c087-4da2-9635-7294856a5ef6"   alt="ChatGPT Dropdown" width="600" />

*Editable rows with checkboxes for selection.*

### 2.  Add / Delete Students
<img src="https://github.com/user-attachments/assets/8b4fb7b1-1a3e-4e1b-a680-a0fbe2b885f3"   alt="Login/Signup Modal" width="600" />

*Add students using input fields and buttons, delete single or multiple rows.*


---

## 🛠 Installation & Run

- ### Clone the repository

  git clone https://github.com/SaraSalah1/react-student-datagrid.git


- ### Navigate to the project folder
      cd react-student-datagrid

- ### Install dependencies
      npm install

- ### Start the development server
      npm start

- ### Open in your browser
      http://localhost:3000

    ---

## 💻 Usage

- Fill in the Full Name, Semester, and Department fields and click Add Student to add a new student.

- Use checkboxes to select one or multiple students, then click Delete Selected.

- Edit student details directly in the table cells.

- Table updates are saved automatically in localStorage.
  

##🧩 Code Snippets

Adding a New Student

```

const addRow = () => {
  if (!inputs.name) return nameRef.current.focus();
  if (!inputs.semester) return semesterRef.current.focus();
  if (!inputs.department) return departmentRef.current.focus();

  let newRoll;
  do {
    newRoll = Math.floor(Math.random() * 10000);
  } while (rows.some((r) => r.roll === newRoll));

  setRows([...rows, { roll: newRoll, ...inputs }]);
  setInputs({ name: "", semester: "", department: "" });
  nameRef.current.focus();
};

```

Deleting Selected Students

```
const deleteSelected = () => {
  setRows(rows.filter((r) => !selectionModel.includes(r.roll)));
  setSelectionModel([]);
};

```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

- #### Fork the repository

- #### Create a feature branch

      git checkout -b feature/YourFeature


- #### Commit your changes

      git commit -m "Add some feature"


- #### Push to the branch

      git push origin feature/YourFeature
  
- #### Open a Pull Request

- ---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 [View the project on GitHub](https://github.com/SaraSalah1/react-student-datagrid)

---

## 📝 License

This project is licensed under the MIT License
