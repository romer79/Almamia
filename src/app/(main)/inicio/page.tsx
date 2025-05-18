// src/app/(main)/inicio/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    { title: "La Enfermedad como Solución: Una Nueva Mirada para Entender tu Cuerpo", description: "" },
    { title: "Autobiodecodificación: Descubre la Raíz Psicológica de tus Enfermedades, Traumas y Conflictos Vinculares", description: "" },
    { title: "Del Estrés al Síntoma: La Conexión Científica entre Tu Mente y Tu Salud Revelada", description: "" },
    { title: "Biodecodifica tu Propia Historia: Encuentra el Conflicto que Desencadenó Tu Realidad Actual", description: "" },
    { title: "Agradece a Tu Cuerpo: Cómo la Biodecodificación Te Muestra la Solución para Tu Supervivencia", description: "" },
    { title: "Sanación Profunda: Aprende a Trabajar la Raíz Psicológica para Evitar Recaídas", description: "" },
  ];

  const testimonials = [
    {
      testimonial: "Mi experiencia con la biodecodificación cambió mi vida por completo. Aprendí a vivir sin dolor, a transformar mis pensamientos, y a sanar desde el alma y el corazón. La bio vino a salvar vidas. Hoy sé que estamos a tiempo de ser felices y vivir como lo merecemos.",
    },
    {
      testimonial: "Quiero agradecerte por esta invitación y por compartir ese don tan hermoso que Dios te dio. Enseñás con tanto amor que solo puedo felicitarte de corazón. Que San Gabriel te guíe siempre. ¡Te quiero mucho Kari, genia total!",
    },
    {
      testimonial: "Siento que este proceso me ayudó a encontrarme, a ser más consciente, a frenar antes de explotar. Ya casi ni me molesta no salir de vacaciones, porque lo que estoy viviendo es lo mejor que me pudo pasar. Me falta, pero estoy feliz, clara y con ganas de concretar mi propósito. Lo hago por mis hijos, por mí, y porque sé que con amor… siempre se puede.",
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
              {module.description && (
                <p className="text-sm text-foreground/80 mt-1">{module.description}</p>
              )}
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
              <CardContent className="flex-grow relative pt-8 pb-8"> {/* Added padding top/bottom */}
                <Quote className="absolute top-2 left-2 h-8 w-8 text-primary/30 transform -translate-x-1 -translate-y-1" />
                <p className="text-sm text-foreground/80 italic leading-relaxed px-4">
                  {testimonial.testimonial}
                </p>
                <Quote className="absolute bottom-2 right-2 h-8 w-8 text-primary/30 transform translate-x-1 translate-y-1 rotate-180" />
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

