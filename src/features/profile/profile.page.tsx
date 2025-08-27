import { useState } from "react";
import { useUserStore } from "./model/user.model";

function formatUserLevel(userLevel: string): string {
  const parts = userLevel.split("_");

  if (parts.length < 3) return userLevel;

  const first = parts[0].toUpperCase();
  const second = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  const last = parts.slice(2).join("_");

  return `${first}, ${second} ${last}`;
}

const ProfilePage = () => {
  const { currentUser, userProgress, resetProgress } = useUserStore();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const userLevel = userProgress.find((p) => p.userId === currentUser?.id)?.level || "N5";
  const completedLessons = userProgress.find((p) => p.userId === currentUser?.id)?.completedLessons || [];

  const handleResetProgress = async () => {
    if (currentUser) {
      await resetProgress(currentUser.id);
      setShowConfirmation(false);
    }
  };
  return (
    <main className="flex flex-col gap-8 h-full p-8">
      <section className="bg-yellow h-[80%] w-full mx-auto text-background rounded-3xl p-8 flex flex-col gap-8 shadow-lg">
        <h2 className="font-bold text-5xl text-center">プロフィール (Profile)</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
          <div className="bg-background text-foreground p-6 h-full rounded-3xl w-full md:w-1/3 shadow-md flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-yellow mb-4 flex items-center justify-center select-none">
              <span className="text-background text-3xl">{currentUser?.username ? currentUser?.username?.charAt(0) : "👤"}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{currentUser?.username}</h3>
            <p className="text-lg">レベル (Level): {formatUserLevel(userLevel)}</p>
          </div>

          <div className="bg-background text-foreground p-6 h-full rounded-3xl w-full md:w-2/3 shadow-md">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">進行 (Progress)</h3>
              <div className="space-y-4">
                <p>完了したレッスン (Completed lessons): {completedLessons.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-yellow h-4 rounded-full"
                    style={{ width: `${(completedLessons.length / 20) * 100}%` }}
                  ></div>
                </div>
              </div>
              <button
                onClick={() => setShowConfirmation(true)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Reset progress
              </button>
            </div>
          </div>
        </div>
      </section>
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to reset all progress?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleResetProgress}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export const Component = ProfilePage;
