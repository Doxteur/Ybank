import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Lock, UserPlus, User } from 'lucide-react';
import { register } from '@/app/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch } from '@/app/store';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(register({ email, password, fullName })).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#10111a] relative overflow-hidden">
      {/* Grille SVG en fond */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid-register" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23243a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-register)" />
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
          <div className="mb-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg mb-3">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Créer un compte</h2>
            <p className="text-white/60 text-base">Rejoignez Ybank et gérez vos finances simplement</p>
          </div>
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-white/80 text-sm font-medium mb-1">Nom complet</label>
              <div className="flex items-center bg-[#23243a]/60 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-500 transition">
                <User className="w-5 h-5 text-violet-400 mr-3" />
                <input
                  id="fullName"
                  type="text"
                  required
                  className="bg-transparent outline-none border-none text-white w-full placeholder:text-white/40 text-base"
                  placeholder="Votre nom complet"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
            </div>
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
                  onChange={e => setEmail(e.target.value)}
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
                  autoComplete="new-password"
                  required
                  className="bg-transparent outline-none border-none text-white w-full placeholder:text-white/40 text-base"
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg py-3 rounded-xl shadow-lg hover:from-violet-700 hover:to-indigo-700 transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              <UserPlus className="w-5 h-5" />
              {loading ? 'Création du compte...' : 'Créer un compte'}
            </Button>
            <div className="w-full flex justify-end">
              <a href="/login" className="text-violet-400 text-sm hover:underline">Déjà un compte ? Se connecter</a>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
