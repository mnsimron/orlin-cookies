import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

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
    image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-primary px-6 py-20 text-tertiary md:px-12 md:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Favorit keluarga</p>
            <h2 id="products-heading" className="font-serif text-3xl leading-tight md:text-4xl">
              Yang paling dinantikan setiap Lebaran.
            </h2>
          </div>
          <Link href="/katalog" className="inline-flex items-center gap-2 font-bold text-secondary transition-colors hover:text-tertiary">
            Lihat Semua Menu <FiArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="group grid overflow-hidden border border-tertiary/15 bg-tertiary/5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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
      </div>
    </section>
  );
}
