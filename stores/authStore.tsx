import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthStore {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string, expires: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: true,
  token: Cookies.get("authToken") || null,
  login: (token, expires) => {
    Cookies.set("authToken", token, {
      expires,
    });
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    Cookies.remove("authToken");
    set({ isAuthenticated: false, token: null });
  },
}));
