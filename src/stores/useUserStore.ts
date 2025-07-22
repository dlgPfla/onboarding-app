import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  name: string;
  profileImage: string;
  setName: (name: string) => void;
  setProfileImage: (image: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: '',
      profileImage: '',
      setName: (name) => set({ name }),
      setProfileImage: (image) => set({ profileImage: image }),
    }),
    {
      name: 'user-storage', // localStorage key 이름
    }
  )
);
