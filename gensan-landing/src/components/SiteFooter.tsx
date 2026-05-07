import BrandLogo from "./BrandLogo";

export default function SiteFooter() {
  return (
    <>
      <footer className="grid gap-12 border-t border-[rgba(226,149,66,0.15)] bg-[rgba(12,12,12,0.98)] px-8 py-16 md:grid-cols-[2fr_1fr_1fr] md:gap-16 md:px-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandLogo className="h-12 w-12 shrink-0" alt="" />
            <span className="font-[family-name:var(--font-playfair)] text-[1.4rem] font-bold text-[var(--gold)]">
              TCB <em className="font-normal italic text-[var(--cream)]">— Tea Coffee Break</em>
            </span>
          </div>
          <p className="max-w-[300px] text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
            GenSan&apos;s hidden gem — where great coffee, warm company, and a
            love for the environment come together. Open daily until 2AM, because
            great coffee has no curfew.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold)]">
            Navigate
          </h4>
          <nav className="flex flex-col gap-2 text-[0.85rem] text-[var(--text-muted)]">
            <a href="/#experience" className="transition-colors hover:text-[var(--cream)]">
              Experience
            </a>
            <a href="/#venue" className="transition-colors hover:text-[var(--cream)]">
              The Space
            </a>
            <a href="/#story" className="transition-colors hover:text-[var(--cream)]">
              Our Story
            </a>
            <a href="/menu" className="transition-colors hover:text-[var(--cream)]">
              Menu
            </a>
            <a href="/#vibe" className="transition-colors hover:text-[var(--cream)]">
              The Vibe
            </a>
            <a href="/#visit" className="transition-colors hover:text-[var(--cream)]">
              Visit Us
            </a>
            <a href="/#reviews" className="transition-colors hover:text-[var(--cream)]">
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h4 className="mb-5 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold)]">
            Connect
          </h4>
          <div className="flex flex-col gap-2 text-[0.85rem] text-[var(--text-muted)]">
            <a
              href="mailto:teacoffeebreak08@gmail.com"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Email Us
            </a>
            <a
              href="https://www.facebook.com/teacoffeebreakcafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Facebook
            </a>
            <span>@teacoffee_break</span>
            <p>Delivery via FoodPanda</p>
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(226,149,66,0.1)] bg-[rgba(12,12,12,0.98)] px-8 py-6 md:flex-row md:px-16">
        <p className="text-[0.72rem] tracking-[0.05em] text-[var(--text-muted)]">
          © {new Date().getFullYear()} Tea Coffee Break · General Santos City,
          Philippines
        </p>
        <div className="flex gap-6 text-[0.72rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
          <a
            href="https://www.facebook.com/teacoffeebreakcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--gold)]"
          >
            Facebook
          </a>
          <span className="opacity-70">Instagram</span>
          <span className="opacity-70">TikTok</span>
        </div>
      </div>
    </>
  );
}
