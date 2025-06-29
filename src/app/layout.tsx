"use client";

import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import AuthGuardRoutes from "@/components/auth-guard-routes";

function Navigation() {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  if (loading || !user || pathname === "/login" || pathname === "/signup") return null;

  return (
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
            <IoSettings size={24} />
          ) : (
            <IoSettingsOutline size={24} />
          )
        }
      </Link>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <AuthProvider>
          <AuthGuardRoutes>
            <Navigation />
            <main className="w-full h-full">
              {children}
            </main>
          </AuthGuardRoutes>
        </AuthProvider>
      </body>
    </html>
  );
}
