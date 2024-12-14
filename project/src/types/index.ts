export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  registeredCount: number;
  imageUrl: string;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;
  events: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'DOCUMENT' | 'LINK' | 'VIDEO';
  url: string;
  eventId: string;
}