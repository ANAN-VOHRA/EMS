import React from "react";

const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col justify-center w-full px-16 text-white">
        <div className="-mt-20">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Employee
            </span>
            <br />
            Management System
          </h1>

          <p className="text-slate-300 mt-18 leading-relaxed max-w-md text-lg">
            A powerful and secure platform to manage your workforce with ease.
            Track employees, monitor performance, and streamline operations —
            all in one smart and intuitive system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginLeftSide;
