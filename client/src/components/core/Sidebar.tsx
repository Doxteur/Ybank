import { Link, useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  Home,
  TrendingUp,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { logout } from '@/app/features/auth/authSlice';
import { AppDispatch } from '@/app/store';

const navigation = [
  { name: 'Accueil', href: '/dashboard', icon: Home },
  { name: 'Dépenses', href: '/expenses', icon: TrendingUp },
];

function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group relative p-3 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-lg"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          );
        })}

        <div className="w-6 h-px bg-white/20 my-2" />

        <button
          onClick={handleLogout}
          className="p-3 rounded-xl text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
