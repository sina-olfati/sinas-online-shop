'use client';
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
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
    // Retrieve query parameters
    const categoriesInQuery = parseQueryParam(searchParams.get("categories"));
    const seasonsInQuery = parseQueryParam(searchParams.get("seasons"));
    const genderInQuery = searchParams.get("gender");
    const priceInQuery = searchParams.get("price")
      ? searchParams.get("price")!.split(",").map(Number)
      : defaultPriceRange;
    const discountInQuery = searchParams.get("discount") === "true";

    // Handle empty filter arrays and compare with query
    const categoriesMatch = filters.categories.length === 0
      ? categoriesInQuery.length === 0
      : compareArrays(categoriesInQuery, filters.categories);

    const seasonsMatch = filters.seasons.length === 0
      ? seasonsInQuery.length === 0
      : compareArrays(seasonsInQuery, filters.seasons);

    const genderMatch = filters.gender ? genderInQuery === filters.gender : genderInQuery === null;

    const priceMatch = JSON.stringify(priceInQuery) === JSON.stringify(filters.price || defaultPriceRange);

    const discountMatch = discountInQuery === filters.discount;

    // Return true if all filters are the same as the query params
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
    setIsButtonDisabled(isSame); // Disable button if filters match query
  }, [filters, searchParams]);

  const applyFilters = () => {
    const query = new URLSearchParams(searchParams); // Start with current query params
  
    // Update filters in the query
    if (filters.categories.length > 0) {
      query.set("categories", filters.categories.join(","));
    } else {
      query.delete("categories");
    }
  
    if (filters.seasons.length > 0) {
      query.set("seasons", filters.seasons.join(","));
    } else {
      query.delete("seasons");
    }
  
    if (filters.gender) {
      query.set("gender", filters.gender);
    } else {
      query.delete("gender");
    }
  
    if (
      filters.price &&
      JSON.stringify(filters.price) !== JSON.stringify(defaultPriceRange)
    ) {
      query.set("price", filters.price.join(","));
    } else {
      query.delete("price");
    }
  
    if (filters.discount) {
      query.set("discount", "true");
    } else {
      query.delete("discount");
    }
  
    // Redirect to the updated query
    router.push(`/products?${query.toString()}`);
  };


  // Next-intl
  const t = useTranslations('Products.filters');
  

  return (
    <Button
      color="primary"
      variant="shadow"
      isDisabled={isButtonDisabled}
      onPress={applyFilters}
    >
      {t('button')}
    </Button>
  );
}
