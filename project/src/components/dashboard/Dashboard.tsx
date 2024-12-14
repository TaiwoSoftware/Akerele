import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { EventStats } from './EventStats';
import { ParticipantList } from './ParticipantList';

export function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Welcome, {user.name}</h2>
      <EventStats />
      <ParticipantList />
    </div>
  );
}