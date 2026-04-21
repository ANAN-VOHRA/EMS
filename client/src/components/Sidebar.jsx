import React, { useEffect, useState } from "react";
import { href, Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  MenuIcon,
  X,
  User,
  Icon,
  LayoutGridIcon,
  UserIcon,
  CalendarHeartIcon,
  FileTextIcon,
  DollarSignIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const role = "ADMIN" || "Employee";
  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutGridIcon,
    },
    role === "ADMIN"
      ? {
          name: "Employee",
          href: "/employees",
          icon: UserIcon,
        }
      : {
          name: "Attendance",
          href: "/attendance",
          icon: CalendarHeartIcon,
        },
    {
      name: "Leaves",
      href: "/leave",
      icon: FileTextIcon,
    },
    {
      name: "Payslips",
      href: "/payslips",
      icon: DollarSignIcon,
    },
    {
      name: "Setting",
      href: "/settings",
      icon: SettingsIcon,
    },
  ];

  const handleLogout =() =>{
    window.location.href ="/login"
  }
  const siderBarContent = (
    <>
      <div className="px-6 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User className="text-white w-7 h-7" />
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-xs text-slate-400 tracking-wider">
                Management System
              </p>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {userName && (
        <div className="mx-3 mt-4 mb-2 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate tracking-wide">
                {userName}
              </p>
              <p className="text-[11px] text-slate-400 truncate tracking-widest uppercase opacity-80">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="mt-6 px-3 flex flex-col gap-1">
        <p className="text-[11px] text-slate-500 uppercase tracking-widest px-3 mb-2">
          Navigation
        </p>
      </div>
      <div className="mt-2 px-3 flex flex-col gap-1">
  {navItems.map((i, index) => {
    const isActive = pathname.startsWith(i.href);

    return (
      <Link
        to={i.href}
        key={index}
        className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group
        ${
          isActive
            ? "bg-white/10 text-white shadow-inner"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
      >
        {/* active left indicator */}
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-emerald-400 rounded-r-full"></span>
        )}

        {/* icon */}
        <i.icon
          className={`w-5 h-5 transition-all duration-200
          ${
            isActive
              ? "text-white"
              : "text-slate-400 group-hover:text-white"
          }`}
        />

        {/* text */}
        <span className="truncate">{i.name}</span>
      </Link>
    );
  })}
</div>
<div className="mt-auto p-3 border-t border-white/10">
  <button
    onClick={handleLogout}
    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
  >
    <LogOutIcon className="w-5 h-5 group-hover:text-red-400 transition-colors" />
    <span className="truncate">Log out</span>
  </button>
</div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className="hidden lg:flex flex-col h-screen w-[260px] bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white border-r border-white/10">
        {siderBarContent}
      </aside>

      <aside
        className={`
          lg:hidden fixed top-0 left-0 h-screen w-[260px]
          bg-gradient-to-b from-slate-900 to-slate-950 text-white z-50
          shadow-2xl border-r border-white/10
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {siderBarContent}
      </aside>
    </>
  );
};

export default Sidebar;
