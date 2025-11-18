import React, { useState, useRef, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const DataTable = () => {
  const nameRef = useRef();
  const semesterRef = useRef();
  const departmentRef = useRef();

  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("rows");
    return saved
      ? JSON.parse(saved)
      : [
          { roll: 5550, name: "Christine Moore", semester: "3rd", department: "BIT" },
          { roll: 5670, name: "Gary Reeds", semester: "1st", department: "BIT" },
        ];
  });

  const [inputs, setInputs] = useState({ name: "", semester: "", department: "" });
  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

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

  const handleDelete = (roll) => {
    setRows(rows.filter((r) => r.roll !== roll));
  };

  const deleteSelected = () => {
    setRows(rows.filter((r) => !selectionModel.includes(r.roll)));
    setSelectionModel([]);
  };

  const columns = [
    { field: "roll", headerName: "Roll", width: 90 },
    { field: "name", headerName: "Full Name", width: 180, editable: true },
    { field: "semester", headerName: "Semester", width: 130, editable: true },
    { field: "department", headerName: "Department", width: 150, editable: true },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleDelete(params.row.roll)}
          className="!bg-orange-600 hover:!bg-orange-700 text-white rounded"
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        Manage Your Students
      </h1>

      {/* Input Form */}
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <input
          ref={nameRef}
          placeholder="Full Name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          ref={semesterRef}
          placeholder="Semester"
          value={inputs.semester}
          onChange={(e) => setInputs({ ...inputs, semester: e.target.value })}
          className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          ref={departmentRef}
          placeholder="Department"
          value={inputs.department}
          onChange={(e) => setInputs({ ...inputs, department: e.target.value })}
          className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <Button
          variant="contained"
          onClick={addRow}
          className="!ml-2 !bg-yellow-500 hover:!bg-yellow-600 text-white rounded"
        >
          Add Student
        </Button>
        <Button
          variant="contained"
          onClick={deleteSelected}
          className="!bg-orange-600 hover:!bg-orange-700 text-white rounded"
        >
          Delete Selected
        </Button>
      </div>

      {/* DataGrid */}
      <div className="h-[600px] bg-white rounded-lg shadow overflow-hidden">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.roll}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          pagination
          checkboxSelection
          selectionModel={selectionModel}
          onSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
          onCellEditCommit={(params) => {
            const updatedRows = rows.map((row) =>
              row.roll === params.id ? { ...row, [params.field]: params.value } : row
            );
            setRows(updatedRows);
          }}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f59e0b",
              color: "#ffffff",
              fontWeight: "600",
            },
            "& .MuiDataGrid-row:nth-of-type(odd)": { backgroundColor: "#ffffff" },
            "& .MuiDataGrid-row:nth-of-type(even)": { backgroundColor: "#f3f4f6" },
            "& .MuiDataGrid-row:hover": { backgroundColor: "#fffbeb" },
            "& .MuiCheckbox-root": { color: "#f59e0b" },
            "& .MuiDataGrid-cell": { borderBottom: "1px solid #e5e7eb" },
            "& .MuiDataGrid-footerContainer": { borderTop: "1px solid #e0e0e0" },
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;
