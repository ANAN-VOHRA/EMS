import React, { useCallback, useEffect, useState } from "react";
import { dummyEmployeeData, dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import PayslipsList from "../components/payslips/PayslipsList";
import GeneratePayslipForm from "../components/payslips/GeneratePayslipForm";
const Payslips = () => {
  const [payslips, setPayslips] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = true;

  const fetchPayslips = useCallback(async () => {
    setPayslips(dummyPayslipData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchPayslips();
  }, [fetchPayslips]);

  useEffect(() => {
    if (isAdmin) {
      setEmployees(dummyEmployeeData);
    }
  }, [isAdmin]);

  if (loading) return <Loading />;

  return (
    <div className="p-6 space-y-6 animate-fade-in bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
            Payslips
          </h1>
          <p className="text-sm text-slate-500">
            {isAdmin
              ? "Review and manage all employee payslips"
              : "Access and download your payslips"}
          </p>
        </div>

        {isAdmin && (
          <GeneratePayslipForm  employees={employees} onSuccess={fetchPayslips}/>
        )}
      </div>

      {/* Content */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
       <PayslipsList payslips={payslips} isAdmin={isAdmin}/>
      </div>
    </div>
  );
};

export default Payslips;
