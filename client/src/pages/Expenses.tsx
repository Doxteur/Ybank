import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  ShoppingCart,
  Car,
  Home,
  Utensils,
  Coffee,
  Plus,
  Filter,
  Calendar,
  Euro
} from 'lucide-react';

const categories = [
  { name: 'Alimentation', icon: Utensils, color: 'from-orange-500 to-red-500', amount: 847.50, percentage: 30 },
  { name: 'Transport', icon: Car, color: 'from-blue-500 to-cyan-500', amount: 423.20, percentage: 15 },
  { name: 'Shopping', icon: ShoppingCart, color: 'from-pink-500 to-purple-500', amount: 678.90, percentage: 24 },
  { name: 'Logement', icon: Home, color: 'from-green-500 to-emerald-500', amount: 1200.00, percentage: 42 },
  { name: 'Café/Restaurant', icon: Coffee, color: 'from-yellow-500 to-orange-500', amount: 156.80, percentage: 6 },
];

const recentExpenses = [
  { id: 1, name: 'Carrefour', category: 'Alimentation', amount: 67.45, date: '2024-01-15', icon: Utensils },
  { id: 2, name: 'Essence Total', category: 'Transport', amount: 45.20, date: '2024-01-14', icon: Car },
  { id: 3, name: 'Zara', category: 'Shopping', amount: 89.99, date: '2024-01-13', icon: ShoppingCart },
  { id: 4, name: 'Loyer', category: 'Logement', amount: 1200.00, date: '2024-01-10', icon: Home },
  { id: 5, name: 'Starbucks', category: 'Café/Restaurant', amount: 4.50, date: '2024-01-12', icon: Coffee },
];

const Expenses = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const totalExpenses = categories.reduce((sum, cat) => sum + cat.amount, 0);
  const monthlyBudget = 3000;
  const remainingBudget = monthlyBudget - totalExpenses;

  return (
    <div className="min-h-screen bg-[#10111a] relative overflow-hidden">
      {/* Grille SVG en fond */}
      <svg className="absolute inset-0 w-full h-full z-0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid-expenses" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23243a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-expenses)" />
      </svg>

      {/* Effet lumineux */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#7c3aed]/20 via-[#818cf8]/30 to-transparent blur-3xl opacity-60 z-0" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[200px] bg-gradient-to-tl from-[#f59e0b]/20 via-[#d97706]/30 to-transparent blur-3xl opacity-60 z-0" />

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Mes Dépenses 💸
              </h1>
              <p className="text-white/60 text-lg">
                Suivez vos dépenses et gérez votre budget
              </p>
            </div>
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle dépense
            </Button>
          </div>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/60" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="bg-[#23243a]/60 border border-white/20 text-white rounded-lg px-3 py-1.5 text-sm focus:border-orange-500 outline-none"
                  >
                    <option value="week">Cette semaine</option>
                    <option value="month">Ce mois</option>
                    <option value="quarter">Ce trimestre</option>
                    <option value="year">Cette année</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-white/60" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-[#23243a]/60 border border-white/20 text-white rounded-lg px-3 py-1.5 text-sm focus:border-orange-500 outline-none"
                  >
                    <option value="all">Toutes les catégories</option>
                    {categories.map(cat => (
                      <option key={cat.name} value={cat.name.toLowerCase()}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Résumé des dépenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Total dépenses */}
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Total dépenses</h3>
                    <p className="text-white/60 text-xs">Ce mois</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">€{totalExpenses.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}</div>
                <div className="flex items-center gap-2 text-red-400">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">+12% vs décembre</span>
                </div>
              </CardContent>
            </Card>

            {/* Budget restant */}
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Euro className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Budget restant</h3>
                    <p className="text-white/60 text-xs">Ce mois</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">€{remainingBudget.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}</div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xs">{Math.round((remainingBudget / monthlyBudget) * 100)}% restant</span>
                </div>
              </CardContent>
            </Card>

            {/* Moyenne quotidienne */}
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">Moyenne/jour</h3>
                    <p className="text-white/60 text-xs">Ce mois</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">€{(totalExpenses / 15).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}</div>
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-xs">Sur 15 jours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Catégories et Dépenses récentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Catégories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="text-white text-xl">Répartition par catégorie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{category.name}</span>
                        <span className="text-white font-semibold">€{category.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Dépenses récentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-[#18192a]/90 to-[#23243a]/80 border-none shadow-xl backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="text-white text-xl">Dépenses récentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentExpenses.map((expense, index) => (
                  <motion.div
                    key={expense.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <expense.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">{expense.name}</p>
                          <p className="text-white/60 text-xs">{expense.category} • {new Date(expense.date).toLocaleDateString('fr-FR')}</p>
                        </div>
                        <span className="text-white font-semibold">-€{expense.amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
