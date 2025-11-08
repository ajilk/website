"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";

export interface INavigationProps {
  className: string;
}

export default function Navigation(props: INavigationProps) {
  const { className } = props;

  return <div className={cn(className, "rounded-lg flex justify-end")}></div>;
}
