import {
  ArrowRightIcon,
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EmployeeDashboard = ({ data }) => {
  const emp = data?.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$ ${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Salary",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back, {emp?.firstName}
        </h1>
        <p className="text-slate-500 text-sm">
          {emp?.position} • {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md overflow-hidden group hover:scale-[1.02] transition-all duration-300"
          >
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 blur-2xl`}
            ></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.title}</p>
                <h2 className="text-2xl font-semibold mt-1 text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color}`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/attendance"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
        >
          Mark Attendance
          <ArrowRightIcon className="w-4 h-4" />
        </Link>

        <Link
          to="/leave"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
        >
          Apply For Leaves
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;