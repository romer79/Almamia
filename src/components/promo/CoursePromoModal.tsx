// src/components/promo/CoursePromoModal.tsx
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from 'lucide-react';
import Image from 'next/image'; // Import Image

interface CoursePromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePromoModal({ isOpen, onClose }: CoursePromoModalProps) {
  const whatsappNumber = "5493764603697";
  // Updated WhatsApp message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Alma mía, quisiera más información sobre el curso de Biodecodificación e inscribirme.")}`;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden"> {/* Changed max-width to md */}
          <>
            <DialogHeader className="p-6 pb-4 text-center">
              {/* Updated Dialog Title */}
              <DialogTitle className="text-2xl font-bold text-primary">¡Inscríbete al Curso de Alma mía!</DialogTitle>
            </DialogHeader>
            <div className="px-6"> {/* Added padding for image */}
              <Image
                src="https://i.imgur.com/zGPkHSn.jpeg"
                alt="Promoción Curso Alma mía"
                width={400} // Adjusted width for better display in modal
                height={400} // Adjusted height
                className="object-contain w-full h-auto rounded-md"
                data-ai-hint="course promotion flyer"
              />
            </div>
            <div className="p-6 pt-4 text-center">
              <p className="text-sm text-foreground/80 mb-6">
                Aprovecha esta oportunidad para transformar tu vida. ¡Contáctanos por WhatsApp para inscribirte!
              </p>
            </div>
            <DialogFooter className="p-6 pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <Button onClick={handleClose} variant="outline" size="lg">
                Cerrar
              </Button>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Inscribite
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
    const timer = setTimeout(() => {
      setIsPromoModalOpen(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return { isPromoModalOpen, setIsPromoModalOpen };
};
