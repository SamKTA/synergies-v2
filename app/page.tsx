"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* Dégradé abstrait d’arrière-plan */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-white to-rose-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-orange-200/60 blur-3xl"
      />

      {/* HERO */}
      <section className="text-center pt-32 pb-28 px-6 md:pt-44 md:pb-40 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="uppercase tracking-[0.2em] text-orange-600 font-medium mb-4"
        >
          Plateforme interne Orpi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900"
        >
          Centralisez vos{" "}
          <span className="bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent">
            synergies.
          </span>
          <br />
          Simplifiez vos échanges.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed"
        >
          Une plateforme unique pour fluidifier la communication entre services,
          suivre vos recommandations et booster la performance collective grâce à l’IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <Link
            href="/reco/new"
            className="rounded-xl bg-orange-600 px-8 py-4 text-white text-lg font-semibold shadow-lg shadow-orange-600/20 transition hover:scale-[1.03] hover:bg-orange-500"
          >
            Nouvelle recommandation
          </Link>
          <Link
            href="/inbox"
            className="rounded-xl border-2 border-orange-600 text-orange-600 px-8 py-4 text-lg font-semibold hover:bg-orange-50 transition"
          >
            Voir mes synergies
          </Link>
        </motion.div>
      </section>

      {/* STAT CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-32 px-6">
        <Card
          title="Activité récente"
          text="12 recommandations traitées cette semaine."
          gradient="from-orange-500 to-pink-400"
        />
        <Card
          title="Taux de transformation"
          text="68% de synergies converties en opportunités concrètes."
          gradient="from-violet-500 to-indigo-400"
        />
        <Card
          title="Top collaborateurs"
          text="Laurie Blondeau, Olivier Schiapparelli, Damien Montastier"
          gradient="from-pink-500 to-rose-400"
        />
      </section>
    </main>
  );
}

function Card({
  title,
  text,
  gradient,
}: {
  title: string;
  text: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl bg-gradient-to-br ${gradient} text-white p-8 shadow-xl hover:scale-[1.02] transition-transform`}
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="opacity-90 text-base leading-relaxed">{text}</p>
    </motion.div>
  );
}
