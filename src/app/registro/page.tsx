// src/app/registro/page.tsx
"use client";

import { RegistrationForm } from '@/components/auth/RegistrationForm';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/inicio');
    }
  }, [user, loading, router]);

  if (loading || (!loading && user)) {
     return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg text-foreground">Cargando...</p>
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
      <div className="mb-8">
        <Logo size="text-4xl" iconSize="h-12 w-12" />
      </div>
      <RegistrationForm />
    </div>
  );
}
