import { COURSES } from "./data";
import { Link, useParams } from "react-router-dom";
import { useUserStore } from "../profile/model/user.model";
import { useState } from "react";
import { Card } from "@/shared/ui/Card";
import { Modal } from "@/shared/ui/Modal";

const LessonsPage = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const { currentUser, isLessonCompleted } = useUserStore();
  const [lockedModal, setLockedModal] = useState(false);

  const course = COURSES.find(c => c.id === courseId);
  const chapter = course?.chapters.find(ch => ch.id === chapterId);

  if (!course || !chapter) return <div className="p-10">❌ Not found</div>;

  return (
    <section className="p-10 pt-5 min-h-screen flex flex-col gap-14">
      <h2 className="text-3xl font-extrabold text-foreground">
        {chapter.title} - Lessons
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow p-10 rounded-2xl auto-rows-min"
      >
        {chapter.lessons.map((ls, idx) => {
          const completed = currentUser ? isLessonCompleted(currentUser.id, ls.id) : false;
          const prevLesson = chapter.lessons[idx - 1];
          const prevCompleted = !prevLesson || (currentUser && isLessonCompleted(currentUser.id, prevLesson.id));
          const isLocked = !prevCompleted;

          return isLocked ? (
            <Card
              key={ls.id}
              title={ls.title}
              status="locked"
              onClick={() => setLockedModal(true)}
            />
          ) : (
            <Link key={ls.id} to={`/courses/${course.id}/chapters/${chapter.id}/lessons/${ls.id}`}>
              <Card title={ls.title} status={completed ? "completed" : "default"} />
            </Link>
          );
        })}
      </div>
      <Modal
        open={lockedModal}
        onClose={() => setLockedModal(false)}
        title="🚧 Lesson locked!"
        description="You must complete the previous lesson first to unlock this one. Let's go step-by-step! 🐣"
        actionLabel="OK!"
      />

    </section>
  );
};

export const Component = LessonsPage;
