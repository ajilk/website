"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Pet() {
  return (
    <DotLottieReact
      className="w-[214px] h-[63.7px] lg:w-[535px] lg:h-[159.5px]"
      src="/cat.lottie"
      loop
      autoplay
    />
  );
}
