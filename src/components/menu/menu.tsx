import React from "react";

// personal
import { ShoppingCartButton } from "./buttons/shoppingCartButton";
// toggles
import { LangToggle } from "./buttons/lang-toggle";
import { ThemeColorToggle } from "./buttons/theme-color-toggle";
import { ThemeModeToggle } from "./buttons/theme-mode-toggle";
// search
import { SearchInput } from "./searchInput";
// logo
import { Logo } from "./logo";
// bottom section
import { BottomSection } from "./bottom/bottomSection";
import { Divider } from "@nextui-org/react";
import { MobileSearch } from "./buttons/mobileMode/mobileSearch";
import { ButtonWrapper } from "./buttons/mobileMode/buttonWrapper";

const Menu = () => {

  const mobileMode = [
    {name: "language", button: <LangToggle />},
    {name: "theme", button: <ThemeModeToggle />},
    {name: "cart", button: <ShoppingCartButton />},
    {name: "search", button: <MobileSearch />}
  ]


  return (
    <div
      className="w-[100vw] flex flex-col bg-accent/90 fixed top-0 mysm:top-auto mysm:bottom-0
        z-50"
    >
      <div className="h-12 w-full flex items-center mysm:hidden">
        <div id="personal" className="mx-2 flex flex-shrink-0">
          <ShoppingCartButton />
          {/* <ProfileButton />
          <LikedButton /> */}
        </div>

        <div className="">
          <Divider orientation="vertical" className="mx-2 py-3" />
        </div>

        <div id="toggles" className="mr-2 flex flex-shrink-0">
          <LangToggle />
          <ThemeModeToggle />
          <ThemeColorToggle />
        </div>

        <div id="search" className="w-full">
          <SearchInput />
        </div>

        <div id="logo" className="h-full pr-1">
          <Logo />
        </div>
      </div>

      <div id="drop" className="h-12 w-full py-2 mysm:hidden">
        <BottomSection />
      </div>

      {/* mysm */}
      <div className="h-16 w-full mysm:flex items-center justify-around px-[20%] hidden">

        {mobileMode.map((button) => 
          <ButtonWrapper key={button.name} name={button.name}>
            {button.button}
          </ButtonWrapper>
        )}
  
        <ThemeColorToggle />

      </div>
    </div>
  );
};

export default Menu;
