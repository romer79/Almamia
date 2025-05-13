// src/contexts/AuthContext.tsx
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (userData: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'almaMiaUser';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
      localStorage.removeItem(AUTH_STORAGE_KEY); // Clear corrupted data
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback((userData: User) => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
    router.push('/inicio');
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
    router.push('/');
  }, [router]);

  const register = useCallback((userData: User) => {
    // In a real app, this would likely also call an API
    // For now, we just log them in directly after "registration"
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
    router.push('/inicio');
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
