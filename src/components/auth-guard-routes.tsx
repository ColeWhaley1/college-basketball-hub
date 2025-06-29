import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuardRoutes({children}: {children: React.ReactNode}) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const routeNeedsAuth = pathname !== "/login" && pathname !== "/signup";
    const isAuthenticated = !!user;

    useEffect(() => {
        if (routeNeedsAuth && !isAuthenticated && !loading) {
            router.push("/login");
        }
    }, [routeNeedsAuth, isAuthenticated, loading]);

    if (loading) return null;

    return children;
}