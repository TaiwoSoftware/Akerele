import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { EventCard } from './components/EventCard';
import { ResourceList } from './components/ResourceList';
import { Dashboard } from './components/dashboard/Dashboard';
import { LoginForm } from './components/auth/LoginForm';
import { AIChat } from './components/chat/AIChat';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { sampleEvents, sampleResources } from './constants/mockData';
import { useRegistration } from './hooks/useRegistration';

export default function App() {
  const { handleRegister } = useRegistration();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="events" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onRegister={handleRegister}
                      />
                    ))}
                  </div>
                </section>

                <section id="resources" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Resources</h2>
                  <ResourceList resources={sampleResources} />
                </section>
              </>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      <AIChat />
    </div>
  );
}