import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" style={{marginTop : '100px'}}>
            <Link to="/rectangle">
                <button onClick="handleRectangle" type="button" class="btn btn-primary btn-lg w-50 mx-auto mt-3">Rectangle</button>
            </Link>
            <br/>

            <Link to="/numberSplit">
                <button onClick="handleNumber" type="button" class="btn btn-secondary btn-lg w-50 mx-auto mt-3">Number Split</button>
            </Link>
             <br/>

             <Link to="/smallLarge">
                <button type="button" class="btn btn-success btn-lg w-50 mx-auto mt-3">Smallest & Largest Number</button> 
             </Link>
            <br/>

            <Link to="/trianglesequence">
                <button type="button" class="btn btn-danger btn-lg w-50 mx-auto mt-3">Triangle Number Sequence</button>
            </Link>
            
        </div>
    );
};

export default Home;