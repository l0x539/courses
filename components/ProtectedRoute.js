import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.push("/");
    }
  }, [user, allowedRoles, router]);

  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <div>Loading...</div>;
  }

  return children;
}
