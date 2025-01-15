"use client";
import Link from "next/link";
import { Button } from "../../ui/button";
import { DropDownButton } from "./dropDownButton";
import { Phone } from "lucide-react";

const normalButtons = ["Articles", "Questions", "About Us"];

const categories = {
    name: "Categories",
    groups: [
        {
            header: "",
            items: [
                "Jackets",
                "Pants",
                "Shirts",
                "Sweaters",
                "Hoodies",
                "T-Shirts",
                "Footwear",
                "Shorts",
                "Jumpsuits",
                "Dresses",
                "Accessories",
                "Outerwear"
            ]
        },
    ]
}

// const moreData = {
//     name: "Seasonal Categories",
//     groups: [
//         {
//             header: "Spring",
//             items: []
//         },
//         {
//             header: "Summer",
//             items: []
//         },
//         {
//             header: "Fall",
//             items: []
//         },
//         {
//             header: "Winter",
//             items: []
//         }
//     ]
// }


export function BottomSection() {


  return (
    <div className="h-full w-full">
      <div className="flex flex-shrink-0 justify-between h-full w-full px-8">

        <div about="buttons" className="flex items-center justify-start gap-2 flex-shrink-0 h-full">

            <DropDownButton data={categories}/>
            {/* <DropDownButton name={moreData.name} headers={moreData.headers} items={moreData.items}/> */}

            {normalButtons.map((name) => (
                <Button key={name} variant="ghost" className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                {name}
                </Button>
            ))}

        </div>

        <div about="phone">
            <Link href="tel:+98 994 166 9736">
                <Button variant={"ghost"} className="group hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    <Phone className="group-hover:text-primary" />
                    <p>+98-9941669736</p>
                </Button>
            </Link>
        </div>

      </div>
    </div>
  );
}



    // headers: [
    //     "Spring Essentials", 
    //     "Summer Essentials", 
    //     "Fall Essentials", 
    //     "Winter Essentials", 
    // ],
    // items: [
    //     // Spring Essentials
    //     [
    //         "Shorts",
    //         "Swim suits",
    //         "T-shirts",
    //         "Light jackets",
    //         "Raincoats",
    //         "Floral dresses",
    //         "Sneakers",
    //         "Lightweight scarves",
    //         "Gardening gloves",
    //     ],
    //     // Summer Essentials
    //     [
    //         "Hats",
    //         "Sunglasses",
    //         "Flip flops",
    //         "Beach towels",
    //         "Tank tops",
    //         "Board shorts",
    //         "Swim goggles",
    //         "Sunscreen",
    //         "Beach umbrellas",
    //     ],
    //     // Fall Essentials
    //     [
    //         "Sweaters",
    //         "Scarves",
    //         "Boots",
    //         "Pumpkin spice lattes",
    //         "Cardigans",
    //         "Jeans",
    //         "Fall jackets",
    //         "Beanies",
    //         "Mittens",
    //     ],
    //     // Winter Essentials
    //     [
    //         "Coats",
    //         "Gloves",
    //         "Beanies",
    //         "Hot chocolate",
    //         "Snow boots",
    //         "Thermal underwear",
    //         "Fleece jackets",
    //         "Scarves",
    //         "Winter hats",
    //     ],
    // ]
// };