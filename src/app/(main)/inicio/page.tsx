// src/app/(main)/inicio/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Zap, Heart, Brain, BookOpen, Users, Quote } from "lucide-react";
import Image from "next/image";

export default function InicioPage() {
  const courseBenefits = [
    { icon: Heart, text: "Sanación emocional profunda y liberación de patrones limitantes." },
    { icon: Brain, text: "Comprensión del origen emocional de síntomas físicos y enfermedades." },
    { icon: Zap, text: "Herramientas prácticas para aplicar en tu vida diaria y en otros." },
    { icon: Users, text: "Conexión con una comunidad de apoyo y crecimiento." },
  ];

  const courseModules = [
    { title: "Introducción a la Biodecodificación", description: "Fundamentos, historia y principios clave." },
    { title: "El Transgeneracional", description: "Cómo las historias familiares impactan tu presente." },
    { title: "Proyecto Sentido Gestacional", description: "La influencia de la concepción, embarazo y nacimiento." },
    { title: "Conflictos Biológicos y Emocionales", description: "Descodificando síntomas y enfermedades comunes." },
    { title: "Herramientas Terapéuticas", description: "Protocolos y técnicas para la sanación." },
    { title: "Práctica y Aplicación", description: "Estudios de caso y ejercicios prácticos." },
  ];

  const testimonials = [
    {
      name: "Ana Pérez",
      avatarUrl: "https://placehold.co/100x100.png",
      aiHint: "woman portrait",
      testimonial: "Este curso cambió mi vida. Pude entender y sanar heridas que no sabía que tenía. ¡Totalmente recomendado!",
    },
    {
      name: "Carlos López",
      avatarUrl: "https://placehold.co/100x100.png",
      aiHint: "man portrait",
      testimonial: "La Biodecodificación me abrió un nuevo mundo de autoconocimiento. Las herramientas son muy prácticas y el acompañamiento es excelente.",
    },
    {
      name: "Laura Gómez",
      avatarUrl: "https://placehold.co/100x100.png",
      aiHint: "person smiling",
      testimonial: "Alma Mia no es solo un curso, es una comunidad. Me sentí sostenida y comprendida en todo momento. ¡Gracias!",
    },
  ];

  return (
    <div className="space-y-16"> {/* Increased spacing between sections */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Bienvenido a Alma Mia
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          Descubre el poder transformador de la Biodecodificación y sana tu vida desde la raíz.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span>Nuestro Curso de Biodecodificación</span>
          </CardTitle>
          <CardDescription>
            Un viaje profundo hacia el autoconocimiento y la sanación integral.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-foreground/90 mb-4">
                La Biodecodificación es un enfoque terapéutico que busca el origen emocional y transgeneracional
                de las enfermedades y los patrones de comportamiento. Este curso te proporcionará una comprensión
                profunda de cómo tus emociones, creencias y la historia de tus ancestros influyen en tu bienestar.
              </p>
              <p className="text-foreground/90">
                Aprenderás a identificar y liberar los conflictos emocionales que se manifiestan en tu cuerpo y
                en tu vida, abriendo el camino hacia una salud plena y una mayor consciencia.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Concepto de Biodecodificación"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="wellness nature"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Beneficios del Curso</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {courseBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <benefit.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground/90">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">¿Qué Aprenderás?</CardTitle>
          <CardDescription>Contenido detallado de nuestros módulos.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {courseModules.map((module, index) => (
            <div key={index} className="p-4 border rounded-lg bg-secondary/50">
              <h3 className="font-semibold text-primary">{module.title}</h3>
              <p className="text-sm text-foreground/80">{module.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary mb-2">Lo que dicen nuestros alumnos</h2>
          <p className="text-lg text-foreground/80">
            Experiencias reales de transformación y crecimiento.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/30 transform -translate-x-2 -translate-y-2" />
                <p className="text-sm text-foreground/80 italic leading-relaxed pl-4">
                  {testimonial.testimonial}
                </p>
                <Quote className="absolute bottom-0 right-0 h-8 w-8 text-primary/30 transform translate-x-2 translate-y-2 rotate-180" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center">
         <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
        <h2 className="text-3xl font-semibold text-primary mb-2">¡Transforma Tu Vida Hoy!</h2>
        <p className="text-lg text-foreground/80">
          Este curso es una inversión en tu bienestar y crecimiento personal. Te esperamos.
        </p>
      </div>
    </div>
  );
}
