import { create } from 'zustand';

// Call `create` once and export the store directly
const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user-info')) || null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
