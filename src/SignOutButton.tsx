"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { GradientButton } from "@/components/ui/gradient-button";

export function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <GradientButton variant="variant" onClick={() => void signOut()}>
      Sign out
    </GradientButton>
  );
}
