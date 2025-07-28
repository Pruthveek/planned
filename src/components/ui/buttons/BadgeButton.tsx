import React from "react";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
interface BadgeButtonProps {
    lable: string;
    text: string;
}
const BadgeButton:React.FC<BadgeButtonProps>=({ lable, text }) => {
  return (
    <div>
      <div className="flex items-center gap-2 border border-[#D6DDE0] rounded-full bg-[#F7F9FA] p-1.5 max-w-fit">
        <div className="bg-gradient-to-r from-black via-gray-700 to-black text-white text-xs font-medium px-1 py-0.5 rounded-full shadow-xl">
          NEW
        </div>
        <div className="flex items-center text-sm font-medium text-gray-700 group">
          Planned raises its $35M Series B &nbsp;
          <span className="relative inline-block w-4 h-3">
                  <FaChevronRight
                    className="absolute left-0 top-0 transition-transform duration-300 group-hover:translate-x-0.5 opacity-100"
                  />
                  <FaArrowRight
                    className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </span>
        </div>
      </div>
    </div>
  );
}
export default BadgeButton;