// src/components/promo/CoursePromoModal.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

const PROMO_MODAL_DISMISSED_KEY = 'almaMiaCoursePromoDismissed_v1'; // Added _v1 to allow re-showing if content changes

interface CoursePromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CoursePromoModal({ isOpen, onClose }: CoursePromoModalProps) {
  const handleClose = () => {
    try {
      localStorage.setItem(PROMO_MODAL_DISMISSED_KEY, 'true');
    } catch (error) {
      console.warn("Could not save promo dismissal to localStorage", error);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-primary text-center">¡Prepárate para Transformar Tu Vida!</DialogTitle>
        </DialogHeader>
        <div className="p-0 flex justify-center">
          <Image
            src="https://i.imgur.com/zGPkHSn.jpeg"
            alt="Promoción Curso Alma Mía"
            width={1080}
            height={1080}
            className="object-contain w-full h-auto max-h-[70vh]"
            data-ai-hint="course promotion flyer"
          />
        </div>
        <DialogFooter className="p-6 pt-4 flex justify-center">
          <Button onClick={handleClose} variant="outline" size="lg">
            Entendido
          </Button>
        </DialogFooter>
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
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(PROMO_MODAL_DISMISSED_KEY) === 'true';
    } catch (error) {
      console.warn("Could not read promo dismissal from localStorage", error);
      // Fallback: if localStorage is unavailable, don't show the modal to avoid repeated popups
      dismissed = true; 
    }
    
    if (!dismissed) {
      setIsPromoModalOpen(true);
    }
  }, []);

  return { isPromoModalOpen, setIsPromoModalOpen };
};
