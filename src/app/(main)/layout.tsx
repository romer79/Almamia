// src/app/(main)/layout.tsx
"use client";

import type { ReactNode } from 'react';
// import { useEffect } from 'react'; // No longer needed
// import { useRouter } from 'next/navigation'; // No longer needed
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
// import { useAuth } from '@/hooks/useAuth'; // No longer needed
// import { Loader2 } from 'lucide-react'; // No longer needed

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  // const { user, loading } = useAuth(); // Removed auth check
  // const router = useRouter(); // Removed

  // useEffect(() => { // Removed auth check
  //   if (!loading && !user) {
  //     router.replace('/'); // Redirect to login page
  //   }
  // }, [user, loading, router]);

  // if (loading) { // Removed loading state
  //   return (
  //     <div className="flex min-h-screen flex-col items-center justify-center bg-background">
  //       <Loader2 className="h-12 w-12 animate-spin text-primary" />
  //       <p className="mt-4 text-lg text-foreground">Verificando acceso...</p>
  //     </div>
  //   );
  // }

  // if (!user) { // Removed auth check
  //   // This state should ideally not be reached due to useEffect redirect,
  //   // but as a fallback, show loading or null to prevent flashing content.
  //   return null; 
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">{children}</main>
      <Footer />
    </div>
  );
}
