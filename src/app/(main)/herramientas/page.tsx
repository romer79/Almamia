// src/app/(main)/herramientas/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, FileText, Video, Users, MessageCircle, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
  aiHint: string;
  actionText?: string;
  actionLink?: string;
}

const tools: Tool[] = [
  {
    id: "1",
    title: "Meditaciones Guiadas",
    description: "Audios de meditación para la introspección, relajación y sanación emocional profunda.",
    icon: BrainCircuit,
    imageUrl: "https://picsum.photos/seed/meditacion/400/250",
    aiHint: "meditation serene",
    actionText: "Acceder a Audios",
  },
  {
    id: "2",
    title: "Materiales Descargables",
    description: "Guías en PDF, protocolos de biodecodificación y ejercicios prácticos para tu aprendizaje.",
    icon: FileText,
    imageUrl: "https://picsum.photos/seed/materiales/400/250",
    aiHint: "documents study",
    actionText: "Ver Materiales",
  },
  {
    id: "3",
    title: "Videoteca de Clases",
    description: "Acceso a grabaciones de todas las clases del curso para repasar a tu propio ritmo.",
    icon: Video,
    imageUrl: "https://picsum.photos/seed/videoteca/400/250",
    aiHint: "online course",
    actionText: "Ir a Videoteca",
  },
  {
    id: "4",
    title: "Comunidad Privada",
    description: "Foro exclusivo para interactuar con compañeros, compartir experiencias y resolver dudas.",
    icon: Users,
    imageUrl: "https://picsum.photos/seed/comunidad/400/250",
    aiHint: "community support",
    actionText: "Unirse al Foro",
  },
  {
    id: "5",
    title: "Sesiones de Preguntas y Respuestas",
    description: "Grabaciones de sesiones en vivo con nuestros expertos para aclarar tus inquietudes.",
    icon: MessageCircle,
    imageUrl: "https://picsum.photos/seed/sesionesqa/400/250",
    aiHint: "webinar discussion",
    actionText: "Ver Sesiones",
  },
];

export default function HerramientasPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Herramientas para Tu Viaje
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          Recursos exclusivos diseñados para potenciar tu aprendizaje y transformación con Alma Mia.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={tool.imageUrl}
                alt={tool.title}
                fill
                className="object-cover"
                data-ai-hint={tool.aiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <tool.icon className="h-6 w-6 text-primary" />
                {tool.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80">{tool.description}</p>
            </CardContent>
            {tool.actionText && (
              <div className="p-6 pt-0">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={tool.actionLink || "#"}>
                    <Download className="mr-2 h-4 w-4" /> {tool.actionText}
                  </Link>
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
