"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400 mb-6"
      >
        Synergies V2
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-10"
      >
        L’app interne alimentée par l’IA pour booster vos synergies d’équipe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link
          href="/inbox"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105"
        >
          Mes recommandations reçues
        </Link>
        <Link
          href="/sent"
          className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105"
        >
          Mes recommandations envoyées
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center text-gray-500 text-sm"
      >
        © 2025 — <span className="text-white font-semibold">Synergies</span> V2
      </motion.div>
    </main>
  );
}
