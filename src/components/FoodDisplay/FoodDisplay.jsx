import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StorContext } from '../../Context/StorContext'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay({category}) {
    const {food_list} = useContext(StorContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            { food_list.map((item,index)=>{
              if(category==='All' || category===item.category){
                return(
                <FoodItem key={index} id={item._id} name={item.name} description={item.description} category={item.category} image={item.image} price={item.price} />
                )
              }
                
            })}
        </div>
    </div>
  )
}
