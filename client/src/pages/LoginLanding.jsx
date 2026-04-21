import React from "react";
import { Link } from "react-router-dom"; // For navigation between routes
import LoginLeftSide from "../components/LoginLeftSide"; // Left section component (UI/branding)
import { ShieldCheck, User, ArrowRight } from "lucide-react"; // Icons

const LoginLanding = () => {
  // List of portal options (Admin & Employee)
  const portalOptions = [
      {
      to: "/login/employee",
      title: "Employee Portal",
      description: "Access your dashboard, tasks, and profile",
      icon: User,
    },
    {
      to: "/login/admin", // Route path
      title: "Admin Portal", // Card title
      description: "Manage employees, roles, and system settings", // Card description
      icon: ShieldCheck, // Icon component
    },
  
  ];

  return (
    // Main container (full height + responsive layout)
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side (separate component for design/branding) */}
      <LoginLeftSide />

      {/* Right Side container */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-white">
        
        {/* Main Content (centered vertically & horizontally) */}
        <div className="flex items-center justify-center flex-1">
          <div className="w-full max-w-md animate-fade-in">
            
            {/* Heading section */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800">
                Welcome Back
              </h2>
              <p className="text-slate-500 mt-3">
                Select your role to continue
              </p>
            </div>

            {/* Role Cards (Admin & Employee options) */}
            <div className="space-y-5">
              {portalOptions.map((option, index) => {
                const Icon = option.icon; // Get icon dynamically

                return (
                  <Link
                    key={index} // Unique key for each card
                    to={option.to} // Navigation link
                    className="flex items-center justify-between p-5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition group"
                  >
                    
                    {/* Left side (icon + text) */}
                    <div className="flex items-center gap-4">
                      
                      {/* Icon container */}
                      <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                        <Icon size={22} /> {/* Dynamic icon */}
                      </div>

                      {/* Title and description */}
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {option.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Right arrow icon (hover animation) */}
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

        {/* Footer section */}
        <div className="text-center text-base font-medium text-slate-400 mt-6 tracking-wide">
          © {new Date().getFullYear()} Employee Management System. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;