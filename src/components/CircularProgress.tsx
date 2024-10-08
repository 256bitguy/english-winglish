import React from 'react';

interface CircularProgressProps{
  percentage:number;
}
const CircularProgress:React.FC<CircularProgressProps>= ({percentage}) => {
 
  
  const radius = 16;  
  const normalizedRadius = radius - 2;  
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative size-10 h-20 w-20">
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r={normalizedRadius}
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        ></circle>
        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r={normalizedRadius}
          fill="none"
          className="stroke-current text-primary dark:text-blue-500"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        ></circle>
      </svg>
      {/* Percentage Text */}
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-xl font-bold text-blue-600 dark:text-blue-500">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
