// src/components/auth/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useAppStore((state) => state.user);

  if (!user) {
    // If the user is not authenticated, redirect them to the /auth page.
    return <Navigate to="/auth" />;
  }

  // If the user is authenticated, render the children components (the protected page).
  return <>{children}</>;
};

export default ProtectedRoute;