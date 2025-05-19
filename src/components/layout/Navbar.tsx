// src/components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu } from 'lucide-react'; // Removed UserCircle, LogOut
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
// import { // Dropdown components no longer needed for user menu
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Separator } from "@/components/ui/separator"; // No longer needed after removing user menu
// import { useAuth } from '@/hooks/useAuth'; // No longer needed
import { cn } from '@/lib/utils';
import React from 'react';

const navItems = [
  { href: '/inicio', label: 'Inicio', icon: Home },
];

export function Navbar() {
  // const { user, logout } = useAuth(); // user and logout no longer needed
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
          {/* User Dropdown Menu Removed */}
          {/* {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <UserCircle className="h-7 w-7 text-foreground/80" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-500 hover:!text-red-500 focus:!text-red-500 focus:!bg-red-500/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button asChild variant="default" size="sm">
               <Link href="/">Iniciar Sesión</Link>
             </Button>
          )} */}

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
                  {/* Logout button in mobile menu removed */}
                  {/* {user && (
                    <>
                      <Separator className="my-6" />
                      <Button onClick={() => {logout(); setMobileMenuOpen(false);}} variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-500/10 hover:text-red-500">
                        <LogOut className="mr-2 h-4 w-4" />
                        Cerrar Sesión
                      </Button>
                    </>
                  )} */}
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
