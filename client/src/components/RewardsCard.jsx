import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'


export default function RewardsCard({tittle, image, price}) {
  return (

      <Card className={"scroll-m-20   font-extrabold tracking-tight text-balance rounded-2xl h-80  p-5 pb-0 w-55"} >  
        <img src={image} alt="" className='rounded-lg h-28 bg-cover '/>
        <h1 className='text-2xl '>{tittle}</h1>
        <div className="flex flex-col justify-end pb-4 h-full">
          <Button className="rounded-lg">{price}</Button>
        </div>
      </Card>

  )
}
