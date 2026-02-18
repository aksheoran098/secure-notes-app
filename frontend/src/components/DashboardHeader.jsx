import React from "react";
import { UserCircle } from "lucide-react";

const DashboardHeader = ({ onLogout }) => {
  return (
    <div className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center rounded-b-xl">
      <h1 className="text-lg font-semibold">Secure Notes</h1>

      <div className="flex items-center gap-4">
        <button className="text-sm" onClick={onLogout}>
          Logout
        </button>
        <UserCircle size={28} />
      </div>
    </div>
  );
};

export default DashboardHeader;
