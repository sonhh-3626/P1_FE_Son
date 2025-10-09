import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface LovedToggleProps {
  loved: boolean;
  onLovedClick: (event: React.MouseEvent, newLoved: boolean) => void;
  className?: string;
}

export default function LovedToggle({ loved, onLovedClick, className }: LovedToggleProps) {
  const handleClick = (event: React.MouseEvent) => {
    onLovedClick(event, !loved);
  };

  return (
    <div className={`z-10 ${className}`}>
      <button
        className={`flex items-center justify-center w-8 h-8
                   ${loved ? 'text-red-500' : 'text-white'}`}
        onClick={handleClick}
      >
        <FaHeart
          size={32}
          stroke={loved ? undefined : "#030712"}
          strokeWidth={loved ? undefined : "20"}
        />
      </button>
    </div>
  );
}
