import React from 'react'
import Card from './Card'

function ClientPriceCard({d}) {
    return (
        <div className="Card_grid">
        { d.map((data)=>(
          <Card d={data} key={data.id}/>
        ))}
        </div>
    )
}

export default ClientPriceCard
