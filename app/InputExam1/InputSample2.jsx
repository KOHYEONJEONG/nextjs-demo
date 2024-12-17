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
   
        //주의!! inputs[name] = value; 리액트에서 이런식으로 수정하면 절대 안됨!
        
        //그렇다면? 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용
        setInputs({
            ...inputs, //(스프레드 문법 : 불변성을 지킨다)기존의 input 객체를 복사한 뒤
            [name]:value //name 키를 가진 값을 value로 설정정
        });

        
    };

    const onReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })
      };
    

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