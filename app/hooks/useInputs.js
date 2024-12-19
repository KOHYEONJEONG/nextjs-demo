import {useState, useCallback} from 'react';

//커스텀 Hooks 를 만들 때에는 보통 이렇게 use 라는 키워드로 시작
function useInputs(initialForm){

    const [form, setForm] = useState(initialForm);

    //change
    const onChange = useCallback(e => {
        const {name, value} = e.target;

        setForm(form => ({...form, [name]:value}));
    }, []);

    const reset = useCallback(()=> setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;