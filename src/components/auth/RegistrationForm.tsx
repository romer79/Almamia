// src/components/auth/RegistrationForm.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { registerUserAction } from "@/app/actions/auth";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Lock, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Crear Cuenta
    </Button>
  );
}

export function RegistrationForm() {
  const { register } = useAuth();
  const { toast } = useToast();
  const [state, formAction] = useFormState(registerUserAction, null);

  useEffect(() => {
    if (state?.success && state.user) {
      toast({ title: "Registro exitoso", description: "Tu cuenta ha sido creada. ¡Bienvenido!" });
      register(state.user as any); // Type assertion for simulated user
    } else if (state?.error) {
      toast({ title: "Error de registro", description: state.error, variant: "destructive" });
    }
  }, [state, register, toast]);

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-primary">Crear Cuenta</CardTitle>
        <CardDescription>Únete a Alma Mia para comenzar tu viaje de transformación</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="name" name="name" placeholder="Tu nombre completo" required className="pl-10" />
            </div>
             {state?.fieldErrors?.name && <p className="text-sm text-destructive">{state.fieldErrors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="pl-10" />
            </div>
            {state?.fieldErrors?.email && <p className="text-sm text-destructive">{state.fieldErrors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="password" name="password" type="password" placeholder="•••••••• (mínimo 6 caracteres)" required className="pl-10" />
            </div>
            {state?.fieldErrors?.password && <p className="text-sm text-destructive">{state.fieldErrors.password[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
           {state?.error && !state?.fieldErrors && <p className="text-sm text-destructive text-center">{state.error}</p>}
          <div className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/" className="font-medium text-primary hover:underline">
              Inicia sesión aquí
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
