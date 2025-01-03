"use client"
import React, { useState } from 'react';

function Counter() {

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // setNumber(number+1)
    setNumber(prevNumber => prevNumber + 1);//함수형 업데이트 사용으로 최적화됨..
  }
  const onDecrease = () => {
    // setNumber(number-1);
    setNumber(prevNumber => prevNumber - 1);//함수형 업데이트 사용으로 최적화됨..
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;