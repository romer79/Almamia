// src/components/contact/ContactForm.tsx
"use client";

import { useFormStatus, useFormState } from "react-dom"; // useFormState from react-dom
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactFormAction, type ContactFormState } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enviar Mensaje"}
    </Button>
  );
}

const initialState: ContactFormState = null;

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactFormAction, initialState);

  useEffect(() => {
    if (state?.success && state.message) {
      toast({ title: "Mensaje Enviado", description: state.message });
      // Aquí podrías resetear el formulario si tuvieras acceso a los inputs
      // Por ahora, con Server Actions y useFormState, el reseteo manual es más complejo.
      // Se podría limpiar el estado si el formulario se desmonta y remonta o con una key.
    } else if (state?.error && !state.fieldErrors) { // Error general del formulario
      toast({ title: "Error al Enviar", description: state.error, variant: "destructive" });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-primary">Formulario de Contacto</CardTitle>
        <CardDescription>Déjanos tus datos y te contactaremos a la brevedad.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nombre y Apellido</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="fullName" name="fullName" placeholder="Ej: María González" required className="pl-10" />
            </div>
            {state?.fieldErrors?.fullName && (
              <p className="text-sm text-destructive pt-1">{state.fieldErrors.fullName[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono de Contacto</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="phone" name="phone" type="tel" placeholder="Ej: 11 2345-6789" required className="pl-10" />
            </div>
            {state?.fieldErrors?.phone && (
              <p className="text-sm text-destructive pt-1">{state.fieldErrors.phone[0]}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
          {state?.error && !state.fieldErrors && (
            <p className="text-sm text-destructive text-center">{state.error}</p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
