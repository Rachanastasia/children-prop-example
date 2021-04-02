import React from 'react'
import useDietaryRestrictionsIcon from '../hooks/useDietaryRestrictionsIcon'



export default function Lists({list, type}){

   return (
       <section>
           <h2>{type}</h2>
           {list.map(item => type == 'Food' ? <ListItemFood {...item} key={item.id} /> : <ListItemBeverage {...item} key={item.id}/>)}
       </section>
   )
}

function ListItem({children, name, price, restrictions}){
    const priceIsString = typeof price === 'string'
    return (
        <div className='list-item-wrapper'>
            <div className='list-item-title-price'>
                <h3>{name}</h3>
                {priceIsString ? <span className='list-item-price'>{price}</span> : <WinePricing {...price} />}
                {restrictions && <div className='restrictions-wrapper'>{restrictions.map((r, index) => useDietaryRestrictionsIcon(r, index))}</div>}
            </div>
            {children}
        </div>
    )
}

function ListItemFood({ingredients, name, price, restrictions}){

    return (
        <ListItem name={name} price={price} restrictions={restrictions}>
                <ul className='ingredients-wrapper'> 
                    {ingredients.map((i, index) => <li key={index}>{i}</li>)}
                </ul>
        </ListItem>
    )

}


function ListItemBeverage({abv, origin, year, name, price, restrictions}){
    return (
        <ListItem name={name} price={price} restrictions={restrictions}>    
            <div className='wine-details-wrapper'>
                <h5>{origin}</h5>
                <span>{year}</span>
                <span>{abv} ABV</span>
            </div>
        </ListItem>
    )
}

function WinePricing({glass, bottle}){
    return (
        <div className='wine-pricing-wrapper'>
            <div className='pricing-item-wrapper'>
                <h6>Glass</h6>
                <span className='list-item-price'>{glass}</span>
            </div>
            <div className='pricing-item-wrapper'>
                <h6>Bottle</h6>
                <span className='list-item-price'>{bottle}</span>
            </div>
        </div>
    )
}




