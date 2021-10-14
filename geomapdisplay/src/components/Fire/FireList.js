import React, {useEffect, useState} from 'react'
import Fire from './Fire'
// import '../../sass/FireList.scss'

const FireList = ({dataset, filter}) => {
    const[filterBy, setFilterBy]=useState([])
    
    useEffect(()=>{
        if(filter.year){
            setFilterBy([...dataset].filter((fire) => fire.ArchiveYear === Number(filter.year)))
        } else if (filter.order ==="azUP"){
            setFilterBy([...dataset].sort((a, b) => a.Name.localeCompare(b.Name)))
        } else if (filter.order ==="start_time"){
            setFilterBy([...dataset].sort((a, b) =>new Date(b.Started) - new Date(a.Started)))
        } else if (filter.order ==="extinguish_time"){
            setFilterBy([...dataset].sort((a, b) =>new Date(b.Extinguished) - new Date(a.Extinguished)))
        }
        
    },[filter, dataset])
  return(
  <div className="card-deck">
         { filterBy? filterBy.map(fire => (
				<Fire
					key={fire.UniqueId}
					fire={fire}
					
        />
      )):""}
    </div>
  )
}
export default FireList