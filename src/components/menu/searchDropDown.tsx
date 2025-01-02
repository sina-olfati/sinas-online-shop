
const items = [
    1,2,3,4,5,6,7
]


export function SearchDropDown () {

    return (
        <div className="border border-primary absolute w-full mt-2 overflow-auto rounded-2xl max-h-52 bg-secondary z-50 flexflex-col">
            {items.map((product) => 
                <div key={product} className="border border-primary p-3">
                    name
                </div>
            )}
        </div>
    )
}