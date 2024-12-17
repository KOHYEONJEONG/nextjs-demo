"use client"
import React, { useState } from 'react';

//참고: https://react.vlpt.us/basic/09-multiple-inputs.html
function InputSample() {

    const [inputs, setInputs] = useState({
        name : '',
        nickname: ''
    });

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출


    const onChange = (e) => {
        const {value, name} = e.target; //우선 e.target에서 name, value를 추출출
    }

  // http://localhost:3000/InputExam1
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;