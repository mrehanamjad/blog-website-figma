import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  varient?: "fill" | "transparent";
  className?: string;
}

function Button({children,varient="fill",className="",...props}:ButtonProps) {
  return (
    <button className={` px-6 py-3 rounded-lg  transition-colors ${varient == "fill" && "bg-purple-600 text-white hover:bg-purple-700"} ${varient == "transparent" && "text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white duration-300"} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button