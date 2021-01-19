import React from 'react';
import './Rectangle.css';

const Rectangle = () => {
    return (
        <div className="main-rectangle d-flex align-content-center justify-content-center flex-wrap">
            <div className="rectangle1 d-flex align-content-center justify-content-center flex-wrap">
                <div className="rectangle2 rectangle1 d-flex align-content-center justify-content-center flex-wrap">
                    <div className="rectangle3"></div>
                </div>
            </div>
        </div>
    );
};

export default Rectangle;