import { Modal } from "@/shared/ui/Modal";
import { useLesson } from "./model/useLesson.model";
import { useNavigate } from "react-router-dom";

const LessonPage = () => {
  const navigate = useNavigate();
  const {
    lesson,
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
    lessonId,
  } = useLesson();

  if (!lesson) {
    return <div className="p-10">❌ Lesson not found</div>;
  }

  if (currentUser && lessonId && isLessonCompleted(currentUser.id, lessonId)) {
    return (
      <div className="p-10 text-center font-bold text-xl">✅ Lesson is already completed</div>
    );
  }

  return (
    <section ref={containerRef} className="p-10 pt-5 min-h-screen flex flex-col gap-14">
      <h2 className="text-3xl font-extrabold text-foreground">{lesson.title}</h2>
      <div className="flex flex-col gap-6 container">
        <div className="flex gap-2">
          {lesson.exercises.map((_, idx) => (
            <div
              key={idx}
              className={`h-3 flex-1 rounded-full ${
                idx <= currentEx ? "bg-yellow" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="bg-white border-2 border-yellow p-6 rounded-2xl shadow-md">
          <p className="mb-2 font-semibold text-gray-800">{currentExercise?.question}</p>
          {(currentExercise?.type === "grammar" || currentExercise?.type === "typing") && (
            <input
              type="text"
              value={(answers[currentExercise.id] as string) || ""}
              onChange={(e) => handleChange(currentExercise.id, e.target.value)}
              className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-yellow outline-none"
              placeholder="Enter an answer"
            />
          )}
          {currentExercise?.type === "kanji" && (
            <input
              type="text"
              value={(answers[currentExercise.id] as string) || ""}
              onChange={(e) => handleChange(currentExercise.id, e.target.value)}
              className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-yellow outline-none"
              placeholder="Enter a kanji"
            />
          )}
          {currentExercise?.type === "vocabulary" && currentExercise.extra?.options && (
            <div className="flex flex-col gap-2">
              {Array.isArray(currentExercise.answer) ? (
                currentExercise.extra.options.map((option: string, index: number) => {
                  const currentAnswers = answers[currentExercise.id];
                  const isChecked =
                    Array.isArray(currentAnswers) && currentAnswers.includes(option);
                  return (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          const currentAnswers = Array.isArray(answers[currentExercise.id])
                            ? answers[currentExercise.id]
                            : [];
                          const newAnswers = e.target.checked
                            ? [...(currentAnswers as string[]), option]
                            : (currentAnswers as string[]).filter((ans: string) => ans !== option);
                          handleChange(currentExercise.id, newAnswers);
                        }}
                        className="h-5 w-5 text-yellow"
                      />
                      {option}
                    </label>
                  );
                })
              ) : (
                currentExercise.extra.options.map((option: string, index: number) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={answers[currentExercise.id] === option}
                      onChange={() => handleChange(currentExercise.id, option)}
                      className="h-5 w-5 text-yellow"
                    />
                    {option}
                  </label>
                ))
              )}
            </div>
          )}
          {currentExercise?.type === "listening" && currentExercise.extra?.audio && (
            <audio controls src={currentExercise.extra.audio} className="mt-2" />
          )}
          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
        <button
          onClick={() => handleNext(navigate)}
          className="mt-6 px-6 py-3 bg-yellow hover:bg-yellow-600 text-white font-bold rounded-xl shadow-md transition"
        >
          {currentEx < lesson.exercises.length - 1 ? "Continue" : "Complete a lesson"}
        </button>
      </div>
      <Modal
        open={showCompleted}
        onClose={() => setShowCompleted(false)}
        title="🎉 Lesson has been completed!"
        description="Great job! You've completed all the exercises. 🚀 You can now move on to the next lesson."
        actionLabel="Continue"
      />
    </section>
  );
};

export const Component = LessonPage;
