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
      <body className="min-h-dvh bg-white text-slate-900">
        {/* Topbar */}
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold text-slate-900">
              🎯 Synergies
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/inbox" className="text-sm text-slate-600 hover:text-slate-900">Mes reçues</Link>
              <Link href="/sent" className="text-sm text-slate-600 hover:text-slate-900">Mes envoyées</Link>
              <Link href="/reco/new" className="text-sm text-slate-600 hover:text-slate-900">Nouvelle reco</Link>
              <Link href="/admin/commissions" className="text-sm text-slate-600 hover:text-slate-900">Commissions</Link>
            </nav>
            <Link href="/login" className="rounded-xl border px-3 py-1.5 text-sm hover:shadow-soft">Se connecter</Link>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto w-full max-w-6xl p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Synergies — V2
          </div>
        </footer>
      </body>
    </html>
  );
}
