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
        <nav className="bg-theme-orange text-white p-4 flex gap-8">
          <Link 
            href="/" 
            className={pathname === "/" ? "font-bold" : "hover:underline"}>
              Test
          </Link>
          <Link 
            href="/players"
            className={pathname === "/players" ? "font-bold" : "hover:underline"}>
              Players
          </Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
