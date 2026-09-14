"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiLoader, FiShoppingCart, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingTest = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 1600);
  };

  return (
    <>
      {isLoading && (
        <div
          className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-tertiary/90 px-6 text-primary backdrop-blur-sm"
          aria-busy="true"
          aria-live="polite"
          aria-label="Memuat Orlin Cookies"
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-7 flex h-32 w-32 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-secondary/25" aria-hidden="true" />
              <span className="orlin-loading-ring-orbit absolute inset-1 rounded-full" aria-hidden="true" />
              <div className="orlin-loading-icon relative flex h-24 w-24 items-center justify-center rounded-full bg-primary p-4 shadow-lg shadow-primary/15">
                <Image
                  src="/icon-orlin.png"
                  alt=""
                  width={80}
                  height={80}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <p className="font-serif text-2xl">Orlin Cookies</p>
            <p className="mt-2 text-sm tracking-[0.18em] text-primary/60">MENYIAPKAN KEHANGATAN</p>
          </div>
        </div>
      )}

      <nav className="flex w-full items-center justify-between border-b border-primary/10 bg-tertiary px-6 py-4 text-primary md:px-12">
      <div className="text-2xl font-serif font-bold tracking-tight">
        Orlin Cookies
      </div>
      
      <div className="hidden md:flex gap-8 font-medium">
        <Link href="/" className="hover:text-secondary transition-colors">Beranda</Link>
        <Link href="/katalog" className="hover:text-secondary transition-colors">Katalog Kue</Link>
        <Link href="/cek-pesanan" className="hover:text-secondary transition-colors">Status PO</Link>
      </div>

      <div className="flex gap-4 items-center">
        {/* Tombol debug loading: comment bagian ini setelah proses debug selesai. */}
        <button
          type="button"
          onClick={handleLoadingTest}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-sm bg-secondary px-3 py-2 text-xs font-bold text-tertiary transition-colors hover:bg-secondary/80 disabled:cursor-wait disabled:opacity-80"
          aria-label={isLoading ? "Sedang memuat" : "Uji loading"}
        >
          <FiLoader size={14} className={isLoading ? "animate-spin" : ""} aria-hidden="true" />
          <span className="hidden sm:inline">{isLoading ? "Memuat..." : "Uji Loading"}</span>
        </button>
        <button 
          className="relative p-2 hover:bg-primary/5 rounded-full transition-colors"
          aria-label="Keranjang Belanja"
        >
          <FiShoppingCart size={24} className="text-primary" />
          <span className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </button>
        <button 
          className="md:hidden p-2 hover:bg-primary/5 rounded-full transition-colors"
          aria-label="Menu"
        >
          <FiMenu size={24} className="text-primary" />
        </button>
      </div>
      </nav>
    </>
  );
}