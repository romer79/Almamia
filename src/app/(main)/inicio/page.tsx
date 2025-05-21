// src/app/(main)/inicio/page.tsx
"use client"; // Required for hooks like useState, useEffect

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Heart, Brain, BookOpen, Users, Quote, X } from "lucide-react"; // Added X icon
import Image from "next/image";
import { CoursePromoModal, usePromoModalState } from '@/components/promo/CoursePromoModal';
import React, { useState } from 'react'; // Added useState

export default function InicioPage() {
  const { isPromoModalOpen, setIsPromoModalOpen } = usePromoModalState();
  const [isFixedAdVisible, setIsFixedAdVisible] = useState(true); // State for fixed ad visibility

  const courseBenefits = [
    { icon: Heart, text: "Sanación emocional profunda y liberación de patrones limitantes." },
    { icon: Brain, text: "Comprensión del origen emocional de síntomas físicos y enfermedades." },
    { icon: Zap, text: "Herramientas prácticas para aplicar en tu vida diaria y en otros." },
    { icon: Users, text: "Conexión con una comunidad de apoyo y crecimiento." },
  ];

  const courseModules = [
    { title: "La Enfermedad como Solución", description: "Una Nueva Mirada para Entender tu Cuerpo" },
    { title: "Autobiodecodificación", description: "Descubre la Raíz Psicológica de tus Enfermedades, Traumas y Conflictos Vinculares" },
    { title: "Del Estrés al Síntoma", description: "La Conexión Científica entre Tu Mente y Tu Salud Revelada" },
    { title: "Biodecodifica tu Propia Historia", description: "Encuentra el Conflicto que Desencadenó Tu Realidad Actual" },
    { title: "Agradece a Tu Cuerpo", description: "Cómo la Biodecodificación Te Muestra la Solución para Tu Supervivencia" },
    { title: "Sanación Profunda", description: "Aprende a Trabajar la Raíz Psicológica para Evitar Recaídas" },
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
    <>
      <CoursePromoModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
      <div className="space-y-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Bienvenido a Alma mía
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Descubre el poder transformador de la Biodecodificación y sana tu vida desde la raíz.
          </p>
        </section>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span>Nuestro Curso de Auto Biodecodificación</span>
            </CardTitle>
            <CardDescription>
              Un viaje profundo hacia el autoconocimiento y la sanación integral.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
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
              <div className="flex flex-col items-center text-center">
                <div className="rounded-lg overflow-hidden shadow-md md:max-w-[240px] mx-auto">
                  <Image
                    src="https://i.imgur.com/Ie2M1zA.jpeg"
                    alt="Karina Pasamán, instructora del curso Alma mía"
                    width={300}
                    height={400}
                    className="object-cover w-full h-auto"
                    data-ai-hint="woman portrait"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-primary">Karina Pasamán</p>
                  <p className="text-xs text-foreground/80">Bioquímica</p>
                  <p className="text-xs text-foreground/80">Docente</p>
                  <p className="text-xs text-foreground/80">Terapeuta de Biodecodificación</p>
                </div>
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
                <CardContent className="flex-grow relative pt-8 pb-8">
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

      {/* Anuncio fijo en la esquina inferior izquierda */}
      {isFixedAdVisible && (
        <div className="fixed bottom-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg w-48 md:w-60">
          <button 
            onClick={() => setIsFixedAdVisible(false)}
            className="absolute -top-2 -right-2 bg-background text-foreground rounded-full p-0.5 border border-border hover:bg-muted z-10"
            aria-label="Cerrar anuncio"
          >
            <X className="h-4 w-4" />
          </button>
          <Image
            src="https://i.imgur.com/zGPkHSn.jpeg"
            alt="Promoción Curso Alma mía"
            width={240} 
            height={240} 
            className="object-contain w-full h-auto rounded"
            data-ai-hint="course promotion flyer"
          />
          <p className="text-xs text-center mt-2 text-foreground/80">
            ¡Nuevo curso disponible! <a href="#" onClick={(e) => { e.preventDefault(); setIsPromoModalOpen(true); }} className="text-primary hover:underline">Más info</a>
          </p>
        </div>
      )}
    </>
  );
}
