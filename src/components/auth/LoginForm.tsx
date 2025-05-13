// src/components/auth/LoginForm.tsx
"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUserAction } from "@/app/actions/auth";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Iniciar Sesión
    </Button>
  );
}

export function LoginForm() {
  const { login } = useAuth();
  const { toast } = useToast();
  const [state, formAction] = useActionState(loginUserAction, null);

  useEffect(() => {
    if (state?.success && state.user) {
      toast({ title: "Inicio de sesión exitoso", description: `Bienvenido, ${state.user.name}!` });
      login(state.user as any); // Type assertion for simulated user
    } else if (state?.error) {
      toast({ title: "Error de inicio de sesión", description: state.error, variant: "destructive" });
    }
  }, [state, login, toast]);

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-primary">Iniciar Sesión</CardTitle>
        <CardDescription>Ingresa tus credenciales para acceder a Alma Mia</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
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
              <Input id="password" name="password" type="password" placeholder="••••••••" required className="pl-10" />
            </div>
            {state?.fieldErrors?.password && <p className="text-sm text-destructive">{state.fieldErrors.password[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
          {state?.error && !state?.fieldErrors && <p className="text-sm text-destructive text-center">{state.error}</p>}
          <div className="text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="font-medium text-primary hover:underline">
              Regístrate aquí
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
