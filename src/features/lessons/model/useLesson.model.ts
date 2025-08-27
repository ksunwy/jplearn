import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useUserStore } from "../../profile/model/user.model";
import { COURSES } from "../data";

export const useLesson = () => {
  const { courseId, chapterId, lessonId } = useParams<{
    courseId: string;
    chapterId: string;
    lessonId: string;
  }>();

  const { currentUser, isLessonCompleted, saveProgress } = useUserStore();
  const course = COURSES.find((c) => c.id === courseId);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);
  const lesson = chapter?.lessons.find((ls) => ls.id === lessonId);

  if (!course) throw new Error(`Course ${courseId} not found`);
  if (!chapter) throw new Error(`Chapter ${chapterId} not found`);
  if (!lesson) throw new Error(`Lesson ${lessonId} not found`);

  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [currentEx, setCurrentEx] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 }
      );
    }
  }, [currentEx]);

  const currentExercise = lesson?.exercises[currentEx];

  const handleChange = (exId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [exId]: value }));
  };

  const handleNext = async (navigate: (path: string) => void) => {
    if (!currentExercise || !lesson) return;

    const userAnswer = answers[currentExercise.id];
    const correctAnswer = Array.isArray(currentExercise.answer)
      ? currentExercise.answer
      : [currentExercise.answer];

    if (
      !userAnswer ||
      (Array.isArray(userAnswer) ? userAnswer.length === 0 : userAnswer.trim() === "")
    ) {
      setError("⚠️ Enter an answer!");
      return;
    }

    if (Array.isArray(userAnswer)) {
      const sortedUser = [...userAnswer].sort().map((a) => a.toLowerCase());
      const sortedCorrect = [...correctAnswer].sort().map((a) => a.toLowerCase());
      if (JSON.stringify(sortedUser) !== JSON.stringify(sortedCorrect)) {
        setError("❌ That's wrong, let's try again");
        return;
      }
    } else {
      if (userAnswer.toLowerCase() !== correctAnswer[0].toLowerCase()) {
        setError("❌ That's wrong, let's try again");
        return;
      }
    }

    setError(null);

    if (currentEx < lesson.exercises.length - 1) {
      setCurrentEx((prev) => prev + 1);
    } else {
      if (!currentUser || !chapterId || !lessonId) return;
      await saveProgress(currentUser.id, chapterId, lessonId);
      setShowCompleted(true);
      navigate(`/courses/${courseId}/chapters/${chapterId}`);
    }
  };

  return {
    lesson,
    lessonId,
    currentUser,
    isLessonCompleted,
    currentExercise,
    answers,
    currentEx,
    error,
    showCompleted,
    containerRef,
    handleChange,
    handleNext,
    setShowCompleted,
  };
};
