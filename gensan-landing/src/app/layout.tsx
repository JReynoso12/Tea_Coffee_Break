import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Tea Coffee Break — Gensan's Hidden Diamond",
  description:
    "Coffee, tea, and late-night vibes in General Santos — outdoor oasis, craft pours, and eco-conscious packaging.",
  icons: {
    icon: [{ url: "/tcb-logo.png", type: "image/png" }],
    apple: "/tcb-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--espresso)] text-[var(--cream)]">
        {children}
      </body>
    </html>
  );
}
