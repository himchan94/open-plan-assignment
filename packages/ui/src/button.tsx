import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  isLoading?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  isLoading = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`flex items-center justify-center p-3 rounded-xl bg-[#111] hover:bg-[rgba(17,17,17,0.3)] active:bg-[rgba(17,17,17,0.8)] disabled:opacity-70 disabled:cursor-not-allowed transition-colors w-full max-w-[335px] ${className} h-[60px]`}>
      {isLoading ? (
        <>
          <svg
            className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
          </svg>
          <span className='text-white text-medium text-[24px] leading-148'>
            {label}
          </span>
        </>
      ) : (
        <span className='text-white text-medium text-[24px] leading-148'>
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
