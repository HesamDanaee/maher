import { create } from "zustand";

interface ThemeState {
  theme: "dark" | "light";
}

interface ThemeAction {
  changeTheme: (theme: ThemeState["theme"]) => void;
}

const useThemeStore = create<ThemeState & ThemeAction>((set) => ({
  theme: "dark",
  changeTheme: (theme) => set(() => ({ theme: theme })),
}));

export default useThemeStore;
