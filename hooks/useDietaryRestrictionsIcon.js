import {GiWheat, GiMilkCarton, GiPlantRoots, GiMeat, GiFriedFish} from 'react-icons/gi'

export default function useDietaryRestrictionsIcon(restriction, index){
    switch(restriction){
        case "wheat": return <GiWheat key={index} className='dietary-icon'/>
        case "dairy": return <GiMilkCarton key={index} className='dietary-icon'/>
        case "veggie": return <GiPlantRoots key={index} className='dietary-icon'/>
        case "meat": return <GiMeat key={index} className='dietary-icon'/>
        case "fish": return <GiFriedFish key={index} className='dietary-icon'/>
    }

}