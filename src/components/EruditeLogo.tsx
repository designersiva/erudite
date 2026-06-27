import React from 'react';

interface EruditeLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function EruditeLogo({ className = 'h-8', iconOnly = false }: EruditeLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector Monogram (e + d matching uploaded logo) */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-right teal stem (d-stem) */}
        <path
          d="M 68.5,0 L 86.5,0 L 86.5,30 C 86.5,30 81,18 68.5,23 L 68.5,0 Z"
          fill="#315464"
        />
        
        {/* Main orange stylized 'e' */}
        {/* Curves nicely on the left, horizontal bars in the middle */}
        <path
          d="M 86.5,29.5 
             C 80,21 68,17.5 48,17.5 
             C 18,17.5 0,33 0,58 
             C 0,83 18,98.5 48,98.5 
             L 50,98.5 
             C 50,98.5 50,83.5 50,83.5 
             C 50,83.5 54,83.5 54,83.5 
             C 61.5,83.5 67,80 70,74.5 
             L 86.5,74.5 
             L 86.5,61.5 
             L 68.5,61.5 
             C 68.5,61.5 68.5,56.5 68.5,56.5 
             L 17,56.5 
             C 17,45 25,38.5 48,38.5 
             C 60,38.5 73.5,41 86.5,49.5 
             L 86.5,29.5 Z"
          fill="#FFA000"
        />

        {/* The horizontal divider in orange 'e' */}
        <path
          d="M 17,56.5 L 86.5,56.5 L 86.5,61.5 L 17,61.5 Z"
          fill="#FFA000"
        />

        {/* Bottom-right teal block */}
        <path
          d="M 53.5,83.5 
             L 50,98.5 
             L 50,98.5 
             C 62.5,98.5 74.5,98.5 86.5,98.5 
             C 86.5,86 86.5,74.5 86.5,74.5 
             L 70,74.5 
             C 67,80 61.5,83.5 53.5,83.5 Z"
          fill="#315464"
        />
      </svg>

      {!iconOnly && (
        <span className="font-display font-black tracking-[0.12em] text-lg text-white leading-none">
          ERUDITE
        </span>
      )}
    </div>
  );
}
