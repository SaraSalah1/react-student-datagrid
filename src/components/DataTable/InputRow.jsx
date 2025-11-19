import React from "react";

const InputRow = ({ newRow, setNewRow, refs, saveRow, cancelRow }) => {
  const { nameRef, semesterRef, departmentRef } = refs;

  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center bg-white p-4 rounded shadow">
      <input
        ref={nameRef}
        placeholder="Full Name"
        value={newRow.name}
        onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
        className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        ref={semesterRef}
        placeholder="Semester"
        value={newRow.semester}
        onChange={(e) => setNewRow({ ...newRow, semester: e.target.value })}
        className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        ref={departmentRef}
        placeholder="Department"
        value={newRow.department}
        onChange={(e) => setNewRow({ ...newRow, department: e.target.value })}
        className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded"
        onClick={saveRow}
      >
        Save
      </button>
      <button
        className="border px-4 py-2 rounded hover:bg-gray-100"
        onClick={cancelRow}
      >
        Cancel
      </button>
    </div>
  );
};

export default InputRow;
