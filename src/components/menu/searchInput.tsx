'use client';
import { Search } from "lucide-react";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchDropDown } from "./searchDropDown";
import { useTranslations } from "next-intl";

export function SearchInput() {
  const router = useRouter();
  const [phrase, setPhrase] = useState<string>(""); // State to hold the search phrase
  const [focused, setFocused] = useState<boolean>(false); // State to track if input is focused
  const [hovered, setHovered] = useState<boolean>(false); // State to track hover state

  // Get query parameters from the URL
  const searchParams = useSearchParams();

  // Sync search input with the current query parameter on load
  useEffect(() => {
    const searchParam = searchParams.get("search") || "";
    setPhrase(searchParam);
  }, [searchParams]);

  // Apply search and update the query parameters
  const applySearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    const query = new URLSearchParams(searchParams as URLSearchParams); // Maintain other query params
    if (phrase) {
      query.set("search", phrase);
    } else {
      query.delete("search");
    }

    router.push(`/products?${query.toString()}`);
  };


  // Next-intl
  const t = useTranslations('Menu');

  return (
    <div className="w-[100%] relative">
      <div className="w-[100%]">
        <form
          onSubmit={applySearch} // Correctly handle form submission
          className="flex flex-row shrink-0 w-[100%] relative"
        >
          <label className="w-[100%]">
            <Input
              variant="faded"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              placeholder={t('searchBar')}
              className="!rounded-0"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </label>
          <Button
            isIconOnly
            aria-label="search"
            color="primary"
            variant="faded"
            type="submit"
            className="absolute right-0 border-0 !outline-0 bg-transparent hover:bg-accent scale-[0.95]"
          >
            <Search />
          </Button>
        </form>
      </div>

      {(phrase && focused || hovered) && (
        <div
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <SearchDropDown searched={phrase} />
        </div>
      )}
    </div>
  );
}
