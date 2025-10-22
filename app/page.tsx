"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* halos décoratifs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-6rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* HERO centré sur la hauteur */}
      <section className="flex min-h-[65vh] items-center justify-center py-16">
        <div className="max-w-3xl text-center mx-auto">
          <p className="uppercase text-xs tracking-[0.2em] text-pink-400/90 mb-3">
            Plateforme interne Orpi
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Centralisez vos synergies.
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-violet-400 bg-clip-text text-transparent">
              Simplifiez vos échanges.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg opacity-80">
            Une plateforme unique pour collaborer entre services, suivre vos recommandations
            et fluidifier la communication interne.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/reco/new"
              className="rounded-xl bg-pink-600 px-6 py-3 text-white shadow-lg shadow-pink-600/20 transition hover:scale-[1.02] hover:bg-pink-500"
            >
              Nouvelle recommandation
            </Link>
            <Link
              href="/inbox"
              className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/5"
            >
              Voir mes synergies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* GRID de cartes preview — centrée */}
      <section className="mx-auto mb-16 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <h3>Activité récente</h3>
          <p className="opacity-75">12 recommandations traitées cette semaine.</p>
        </Card>

        <Card className="bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-pink-500/20">
          <h3>Taux de transformation</h3>
          <p className="text-3xl font-bold">68%</p>
        </Card>

        <Card>
          <h3>Top collaborateurs</h3>
          <ul className="opacity-80 text-sm space-y-1">
            <li>• Laurie Blondeau</li>
            <li>• Olivier Schiapparelli</li>
            <li>• Damien Montastier</li>
          </ul>
        </Card>

        <Card>
          <h3>Recommandations en attente</h3>
          <p className="opacity-75">5 synergies à prendre en charge.</p>
        </Card>

        <Card className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-indigo-500/20">
          <h3>CA généré</h3>
          <p className="text-3xl font-bold">42 500 €</p>
        </Card>

        <Card>
          <h3>Temps moyen de réponse</h3>
          <p className="opacity-75">2h 34min</p>
        </Card>
      </section>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur",
        "hover:shadow-lg hover:shadow-black/10 transition",
        className,
      ].join(" ")}
    >
      <div className="[&>h3]:m-0 [&>h3]:text-lg [&>h3]:font-semibold">{children}</div>
    </motion.div>
  );
}
