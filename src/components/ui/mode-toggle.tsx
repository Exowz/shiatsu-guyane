import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const TOGGLE_CLASSES =
  "text-base font-medium flex items-center gap-2 px-4 py-3 transition-colors relative z-10";

type ToggleOptionsType = "light" | "dark";

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit h-12 items-center rounded-full backdrop-blur-md shadow-lg" style={{ backgroundColor: 'rgba(var(--color-background), 0.1)', borderColor: 'rgba(var(--color-background), 0.2)' }}>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-white/70 hover:text-white"
        }`}
        onClick={() => {
          setSelected("light");
        }}
      >
        <FiSun className="relative z-10 h-4 w-4" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-white/70 hover:text-white"
        }`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiMoon className="relative z-10 h-4 w-4" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}
        />
      </div>
    </div>
  );
};

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<ToggleOptionsType>("light");

  useEffect(() => {
    if (theme) setSelected(theme as ToggleOptionsType);
  }, [theme]);

  useEffect(() => {
    setTheme(selected);
  }, [selected, setTheme]);

  return <SliderToggle selected={selected} setSelected={setSelected} />;
};