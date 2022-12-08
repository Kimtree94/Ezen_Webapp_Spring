import React from "react";
import {Link} from "react-router-dom";


function BookList(props) {
    return (
        <>
            <button>
                <Link to="/book/chapter3">chapter3</Link>
            </button>
            <button>
                <Link to="/book/chapter4">chapter4</Link>
            </button>
            <button>
                <Link to="/book/chapter5">chapter5</Link>
            </button>
            <button>
                <Link to="/book/chapter6">chapter6</Link>
            </button>
            <button>
                <Link to="/book/chapter7">chapter7</Link>
            </button>
            <button>
                <Link to="/book/chapter8">chapter8</Link>
            </button>
            <button>
                <Link to="/book/chapter9">chapter9</Link>
            </button>
        </>
    );
}

export default BookList;