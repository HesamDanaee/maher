"use client";

import useLocal from "@/hooks/useLocal";
import useThemeStore from "@/stores/themeStore";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { theme } = useThemeStore();
  return (
    <html lang="pe" data-theme={theme}>
      {children}
    </html>
  );
};

export default ThemeProvider;
