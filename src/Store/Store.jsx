import { create } from "zustand";

const useStore = create((set) => ({
  username: "",
  setUsername: (name) => set(() => ({ username: name })),
  password: "",
  setPassword: (pass) => set(() => ({ password: pass })),
  loggedIn: false,
  setLoggedIn: (bool) => set(() => ({ loggedIn: bool })),
}));

export default useStore;
