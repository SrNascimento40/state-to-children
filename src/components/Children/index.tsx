import React, { Dispatch, SetStateAction } from 'react'
import GrandChildren from '../GrandChildren'

interface IProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;  
}

export default function Children(props:IProps) {
  return (
    <div>
        <h1>{props.count}</h1>
        <GrandChildren
            count={props.count}
            setCount={props.setCount}
        />
    </div>
  )
}
