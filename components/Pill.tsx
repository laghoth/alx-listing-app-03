import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border cursor-pointer 
        ${active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"}
        hover:bg-blue-600 hover:text-white transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
