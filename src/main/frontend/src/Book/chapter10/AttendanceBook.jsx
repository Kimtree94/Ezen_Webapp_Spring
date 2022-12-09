import React from "react";

//p300

const students =[
    {  id : 1, name:"Inje"},
    {
        id : 2,
        name:"Steve"
    },
    {
        id : 3,
        name:"bill"
    },
    {
        id : 4,
        name:"Jeff"
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((students)=>{
                return<li>{students.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;