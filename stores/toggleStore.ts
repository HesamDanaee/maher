import { create } from "zustand";

interface ToggleStore {
  modal: boolean;
  toggleModal: (staet: boolean) => void;
}

const useToggleStore = create<ToggleStore>((set) => ({
  modal: false,
  toggleModal: (state) => set(() => ({ modal: state })),
}));

export default useToggleStore;
