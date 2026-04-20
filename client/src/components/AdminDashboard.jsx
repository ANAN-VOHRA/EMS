import {
  Building2Icon,
  CalendarIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      label: "Total Employees",
      description: "Active workforce",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      label: "Departments",
      description: "Organization units",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CalendarIcon,
      value: data.todayAttendance,
      label: "Today's Attendance",
      description: "Employees present today",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      label: "Pending Leaves",
      description: "Awaiting approval",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="p-6 space-y-10">

      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm">
          Overview of organization performance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1"
          >
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-500`}
            />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </p>
                <h2 className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </h2>
                <p className="text-xs text-slate-400">
                  {stat.description}
                </p>
              </div>

              <div
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-5 h-5 text-white" />

                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-30 blur-md transition"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;