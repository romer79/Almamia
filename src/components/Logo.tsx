import Image from 'next/image';
import Link from 'next/link';

export function Logo({ size = "text-2xl" }: { size?: string; }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold ${size}`}>
      <Image
        src="https://i.imgur.com/wouMpaV.jpeg" // Updated image URL
        alt="Alma mía Logo"
        width={32}
        height={32}
        className="rounded-full"
        data-ai-hint="logo abstract floral" // Updated AI hint
      />
      <span className="text-foreground">Alma mía</span>
    </Link>
  );
}
