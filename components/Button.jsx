import React from 'react';

const Button = ({changeUser,colors,randomColor}) => {
    return (
        <div>
            <button onClick={changeUser} style={{ background: colors[randomColor] }}><i className="fas fa-chevron-right"></i></button>
        </div>
    );
};

export default Button;