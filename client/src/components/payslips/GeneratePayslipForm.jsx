import React, { useState } from "react";
import { Loader2Icon, Plus, X } from "lucide-react";

const GeneratePayslipForm = ({ employees, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen)
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-black rounded-lg shadow transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
      >
        <Plus className="w-4 h-4 shrink-0" strokeWidth={2} />
        <span className="whitespace-nowrap">Generate Payslip</span>
      </button>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl text-gray-900 overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 pb-0">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight">
            Generate Monthly Payslips
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="ml-2 p-1.5 rounded-lg hover:bg-black/10 active:bg-black/20 transition-colors"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 pt-4 space-y-4">

          {/* Employee */}
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-800">
              Employee
            </label>
            <select
              name="employeeId"
              required
              className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
            >
              {employees.map((i) => (
                <option value={i.id} key={i.id}>
                  {i.firstName} {i.lastName} ({i.position})
                </option>
              ))}
            </select>
          </div>

          {/* Month + Year */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-gray-800">
                Month
              </label>
              <select
                name="month"
                className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option value={m} key={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-gray-800">
                Year
              </label>
              <input
                type="number"
                name="year"
                defaultValue={new Date().getFullYear()}
                className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
              />
            </div>
          </div>

          {/* Basic Salary */}
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-800">
              Basic Salary
            </label>
            <input
              type="number"
              name="basicSalary"
              placeholder="5000"
              required
              className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
            />
          </div>

          {/* Allowances + Deductions */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-gray-800">
                Allowances
              </label>
              <input
                type="number"
                name="allowances"
                defaultValue="0"
                className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-gray-800">
                Deductions
              </label>
              <input
                type="number"
                name="deductions"
                defaultValue="0"
                className="w-full px-3 py-2.5 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 text-sm transition"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-sm rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-150 text-gray-800 font-medium"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-lg bg-black/70 hover:bg-black/80 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 text-white font-medium"
            >
              {loading && <Loader2Icon className="w-4 h-4 animate-spin" />}
              Generate
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default GeneratePayslipForm;