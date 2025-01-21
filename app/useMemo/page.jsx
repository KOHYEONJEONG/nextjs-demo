"use client"

import React, {useRef, useState, useMemo } from 'react';
import UserList from '../array/print'
import CreateUser from '../array/createUser';


function countActiveUsers(users){
    console.log("활성 사용자 수를 세는중...");

    //클릭된 사용자만 갯수 셈
    return users.filter(user => user.active).length;
}

export default function App() {
    const nextId = useRef(4);

    const [inputs, setInputs] = useState({
        username:'',
        email:''
    });

    const {username, email} = inputs;

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
    
    
    const onChange = e => {

        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };
    
    const onCreate = () => {
        const user = {
          id: nextId.current,
          username,
          email
        };
        setUsers(users.concat(user));
    
        setInputs({
          username: '',
          email: ''
        });
        nextId.current += 1;
      };

    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
      };

    const onToggle = id => {
        setUsers(
          users.map(user =>
            user.id === id 
                ? { ...user, active: !user.active } 
                : user
          )
        );
      };

    // input 입력할떄마다 실행되는 단점!
    // const count = countActiveUsers(users);

    //useMemo를 사용하여 최적화(users가 변화되지 않으면 비교 후 실행안됨.)
    //첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 두번째 파라미터에는 deps 배열을 넣어주면 되는데.
    // 이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 연산하며, 만약에 내용이 바뀌지 않으면 이전에 연산한 값을 재사용하게됨.
    const count = useMemo(()=> countActiveUsers(users), [users]);

    return(
        <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />  
         <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성사용자 수 : {count}</div>
        </> 
    );

}