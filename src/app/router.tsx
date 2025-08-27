import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      { path: ROUTES.LOGIN, lazy: () => import("@/features/auth/login.page") },
      { path: ROUTES.REGISTER, lazy: () => import("@/features/auth/register.page") },
      { path: ROUTES.HOME, lazy: () => import("@/features/main/main.page") },
      { path: ROUTES.PROFILE, lazy: () => import("@/features/profile/profile.page") },

      { path: ROUTES.COURSES, lazy: () => import("@/features/lessons/courses.page") },
      { path: ROUTES.COURSE, lazy: () => import("@/features/lessons/chapters.page") },
      { path: ROUTES.CHAPTER, lazy: () => import("@/features/lessons/lessons.page") },
      { path: ROUTES.LESSON, lazy: () => import("@/features/lessons/lesson.page") },
    ],
  },
]);
