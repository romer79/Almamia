// src/components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, Mail } from 'lucide-react'; // Added Mail icon
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import React from 'react';

const navItems = [
  { href: '/inicio', label: 'Inicio', icon: Home },
  { href: '/contacto', label: 'Contacto', icon: Mail }, // Added Contacto link
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    <>
     {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
            pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground/80",
            isMobile && "text-lg w-full justify-start"
          )}
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </Link>
      ))}
    </>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo size="text-xl" />
        
        <nav className="hidden items-center gap-4 md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          {navItems.length > 0 && (
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-6 pt-12">
                  <nav className="flex flex-col gap-4">
                    <NavLinks isMobile={true} />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
