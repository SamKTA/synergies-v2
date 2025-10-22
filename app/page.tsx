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
            className="mt
