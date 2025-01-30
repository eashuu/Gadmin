import React from 'react';
import { Navigate } from 'react-router-dom';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to=\"/login\" replace />;
  }

  return <>{children}</>;
};
