import React, {useState, useEffect} from 'react';

const Component1 = ({time, setTime}) => {

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
            <h1 style={{backgroundColor: 'blue', padding: '10px'}}>Hi! This is Component 1</h1>
        </div>
    )
}

export default Component1;