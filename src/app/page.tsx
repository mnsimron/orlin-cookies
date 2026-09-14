import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-primary/80 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1584847801423-852691e41bc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Orlin Cookies Premium Assortment"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-20 mx-auto mt-12 max-w-3xl text-center text-tertiary">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-secondary/90 px-4 py-2 text-sm font-bold uppercase tracking-wide text-tertiary backdrop-blur-sm">
            <FiClock size={16} aria-hidden="true" />
            <span>Prapesan Idul Fitri 2027 Kini Dibuka</span>
          </div>

          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-7xl">
            Tradisi Rasa dalam <br /> Setiap Gigitan
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-tertiary/90 md:text-xl">
            Kue kering artisan yang dipanggang dengan mentega premium dan resep rahasia keluarga. Kuota harian sangat terbatas untuk menjaga kualitas dan eksklusivitas momen kebersamaan Anda.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/katalog"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-secondary px-8 py-4 font-bold text-tertiary transition-colors hover:bg-secondary/80 sm:w-auto"
            >
              Pesan Sekarang <FiArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link
              href="#cara-pesan"
              className="flex w-full items-center justify-center rounded-sm border border-tertiary bg-transparent px-8 py-4 font-bold text-tertiary transition-colors hover:bg-tertiary hover:text-primary sm:w-auto"
            >
              Lihat Jadwal Pengiriman
            </Link>
          </div>

          <p className="mt-8 text-sm text-tertiary/70">*Slot pengiriman H-7 Idul Fitri tersisa 15%</p>
        </div>
      </section>
      <Features />
      <FeaturedProducts />
      <Footer />
    </>
  );
}