import { useState } from "react";
import Logo from "../assets/react.svg";
import "./header.css";

const Header = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <header className="flex container mx-auto mt-12 p-4 bg-slate-200 shadow-2xl rounded-lg">
      <div className="flex gap-4 items-center mr-auto">
        <img src={Logo} alt="logo" />
        <span className="text-lg font-bold">React Task</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="cursor-pointer hover:scale-150 transition-transform duration-300 h-4 w-4 bg-white rounded-full"></span>
        <span
          className={`cursor-pointer hover:scale-150 transition-transform duration-300 h-4 w-4 bg-slate-300 rounded-full ${
            isSelected && "h-6 w-6 ring-3 ring-slate-300"
          }`}
        ></span>
        <span className="cursor-pointer hover:scale-150 transition-transform duration-300 h-4 w-4 bg-black rounded-full"></span>
        <span className="cursor-pointer hover:scale-150 transition-transform duration-300 gradientOne w-4 h-4 rounded-full"></span>
        <span className="cursor-pointer hover:scale-150 transition-transform duration-300 gradientTwo w-4 h-4 rounded-full"></span>
        <span className="cursor-pointer hover:scale-150 transition-transform duration-300 gradientThree w-4 h-4 rounded-full"></span>
      </div>
    </header>
  );
};
export default Header;
