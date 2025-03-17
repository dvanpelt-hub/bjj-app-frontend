import React from "react";
import { Tag } from "antd";
import { X } from "lucide-react";

const ModernTag = ({ label, color = "blue", closable = false, onClose }) => {
  const tagColors = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-white",
    gray: "bg-gray-500 text-white",
    purple: "bg-purple-500 text-white",
  };

  return (
    <Tag
      className={`flex items-center gap-2 px-3 py-1 rounded-2xl shadow-sm text-sm font-medium ${tagColors[color]} border-none`}
      closable={false} // use custom close button
    >
      {label}
      {closable && (
        <button
          onClick={onClose}
          className="ml-1 p-1 rounded-full hover:bg-white/20 transition"
        >
          <X size={12} className="text-white" />
        </button>
      )}
    </Tag>
  );
};

export default ModernTag;
