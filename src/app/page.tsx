import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import Navigation from "@/components/ui/navigation";
import { PersonStanding } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const links: { link: string; icon: any; label: string }[] = [
    { label: "Linkedin", icon: <PersonStanding />, link: "https://google.com" },
    { label: "Github", icon: <PersonStanding />, link: "https://google.com" },
    { label: "Twitter", icon: <PersonStanding />, link: "https://google.com" },
  ];
  return (
    <div className="container mx-auto">
      <Navigation className="mt-5"></Navigation>
      <div className="flex">
        <div className="m-auto">
          <p className="text-7xl my-10 font-extralight">
            <span className="">Hey,</span> I am{" "}
            <span className="italic">Azim</span>
          </p>
          <p className="text-5xl my-10 font-extralight text-gray-400">
            I'm passionate about crafting high-quality, performant applications
            using the latest frameworks and technologies to build products that
            make a real impact.
          </p>
          {links.map((link) => (
            <Button
              key={link.label}
              variant={"outline"}
              className="mx-1"
              size="lg"
            >
              {link.icon}
              <Link href={link.link}>{link.label}</Link>
            </Button>
          ))}
          <div className="mt-16">
            <Carousel></Carousel>
          </div>
        </div>
        {/*<div className="m-auto">*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
