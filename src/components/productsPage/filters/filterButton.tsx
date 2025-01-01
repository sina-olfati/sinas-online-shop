'use client';

import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const searchParams = useSearchParams();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Default price range to be considered "unset"
  const defaultPriceRange = [0, 1000];

  // Helper function to parse a query parameter as an array
  const parseQueryParam = (param: string | null): string[] => {
    return param ? param.split(",") : [];
  };

  // Helper function to compare two arrays
  const compareArrays = (array1: string[], array2: string[]): boolean => {
    return (
      array1.length === array2.length &&
      array1.every((item) => array2.includes(item))
    );
  };

  // Function to check if current filters match the query parameters
  const areFiltersSameAsQuery = (): boolean => {
    const categoriesInQuery = parseQueryParam(searchParams.get("categories"));
    const seasonsInQuery = parseQueryParam(searchParams.get("seasons"));
    const genderInQuery = searchParams.get("gender");
    const priceInQuery = searchParams.get("price")
      ? searchParams.get("price")!.split(",").map(Number)
      : defaultPriceRange;
    const discountInQuery = searchParams.get("discount") === "true";

    const categoriesMatch = compareArrays(categoriesInQuery, filters.categories);
    const seasonsMatch = compareArrays(seasonsInQuery, filters.seasons);
    const genderMatch = genderInQuery === filters.gender;
    const priceMatch =
      JSON.stringify(priceInQuery) === JSON.stringify(filters.price || defaultPriceRange);
    const discountMatch = discountInQuery === filters.discount;

    return (
      categoriesMatch &&
      seasonsMatch &&
      genderMatch &&
      priceMatch &&
      discountMatch
    );
  };

  // Update button state when filters or search parameters change
  useEffect(() => {
    const isSame = areFiltersSameAsQuery();
    setIsButtonDisabled(isSame);
  }, [filters, searchParams]);

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
    if (filters.price && JSON.stringify(filters.price) !== JSON.stringify(defaultPriceRange)) {
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
      isDisabled={isButtonDisabled}
      onPress={applyFilters}
    >
      Apply Filters
    </Button>
  );
}
