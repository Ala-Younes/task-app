import { useLocalStorage } from "./useLocalStorage";

const useTheme = (initialTheme: string) => {
  const [activeTheme, setActiveTheme] = useLocalStorage({
    key: "theme",
    initialValue: initialTheme,
  });

  const handleThemeChange = (theme: string) => {
    switch (theme) {
      case "dark":
        setActiveTheme("dark");
        break;
      case "white":
        setActiveTheme("bg-white");
        break;
      case "gray":
        setActiveTheme("bg-gray-400");
        break;
      case "gradientOne":
        setActiveTheme("gradientOne");
        break;
      case "gradientTwo":
        setActiveTheme("gradientTwo");
        break;
      case "gradientThree":
        setActiveTheme("gradientThree");
        break;
      default:
        setActiveTheme(`bg-white`);
        break;
    }
  };

  return { activeTheme, handleThemeChange };
};
export default useTheme;
