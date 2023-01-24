import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;  
}

export default function GrandChildren(props:IProps) {
  return (
    <button onClick={() => props.setCount(props.count + 2)}>
      Soma 2
    </button>
  );
}
