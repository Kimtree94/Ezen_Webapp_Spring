import React, {useState} from "react";


function NameForm(props){
    const [value , setValue] = useState('') //컴포넌트에서 사용되는 메모리
    const [value2 , setValue2] = useState('요청사항을 입력하세요') //컴포넌트에서 사용되는 메모리
    const [value3 , setValue3] = useState('grape') //컴포넌트에서 사용되는 메모리
    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    const handleChange2 = (e) =>{
        setValue(e.target.value2);
    }
    const handleChange3 = (e) =>{
        setValue(e.target.value3);
    }

    const handleSubmit=(e)=>{
        alert("입력한 이름은 :"+value)
    }
    const handleSubmit2=(e)=>{
        alert("입력한 요청사항 :"+value2)
        e.preventDefault();
    }
    const handleSubmit3=(e)=>{
        alert("선택한 과일은 :"+value3)
    e.preventDefault();
    }
    return(
        <form>
            <label>
                이름 : <input  value={value} onChange={handleChange} type="text"/>
            </label>
            <label>
                요청사항 : <textarea value={value2} onChange={handleChange2}></textarea>
            </label>

            <label>
                과일을 선택하세요
                <select value={value3} onChange={handleChange3}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;