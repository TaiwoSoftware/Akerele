import { create } from 'zustand';
import { AuthState, User } from '../types/auth';

// Simulated user data - In production, this would come from your backend
const MOCK_USER: User = {
  id: '1',
  email: 'demo@example.com',
  name: 'Demo User',
  role: 'USER',
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ user: MOCK_USER, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ 
      user: { ...MOCK_USER, email, name },
      isAuthenticated: true 
    });
  },
}));