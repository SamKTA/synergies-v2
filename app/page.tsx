"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative isolate flex flex-col items-center justify-center">
      {/* HERO */}
      <section className="text-center py-24 md:py-40 px-6 max-w-4xl">
        <p className="uppercase tracking-[0.2em] text-orange-600 font-medium mb-4">
          Plateforme interne Orpi
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Unifiez vos synergies.{" "}
          <span className="text-orange-600">Simplifiez vos échanges.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Synergies est votre hub collaboratif intelligent — centralisez vos recommandations,
          suivez vos actions entre services et boostez la performance collective grâce à l’IA.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/reco/new" className="btn-primary">
            Nouvelle recommandation
          </Link>
          <Link href="/inbox" className="btn-secondary">
            Voir mes synergies
          </Link>
        </div>
      </section>

      {/* GRID d’illustration */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mb-24 px-6">
        <Card
          title="Activité récente"
          text="12 recommandations traitées cette semaine."
          color="from-orange-500 to-pink-400"
        />
        <Card
          title="Taux de transformation"
          text="68% de synergies converties en opportunités concrètes."
          color="from-violet-500 to-indigo-400"
        />
        <Card
          title="Top collaborateurs"
          text="Laurie Blondeau, Olivier Schiapparelli, Damien Montastier"
          color="from-pink-500 to-rose-400"
        />
      </section>
    </main>
  );
}

function Card({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl bg-gradient-to-br ${color} text-white p-6 shadow-lg shadow-black/10 hover:scale-[1.02] transition-transform`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-90">{text}</p>
    </motion.div>
  );
}
