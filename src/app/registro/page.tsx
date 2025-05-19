// src/app/registro/page.tsx
"use client";

// import { RegistrationForm } from '@/components/auth/RegistrationForm'; // No longer needed
import { Logo } from '@/components/Logo';
// import { useAuth } from '@/hooks/useAuth'; // No longer needed
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function RegisterPage() {
  // const { user, loading } = useAuth(); // No longer needed
  const router = useRouter();

  useEffect(() => {
    // if (!loading && user) { // No longer check for user
    //   router.replace('/inicio');
    // }
    router.replace('/inicio'); // Always redirect to /inicio
  }, [router]);

  // if (loading || (!loading && user)) { // No longer check for user or loading state from auth
  //    return (
  //     <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
  //       <Loader2 className="h-12 w-12 animate-spin text-primary" />
  //       <p className="mt-4 text-lg text-foreground">Cargando...</p>
  //     </div>
  //   );
  // }
  
  // Show a loader while redirecting
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
      <div className="mb-8">
        <Logo size="text-4xl" />
      </div>
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 text-lg text-foreground">Redirigiendo...</p>
      {/* <RegistrationForm /> // RegistrationForm removed */}
    </div>
  );
}
