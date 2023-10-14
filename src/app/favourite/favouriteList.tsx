 "use client"
 import React, { useEffect, useState } from 'react'
import View from './View'
import { MyImage } from './page'

const FavouriteList = ({resources}:{resources:MyImage[]}) => {
    const [initialState,setInitialState]=useState(resources)
    useEffect(()=>{
        setInitialState(resources)
    },[resources])
  return (
    <div>
       <div className='grid grid-cols-4 gap-4 p-4 '>
      {initialState.map((items ,i)=>(
        <div key={i}>
          <View src={items.public_id} tag={items.tags} func={(public_id:string)=>{
            setInitialState((current)=>current.filter((val)=>val.public_id !== public_id))
          }}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default FavouriteList
