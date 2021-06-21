import React, {useState, useEffect} from 'react';

const Component2 = ({time, setTime}) => {

    useEffect( () => {
        const initTime = new Date().getTime() / 1000;
        setTime(0);
        return( () => {
            const exitTime = new Date().getTime() / 1000;
            setTime(exitTime-initTime);
        } );
    }, [] );
    return (
        <div>
            <h1 style={{backgroundColor: 'green', padding: '10px'}}>Hi! This is Component 2</h1>
        </div>
    )
}

export default  Component2;