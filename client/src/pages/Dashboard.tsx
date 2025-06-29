import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '@/app/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Wallet,
  Send,
  TrendingUp,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Euro,
  Eye,
  EyeOff,
  Plus,
  Minus
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [showTransfer, setShowTransfer] = useState(false);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferRecipient, setTransferRecipient] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferError, setTransferError] = useState('');
  const [showBalance, setShowBalance] = useState(true);

  // Solde fictif pour la démo
  const balance = 12450.67;
  const monthlyGrowth = 2.5;
  const monthlyChange = 310.25;

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!transferAmount || !transferRecipient) {
      setTransferError('Veuillez remplir tous les champs');
      return;
    }

    const amount = parseFloat(transferAmount);
    if (amount <= 0 || amount > balance) {
      setTransferError('Montant invalide');
      return;
    }

    // Simulation d'un virement
    setTransferError('');
    setTransferSuccess(true);

    // Reset après 3 secondes
    setTimeout(() => {
      setTransferSuccess(false);
      setShowTransfer(false);
      setTransferAmount('');
      setTransferRecipient('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#10111a] relative overflow-hidden">
      {/* Grille SVG en fond */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid-dashboard" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23243a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dashboard)" />
      </svg>

      {/* Effet lumineux */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#7c3aed]/20 via-[#818cf8]/30 to-transparent blur-3xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[200px] bg-gradient-to-tl from-[#06b6d4]/20 via-[#0891b2]/30 to-transparent blur-3xl opacity-60 z-0" />

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Bonjour, {user?.name?.split(' ')[0] || 'Utilisateur'} 👋
              </h1>
              <p className="text-white/60 text-lg">
                Voici un aperçu de vos finances aujourd'hui
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Solde Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#18192a]/90 via-[#23243a]/80 to-[#1e1b4b]/90 border border-white/10 shadow-2xl backdrop-blur-lg">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />

            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Solde disponible</h2>
                    <p className="text-white/60 text-sm">Compte principal • {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {showBalance ? <EyeOff className="w-4 h-4 text-white/60" /> : <Eye className="w-4 h-4 text-white/60" />}
                </button>
              </div>

              <div className="mb-4">
                {showBalance ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-3"
                  >
                    €{balance.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-white/20 mb-3 tracking-widest"
                  >
                    ••••••••
                  </motion.div>
                )}

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 text-xs font-medium">+{monthlyGrowth}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Plus className="w-3 h-3" />
                    <span className="text-xs">+€{monthlyChange.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} ce mois</span>
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowTransfer(true)}
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Faire un virement
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Ma carte
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cartes d'actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {/* Carte Statistiques */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg h-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Dépenses du mois</h3>
                    <p className="text-white/60 text-xs">Janvier 2024</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">€2,847.50</div>
                <div className="flex items-center gap-2 text-red-400">
                  <Minus className="w-3 h-3" />
                  <span className="text-xs">-12% vs décembre</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Carte Épargne */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg h-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center">
                    <Euro className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Épargne</h3>
                    <p className="text-white/60 text-xs">Compte épargne</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">€8,250.00</div>
                <div className="flex items-center gap-2 text-green-400">
                  <Plus className="w-3 h-3" />
                  <span className="text-xs">+€450 ce mois</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Carte Transactions */}
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg h-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Transactions</h3>
                    <p className="text-white/60 text-xs">Ce mois</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">127</div>
                <div className="flex items-center gap-2 text-blue-400">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">+23 vs décembre</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Modal de virement */}
        {showTransfer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowTransfer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Card className="bg-gradient-to-br from-[#18192a]/95 to-[#23243a]/95 border-none shadow-2xl backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Nouveau virement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {transferSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-white text-xl font-semibold mb-2">Virement effectué !</h3>
                      <p className="text-white/60">Votre virement de €{transferAmount} a été envoyé avec succès.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleTransfer} className="space-y-4">
                      <div>
                        <Label htmlFor="recipient" className="text-white/80">Destinataire</Label>
                        <Input
                          id="recipient"
                          type="text"
                          placeholder="Email ou IBAN"
                          value={transferRecipient}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransferRecipient(e.target.value)}
                          className="bg-[#23243a]/60 border-white/20 text-white placeholder:text-white/40 focus:border-violet-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="amount" className="text-white/80">Montant (€)</Label>
                        <Input
                          id="amount"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={transferAmount}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransferAmount(e.target.value)}
                          className="bg-[#23243a]/60 border-white/20 text-white placeholder:text-white/40 focus:border-violet-500"
                        />
                      </div>

                      {transferError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 text-sm">{transferError}</span>
                        </motion.div>
                      )}

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowTransfer(false)}
                          className="flex-1 border-white/20 text-white hover:bg-white/10"
                        >
                          Annuler
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
