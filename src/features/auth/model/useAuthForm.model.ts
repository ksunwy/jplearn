import { useUserStore } from "@/features/profile/model/user.model";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Mode = "login" | "register";

export function useAuthForm(mode: Mode) {
  const register = useUserStore((s) => s.register);
  const login = useUserStore((s) => s.login);
  const loadFromStorage = useUserStore((s) => s.loadFromStorage);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let success = false;
      if (mode === "login") {
        success = await login(username, password);
        if (!success) setError("Incorrect login or password");
      } else {
        success = await register(username, password);
        if (!success) setError("User already exists");
      }

      if (success) navigate("/profile");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    isLoading,
    handleSubmit,
  };
}