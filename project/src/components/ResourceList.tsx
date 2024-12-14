import React from 'react';
import { File, Link, Video } from 'lucide-react';
import { Resource } from '../types';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'DOCUMENT':
        return <File className="w-5 h-5" />;
      case 'LINK':
        return <Link className="w-5 h-5" />;
      case 'VIDEO':
        return <Video className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <a
          key={resource.id}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-blue-600 mr-4">
            {getIcon(resource.type)}
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900">{resource.title}</h4>
            <p className="text-sm text-gray-600">{resource.type.toLowerCase()}</p>
          </div>
        </a>
      ))}
    </div>
  );
}