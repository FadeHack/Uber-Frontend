import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  user: User | null;
  from: string;
  to: string;
  setUser: (user: User | null) => void;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      from: '',
      to: '',
      setUser: (user) => set({ user }),
      setFrom: (from) => set({ from }),
      setTo: (to) => set({ to }),
    }),
    {
      name: 'uber-clone-storage', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);