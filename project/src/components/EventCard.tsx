import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2" />
            <span>{event.registeredCount} / {event.capacity} registered</span>
          </div>
        </div>

        <button
          onClick={() => onRegister(event.id)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          disabled={event.registeredCount >= event.capacity}
        >
          {event.registeredCount >= event.capacity ? 'Event Full' : 'Register Now'}
        </button>
      </div>
    </div>
  );
}