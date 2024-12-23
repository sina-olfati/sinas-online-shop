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
                        <Input variant="faded" />
                    </label>
                    {/* <input type="submit" className='absolute right-0 h-full border border-secondary rounded-full mx-2'>
                        {Search}
                    </input> */}
                    <Button isIconOnly aria-label='search' color="primary" variant="faded" type="submit" className="absolute right-0 border-0 bg-transparent hover:bg-accent scale-[0.95]">
                        <Search  />
                    </Button>
                </form>
            </div>
        </div>
    );
}
