import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: string;
}
interface buttonType {
  primary?: string;
  secondary?: string;
}
export default function Button({
  children,
  onClick,
  type = "primary",
}: ButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buttonType: buttonType | any = {
    primary: "text-white bg-black",
    // primary:
    //   "text-white bg-gradient-to-r from-purple-600 to-blue-600",
    secondary: " bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${buttonType[type]} w-full rounded px-4 py-2`}
    >
      {children}
    </button>
  );
}
