import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-14 text-tertiary/70 md:px-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-tertiary/15 pt-10 md:grid-cols-3 md:gap-16">
        <div>
          <Link href="/" className="font-serif text-2xl text-tertiary">
            Orlin Cookies
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed">
            Kue kering premium buatan rumahan untuk menghangatkan momen berkumpul di hari yang istimewa.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Navigasi</h2>
          <nav className="flex flex-col items-start gap-3" aria-label="Navigasi footer">
            <Link href="/katalog" className="transition-colors hover:text-tertiary">Katalog Produk</Link>
            <Link href="/cek-pesanan" className="transition-colors hover:text-tertiary">Cek Status PO</Link>
            <Link href="/faq" className="transition-colors hover:text-tertiary">FAQ</Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary">Hubungi kami</h2>
          <div className="flex flex-col items-start gap-3">
            <a href="https://wa.me/6281234567890" className="transition-colors hover:text-tertiary">WhatsApp</a>
            <a href="https://instagram.com/orlincookies" className="transition-colors hover:text-tertiary">IG @orlincookies</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-tertiary/15 pt-6 text-sm">© 2016 Orlin Cookies. Dibuat dengan sepenuh hati.</p>
    </footer>
  );
}
