import React, { useState, useEffect, useRef } from "react";

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

  const [inputs, setInputs] = useState({
    name: "",
    semester: "",
    department: "",
  });
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const addRow = () => {
    if (!inputs.name) {
      nameRef.current.focus();
      return;
    }
    if (!inputs.semester) {
      semesterRef.current.focus();
      return;
    }
    if (!inputs.department) {
      departmentRef.current.focus();
      return;
    }

    let newRoll;
    do {
      newRoll = Math.floor(Math.random() * 10000);
    } while (rows.some((r) => r.roll === newRoll));

    setRows([...rows, { roll: newRoll, ...inputs }]);
    setInputs({ name: "", semester: "", department: "" });
    nameRef.current.focus();
  };

  const deleteRow = (roll) => {
    setRows(rows.filter((r) => r.roll !== roll));
  };

  const deleteSelected = () => {
    setRows(rows.filter((r) => !selected.includes(r.roll)));
    setSelected([]);
  };

  const updateRow = (roll, field, value) => {
    setRows(rows.map((r) => (r.roll === roll ? { ...r, [field]: value } : r)));
  };

  const filteredRows = rows.filter((r) =>
    r[searchBy].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-purple-50 font-sans text-gray-800">
      <header className="flex justify-between items-center p-6 bg-white shadow rounded-b-lg">
        <h1 className="text-2xl font-bold text-gray-900">
          Manage your Students
        </h1>
        <div className="flex items-center space-x-4">
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="name">Name</option>
            <option value="semester">Semester</option>
            <option value="department">Department</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${searchBy}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="relative">
            <div className="bg-indigo-400 w-4 h-4 rounded-full absolute -top-1 -right-1"></div>
            🔔
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={addRow}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add Student
          </button>
          <button
            onClick={deleteSelected}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Delete Selected
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            ref={semesterRef}
            type="text"
            placeholder="Semester"
            value={inputs.semester}
            onChange={(e) => setInputs({ ...inputs, semester: e.target.value })}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            ref={departmentRef}
            type="text"
            placeholder="Department"
            value={inputs.department}
            onChange={(e) =>
              setInputs({ ...inputs, department: e.target.value })
            }
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-left">
            <thead className="bg-indigo-100 text-gray-700">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={
                      selected.length === filteredRows.length &&
                      filteredRows.length > 0
                    }
                    onChange={(e) =>
                      setSelected(
                        e.target.checked ? filteredRows.map((r) => r.roll) : []
                      )
                    }
                  />
                </th>
                <th className="p-3">Roll</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Semester</th>
                <th className="p-3">Department</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.roll} className="hover:bg-indigo-50">
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(row.roll)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelected([...selected, row.roll]);
                        } else {
                          setSelected(selected.filter((r) => r !== row.roll));
                        }
                      }}
                    />
                  </td>
                  <td className="p-2">{row.roll}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) =>
                        updateRow(row.roll, "name", e.target.value)
                      }
                      className="border rounded px-1 py-0.5 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={row.semester}
                      onChange={(e) =>
                        updateRow(row.roll, "semester", e.target.value)
                      }
                      className="border rounded px-1 py-0.5 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={row.department}
                      onChange={(e) =>
                        updateRow(row.roll, "department", e.target.value)
                      }
                      className="border rounded px-1 py-0.5 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => deleteRow(row.roll)}
                      className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredRows.length === 0 && (
                <tr>
                  <td className="p-3 text-center" colSpan={6}>
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DataTable;
