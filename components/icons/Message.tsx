import "@/components/animation/Bounc.css";
import React from "react";

function Message({ className, color }: { className?: string; color?: string }) {
  return (
    <svg
      className={`${className || ""} ${color || ""}`}
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.82899C0 4.86361 4.01481 0.838379 9.00099 0.838379H20.999C25.9701 0.838379 30 4.88055 30 9.82899V27.8384H9.00099C4.02988 27.8384 0 23.7962 0 18.8478V9.82899ZM18 12.8384V15.8384H21V12.8384H18ZM9 12.8384V15.8384H12V12.8384H9Z"
        fill="CurrentColor"
      />
    </svg>
  );
}

export default Message;
