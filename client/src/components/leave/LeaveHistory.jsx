import React, { useState } from "react";
import { format } from "date-fns";
import { Check, Loader2, X } from "lucide-react";

export const LeaveHistory = ({ leaves, isAdmin, onUpdate }) => {
  const [processing, setProcessing] = useState(null);

  const handleStatusUpdate = async (id, status) => {
    setProcessing(id);
  };

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider">
            <tr>
              {isAdmin && <th className="px-6 py-3">Employee</th>}
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Reason</th>
              <th className="px-6 py-3">Status</th>
              {isAdmin && <th className="px-6 py-3 text-center">Action</th>}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {leaves.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 6 : 4}
                  className="text-center py-10 text-slate-400"
                >
                  No Leaves found
                </td>
              </tr>
            ) : (
              leaves.map((i) => {
                return (
                  <tr
                    key={i._id || i.id}
                    className="hover:bg-slate-50 transition-all duration-200 group"
                  >
                    
                    {isAdmin && (
                      <td className="px-6 py-4 font-medium text-slate-700">
                        {i.employee?.firstName || "-"}
                      </td>
                    )}

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600">
                        {i.type}
                      </span>
                    </td>

                    {/* ✅ ONLY CHANGE HERE */}
                    <td className="px-6 py-4 text-slate-500">
                      {i.startDate && i.endDate
                        ? `${format(new Date(i.startDate), "dd MMM yyyy")} - ${format(
                            new Date(i.endDate),
                            "dd MMM yyyy"
                          )}`
                        : "-"}
                    </td>

                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate">
                      {i.reason || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 group-hover:scale-105 ${
                          i.status === "APPROVED"
                            ? "bg-emerald-100 text-emerald-700"
                            : i.status === "REJECTED"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {i.status}
                      </span>
                    </td>

                    {isAdmin && (
                      <td>
                        {i.status === "PENDING" && (
                          <div className="flex">
                            <button
                              onClick={() =>
                                handleStatusUpdate(i._id || i.id, "APPROVED")
                              }
                              disabled={!!processing}
                            >
                              {processing === (i._id || i.id) ? (
                                <Loader2 className="animate-spin w-4 h-4" />
                              ) : (
                                <Check className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(i._id || i.id, "REJECTED")
                              }
                              disabled={!!processing}
                            >
                              {processing === (i._id || i.id) ? (
                                <Loader2 className="animate-spin w-4 h-4" />
                              ) : (
                                <X className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};