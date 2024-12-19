"use client"

import React, {useRef, useState} from "react";
import UserList from "./print";
import CreateUser from "./createUser";

//부모 컴포넌트인 App
function App() {

    //초기값
    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        }
      ]);

    const nextId = useRef(4);  

    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    });
    const { username, email } = inputs; // 비구조화 할당을 통해 값 추출

    //input 변화감지
    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

    //등록
    const onCreate = () => {
      const user = {
        id: nextId.current,//초기값 : 4
        username,
        email
      };

        setUsers([...users, user]);
     // setUsers(users.concat(user));
  
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    };

    //수정(id호출하여 수정)
    const onToggle = id => {
      setUsers(
        
        //배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용 할 수 있음.
        users.map(user => 
          //id 값을 비교해서 id가 다르면 그대로 두고
          //같다면 active 값을 반전시도록 구현.
          user.id === id ? {...user, active: !user.active} : user
        )
      )
    }

    //삭제(id호출하여 수정)
    const onRemove = id =>{
      // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬(조건 불만족 → 제외)
      // user.id가 id인 것을 제거함.

      setUsers(users.filter(user => user.id !== id));
    }

    return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </>
    );
  }
  
  export default App;