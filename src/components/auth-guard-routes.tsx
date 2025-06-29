import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingPage from "./loading";

export default function AuthGuardRoutes({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const routeNeedsAuth = pathname !== "/login" && pathname !== "/signup";
    const isAuthenticated = !!user;
    const isLoggedIn = isAuthenticated && !loading;

    useEffect(() => {
        if (isLoggedIn && (pathname === "/login" || pathname === "/signup")) {
            router.push("/");
            return;
        }
        if (routeNeedsAuth && !isAuthenticated && !loading) {
            router.push("/login");
        }
    }, [routeNeedsAuth, isAuthenticated, loading]);

    if (loading) return null;

    return children;
}