import { COURSES } from "./data";
import { Link } from "react-router-dom";
import { Card } from "@/shared/ui/Card";

const CoursesPage = () => {
  return (
    <section className="p-10 pt-5 min-h-screen flex flex-col gap-14">
      <h1 className="text-4xl font-extrabold text-foreground">📚 Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow p-10 rounded-2xl">
        {COURSES.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <Card title={course.title} hoverable />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const Component = CoursesPage;
