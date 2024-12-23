"use client";
import { Button } from "../../ui/button";
import { DropDownButton } from "./dropDownButton";

const normalButtons = ["Questions", "Articles", "About Us"];

const seasonsData = {
    name: "Seasons",
    headers: ["Spring", "Summer", "Fall", "Winter"],
    items: [
        ["Shorts", "Swim suits", "T-shirts", "Light jackets", "onetwo"], // Spring items
        ["Hats", "Sunglasses", "Flip flops", "Beach towels", "othreene"], // Summer items
        ["Sweaters", "Scarves", "Boots", "Pumpkin spice lattes", "onwhate"], // Fall items
        ["Coats", "Gloves", "Beanies", "Hot chocolate", "onheehawe"] // Winter items
    ],
}

const moreData = {
    name: "Seasonal Categories",
    headers: [
        "Spring Essentials", 
        "Summer Essentials", 
        "Fall Essentials", 
        "Winter Essentials", 
    ],
    items: [
        // Spring Essentials
        [
            "Shorts",
            "Swim suits",
            "T-shirts",
            "Light jackets",
            "Raincoats",
            "Floral dresses",
            "Sneakers",
            "Lightweight scarves",
            "Gardening gloves",
        ],
        // Summer Essentials
        [
            "Hats",
            "Sunglasses",
            "Flip flops",
            "Beach towels",
            "Tank tops",
            "Board shorts",
            "Swim goggles",
            "Sunscreen",
            "Beach umbrellas",
        ],
        // Fall Essentials
        [
            "Sweaters",
            "Scarves",
            "Boots",
            "Pumpkin spice lattes",
            "Cardigans",
            "Jeans",
            "Fall jackets",
            "Beanies",
            "Mittens",
        ],
        // Winter Essentials
        [
            "Coats",
            "Gloves",
            "Beanies",
            "Hot chocolate",
            "Snow boots",
            "Thermal underwear",
            "Fleece jackets",
            "Scarves",
            "Winter hats",
        ],
    ]
};

export function BottomSection() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-shrink-0 h-full w-full">

        <div>
        </div>

        <div className="flex items-center justify-start gap-2 h-full w-full">
            <DropDownButton name={seasonsData.name} headers={seasonsData.headers} items={seasonsData.items}/>
            <DropDownButton name={moreData.name} headers={moreData.headers} items={moreData.items}/>
            {normalButtons.map((name) => (
                <Button
                key={name}
                variant="ghost"
                className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                {name}
                </Button>
            ))}
        </div>

      </div>
    </div>
  );
}
