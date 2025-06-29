import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { AppDispatch, RootState } from '@/app/store';
import { login, clearError } from '@/app/features/auth/authSlice';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  // Récupérer la page d'origine depuis l'état de location
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await dispatch(login({ email, password }));

    if (login.fulfilled.match(result)) {
      // Rediriger vers la page d'origine ou la page d'accueil
      navigate(from, { replace: true });
    }
  };

  const handleInputChange = () => {
    if (error) {
      dispatch(clearError());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#10111a] relative overflow-hidden">
      {/* Grille SVG en fond */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid-login" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23243a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-login)" />
      </svg>
      {/* Effet lumineux */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-tr from-[#7c3aed]/30 via-[#818cf8]/40 to-transparent blur-3xl opacity-70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="rounded-3xl bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-2xl backdrop-blur-lg p-10 flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-center">Connexion</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6" autoComplete="off">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/80 text-sm font-medium mb-1">Adresse e-mail</label>
                <div className="flex items-center bg-[#23243a]/60 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-500 transition">
                  <Mail className="w-5 h-5 text-violet-400 mr-3" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="username"
                    required
                    className="bg-transparent outline-none border-none text-white w-full placeholder:text-white/40 text-base"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleInputChange();
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-white/80 text-sm font-medium mb-1">Mot de passe</label>
                <div className="flex items-center bg-[#23243a]/60 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-500 transition">
                  <Lock className="w-5 h-5 text-violet-400 mr-3" />
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-transparent outline-none border-none text-white w-full placeholder:text-white/40 text-base"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleInputChange();
                    }}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg py-3 rounded-xl shadow-lg hover:from-violet-700 hover:to-indigo-700 transition flex items-center justify-center gap-2"
                disabled={loading}
              >
                <LogIn className="w-5 h-5" />
                {loading ? 'Connexion...' : 'Se connecter'}
              </Button>
              <div className="w-full flex justify-end">
                <a href="#" className="text-violet-400 text-sm hover:underline">Mot de passe oublié ?</a>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
