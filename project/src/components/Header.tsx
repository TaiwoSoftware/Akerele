import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Header() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Calendar className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Web3 Events</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : ''}`}
            >
              Events
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/dashboard' ? 'text-blue-600' : ''}`}
            >
              Dashboard
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-gray-700 hover:text-blue-600"
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login" 
                className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/login' ? 'text-blue-600' : ''}`}
              >
                Login
              </Link>
            )}
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}