'use client'
import { useState, useRef, useEffect } from "react";

interface ButtonWrapperProps {
  children: React.ReactNode;  // For the button's content (could be any React node)
  name: string;               // For the name (string)
}

export function ButtonWrapper({ children, name }: ButtonWrapperProps) {
  const [tapped, setTapped] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Toggle the state when the button is tapped
  const handleTap = () => {
    setTapped(true);
  };

  // Reset tapped state when clicking outside the button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setTapped(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="rounded relative group transition-all flex items-center justify-center">
      <div
        ref={buttonRef}
        className={`relative bottom-0 ${tapped ? "bottom-1.5" : ""} transition-all duration-300 flex items-center justify-center`}
        onClick={handleTap} // Handle the tap event
      >
        {children} {/* Button goes here */}
      </div>
      <p
        className={`absolute bottom-[-50px] ${tapped ? "bottom-[-7px]" : ""} transition-all duration-300 text-xs font-thin`}
      >
        {name}
      </p>
    </div>
  );
}
