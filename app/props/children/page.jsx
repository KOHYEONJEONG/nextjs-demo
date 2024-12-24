import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

export default function App() {
  return (
    <Wrapper>
      {/* isSpecial 이름만 작성하고 값을 생략한다면 true(기본값)로 설정으로 간주 */}
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
    </Wrapper>
  );
}
