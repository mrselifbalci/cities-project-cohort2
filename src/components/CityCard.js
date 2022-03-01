import React from 'react'

export default function CityCard({city}) {

  return (
    <div className='city-card'> 
       <img src={city.imageUrl} className='city-image' alt="city"/>
       <h3>{city.cityName.toUpperCase()}</h3>
       <p>{city.description}</p>
       <a href={`/citydetails/${city.cityName}`}><button>See Details</button></a>
    </div>
  )
}
