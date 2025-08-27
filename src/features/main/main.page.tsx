import { Link } from "react-router-dom";
import { COURSES } from "../lessons/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Card } from "@/shared/ui/Card";

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <main ref={containerRef} className="flex flex-col gap-16 h-full p-8">
      <section className="bg-yellow rounded-2xl p-10 flex flex-col gap-10 shadow-xl">
        <h2 className="font-extrabold text-5xl text-foreground bg-white rounded-2xl p-6">
          🌟 学習プラットフォーム (Study Platform)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map(course => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <Card title={course.title} hoverable />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export const Component = MainPage;
