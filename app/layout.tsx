import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Synergies V2",
  description: "Plateforme interne Orpi — version design SaaS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        {/* Barre de navigation */}
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/70 backdrop-blur">
          <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-orange-600">
              ⚡ Synergies
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/inbox" className="hover:text-orange-600">
                Mes reçues
              </Link>
              <Link href="/sent" className="hover:text-orange-600">
                Mes envoyées
              </Link>
              <Link href="/reco/new" className="hover:text-orange-600">
                Nouvelle reco
              </Link>
              <Link href="/admin/commissions" className="hover:text-orange-600">
                Commissions
              </Link>
            </nav>
            <Link
              href="/login"
              className="rounded-lg border border-orange-200 px-3 py-1.5 text-sm hover:bg-orange-50"
            >
              Se connecter
            </Link>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="container mx-auto max-w-7xl px-6">{children}</main>

        {/* Pied de page */}
        <footer className="mt-20 border-t border-orange-100 text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Synergies — V2 — design SaaS
        </footer>
      </body>
    </html>
  );
}
