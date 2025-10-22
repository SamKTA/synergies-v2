"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Users, ClipboardList, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* === HERO SECTION === */}
      <section className="max-w-3xl pt-32 pb-20">
        <p className="text-sm font-medium text-orange-600 uppercase tracking-wide">
          Plateforme interne Orpi
        </p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
          Centralisez vos synergies. <br />
          <span className="text-orange-600">Simplifiez vos échanges.</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Synergies est votre hub collaboratif intelligent — centralisez vos recommandations,
          suivez vos actions entre services et boostez la performance collective grâce à l’IA.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/reco/new"
            className="rounded-lg bg-orange-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-orange-700 transition"
          >
            Nouvelle recommandation
          </Link>
          <Link
            href="/inbox"
            className="rounded-lg border border-orange-600 text-orange-600 px-6 py-3 text-sm font-semibold hover:bg-orange-50 transition"
          >
            Voir mes synergies
          </Link>
        </div>
      </section>

      {/* === APP PREVIEW SECTION === */}
      <section className="max-w-5xl w-full grid md:grid-cols-3 gap-6 text-left mt-10">
        {/* Carte 1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-orange-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="text-orange-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">12 recommandations traitées cette semaine</p>
          <p className="text-orange-600 text-sm font-medium">+3 vs semaine dernière</p>
        </motion.div>

        {/* Carte 2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-orange-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-orange-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">Taux de transformation</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            68% de synergies converties en opportunités concrètes
          </p>
          <div className="mt-3 w-full bg-orange-100 h-2 rounded-full">
            <div className="bg-orange-600 h-2 rounded-full w-2/3"></div>
          </div>
        </motion.div>

        {/* Carte 3 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-orange-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-orange-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">Top collaborateurs</h3>
          </div>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Laurie Blondeau</li>
            <li>• Olivier Schiapparelli</li>
            <li>• Damien Montastier</li>
          </ul>
        </motion.div>
      </section>

      {/* === FOOTER MINI STATS === */}
      <section className="mt-20 text-sm text-gray-500">
        <p>© 2025 Synergies — V2 — Design SaaS interne Orpi</p>
      </section>
    </div>
  );
}
