import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, CreditCard, Download, List, RefreshCcw, Shield, TrendingUp, Smartphone, Globe, Star, Users, Zap } from 'lucide-react'
import { useNavigate } from 'react-router'

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
]

const features = [
  {
    icon: Shield,
    title: 'Sécurité maximale',
    desc: "Vos données et transactions sont protégées par les dernières technologies de sécurité bancaire.",
    color: 'from-violet-500 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Gestion intelligente',
    desc: "Analyse automatique de vos dépenses, conseils personnalisés et outils de pilotage avancés.",
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: '100% Mobile',
    desc: "Pilotez tous vos comptes et cartes depuis votre smartphone, où que vous soyez.",
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Globe,
    title: 'International',
    desc: "Envoyez et recevez de l'argent partout dans le monde, sans frais cachés.",
    color: 'from-pink-500 to-fuchsia-500'
  },
]

const stats = [
  { icon: Users, value: '2M+', label: 'Clients satisfaits' },
  { icon: Zap, value: '99.99%', label: 'Disponibilité' },
  { icon: Smartphone, value: '24/7', label: 'Support client' },
  { icon: CreditCard, value: '0€', label: 'Frais cachés' },
]

const testimonials = [
  {
    name: 'Lucas Martin',
    role: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: "Ybank m'a permis de gérer mon business sans stress, tout est simple et rapide !",
    rating: 5
  },
  {
    name: 'Sophie Bernard',
    role: 'Étudiante',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: "L'app est ultra fluide, j'adore les notifications en temps réel et le support est top.",
    rating: 5
  },
  {
    name: 'Karim El Amrani',
    role: 'Développeur',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    content: "Le change instantané et la sécurité sont vraiment au-dessus du lot. Je recommande !",
    rating: 5
  },
]

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#10111a] relative overflow-hidden">
      {/* Grille SVG en fond */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23243a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Effet lumineux */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#7c3aed]/30 via-[#818cf8]/40 to-transparent blur-3xl opacity-70 z-0" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Y</span>
          </div>
          <span className="text-white font-semibold tracking-wide">Ybank</span>
        </div>
        <ul className="hidden md:flex gap-8 text-white/80 font-medium">
          <li><a href="#" className="hover:text-white transition">Accueil</a></li>
          <li><a href="#features" className="hover:text-white transition">Pourquoi Ybank ?</a></li>
          <li><a href="#stats" className="hover:text-white transition">Chiffres</a></li>
          <li><a href="#testimonials" className="hover:text-white transition">Avis</a></li>
        </ul>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" className="text-white/80 hover:text-white">Tarifs</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full shadow-lg">Créer un compte</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-16 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm flex items-center gap-2 backdrop-blur-md"
        >
          <span className="inline-block w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          Bienvenue sur la beta Ybank !
        </motion.div>
        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-6xl font-bold text-center mb-6 leading-tight"
        >
          La banque nouvelle génération<br />
          pour vos finances, votre avenir.
        </motion.h1>
        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl text-center max-w-2xl mb-8"
        >
          Simplifiez la gestion de votre argent avec Ybank : sécurité, rapidité, innovation et support humain 24/7.
        </motion.p>
        {/* CTA + Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-12"
        >
          <Button
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg rounded-full shadow-xl flex items-center gap-2"
            onClick={() => navigate('/login')}
          >
            Ouvrir mon compte <ArrowRight className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2 ml-0 md:ml-6 mt-4 md:mt-0">
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0" />
            ))}
            <span className="text-white/70 text-sm ml-2">+2M clients satisfaits</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: '0 4px 32px 0 rgba(124,58,237,0.10)',
              borderColor: '#a78bfa',
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="rounded-2xl bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border border-white/10 shadow-lg backdrop-blur-lg p-0 relative overflow-hidden group min-h-[200px]"
          >
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-violet-600/80 rounded-full p-2 shadow-md">
                <List className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="p-7 flex flex-col h-full">
              <h3 className="text-white font-bold text-xl mb-2">Gestion des factures</h3>
              <p className="text-white/60 text-base mb-6">Gérez et archivez vos factures en un clic.</p>
              <div className="flex gap-2 mt-auto">
                <Button variant="ghost" className="rounded-full px-4 py-1 text-sm text-white/80 border border-white/10 hover:bg-violet-600/10 transition">Voir la liste</Button>
                <Button variant="ghost" className="rounded-full px-4 py-1 text-sm flex items-center gap-1 text-violet-400 border border-white/10 hover:bg-violet-600/10 transition"><Download className="w-4 h-4" /> Télécharger</Button>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'radial-gradient(ellipse at 70% 0%, rgba(168,139,250,0.10) 0%, transparent 70%)'}} />
          </motion.div>
          {/* Card 2 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: '0 4px 32px 0 rgba(16,185,129,0.10)',
              borderColor: '#34d399',
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="rounded-2xl bg-gradient-to-br from-[#18192a]/90 to-[#134e4a]/80 border border-white/10 shadow-lg backdrop-blur-lg p-0 relative overflow-hidden group min-h-[200px]"
          >
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-emerald-500/80 rounded-full p-2 shadow-md">
                <RefreshCcw className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="p-7 flex flex-col h-full">
              <h3 className="text-white font-bold text-xl mb-2">Change instantané</h3>
              <div className="flex flex-col gap-2 w-full mb-6">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white/90 font-mono">€ 230.00</span>
                  <span className="text-white/40 text-xs">EUR</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-white/90 font-mono">$ 244.89</span>
                  <span className="text-white/40 text-xs">USD</span>
                </div>
              </div>
              <Button variant="ghost" className="rounded-full px-4 py-1 text-sm text-white/80 border border-white/10 hover:bg-emerald-500/10 transition mt-auto">Convertir</Button>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'radial-gradient(ellipse at 70% 0%, rgba(52,211,153,0.10) 0%, transparent 70%)'}} />
          </motion.div>
          {/* Card 3 */}
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: '0 4px 32px 0 rgba(99,102,241,0.10)',
              borderColor: '#6366f1',
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="rounded-2xl bg-gradient-to-br from-[#18192a]/90 to-[#3730a3]/80 border border-white/10 shadow-lg backdrop-blur-lg p-0 relative overflow-hidden group min-h-[200px]"
          >
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-indigo-500/80 rounded-full p-2 shadow-md">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="p-7 flex flex-col h-full">
              <h3 className="text-white font-bold text-xl mb-2">Ma carte Ybank</h3>
              <div className="flex flex-col gap-2 w-full mb-6">
                <span className="text-white/90 tracking-widest text-lg font-mono">7342  8913  ••••  6091</span>
              </div>
              <Button variant="ghost" className="rounded-full px-4 py-1 text-sm text-white/80 border border-white/10 hover:bg-indigo-500/10 transition mt-auto">Afficher le solde</Button>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'radial-gradient(ellipse at 70% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)'}} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-28 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Pourquoi choisir Ybank ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#18192a]/90 border-none rounded-2xl p-8 flex flex-row items-center gap-6 shadow-lg backdrop-blur-md hover:scale-[1.03] transition-transform">
                <div className={`w-14 h-14 min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center shadow-lg ${
                  f.title === 'Sécurité maximale' ? 'bg-gradient-to-br from-violet-500 to-indigo-500' :
                  f.title === 'Gestion intelligente' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                  f.title === '100% Mobile' ? 'bg-gradient-to-br from-blue-500 to-cyan-400' :
                  'bg-gradient-to-br from-pink-500 to-fuchsia-500'
                }`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-white/70 text-base">{f.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Ybank en chiffres
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-[#18192a]/80 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-white/70 text-base text-center">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-28 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Ils ont choisi Ybank
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#18192a]/80 border border-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg backdrop-blur-md hover:scale-[1.03] transition-transform">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-violet-400 mb-4" />
                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-center italic mb-4">"{t.content}"</p>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/60 text-sm">{t.role}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 py-24 px-4 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Prêt à rejoindre la révolution Ybank ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/70 text-lg text-center mb-8 max-w-2xl"
        >
          Ouvrez votre compte en quelques minutes et profitez d'une expérience bancaire unique, sécurisée et 100% mobile.
        </motion.p>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 text-lg rounded-full shadow-xl flex items-center gap-2">
          Commencer avec Ybank <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </div>
  )
}

export default Landing
