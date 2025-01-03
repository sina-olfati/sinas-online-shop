import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75; // Half star check
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
  
  // Generate an array for full stars, half stars, and empty stars
  const starsArray = [
    ...Array(fullStars).fill('full'),       // Full stars
    ...[hasHalfStar ? 'half' : null],      // One half star if applicable
    ...Array(emptyStars).fill('empty')     // Empty stars
  ];

  return (
    <div className="flex items-center gap-1">
      {starsArray.map((star, index) => {
        if (star === 'full') {
          return <Star key={index} fill="#F4BB44" color="#F4BB44" className="w-5 h-5" />;
        }
        if (star === 'half') {
            return (
                <div key={index} className="relative">
                    <Star fill="#F4BB44" color="#F4BB44" className="w-5 h-5" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    <Star fill="#E0E0E0" className="absolute top-0 w-5 h-5 text-[#E0E0E0]" style={{ clipPath: 'inset(0 0 0 50% )' }} />
                </div>
            )
        }
        return <Star key={index} fill="#E0E0E0" className="w-5 h-5 text-[#E0E0E0]" />;
      })}
    </div>
  );
};

export default StarRating;
