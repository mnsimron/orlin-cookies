"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const products = [
  {
    name: "Signature Nastar",
    description: "Kue nastar lembut dengan isian nanas buatan sendiri yang manis dan harum.",
    price: "Rp 125.000",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Kastengel",
    description: "Kastengel renyah dengan keju tua pilihan dan rasa gurih yang berkelas.",
    price: "Rp 135.000",
    image: "https://images.unsplash.com/photo-1605493729906-8c445a6c11ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Putri Salju Premium",
    description: "Kue lembut bertabur gula halus dengan rasa manis yang ringan dan mewah.",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Choco Cashew",
    description: "Perpaduan cokelat pekat dan kacang mede panggang dalam setiap gigitan.",
    price: "Rp 130.000",
    image: "https://images.unsplash.com/photo-1618923850106-920f69f8c6eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Strawberry Thumbprint",
    description: "Kue mentega renyah dengan sentuhan selai stroberi yang segar.",
    price: "Rp 115.000",
    image: "https://images.unsplash.com/photo-1525695286591-9957fc995779?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sagu Keju Lumer",
    description: "Sagu keju yang lumer di mulut dengan aroma keju yang gurih dan harum.",
    price: "Rp 125.000",
    image: "https://images.unsplash.com/photo-1536686737227-d04b6b6cc388?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % products.length);
  };

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + products.length) % products.length);
  };

  const visibleProducts = [products[currentIndex], products[(currentIndex + 1) % products.length]];

  return (
    <section className="bg-primary px-6 py-20 text-tertiary md:px-12 md:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="products-heading" className="font-serif text-3xl leading-tight text-tertiary md:text-4xl">
              Produk Kami
            </h2>
          </div>
          <Link href="/katalog" className="inline-flex items-center gap-2 font-bold text-secondary transition-colors hover:text-tertiary">
            Lihat Semua Menu <FiArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2" aria-live="polite">
          {visibleProducts.map((product, productIndex) => (
            <article
              key={`${product.name}-${currentIndex}`}
              className={`${productIndex === 1 ? "hidden md:grid" : "grid"} h-[500px] animate-[featured-product-enter_450ms_ease-out_both] group overflow-hidden border border-tertiary/15 bg-tertiary/5 sm:h-[300px] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:h-[320px]`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-tertiary/10 sm:aspect-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <h3 className="mb-3 font-serif text-2xl text-secondary">{product.name}</h3>
                <p className="mb-6 leading-relaxed text-tertiary/70">{product.description}</p>
                <p className="font-bold tracking-wide text-tertiary">{product.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Produk sebelumnya"
            className="rounded-full border border-secondary/60 p-3 text-secondary transition-colors hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
          >
            <FiChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Produk berikutnya"
            className="rounded-full border border-secondary/60 p-3 text-secondary transition-colors hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
          >
            <FiChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
