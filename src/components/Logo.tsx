import Image from 'next/image';
import Link from 'next/link';

export function Logo({ size = "text-2xl" }: { size?: string; }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold ${size}`}>
      <Image
        src="/logo.png" // Asumimos que tu imagen se llamará logo.png y estará en la carpeta public
        alt="Alma Mia Logo"
        width={32} // Ajusta el ancho según necesites para tu logo
        height={32} // Ajusta el alto según necesites para tu logo
        className="rounded-full" // Opcional: para que la imagen sea redonda
        data-ai-hint="logo spiritual" // Actualizado el hint
      />
      <span className="text-foreground">Alma Mia</span>
    </Link>
  );
}
