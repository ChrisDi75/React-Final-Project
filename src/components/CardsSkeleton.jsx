import React from 'react'
import Skeleton from 'react-loading-skeleton'


function CardsSkeleton( { cards }) {
  return  Array(cards)
  .fill(0)
  .map((_, index) => 

    <div className='card-skeleton' key={index}>
        <div className="left-col">
            <Skeleton cirlce width={180} height={220}/>
        </div>
        <div className="right-col">
            <Skeleton count={2} width={180} height={20} style={{marginBottom: '5px'}}/>
        </div>
    </div>
    
  )
}

export default CardsSkeleton
