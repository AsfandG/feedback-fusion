"use client";

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex items-center justify-center ">
      <SignIn
        appearance={{ theme: resolvedTheme === "light" ? dark : undefined }}
      />
    </div>
  );
}
