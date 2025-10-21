import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/ui/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azimjon Ilkhomov",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="h-screen">
          <div className="container mx-auto px-5">
            <Navigation className="pt-5"></Navigation>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
