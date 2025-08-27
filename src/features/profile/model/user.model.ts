import { create } from "zustand";
import { openDB, DBSchema, IDBPDatabase } from "idb";

interface UserDB extends DBSchema {
  users: { key: string; value: User };
  userProgress: { key: string; value: UserProgress };
}

export type User = {
  id: string;
  username: string;
  password: string;
};

export type UserProgress = {
  userId: string;
  level: string;
  completedLessons: string[];
};

type UserState = {
  currentUser: User | null;
  users: User[];
  userProgress: UserProgress[];
  db: IDBPDatabase<UserDB> | null;
  isLoaded: boolean;

  loadFromStorage: () => Promise<void>;
  register: (username: string, password: string) => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  saveProgress: (userId: string, level: string, lessonId: string) => Promise<void>;
  isLessonCompleted: (userId: string, lessonId: string) => any;
  resetProgress: (userId: string) => any;
};

export const useUserStore = create<UserState>((set, get) => ({
  currentUser: null,
  users: [],
  userProgress: [],
  db: null,
  isLoaded: false,

  loadFromStorage: async () => {
    try {
      const db = await openDB<UserDB>("UserDB", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("users")) {
            db.createObjectStore("users", { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains("userProgress")) {
            db.createObjectStore("userProgress", { keyPath: "userId" });
          }
        },
      });

      const users = await db.getAll("users");
      const userProgress = await db.getAll("userProgress");

      const savedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
      const currentUser = savedUser ? users.find(u => u.id === savedUser.id) || null : null;

      set({ db, users, userProgress, currentUser, isLoaded: true });
    } catch (error) {
      console.error("Error loading DB:", error);
      set({ isLoaded: true });
    }
  },

  register: async (username, password) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");

    const users = await db.getAll("users");
    if (users.some(u => u.username === username)) return false;

    const newUser = { id: crypto.randomUUID(), username, password };
    await db.add("users", newUser);

    const updatedUsers = await db.getAll("users");
    set({ users: updatedUsers, currentUser: newUser });
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return true;
  },

  login: async (username, password) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");

    const users = await db.getAll("users");
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return false;

    set({ currentUser: user });
    localStorage.setItem("currentUser", JSON.stringify(user));
    return true;
  },

  logout: () => {
    set({ currentUser: null });
    localStorage.removeItem("currentUser");
  },

  saveProgress: async (userId, level, lessonId) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");

    const existingProgress = await db.get("userProgress", userId);
    if (existingProgress) {
      if (!existingProgress.completedLessons.includes(lessonId)) {
        existingProgress.completedLessons.push(lessonId);
        await db.put("userProgress", existingProgress);
      }
    } else {
      await db.add("userProgress", { userId, level, completedLessons: [lessonId] });
    }

    const updatedProgress = await db.getAll("userProgress");
    set({ userProgress: updatedProgress });
  },

  isLessonCompleted: (userId: string, lessonId: string) => {
    const { userProgress } = get();
    const progress = userProgress.find(p => p.userId === userId);
    return progress?.completedLessons.includes(lessonId) || false;
  },

  resetProgress: async (userId: string) => {
  const { db } = get();
  if (!db) throw new Error("DB not initialized");

  const existingProgress = await db.get("userProgress", userId);
  if (existingProgress) {
    existingProgress.completedLessons = [];
    await db.put("userProgress", existingProgress);
    const updatedProgress = await db.getAll("userProgress");
    set({ userProgress: updatedProgress });
  }
},

}));
