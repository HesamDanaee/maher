// toastStore.ts
import { create } from "zustand";

type ToastType = "success" | "warning" | "error";

interface ToastStore {
  toastVisible: boolean;
  message: string;
  type: ToastType;
  showToast: (message: string, type: ToastType, time: number) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toastVisible: false,
  message: "",
  type: "success",
  showToast: (message, type, time) => {
    set({ toastVisible: true, message, type });
    setTimeout(() => {
      set({ toastVisible: false, message: "", type: "success" });
    }, time);
  },
  hideToast: () => set({ toastVisible: false, message: "", type: "success" }),
}));
