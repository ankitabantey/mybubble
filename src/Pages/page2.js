import './page2.css';
import React from "react";
import { Button } from 'react-bootstrap';
import history from './history';
/* Page 2 */


function page2() {
    return ( 
        <div className = "chat">
            <h5>Today's Covid Risk</h5>
            <z>73%<br></br></z>
            <Button variant="btn btn-success" onClick={() => {history.push('/page3'); window.location.reload();}}>Click for page3</Button>
             {/* Dropdown menu */}
             <label for="cars">How many people have you seen in the last 2 weeks?</label>

            <select name="cars" id="cars">
            <option value="audi"></option>
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="mercedes">3</option>
            <option value="mercedes">4</option>
            </select>
        </div>
    );
}

export default page2;