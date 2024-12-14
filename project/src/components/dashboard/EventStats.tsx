import React from 'react';
import { BarChart, Users, Calendar } from 'lucide-react';

export function EventStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Calendar className="w-10 h-10 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Events</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Users className="w-10 h-10 text-green-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Participants</p>
            <p className="text-2xl font-bold">245</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <BarChart className="w-10 h-10 text-purple-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Registration Rate</p>
            <p className="text-2xl font-bold">82%</p>
          </div>
        </div>
      </div>
    </div>
  );
}