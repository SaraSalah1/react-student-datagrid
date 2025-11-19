import React, { useState, useRef, useEffect } from "react";
import InputRow from "./InputRow";
import ActionButtons from "./ActionButtons";
import StudentGrid from "./StudentGrid";

const DataTable = () => {
  const nameRef = useRef();
  const semesterRef = useRef();
  const departmentRef = useRef();

  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("rows");
    return saved
      ? JSON.parse(saved)
      : [
          {
            roll: 5550,
            name: "Christine Moore",
            semester: "3rd",
            department: "BIT",
          },
          {
            roll: 5670,
            name: "Gary Reeds",
            semester: "1st",
            department: "BIT",
          },
        ];
  });

  const [selectionModel, setSelectionModel] = useState([]);
  const [isAddingRow, setIsAddingRow] = useState(false);
  const [newRow, setNewRow] = useState({
    name: "",
    semester: "",
    department: "",
  });

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const startAddRow = () => setIsAddingRow(true);

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

  const cancelAddRow = () => {
    setNewRow({ name: "", semester: "", department: "" });
    setIsAddingRow(false);
  };

  const deleteSelected = () => {
    setRows(rows.filter((r) => !selectionModel.includes(r.roll)));
    setSelectionModel([]);
  };

  const handleDelete = (roll) => {
    setRows(rows.filter((r) => r.roll !== roll));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        Manage Your Students
      </h1>

      {isAddingRow && (
        <InputRow
          newRow={newRow}
          setNewRow={setNewRow}
          refs={{ nameRef, semesterRef, departmentRef }}
          saveRow={saveNewRow}
          cancelRow={cancelAddRow}
        />
      )}

      {!isAddingRow && (
        <ActionButtons
          startAddRow={startAddRow}
          deleteSelected={deleteSelected}
        />
      )}

      <StudentGrid
        rows={rows}
        selectionModel={selectionModel}
        setSelectionModel={setSelectionModel}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default DataTable;
