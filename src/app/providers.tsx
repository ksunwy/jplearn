import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/features/profile/model/user.model";

export function Providers({ children }: { children: React.ReactNode }) {
  const loadFromStorage = useUserStore((s) => s.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
