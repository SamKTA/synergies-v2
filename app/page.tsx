"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl border p-6 shadow-soft"
      >
        <h1 className="mb-2 text-2xl font-semibold">Bienvenue 👋</h1>
        <p className="mb-4 text-slate-600">
          Version V2 — design moderne, animations, et mobile-first.
        </p>
        <div className="flex gap-3">
          <Link href="/inbox" className="rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
            Mes reçues
          </Link>
          <Link href="/reco/new" className="rounded-xl border px-4 py-2 hover:shadow-soft">
            Nouvelle reco
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="rounded-2xl border p-6"
      >
        <h2 className="mb-2 text-xl font-semibold">À venir</h2>
        <ul className="list-inside list-disc text-slate-600">
          <li>Dashboard KPI (Recharts)</li>
          <li>Transitions fluides (Framer Motion)</li>
          <li>Composants shadcn/ui</li>
        </ul>
      </motion.div>
    </div>
  );
}
