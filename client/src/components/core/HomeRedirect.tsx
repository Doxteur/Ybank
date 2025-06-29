import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from '@/app/store';

interface HomeRedirectProps {
  children: React.ReactNode;
}

export const HomeRedirect: React.FC<HomeRedirectProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Si l'utilisateur est connecté, rediriger vers le dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Sinon, afficher le contenu normal (landing page)
  return <>{children}</>;
};
