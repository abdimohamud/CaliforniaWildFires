import React from 'react'
import Fire from './Fire'
import '../../sass/FireList.scss'

const FireList = ({dataset, filter}) => {

  return(
    <div className="firelistcont">
         {dataset.filter((fire) => fire.ArchiveYear == filter).map(fire => (
				<Fire
					key={fire.UniqueId}
					fire={fire}
					
        />
      ))}
    </div>
  )
}
export default FireList