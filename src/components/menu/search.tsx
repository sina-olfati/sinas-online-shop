'use client'
import { Search } from "lucide-react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";


export function SearchInput() {

    return (
        <div className="w-[100%]">
            <div className='w-[100%]'>
                <form className="flex flex-row shrink-0 w-[100%] relative">
                    <label className="w-[100%]">
                        {/* <input type="text" name="name" className="border border-primary rounded-full w-[100%] h-7 outline-0 bg-accent pl-5 focus:" /> */}
                        {/* <Input className="border border-primary rounded-full" /> */}
                        <Input variant="bordered" className="outline-0 focus:outline-0 rounded-full " />
                    </label>
                    {/* <input type="submit" className='absolute right-0 h-full border border-secondary rounded-full mx-2'>
                        {Search}
                    </input> */}
                    <Button isIconOnly aria-label='search' color="primary" variant="faded" className="absolute right-0 h-full rounded-full">
                        <Search />
                        {/* <Search className="text-primary"/> */}
                    </Button>
                </form>
            </div>
        </div>
    );
}
