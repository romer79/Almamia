// src/components/promo/CoursePromoModal.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from 'lucide-react';

const PROMO_MODAL_DISMISSED_KEY = 'almaMiaCoursePromoDismissed_v1';

interface CoursePromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePromoModal({ isOpen, onClose }: CoursePromoModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset isExpanded state when the modal is re-opened
  useEffect(() => {
    if (isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  const handleCloseAndDismiss = () => {
    try {
      localStorage.setItem(PROMO_MODAL_DISMISSED_KEY, 'true');
    } catch (error) {
      console.warn("Could not save promo dismissal to localStorage", error);
    }
    onClose();
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleCloseAndDismiss()}>
      <DialogContent className={cn("p-0 overflow-hidden", isExpanded ? "sm:max-w-[500px]" : "sm:max-w-[420px]")}>
        {!isExpanded ? (
          <>
            <DialogHeader className="p-6 pb-4 text-center">
              <DialogTitle className="text-2xl font-bold text-primary">¡Descubre Nuestro Nuevo Curso!</DialogTitle>
            </DialogHeader>
            <div className="p-6 pt-0 text-center">
              <p className="text-sm text-foreground/80 mb-6">
                Tenemos una invitación especial para que comiences un viaje de transformación y sanación profunda.
              </p>
            </div>
            <DialogFooter className="p-6 pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <Button onClick={handleCloseAndDismiss} variant="outline" size="lg">
                Ahora no
              </Button>
              <Button onClick={handleExpand} size="lg" className="bg-primary hover:bg-primary/90">
                Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold text-primary text-center">¡Prepárate para Transformar Tu Vida!</DialogTitle>
            </DialogHeader>
            <div className="p-0 flex justify-center">
              <Image
                src="https://i.imgur.com/zGPkHSn.jpeg"
                alt="Promoción Curso Alma Mía"
                width={1080}
                height={1080}
                className="object-contain w-full h-auto max-h-[65vh]" // Adjusted max-h for slightly better fit
                data-ai-hint="course promotion flyer"
              />
            </div>
            <DialogFooter className="p-6 pt-4 flex justify-center">
              <Button onClick={handleCloseAndDismiss} variant="outline" size="lg">
                Entendido
              </Button>
            </DialogFooter>
          </>
        )}
        <DialogClose asChild>
            <button
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                aria-label="Cerrar"
                onClick={handleCloseAndDismiss} // Ensure X button also dismisses permanently
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
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(PROMO_MODAL_DISMISSED_KEY) === 'true';
    } catch (error) {
      console.warn("Could not read promo dismissal from localStorage", error);
      dismissed = true; 
    }
    
    if (!dismissed) {
      // Set a small delay to ensure the page is somewhat loaded before showing the modal
      const timer = setTimeout(() => {
        setIsPromoModalOpen(true);
      }, 500); // 0.5 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  return { isPromoModalOpen, setIsPromoModalOpen };
};

// Helper function to apply conditional classes, used for DialogContent size
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
