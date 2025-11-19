import React from "react";
import { Button } from "@mui/material";

const ActionButtons = ({ startAddRow, deleteSelected }) => (
  <div className="flex gap-2 mb-4">
    <Button
      variant="contained"
      onClick={startAddRow}
      className="!bg-yellow-500 hover:!bg-yellow-600 text-white rounded"
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
);

export default ActionButtons;
