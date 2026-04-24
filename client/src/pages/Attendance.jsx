import React, { useCallback, useEffect, useState } from "react";
import { dummyAttendanceData } from "../assets/assets";
import Loading from "../components/Loading";
import CheckInButton from "../components/Attendance/CheckInButton";
import AttendanceStats from "../components/Attendance/AttendanceStats";
import AttendanceHistory  from "../components/Attendance/AttendanceHistory";
const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = useCallback(async () => {
    setHistory(dummyAttendanceData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (loading) return <Loading />;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayRecords = history.find(
    (r) => new Date(r.date).toDateString() === today.toDateString(),
  );
  return (
    <div className="min-h-screen bg-slate-50 p-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
          Attendance
        </h1>
        <p className="text-slate-500 mt-1 text-sm leading-relaxed max-w-md">
          Track your daily attendance and work activity efficiently
        </p>
      </div>
      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <p className="text-rose-600 font-medium leading-relaxed">
            This account has been deactivated. Attendance actions are disabled.
          </p>
        </div>
      ) : (
        <div className="mb-8">
          <CheckInButton onAction={fetchData} todayRecords={todayRecords} />
        </div>
      )}
      <AttendanceStats history={history} />
      <AttendanceHistory history={history} />
    </div>
  );
};

export default Attendance;
