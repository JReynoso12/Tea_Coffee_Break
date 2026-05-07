import Image from "next/image";

type Props = {
  className?: string;
  /** Use on LCP / above-the-fold (hero). */
  priority?: boolean;
  /** Override when the logo is decorative (e.g. next to the same text). */
  alt?: string;
};

export default function BrandLogo({
  className = "",
  priority = false,
  alt = "Tea Coffee Break",
}: Props) {
  return (
    <Image
      src="/tcb-logo.png"
      alt={alt}
      width={499}
      height={499}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={`object-contain ${className}`}
      sizes="(max-width: 768px) 40px, 88px"
    />
  );
}
