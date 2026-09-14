import Image from "next/image";

export default function Loading() {
  return (
    <section
      className="orlin-loading flex min-h-[calc(100vh-73px)] items-center justify-center bg-tertiary px-6 text-primary"
      aria-busy="true"
      aria-live="polite"
      aria-label="Memuat Orlin Cookies"
    >
      <div className="flex flex-col items-center text-center">
        <div className="orlin-loading-mark relative mb-7 flex h-28 w-28 items-center justify-center">
          <span className="orlin-loading-ring absolute inset-0 rounded-full border border-secondary/25" aria-hidden="true" />
          <span className="orlin-loading-ring-orbit absolute inset-1 rounded-full" aria-hidden="true" />
          <div className="orlin-loading-icon relative flex h-20 w-20 items-center justify-center rounded-full bg-primary p-4 shadow-lg shadow-primary/15">
            <Image
              src="/icon-orlin.png"
              alt=""
              width={64}
              height={64}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <p className="font-serif text-2xl">Orlin Cookies</p>
        <p className="mt-2 text-sm tracking-[0.18em] text-primary/60">MENYIAPKAN KEHANGATAN</p>
        <div className="mt-6 flex gap-1.5" aria-hidden="true">
          <span className="orlin-loading-dot h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="orlin-loading-dot h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="orlin-loading-dot h-1.5 w-1.5 rounded-full bg-secondary" />
        </div>
      </div>
    </section>
  );
}
