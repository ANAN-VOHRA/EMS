import React from "react";
import { Link } from "react-router-dom";
import LoginLeftSide from "../components/LoginLeftSide";
import { ShieldCheck, User, ArrowRight } from "lucide-react";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Manage employees, roles, and system settings",
      icon: ShieldCheck,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "Access your dashboard, tasks, and profile",
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <LoginLeftSide />

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-white">
        {/* Main Content */}
        <div className="flex items-center justify-center flex-1">
          <div className="w-full max-w-md animate-fade-in">
            {/* Heading */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">
                Welcome Back
              </h2>
              <p className="text-slate-500 mt-3">
                Select your role to continue
              </p>
            </div>

            {/* Role Cards */}
            <div className="space-y-7">
              {portalOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <Link
                    key={index}
                    to={option.to}
                    className="flex items-center justify-between p-5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition group"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {option.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition"
                      size={20}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center text-base font-medium text-slate-400 mt-6 tracking-wide">
          © {new Date().getFullYear()} Employee Management System. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
