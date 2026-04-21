import { PencilIcon, Trash2Icon } from "lucide-react";
import React from "react";

const EmployeeCard = ({ employee, onDelete, onEdit }) => {

  const handleDelete = () => {
    if (!confirm("Are You Sure You Wanted to Delete The Employee")) return;
    onDelete(employee.id);
  };

  return (
    <div className="group relative p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

      {/* Hover Action Buttons */}
      {!employee.isDeleted && (
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-200">
          <button
            onClick={() => onEdit(employee)}
            className="p-2 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition"
          >
            <PencilIcon className="w-4 h-4" />
          </button>

          <button
            onClick={handleDelete}
            className="p-2 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-500 transition"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Avatar + Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-600 text-white text-sm font-semibold shadow shrink-0">
          {employee.firstName[0]}
          {employee.lastName[0]}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 truncate">
            {employee.firstName} {employee.lastName}
          </h3>
          <p className="text-xs text-slate-500 truncate">
            {employee.position}
          </p>
        </div>
      </div>

      {/* Department + Status */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
          {employee.department || "Remote"}
        </span>

        {employee.isDeleted && (
          <span className="text-[10px] px-2 py-1 rounded-full bg-red-100 text-red-500 font-medium">
            DELETED
          </span>
        )}
      </div>

    </div>
  );
};

export default EmployeeCard;