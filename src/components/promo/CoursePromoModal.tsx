// src/components/promo/CoursePromoModal.tsx
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from 'lucide-react'; // Usaremos MessageCircle para el botón de WhatsApp

interface CoursePromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePromoModal({ isOpen, onClose }: CoursePromoModalProps) {
  const whatsappNumber = "5493764603697";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quisiera más información sobre el curso de Biodecodificación.")}`;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
          <>
            <DialogHeader className="p-6 pb-4 text-center">
              <DialogTitle className="text-2xl font-bold text-primary">¡Consulta Sobre Nuestro Curso!</DialogTitle>
            </DialogHeader>
            <div className="p-6 pt-0 text-center">
              <p className="text-sm text-foreground/80 mb-6">
                ¿Tienes preguntas o quieres saber más sobre el curso de Biodecodificación?
                ¡Contáctanos directamente por WhatsApp!
              </p>
            </div>
            <DialogFooter className="p-6 pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <Button onClick={handleClose} variant="outline" size="lg">
                Cerrar
              </Button>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear por WhatsApp
                </a>
              </Button>
            </DialogFooter>
          </>
        <DialogClose asChild>
            <button
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                aria-label="Cerrar"
                onClick={handleClose}
            >
                <X className="h-5 w-5" />
            </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export const usePromoModalState = () => {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  useEffect(() => {
    // Modal will try to open on every page load for /inicio, after a short delay.
    const timer = setTimeout(() => {
      setIsPromoModalOpen(true);
    }, 500); // 0.5 second delay
    return () => clearTimeout(timer);
  }, []);

  return { isPromoModalOpen, setIsPromoModalOpen };
};
