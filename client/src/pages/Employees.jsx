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
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employees..."
            className="w-full pl-10 py-3 rounded-lg border bg-white"
          />
        </div>

        <select
          value={selectDept}
          onChange={(e) => setDept(e.target.value)}
          className="px-4 py-3 rounded-lg border bg-white"
        >
          <option value="">All Departments</option>
          {DEPARTMENTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
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