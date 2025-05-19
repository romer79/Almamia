'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  fullName: z.string().min(1, "El nombre y apellido son requeridos."),
  phone: z.string().min(1, "El teléfono es requerido."),
  // Podrías añadir una validación más específica para el teléfono si es necesario, e.g.:
  // phone: z.string().min(7, "El teléfono debe tener al menos 7 dígitos.").regex(/^[0-9+\-\s()]*$/, "El formato del teléfono no es válido."),
});

export type ContactFormState = {
  fieldErrors?: {
    fullName?: string[];
    phone?: string[];
  };
  error?: string | null;
  success?: boolean;
  message?: string | null;
} | null;


export async function submitContactFormAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      error: "Por favor corrige los errores en el formulario.",
      success: false,
    };
  }

  const { fullName, phone } = validatedFields.data;

  // Aquí es donde normalmente enviarías los datos, por ejemplo, a una API,
  // base de datos, o enviarías un correo electrónico.
  console.log("Nueva Solicitud de Contacto Recibida:");
  console.log("Nombre Completo:", fullName);
  console.log("Teléfono:", phone);

  // Simula un pequeño retraso como si se estuviera procesando una llamada a API.
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulación de envío exitoso
  return {
    success: true,
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    error: null,
    fieldErrors: {}, // Limpiar errores de campos si todo fue exitoso
  };

  // Ejemplo de cómo podrías simular un error del servidor:
  // return {
  //   success: false,
  //   error: "Ocurrió un error inesperado al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
  //   message: null,
  // };
}
