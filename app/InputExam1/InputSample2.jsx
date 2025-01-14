"use client"
import React, { useState, useRef } from 'react';

//참고: https://react.vlpt.us/basic/09-multiple-inputs.html
function InputSample() {


    const nameInput = useRef(null);// INPUT 박스 포커스하기 위해서 생성
                                   //useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정

    const [inputs, setInputs] = useState({
        name : '',
        nickname: ''
    });

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출


    const onChange = (e) => {
        const {value, name} = e.target; //우선 e.target에서 name, value를 추출
   
        //주의!! inputs[name] = value; 리액트에서 이런식으로 수정하면 절대 안됨!
        
        //그렇다면? 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용
        setInputs({
            ...inputs, //(스프레드 문법 : 불변성을 지킨다)기존의 input 객체를 복사한 뒤
            [name]:value //name 키를 가진 값을 value로 설정
        });

        
    };

    const onReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })

        //초기화 후 버튼에 포커스 가는걸 방지
        nameInput.current.focus();
      };
 

  // http://localhost:3000/InputExam1
  return (
    <div>
                                                                            {/*포커스 잡히기 위해 설정 ->  ref={nameInput} */}
      <input name="name" placeholder="이름" onChange={onChange} value={name}  ref={nameInput}/>  
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