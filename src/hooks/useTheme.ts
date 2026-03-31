import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return { isDark, toggle: () => setIsDark((d) => !d) };
};
