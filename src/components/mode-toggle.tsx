"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { IconCircleHalf2 } from "@tabler/icons-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <IconCircleHalf2 className="h-[1.2rem] w-[1.2rem] scale-100" />
    </Button>
  );
}
