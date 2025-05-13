import { Sprout } from 'lucide-react';
import Link from 'next/link';

export function Logo({ size = "text-2xl", iconSize = "h-8 w-8" }: { size?: string; iconSize?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold text-primary ${size}`}>
      <Sprout className={iconSize} />
      <span>Alma Mia</span>
    </Link>
  );
}
