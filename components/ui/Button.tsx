// components/ui/Button.tsx

import React from 'react';

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // The content inside the button
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'; // Optional: styling variations
  size?: 'small' | 'medium' | 'large'; // Optional: size variations
  className?: string; // Optional: additional custom classes
}

/**
 * A reusable Button component with consistent styling.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Default variant
  size = 'medium', // Default size
  className = '', // Default empty className
  ...rest // Spread any other standard button props (onClick, disabled, type, etc.)
}) => {
  // Define base styles
  const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200';

  // Define styles based on variant
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    warning: 'bg-yellow-500 text-gray-800 hover:bg-yellow-600 focus:ring-yellow-500',
    info: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500',
  };

  // Define styles based on size
  const sizeStyles = {
    small: 'text-sm py-1 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  // Combine styles
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={allStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;