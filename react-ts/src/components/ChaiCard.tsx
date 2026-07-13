interface ChaiCarProp {
    name: string;
    price: number;
    isSpecial?: boolean
}

export function ChaiCard({name, price, isSpecial = false}: ChaiCarProp){
    return ( 
        <article>
            <h2>
                {name} {isSpecial && <span>S</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}