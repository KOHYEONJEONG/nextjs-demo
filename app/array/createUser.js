import React from "react";

function CreateUser({ username, email, onChange, onCreate}){


    return(
        <div>
            <input
                name = "username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            ></input>
            <input  
                name = "email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            ></input>

            <button onClick={onCreate}>등록</button>
        </div>
    )

}

//부모 컴포넌트인 App에서 사용
export default CreateUser;