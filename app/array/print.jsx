import React from 'react';

//참고로, 한 파일에 여러개의 컴포넌트를 선언해도 괜찮습니다.

// User
// 재사용되는 코드를 일일히 넣는게 별로 좋지 않으니, 
// 컴포넌트를 재사용 할 수 있도록 새로 만들어주겠습니다
function User({ user, onRemove ,onToggle}) {
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
}

function UserList({users, onRemove, onToggle}) {

  return (
    <div>
      {users.map(user => ( 
        <User user={user}
              key={user.id} 
              onRemove={onRemove} 
              onToggle={onToggle}
        />
      ))}
    </div>
  );
}

//부모 컴포넌트인 App에서 사용
export default UserList;