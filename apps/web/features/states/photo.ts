import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PhotoInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface PhotoStore {
  photoInfo: PhotoInfo | null;
  setPhotoInfo: (info: PhotoInfo) => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photoInfo: null,
      setPhotoInfo: (info) => set({ photoInfo: info }),
    }),
    {
      name: "photo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
