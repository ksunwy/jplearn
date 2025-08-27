import { Button } from "@/shared/ui/kit/button";
import { useAuthForm } from "../model/useAuthForm.model";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/kit/card";
import { Input } from "@/shared/ui/kit/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

type Props = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: Props) {
  const { username, setUsername, password, setPassword, error, handleSubmit, isLoading } =
    useAuthForm(mode);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md backdrop-blur-lg bg-[#f5b24726] border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">
            {mode === "login" ? "Welcome 👋" : "Create account ✨"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="username" className="text-foreground">
              Login
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a login"
              className="outline-none focus:outline-none bg-background placeholder:bg-background focus:border-none focus:ring-none shadow-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password"
              className="outline-none focus:outline-none bg-background placeholder:bg-background focus:border-none focus:ring-none shadow-none"
            />
          </div>

          {error && <p className="text-[#ff6b6b] text-sm text-center">{error}</p>}

          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`hover:bg-[#f5b247] text-background font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-none ${!error && "mt-5"}`}
          >
            {isLoading ? "Loading..." :mode === "login" ? "Login" : "Sign up"}
          </Button>

          <span className="text-sm mx-auto">{mode === "login" ? "Don't have an account?" : "Already have an account?"} <Link className="text-amber-700" to={`${mode === "login" ? "/register" : "/login"}`}>{mode === "login" ? "Sign up" : "Login"}</Link></span>
        </CardContent>
      </Card>
    </div>
  );
}
