"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ClipboardList, TrendingUp, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[#FCF9F6]">
      {/* HERO */}
      <section className="relative">
        {/* halo léger */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[420px] w-[420px] rounded-full bg-orange-200/50 blur-[110px]"
        />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-4xl text-center mx-auto">
            <p className="uppercase tracking-[0.2em] text-orange-600 font-semibold">
              Plateforme interne Orpi
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Centralisez vos <span className="text-orange-600">synergies</span>. <br />
              Simplifiez vos échanges.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Le hub collaboratif qui aligne les équipes : recommandations, suivi des actions,
              et visibilité temps réel sur la performance — propulsé par l’IA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/reco/new"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-7 py-4 text-white text-base font-semibold shadow-lg shadow-orange-600/20 hover:bg-orange-500 hover:scale-[1.02] transition"
              >
                Nouvelle recommandation
              </Link>
              <Link
                href="/inbox"
                className="inline-flex items-center justify-center rounded-xl border-2 border-orange-600 text-orange-600 px-7 py-4 text-base font-semibold hover:bg-orange-50 transition"
              >
                Voir mes synergies
              </Link>
            </motion.div>

            {/* points clés */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-orange-600" size={18} /> Rappels automatiques
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-orange-600" size={18} /> Historique d’activités
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-orange-600" size={18} /> KPI & suivi des commissions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* APERÇU PRODUIT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Colonne KPI (3 cartes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Activité */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl bg-white p-6 border border-orange-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <ClipboardList className="text-orange-600" size={20} />
                <h3 className="font-semibold text-gray-900">Activité récente</h3>
              </div>
              <p className="text-gray-600 text-sm">12 recommandations traitées cette semaine</p>
              <p className="text-orange-600 text-sm font-medium mt-1">+3 vs semaine dernière</p>

              {/* mini sparkline (SVG simple) */}
              <svg viewBox="0 0 100 28" className="mt-4 h-14 w-full">
                <polyline
                  fill="none"
                  stroke="rgb(234,88,12)"
                  strokeWidth="2.5"
                  points="0,22 15,18 30,20 45,12 60,16 75,10 90,6 100,8"
                />
              </svg>
            </motion.div>

            {/* Taux de transformation */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="rounded-2xl bg-white p-6 border border-orange-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-orange-600" size={20} />
                <h3 className="font-semibold text-gray-900">Taux de transformation</h3>
              </div>
              <div className="mt-2 w-full bg-orange-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-600 h-2 w-2/3 rounded-full" />
              </div>
              <p className="text-gray-600 text-sm mt-2">68% de synergies concrétisées</p>
            </motion.div>

            {/* Top collaborateurs (carte large) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="sm:col-span-2 rounded-2xl bg-white p-6 border border-orange-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-orange-600" size={20} />
                <h3 className="font-semibold text-gray-900">Top collaborateurs</h3>
              </div>
              <ul className="text-gray-700 text-sm leading-7">
                <li>• Laurie Blondeau</li>
                <li>• Olivier Schiapparelli</li>
                <li>• Damien Montastier</li>
              </ul>
            </motion.div>
          </div>

          {/* Colonne Table mock */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-white border border-orange-100 shadow-xl overflow-hidden flex flex-col"
          >
            <div className="bg-orange-600 text-white px-6 py-4 font-semibold">
              Aperçu — Tableau Synergies
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-orange-50">
                  <tr>
                    <Th>Client</Th>
                    <Th>Projet</Th>
                    <Th>Prise en charge</Th>
                    <Th>Statut</Th>
                  </tr>
                </thead>
                <tbody>
                  <Tr>
                    <Td>Mme Durand</Td>
                    <Td>Vente appartement</Td>
                    <Td>Laurie Blondeau</Td>
                    <Td>
                      <Badge color="orange">En cours</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>M. Lefèvre</Td>
                    <Td>Recherche locataire</Td>
                    <Td>Olivier Schiapparelli</Td>
                    <Td>
                      <Badge color="green">Finalisé</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>SARL Investimmo</Td>
                    <Td>Mandat de gestion</Td>
                    <Td>Damien Montastier</Td>
                    <Td>
                      <Badge color="gray">À traiter</Badge>
                    </Td>
                  </Tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-orange-100 text-xs text-gray-500">
              Données de démonstration — aperçu visuel du module Synergies.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- petits sous-composants ---------- */
function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-6 py-3 font-medium text-gray-900">{children}</th>;
}
function Tr({ children }: { children: React.ReactNode }) {
  return <tr className="border-t border-orange-100">{children}</tr>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-4 align-middle">{children}</td>;
}
function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "orange" | "green" | "gray";
}) {
  const map = {
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    green: "bg-green-100 text-green-700 border-green-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border ${map[color]}`}
    >
      {children}
    </span>
  );
}
