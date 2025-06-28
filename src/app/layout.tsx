"use client"

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <nav className="bg-theme-orange text-white p-4 px-6 flex items-center gap-8">
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
          <Link
            href="/settings"
            className="ml-auto"
          >
            {
              pathname === "/settings" ? (
                <IoSettings size={24}/>
              ) : (
                <IoSettingsOutline size={24}/>
              )
            }
          </Link>
        </nav>
        <main className="p-6 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
