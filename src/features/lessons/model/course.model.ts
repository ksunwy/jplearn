import { create } from "zustand";
import { openDB, DBSchema, IDBPDatabase } from "idb";

export type LessonType = "kanji" | "grammar" | "vocabulary" | "listening" | "typing";

export interface Exercise {
  id: string;
  type: LessonType;
  question: string;
  answer: string | string[];
  extra?: any;
}

export interface Lesson {
  id: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  title: string;
  type: LessonType;
  content: any;
  exercises: Exercise[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Level {
  id: string; // "N5", "N4" 
  title: string;
  chapters: Chapter[];
}

interface CourseDB extends DBSchema {
  lessons: { key: string; value: Lesson };
  userProgress: { key: string; value: UserProgress };
}

export type UserProgress = {
  userId: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  completedLessons: string[];
};

type CourseState = {
  db: IDBPDatabase<CourseDB> | null;
  lessons: Lesson[];
  userProgress: UserProgress[];
  isLoaded: boolean;

  loadDB: () => Promise<void>;
  addLesson: (lesson: Lesson) => Promise<void>;
  getLessonsByLevel: (level: string) => Promise<Lesson[]>;
  saveProgress: (userId: string, lessonId: string) => Promise<void>;
  getUserProgress: (userId: string) => Promise<UserProgress>;
};

export const useCourseStore = create<CourseState>((set, get) => ({
  db: null,
  lessons: [],
  userProgress: [],
  isLoaded: false,

  loadDB: async () => {
    const db = await openDB<CourseDB>("CourseDB", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("lessons")) {
          db.createObjectStore("lessons", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("userProgress")) {
          db.createObjectStore("userProgress", { keyPath: "userId" });
        }
      },
    });

    const lessons = await db.getAll("lessons");
    const userProgress = await db.getAll("userProgress");
    set({ db, lessons, userProgress, isLoaded: true });
  },

  addLesson: async (lesson) => {
    const { db, lessons } = get();
    if (!db) throw new Error("DB not initialized");

    await db.put("lessons", lesson);
    const updatedLessons = await db.getAll("lessons");
    set({ lessons: updatedLessons });
  },

  getLessonsByLevel: async (level) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");
    const allLessons = await db.getAll("lessons");
    return allLessons.filter((l) => l.level === level);
  },

  saveProgress: async (userId, lessonId) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");

    let progress = await db.get("userProgress", userId);
    if (!progress) {
      progress = { userId, level: "N5", completedLessons: [lessonId] };
      await db.add("userProgress", progress);
    } else {
      if (!progress.completedLessons.includes(lessonId)) {
        progress.completedLessons.push(lessonId);
        await db.put("userProgress", progress);
      }
    }

    const updatedProgress = await db.getAll("userProgress");
    set({ userProgress: updatedProgress });
  },

  getUserProgress: async (userId) => {
    const { db } = get();
    if (!db) throw new Error("DB not initialized");
    const progress = await db.get("userProgress", userId);
    return progress || { userId, level: "N5", completedLessons: [] };
  },
}));
