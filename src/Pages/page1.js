import './page1.css';
import React from "react";
import history from './history';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Demo from './Components1/demo';

function Page1() {
    ReactDOM.render(<Demo />, document.querySelector('#root'));

    return (

        <div className = "page1">
            <div className = "center">
            <h1>Covid bubble</h1>
            <h3>Login Page</h3>

            <div><Button variant="btn btn-success" onClick={() => {history.push('/page2'); window.location.reload();}}>Go to page 2</Button></div>
            </div>
        </div>

    );
}

export default Page1;
