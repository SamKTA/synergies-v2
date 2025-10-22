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
      <body className="min-h-screen bg-[#FCF9F6] text-gray-900">
        {/* ===== NAVBAR ===== */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-orange-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo / Titre */}
            <Link href="/" className="text-xl font-bold text-orange-600 hover:text-orange-500">
              ⚡ Synergies
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
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

            {/* Bouton de connexion */}
            <Link
              href="/login"
              className="rounded-lg border border-orange-600 text-orange-600 px-3 py-1.5 text-sm font-medium hover:bg-orange-50 transition"
            >
              Se connecter
            </Link>
          </div>
        </header>

        {/* ===== CONTENU ===== */}
        <main className="pt-28 pb-16">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="mt-16 border-t border-orange-100 bg-orange-50/50 text-center py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Synergies V2 — Design SaaS by Samuel KITA
        </footer>
      </body>
    </html>
  );
}
