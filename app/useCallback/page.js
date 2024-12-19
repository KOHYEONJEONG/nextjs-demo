import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  
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

  const { username, email } = inputs;
  const nextId = useRef(4);

  //useCallback
  const onChange = useCallback(

    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]//함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함
  );

  const onCreate = useCallback(() => {//useCallback
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
  }, [users, username, email]);//함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함

  const onRemove = useCallback(//useCallback
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id));
    },
    [users] //함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함
  );

  const onToggle = useCallback(//useCallback
    id => {
      setUsers(
        users.map(user =>
          user.id === id 
           ? { ...user, active: !user.active }
           : user
        )
      );
    },
    [users]//함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
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

export default App;