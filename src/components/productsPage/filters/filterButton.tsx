'use client';

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface FilterButtonProps {
  filters: {
    categories: string[];
    seasons: string[];
    gender?: string;
    price?: number[];
    discount: boolean;
  };
}

export function FilterButton({ filters }: FilterButtonProps) {
  const router = useRouter();

  const applyFilters = () => {
    const query = new URLSearchParams();

    if (filters.categories.length > 0) {
      query.append("categories", filters.categories.join(","));
    }
    if (filters.seasons.length > 0) {
      query.append("seasons", filters.seasons.join(","));
    }
    if (filters.gender) {
      query.append("gender", filters.gender);
    }
    if (filters.price) {
      query.append("price", filters.price.join(","));
    }
    if (filters.discount) {
      query.append("discount", "true");
    }

    // Redirect to the desired page with filters as query
    router.push(`/products?${query.toString()}`);
  };

  return (
    <Button
      color="primary"
      variant="shadow"
      isDisabled={
        !(
          filters.categories.length > 0 ||
          filters.seasons.length > 0 ||
          filters.gender ||
          filters.price ||
          filters.discount
        )
      }
      onPress={applyFilters}
    >
      Apply Filters
    </Button>
  );
}




// import { Button } from "@nextui-org/react";

// export function FilterButton (anythingNew: any) {

//     return (
//         <div className="w-full">
//             <Button
//                 variant="shadow"
//                 color="primary"
//                 isDisabled={!anythingNew}
//             >
//                 Apply
//             </Button>
//         </div>
//     )
// }