// src/components/layout/Footer.tsx
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {currentYear} Alma Mia Portal. Todos los derechos reservados.</p>
        <p className="mt-1">Hecho con <span className="text-primary">&hearts;</span> para tu crecimiento.</p>
      </div>
    </footer>
  );
}
