import React, { useEffect } from 'react';

// function User({ user, onRemove ,onToggle}) {
  const User = React.memo(function User({ user, onRemove, onToggle }) {
                //적용을 다 하고 나서, input 을 수정 할 때 하단의 UserList 가 리렌더링이 되지 않는것을 확인해주세요.

  //첫번째 파라미터에는 함수, 
  // 두번째부터는 의존값이 들어있는 배열 deps를 넣음.
  // [] : 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출
  useEffect(()=>{
    console.log('user 값이 설정됨.')
    console.log(user);

    return () => {
      console.log('user가 바뀌기 전...');
      console.log(user);
      
    }
  }, []);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({users, onRemove, onToggle}) {

  return (
    <div>
      {users.map(user => ( 
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove} 
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);