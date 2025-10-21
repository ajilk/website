import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import { PersonStanding } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const links: { link: string; icon: any; label: string }[] = [
    { label: "Linkedin", icon: <PersonStanding />, link: "https://google.com" },
    { label: "Github", icon: <PersonStanding />, link: "https://google.com" },
    { label: "Twitter", icon: <PersonStanding />, link: "https://google.com" },
  ];

  const links_jsx = links.map((link) => (
    <Button key={link.label} variant={"outline"} className="mx-1" size="lg">
      {link.icon}
      <Link href={link.link}>{link.label}</Link>
    </Button>
  ));

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col justify-center">
      <p className="text-5xl lg:text-7xl font-extralight">
        <span>hey,</span> i am{" "}
        <span className="font-semibold text-blue-500">Azim</span>
      </p>
      <p className="text-2xl lg:text-4xl font-light text-gray-500 pt-5">
        debugging since [year you started]
        {/*professional bug creator (and eventual fixer)*/}
      </p>
      <p className="text-2xl lg:text-3xl font-extralight text-gray-400 pt-5">
        passionate software engineer with an obsessive eye for detail. i build
        polished digital experiences where every pixel and interaction matters.
        check out what i'm up to
        <Link href="/now">
          <Button
            className="ps-2 text-2xl lg:text-3xl font-extralight text-blue-500"
            variant="link"
          >
            now
          </Button>
        </Link>
      </p>
    </div>
  );
}
