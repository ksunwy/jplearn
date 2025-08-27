import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  COURSES: "/courses",
  COURSE: "/courses/:courseId",
  CHAPTER: "/courses/:courseId/chapters/:chapterId",
  LESSONS: "/courses/:courseId/chapters/:chapterId/lessons",
  LESSON: "/courses/:courseId/chapters/:chapterId/lessons/:lessonId",
} as const;

export type PathParams = {
  [ROUTES.CHAPTER]: {
    chapterId: string;
  };
  [ROUTES.COURSE]: {
    courseId: string;
  };
  [ROUTES.LESSON]: {
    lessonId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
