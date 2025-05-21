// src/components/layout/Footer.tsx
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5493764603697";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const displayWhatsappNumber = "+54 9 376 460-3697";

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {currentYear} Alma mía Portal. Todos los derechos reservados.</p>
        <p className="mt-1">Hecho con <span className="text-primary">&hearts;</span> para tu crecimiento.</p>
        <p className="mt-2">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
            WhatsApp: {displayWhatsappNumber}
          </a>
        </p>
      </div>
    </footer>
  );
}
