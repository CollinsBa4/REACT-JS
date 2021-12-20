import React,{useState} from 'react'
import {Tour} from './Tour'
export const Tours = ({tours}) => {
    
    return (
        <section>
        <div>
          <h1>Our Tours</h1>
        </div>
        <div>
            {
                tours.map((tour) =>{
                    return <Tour key={tour.id} {...tour}/>
                })
            }
        </div>
        </section>
    )
}
