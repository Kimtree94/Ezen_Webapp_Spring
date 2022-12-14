import React, {useState} from "react";

export default function NameForm(props){

    // 사용자가 입력후에 호출해야하는데 문제는 사용자가 입력전에 값을 호출하고 있으니까 당연히 깡통
   // const value=document.querySelector(".input").value;
    // handleChange 이 함수 안에 넣어주던가 하기!!!
    // 렌더링 되고 나서 다시 부를수있어야함!

    const [value, setValue]=useState("");
    const [value2, setValue2]=useState("");
    const [value3, setValue3]=useState('grape');
    const handleChange=(e)=>{setValue(e.target.value);}
    const handleChange2=(e)=>{setValue2(e.target.value);}
    const handleChange3=(e)=>{setValue3(e.target.value);}
    return(
      <form>
          <label>
              이름 : <input type="text" value={value} onChange={handleChange}/>
          </label>
          <label>
              요청사항 : <textarea value={value2} onChange={handleChange2}/>
          </label>
          <label>
              과일을 선택하세요 :
              <select value={value3} onChange={handleChange3} >
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

