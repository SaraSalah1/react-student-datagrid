import React from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const StudentGrid = ({
  rows,
  selectionModel,
  setSelectionModel,
  handleDelete,
}) => {
  const columns = [
    { field: "roll", headerName: "Roll", width: 90 },
    { field: "name", headerName: "Full Name", width: 180, editable: true },
    { field: "semester", headerName: "Semester", width: 130, editable: true },
    {
      field: "department",
      headerName: "Department",
      width: 150,
      editable: true,
    },
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
        onSelectionModelChange={(newSelection) =>
          setSelectionModel(newSelection)
        }
        onCellEditCommit={(params) => {
          const updatedRows = rows.map((row) =>
            row.roll === params.id
              ? { ...row, [params.field]: params.value }
              : row
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
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#f3f4f6",
          },
          "& .MuiDataGrid-row:hover": { backgroundColor: "#fffbeb" },
          "& .MuiCheckbox-root": { color: "#f59e0b" },
          "& .MuiDataGrid-cell": { borderBottom: "1px solid #e5e7eb" },
          "& .MuiDataGrid-footerContainer": { borderTop: "1px solid #e0e0e0" },
        }}
      />
    </div>
  );
};

export default StudentGrid;
