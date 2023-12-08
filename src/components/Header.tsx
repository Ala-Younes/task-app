import { useState } from "react";
import Logo from "../assets/react.svg";

type Theme =
  | "white"
  | "gray"
  | "dark"
  | "gradientOne"
  | "gradientTwo"
  | "gradientThree";

type Props = {
  onThemeChange: (theme: Theme) => void;
};
const Header = ({ onThemeChange }: Props) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("gray");

  const handleThemeChange = (theme: Theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
  };

  const renderThemeButton = (theme: Theme, className: string) => (
    <span
      onClick={() => handleThemeChange(theme)}
      className={`cursor-pointer hover:scale-150 transition-transform duration-300 h-4 w-4  ${className} ${
        selectedTheme === theme && "h-6 w-6"
      }`}
    ></span>
  );

  return (
    <header className="flex container mx-auto p-4 bg-slate-200 shadow-2xl rounded-lg dark:bg-white dark:text-black">
      <div className="flex gap-4 items-center mr-auto">
        <img src={Logo} alt="logo" />
        <span className="text-lg font-bold">React Task</span>
      </div>
      <div className="flex items-center gap-2">
        {renderThemeButton("white", "bg-white rounded-full dark:bg-yellow-200")}
        {renderThemeButton("gray", "bg-slate-300 rounded-full")}
        {renderThemeButton("dark", "bg-black rounded-full")}
        {renderThemeButton("gradientOne", "gradientOne w-4 h-4 rounded-full")}
        {renderThemeButton("gradientTwo", "gradientTwo w-4 h-4 rounded-full")}
        {renderThemeButton(
          "gradientThree",
          "gradientThree w-4 h-4 rounded-full"
        )}
      </div>
    </header>
  );
};
export default Header;
