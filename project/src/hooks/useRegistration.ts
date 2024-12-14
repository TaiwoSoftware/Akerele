import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export function useRegistration() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  const handleRegister = useCallback((eventId: string) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // Handle registration logic
    console.log(`Registering for event: ${eventId}`);
  }, [isAuthenticated, navigate]);

  return { handleRegister };
}