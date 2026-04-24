import React, { useCallback, useEffect, useState } from "react";
import { dummyEmployeeData, DEPARTMENTS } from "../assets/assets";
import { Plus, Search, X } from "lucide-react";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeFrom from "../components/EmployeeFrom";

const Employees = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectDept, setDept] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);
  const [showCreateModel, setShowCreateModel] = useState(false);

  const fetchEmployee = useCallback(() => {
    setLoading(true);
    setEmployee(
      dummyEmployeeData.filter((emp) =>
        selectDept ? emp.department === selectDept : true
      )
    );
    setTimeout(() => setLoading(false), 600);
  }, [selectDept]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  const filtered = employee.filter((emp) =>
    `${emp.firstName} ${emp.lastName} ${emp.position}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 space-y-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Employees</h1>
          <p className="text-slate-500 text-sm">Manage your workforce</p>
        </div>

        <button
          onClick={() => setShowCreateModel(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
        >
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      {/* SEARCH */}
    <div className="grid grid-cols-4 gap-4 w-full">
  
  {/* Search - takes 3 parts */}
  <div className="col-span-3">
    <input
      type="text"
      placeholder="Search employee..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Department Filter - takes 1 part */}
  <div className="col-span-1">
    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300">
      <option value="">All Departments</option>
      {DEPARTMENTS.map((dept, idx) => (
        <option key={idx} value={dept}>
          {dept}
        </option>
      ))}
    </select>
  </div>

</div>

      {/* GRID */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((i) => (
            <EmployeeCard
              key={i.id}
              employee={i}
              onDelete={fetchEmployee}
              onEdit={(e) => setEditEmployee(e)}
            />
          ))}
        </div>
      )}

      {/* CREATE MODAL */}
      {showCreateModel && (
        <Modal title="Create Employee" onClose={() => setShowCreateModel(false)}>
          <EmployeeFrom
            onSuccess={() => {
              setShowCreateModel(false);
              fetchEmployee();
            }}
            onCancel={() => setShowCreateModel(false)}
          />
        </Modal>
      )}

      {/* EDIT MODAL */}
      {editEmployee && (
        <Modal title="Update Employee" onClose={() => setEditEmployee(null)} large>
          <EmployeeFrom
            initialData={editEmployee}
            onSuccess={() => {
              setEditEmployee(null);
              fetchEmployee();
            }}
            onCancel={() => setEditEmployee(null)}
          />
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, title, onClose, large }) => (
  <div
    className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 overflow-y-auto"
    onClick={onClose}
  >
    <div
      className={`bg-white rounded-xl shadow-xl w-full my-auto ${
        large ? "max-w-5xl" : "max-w-3xl"
      } p-6`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition">
          <X size={18} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default Employees;