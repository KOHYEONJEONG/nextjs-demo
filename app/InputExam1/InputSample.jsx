"use client"
import React, { useState } from 'react';

function InputSample() {

  const [text, setText] = useState('');

  const onChange = (e)=>{
    //input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
    setText(e.target.value);//e.target.value를 조회하면 현재 input의 value값을 알 수 있다.
  }

  const onReset = () => {
    setText('');
  };

  // http://localhost:3000/InputExam1
  return (
    <div>
      <input onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;