import React from 'react';

// props.children으로도 사용가능함.
// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회하면 됨.
function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {/* (상황설명) page.jsx를 보면 App컴포넌트 return값 확인
        ㄴ Wrapper 태그 내부에서 Hello 컴포넌트 두개 넣을대 브라우저 화면에서 확인 시 Hello 컴포넌트들은 보여지지 않는다. */}
      {/* 내부의 내용이 보여지기 위해서 Wrapper 컴포넌트의 파라미터로 props.cildren(또는 children)을 렌더링해야한다. */}
      {children}
    </div>
  )
}

export default Wrapper;