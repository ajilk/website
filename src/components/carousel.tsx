"use client";
import Marquee from "react-fast-marquee";

export default function Carousel() {
  const skills: string[] = ["aws.png", "angular.png", "github.png"];
  return (
    <Marquee
      speed={100}
      gradient={true}
      gradientColor={""}
      gradientWidth={500}
      autoFill={true}
    >
      {skills.map((skill: string) => (
        <img src={skill} width={100} />
      ))}
    </Marquee>
  );
}
