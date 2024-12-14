import { useState, useCallback } from 'react';
import { Message } from '../components/chat/types';

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Use requestAnimationFrame instead of setTimeout to avoid the error
    requestAnimationFrame(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I can help you with event information and registration. What would you like to know?',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    });
  }, []);

  return { messages, sendMessage };
}