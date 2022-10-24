import React from 'react';
import users from '../users.json'
import Button from './Button';

const QuoteBox = ({ index, changeUser, colors, randomColor }) => {

    return (
        <div className="card" style={{ background: "white", color: colors[randomColor] }}>
            <div className="quote">
                <i className="fa-solid fa-quote-left"></i>
                <p>{users[index].quote}</p>
            </div>
            <p className='author'>{users[index].author}</p>
            <Button changeUser={changeUser} colors={colors} randomColor={randomColor}/>
        </div>

    );
};

export default QuoteBox;