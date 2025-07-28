import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface CustomButtonProps {
  text: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  href,
  variant = 'primary',
  className = '',
}) => {
  let baseClasses = '';

  if (variant === 'primary') {
    baseClasses =
      'inline-block px-4 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition';
  } else if (variant === 'secondary') {
    baseClasses =
      'text-[16px] items-center px-4 py-2 text-white bg-black border-2 border-white rounded-[5px] hover:bg-white hover:text-black transition';
  }else if (variant === 'tertiary') {
    baseClasses =
      'inline-block px-4 py-2 text-sm font-medium text-black bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition';
  }

  const fullClassName = `${baseClasses} ${className}`.trim();

  return (
    <Link href={href} className={fullClassName}>
      {text}
    </Link>
  );
};

export default CustomButton;
