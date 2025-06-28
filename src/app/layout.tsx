"use client"

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav className="bg-theme-orange text-white p-4 px-6 flex gap-8">
          <Link 
            href="/" 
            className={pathname === "/" ? "font-bold" : "hover:underline"}>
              Home
          </Link>
          <Link 
            href="/players"
            className={pathname === "/players" ? "font-bold" : "hover:underline"}>
              Players
          </Link>
          <Link 
            href="/leagues"
            className={pathname === "/leagues" ? "font-bold" : "hover:underline"}>
              Leagues
          </Link>
        </nav>
        <main className="p-6 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
