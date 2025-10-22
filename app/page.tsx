"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center px-6 py-20">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <p className="uppercase text-sm tracking-wide text-pink-600 font-semibold mb-2">
          Plateforme interne Orpi
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Centralisez vos synergies. <br />
          <span className="text-pink-600">Simplifiez vos échanges.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 mb-10">
          Une plateforme unique pour collaborer entre services, suivre vos recommandations et fluidifier la communication interne.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/new"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Nouvelle recommandation
          </Link>
          <Link
            href="/inbox"
            className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-xl text-lg font-semibold transition-all"
          >
            Voir mes synergies
          </Link>
        </div>
      </motion.div>

      {/* VISUEL / DASHBOARD MOCK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl"
      >
        <div className="rounded-2xl bg-white shadow-sm border p-6 flex flex-col justify-between hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">
            Activité récente
          </h3>
          <p className="text-neutral-500 text-sm">12 recommandations traitées cette semaine.</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 text-white p-6 flex flex-col justify-between hover:scale-[1.02] transition">
          <h3 className="text-lg font-semibold mb-2">Taux de transformation</h3>
          <p className="text-3xl font-bold">68%</p>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border p-6 flex flex-col justify-between hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">
            Top collaborateurs
          </h3>
          <ul className="text-neutral-600 text-sm space-y-1">
            <li>• Laurie Blondeau</li>
            <li>• Olivier Schiapparelli</li>
            <li>• Damien Montastier</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border p-6 flex flex-col justify-between hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">
            Recommandations en attente
          </h3>
          <p className="text-neutral-500 text-sm">5 synergies en cours de prise en charge.</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white p-6 flex flex-col justify-between hover:scale-[1.02] transition">
          <h3 className="text-lg font-semibold mb-2">CA généré</h3>
          <p className="text-3xl font-bold">42 500 €</p>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border p-6 flex flex-col justify-between hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">
            Temps moyen de réponse
          </h3>
          <p className="text-neutral-500 text-sm">2h 34min</p>
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-20 text-neutral-400 text-sm text-center"
      >
        © 2025 — <span className="text-neutral-700 font-semibold">Synergies V2</span>.  
        Design by <span className="text-pink-600">Samuel KITA</span>.
      </motion.footer>
    </main>
  );
}
