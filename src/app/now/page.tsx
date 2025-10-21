import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Now() {
  return (
    <div className="container mx-auto px-5 py-16 max-w-3xl">
      <h1 className="text-5xl font-extralight mb-4">/now</h1>
      <p className="text-gray-400">Last Updated: October 2025</p>
      <div className="space-y-12 my-5">
        <section>
          <ul className="text-gray-400 text-md">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Learning iOS/Mac native development using SwiftUI</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Dabbling in Colemak-DH and buying too many split ortho-linear
                keyboards
              </span>
            </li>
          </ul>
        </section>
      </div>
      <hr className="border-t border-gray-300 my-1" />
      <p className="text-sm text-gray-400">
        This is a
        <Button variant={"link"} className="ps-1 pe-0 text-gray-400">
          <Link href="https://nownownow.com/about" target="_blank">
            now page
          </Link>
        </Button>
        , inspired by Derek Sivers
      </p>
    </div>
  );
}
