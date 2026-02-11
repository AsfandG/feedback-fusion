"use client";
import { SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex items-center justify-center ">
      <SignUp
        appearance={{ theme: resolvedTheme === "light" ? dark : undefined }}
      />
    </div>
  );
}
