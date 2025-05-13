// src/app/actions/auth.ts
"use server";

import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email("Correo electrónico inválido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

const RegisterSchema = z.object({
  name: z.string().min(1, "El nombre es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      error: "Datos inválidos.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Simulate backend call & validation
  await new Promise(resolve => setTimeout(resolve, 500));

  if (email === "test@almamia.com" && password === "password123") {
    return { success: true, user: { id: "1", name: "Usuario Alma Mia", email } };
  } else {
    return { error: "Correo electrónico o contraseña incorrectos." };
  }
}

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      error: "Datos inválidos.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { name, email, password } = validatedFields.data;

  // Simulate backend call & user creation
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simulate successful registration
  return { success: true, user: { id: Date.now().toString(), name, email } };
}
