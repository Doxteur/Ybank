import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { RootState } from '@/app/store';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion en sauvegardant l'URL de destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
