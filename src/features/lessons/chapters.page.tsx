import { COURSES } from "./data";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/shared/ui/Card";

const ChaptersPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = COURSES.find(c => c.id === courseId);

  if (!course) return <div className="p-10">❌ Course not found</div>;

  return (
    <section className="p-10 pt-5 min-h-screen flex flex-col gap-14">
      <h2 className="text-3xl font-extrabold text-foreground">
        {course.title} - Chapters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow p-10 rounded-2xl">
        {course.chapters.map((ch, i) => (
          <Link key={ch.id} to={`/courses/${course.id}/chapters/${ch.id}`}>
            <Card title={`${i+1}. ${ch.title}`} hoverable />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const Component = ChaptersPage;
