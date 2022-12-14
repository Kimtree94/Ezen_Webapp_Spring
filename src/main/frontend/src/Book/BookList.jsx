import React from "react";

export default function BookList(props){


    return(
      <div style={{marginTop : 100}}>
          <button><a href="/book/chapter3">chapter3</a></button>
          <button><a href="/book/chapter4">chapter4</a></button>
          <button><a href="/book/chapter5">chapter5</a></button>
          <button><a href="/book/chapter6">chapter6</a></button>
          <button><a href="/book/chapter7">chapter7</a></button>
          <button><a href="/book/chapter8">chapter8</a></button>
          <button><a href="/book/chapter9">chapter9</a></button>
          <button><a href="/book/chapter10">chapter10</a></button>
          <button><a href="/book/chapter10/NameForm">NameForm</a></button>
          <button><a href="/book/chapter10/SignUp">SignUp</a></button>
      </div>
    );
}