// src/app/(main)/layout.tsx
"use client";

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/'); // Redirect to login page
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg text-foreground">Verificando acceso...</p>
      </div>
    );
  }

  if (!user) {
    // This state should ideally not be reached due to useEffect redirect,
    // but as a fallback, show loading or null to prevent flashing content.
    return null; 
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">{children}</main>
      <Footer />
    </div>
  );
}
