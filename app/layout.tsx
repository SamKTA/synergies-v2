import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Synergies V2",
  description: "Plateforme interne — version design",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        {/* Topbar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <Link href="/" className="font-semibold">
              🎯 Synergies
            </Link>

            {/* nav responsive simple */}
            <nav className="flex gap-5 text-sm">
              <Link href="/inbox" className="opacity-80 hover:opacity-100">Mes reçues</Link>
              <Link href="/sent" className="opacity-80 hover:opacity-100">Mes envoyées</Link>
              <Link href="/reco/new" className="opacity-80 hover:opacity-100">Nouvelle reco</Link>
              <Link href="/admin/commissions" className="opacity-80 hover:opacity-100">Commissions</Link>
            </nav>

            <Link href="/login" className="rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5">
              Se connecter
            </Link>
          </div>
        </header>

        {/* Conteneur central commun */}
        <main className="mx-auto max-w-7xl px-6">
          {children}
        </main>

        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-70">
            © {new Date().getFullYear()} Synergies — V2
          </div>
        </footer>
      </body>
    </html>
  );
}
