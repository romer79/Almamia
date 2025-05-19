import Image from 'next/image';
import Link from 'next/link';

export function Logo({ size = "text-2xl" }: { size?: string; }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold ${size}`}>
      <Image
        src="https://placehold.co/32x32.png" // Temporal placeholder
        alt="Alma Mia Logo"
        width={32}
        height={32}
        className="rounded-full"
        data-ai-hint="logo spiritual"
      />
      <span className="text-foreground">Alma Mia</span>
    </Link>
  );
}
