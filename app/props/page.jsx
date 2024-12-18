import React from 'react';
import Hello from './Hello';

function App() {
  return (
    // props 는 properties 의 줄임말
    <Hello2 name="react" color="red"/>
  );
}

function Hello1(props) {//props의 내부 값 조회 시 props.을 붙여야 함.
    return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
  }

function Hello2({ color, name }) { //간결한 버전
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello2;