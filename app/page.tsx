"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, BarChart3, ClipboardList, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 pt-32 pb-20 bg-[#FCF9F6]">
      {/* ===== HERO ===== */}
      <section className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-wide text-orange-600 font-semibold">
          Plateforme interne Orpi
        </p>
        <h1 className="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">
          Centralisez vos synergies. <br />
          <span className="text-orange-600">Simplifiez vos échanges.</span>
        </h1>
        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Synergies est votre hub collaboratif intelligent — centralisez vos recommandations,
          suivez vos actions entre services et boostez la performance collective grâce à l’IA.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/reco/new"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
          >
            Nouvelle recommandation
          </Link>
          <Link
            href="/inbox"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
          >
            Voir mes synergies
          </Link>
        </div>
      </section>

      {/* ===== DASHBOARD PREVIEW ===== */}
      <section className="max-w-6xl w-full mt-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Metrics */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardList className="text-orange-600" size={22} />
              <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">12 recommandations traitées cette semaine</p>
            <p className="text-orange-600 text-sm font-medium">+3 vs semaine dernière</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="text-orange-600" size={22} />
              <h3 className="text-lg font-semibold text-gray-900">Taux de transformation</h3>
            </div>
            <div className="mt-2 w-full bg-orange-100 h-2 rounded-full overflow-hidden">
              <div className="bg-orange-600 h-2 w-2/3 rounded-full"></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">68% de synergies concrétisées</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-orange-600" size={22} />
              <h3 className="text-lg font-semibold text-gray-900">Top collaborateurs</h3>
            </div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Laurie Blondeau</li>
              <li>• Olivier Schiapparelli</li>
              <li>• Damien Montastier</li>
            </ul>
          </div>
        </div>

        {/* Table Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
        >
          <div className="bg-orange-600 text-white text-left px-6 py-3 font-semibold">
            Aperçu du tableau Synergies
          </div>
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-orange-50">
              <tr>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Projet</th>
                <th className="px-6 py-3 font-medium">Prise en charge</th>
                <th className="px-6 py-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-orange-100">
                <td className="px-6 py-3">Mme Durand</td>
                <td className="px-6 py-3">Vente appartement</td>
                <td className="px-6 py-3">Laurie Blondeau</td>
                <td className="px-6 py-3 text-orange-600 font-medium">En cours</td>
              </tr>
              <tr className="border-t border-orange-100">
                <td className="px-6 py-3">M. Lefèvre</td>
                <td className="px-6 py-3">Recherche locataire</td>
                <td className="px-6 py-3">Olivier Schiapparelli</td>
                <td className="px-6 py-3 text-green-600 font-medium">Finalisé</td>
              </tr>
              <tr className="border-t border-orange-100">
                <td className="px-6 py-3">SARL Investimmo</td>
                <td className="px-6 py-3">Mandat de gestion</td>
                <td className="px-6 py-3">Damien Montastier</td>
                <td className="px-6 py-3 text-gray-500 font-medium">À traiter</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © 2025 Synergies V2 — Design SaaS interne Orpi
      </footer>
    </main>
  );
}
