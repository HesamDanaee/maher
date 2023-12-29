import { create } from "zustand";
import Cookies from "js-cookie";

import useCookies from "@/hooks/useCookie";

interface AuthStore {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: true,
  token: Cookies.get("authToken") || null,
  login: (token) => {
    Cookies.set("authToken", token);
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    Cookies.remove("authToken");
    set({ isAuthenticated: false, token: null });
  },
}));
