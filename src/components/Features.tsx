import { FiAward, FiHeart, FiShield } from "react-icons/fi";

const features = [
  {
    title: "Bahan Premium",
    description: "Mentega berkualitas dan bahan pilihan untuk rasa yang kaya di setiap gigitan.",
    icon: FiAward,
  },
  {
    title: "100% Homemade",
    description: "Dibuat dengan tangan dalam jumlah terbatas, mengikuti resep rumahan keluarga Orlin.",
    icon: FiHeart,
  },
  {
    title: "Mutu Terjamin",
    description: "Setiap toples melewati pemeriksaan teliti sebelum sampai di meja Anda.",
    icon: FiShield,
  },
];

export default function Features() {
  return (
    <section className="bg-tertiary px-6 py-20 text-primary md:px-12 md:py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Alasan memilih Orlin</p>
          <h2 id="features-heading" className="font-serif text-3xl leading-tight md:text-4xl">
            Dibuat perlahan, dinikmati sepenuh hati.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-secondary/30 text-secondary transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-tertiary">
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-2xl">{title}</h3>
              <p className="max-w-xs leading-relaxed text-primary/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
