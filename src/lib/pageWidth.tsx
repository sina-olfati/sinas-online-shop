import { useEffect, useState } from 'react';

export default function PageWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Add event listener for resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width
}
