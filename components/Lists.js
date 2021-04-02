import React from 'react'



export default function Lists({list, type}){

   return (
       <section>
           <h2>{type}</h2>
           {list.map(item => type == 'Food' ? <ListItemFood {...item} key={item.id} /> : <ListItemBeverage {...item} key={item.id}/>)}
       </section>
   )
}

export function ListItem({children, name, price}){
    return (
        <div className='list-item-wrapper'>
            <div className='list-item-title-price'>
                <h3>{name}</h3>
                <span className='list-item-price'>{price}</span>
            </div>
            {children}
        </div>
    )
}

export function ListItemFood({ingredients, name, price}){

    return (
        <ListItem name={name} price={price}>
                <ul className='ingredients-wrapper'> 
                    {ingredients.map((i, index) => <li key={index}>{i}</li>)}
                </ul>
        </ListItem>
    )

}


export function ListItemBeverage({abv, origin, year, name, price}){
    return (
        <ListItem name={name} price={price}>    
            <div className='wine-details-wrapper'>
                <h5>{origin}</h5>
                <span>{year}</span>
                <span>{abv} ABV</span>
            </div>
        </ListItem>
    )
}


