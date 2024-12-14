import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSend()}
          placeholder="Ask about events..."
          className="flex-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={onSend}
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}