"use client";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { Separator } from "./separator";
export interface INavigationProps {
  className: string;
}

export default function Navigation(props: INavigationProps) {
  const { className } = props;
  return (
    <div className={cn(className, "rounded-lg flex justify-between p-5")}>
      <span className="text-2xl">Azim</span>
      <div className="flex gap-2">
        <Button>Contact</Button>
        <Separator orientation="vertical" color="white" />
        <ModeToggle />
      </div>
    </div>
  );
}
