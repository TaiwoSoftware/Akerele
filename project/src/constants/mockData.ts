import { Event, Resource, Participant } from '../types';

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Web3 Developer Workshop',
    description: 'Learn the fundamentals of Web3 development in this hands-on workshop.',
    date: '2024-04-15',
    location: 'Virtual',
    capacity: 100,
    registeredCount: 65,
    imageUrl: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '2',
    title: 'Blockchain Innovation Summit',
    description: 'Join industry leaders for insights into the future of blockchain technology.',
    date: '2024-05-01',
    location: 'New York, NY',
    capacity: 200,
    registeredCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1469',
  },
];

export const sampleResources: Resource[] = [
  {
    id: '1',
    title: 'Event Guidelines',
    type: 'DOCUMENT',
    url: '#',
    eventId: '1',
  },
  {
    id: '2',
    title: 'Workshop Recording',
    type: 'VIDEO',
    url: '#',
    eventId: '1',
  },
];

export const sampleParticipants: Participant[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    events: ['1', '2'],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    events: ['1'],
  },
];