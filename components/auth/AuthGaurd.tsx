"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Cookies from "js-cookie";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const cookie = Cookies.get("authToken");

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated && !cookie) {
      router.replace("/auth/login");
    }
  }, [isAuthenticated, cookie, router]);

  // Render children only if authenticated
  return isAuthenticated || cookie ? <>{children}</> : null;
};

export default AuthGuard;
