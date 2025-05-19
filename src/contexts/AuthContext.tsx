// src/contexts/AuthContext.tsx
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useCallback } from 'react';
// import { useRouter } from 'next/navigation'; // No longer needed for simplified auth
// import { useState, useEffect } from 'react'; // No longer needed for simplified auth

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

// const AUTH_STORAGE_KEY = 'almaMiaUser'; // No longer used as auth is disabled

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null); // Simplified
  // const [loading, setLoading] = useState(true); // Simplified
  // const router = useRouter(); // No longer needed here

  // useEffect(() => { // Removed: No longer loading user from localStorage
  //   try {
  //     const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser));
  //     }
  //   } catch (error) {
  //     console.error("Error reading from localStorage", error);
  //     localStorage.removeItem(AUTH_STORAGE_KEY); // Clear corrupted data
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  const user: User | null = null; // User is always null as login is disabled
  const loading = false; // Loading is always false

  const login = useCallback((_userData: User) => {
    // localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData)); // Disabled
    // setUser(userData); // Disabled
    // router.push('/inicio'); // Disabled
    // console.log("Login function bypassed as authentication is currently disabled.");
  }, []);

  const logout = useCallback(() => {
    // localStorage.removeItem(AUTH_STORAGE_KEY); // Disabled
    // setUser(null); // Disabled
    // router.push('/'); // Disabled
    // console.log("Logout function bypassed as authentication is currently disabled.");
  }, []);

  const register = useCallback((_userData: User) => {
    // localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData)); // Disabled
    // setUser(userData); // Disabled
    // router.push('/inicio'); // Disabled
    // console.log("Register function bypassed as authentication is currently disabled.");
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
