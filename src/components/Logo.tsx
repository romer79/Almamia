import Image from 'next/image';
import Link from 'next/link';

export function Logo({ size = "text-2xl" }: { size?: string; }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold ${size}`}>
      <Image
        src="https://placehold.co/40x40.png" // Puedes cambiar esta URL por la de tu imagen
        alt="Alma Mia Logo"
        width={32} // Ajusta el ancho según necesites
        height={32} // Ajusta el alto según necesites
        className="rounded-full" // Opcional: para que la imagen sea redonda
        data-ai-hint="logo abstract"
      />
      <span className="text-foreground">Alma Mia</span>
    </Link>
  );
}
