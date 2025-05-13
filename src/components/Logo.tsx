import { Sprout } from 'lucide-react';
import Link from 'next/link';

export function Logo({ size = "text-2xl", iconSize = "h-8 w-8" }: { size?: string; iconSize?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold ${size}`}>
      <Sprout className={`${iconSize} text-secondary`} />
      <span className="text-foreground">Alma Mia</span>
    </Link>
  );
}
