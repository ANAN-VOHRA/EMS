import React, { useState } from "react";
import { DEPARTMENTS } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const EmployeeFrom = ({ initialData, onSuccess, onCancel }) => {
  const isEditMode = !!initialData;
  const [loading, setLoading] = useState(false);

  const input =
    "w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-slate-300 focus:outline-none text-sm bg-white";

  const label = "block text-xs font-medium text-slate-500 mb-1";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* TOP GRID (2 COLUMN BALANCED) */}
      <div className="grid lg:grid-cols-2 gap-5">

        {/* PERSONAL INFO */}
        <div className="bg-slate-50 p-5 rounded-xl border space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200">
            Personal Info
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>First name</label>
              <input className={input} defaultValue={initialData?.firstName} placeholder="First name" />
            </div>
            <div>
              <label className={label}>Last name</label>
              <input className={input} defaultValue={initialData?.lastName} placeholder="Last name" />
            </div>
          </div>

          <div>
            <label className={label}>Phone</label>
            <input className={input} defaultValue={initialData?.phone} placeholder="Phone" />
          </div>

          <div>
            <label className={label}>Join date</label>
            <input
              className={input}
              type="date"
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate).toISOString().split("T")[0]
                  : ""
              }
            />
          </div>

          <div>
            <label className={label}>Bio</label>
           <textarea className={input} rows={3} defaultValue={initialData?.bio} placeholder="Bio"></textarea>
          </div>
        </div>

        {/* JOB DETAILS */}
        <div className="bg-slate-50 p-5 rounded-xl border space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200">
            Job Details
          </h3>

          <div>
            <label className={label}>Department</label>
            <select className={input} defaultValue={initialData?.department || ""}>
              <option value="">Select department</option>
              {DEPARTMENTS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={label}>Position</label>
            <input className={input} defaultValue={initialData?.position} placeholder="Position" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>Basic salary</label>
              <input className={input} type="number" defaultValue={initialData?.basicSalary || 0} placeholder="Basic salary" />
            </div>
            <div>
              <label className={label}>Allowances</label>
              <input className={input} type="number" defaultValue={initialData?.allowances || 0} placeholder="Allowances" />
            </div>
          </div>

          <div>
            <label className={label}>Deductions</label>
            <input className={input} type="number" defaultValue={initialData?.deductions || 0} placeholder="Deductions" />
          </div>

          {isEditMode && (
            <div>
              <label className={label}>Employment status</label>
              <select className={input} defaultValue={initialData?.employmentStatus}>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* ACCOUNT SETUP */}
      <div className="bg-slate-50 p-5 rounded-xl border">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200 mb-4">
          Account Setup
        </h3>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={label}>Email</label>
            <input
              type="email"
              name="email"
              className={input}
              defaultValue={initialData?.email}
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className={label}>
              {!isEditMode ? "Password" : "Change password (optional)"}
            </label>
            <input
              type="password"
              name="password"
              className={input}
              placeholder={isEditMode ? "Leave blank to keep same" : "Create password"}
            />
          </div>

          <div>
            <label className={label}>Role</label>
            <select
              name="role"
              className={input}
              defaultValue={initialData?.user?.role || "EMPLOYEE"}
            >
              <option value="EMPLOYEE">Employee</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button type="button" onClick={()=>(onCancel?onCancel():navigate(-1))} className="px-5 py-2 border rounded-lg text-sm text-slate-600 hover:bg-slate-50">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium" disabled={loading}>
          {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" /> }
          {isEditMode ?"Update Employee":"Create Employee"}
        </button>
      </div>

    </form>
  );
};

export default EmployeeFrom;