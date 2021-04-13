import React, { useEffect, useState } from 'react';
import classes from './Time.module.css'

const Time = () => {
    const [value, setValue] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setValue(new Date().toLocaleTimeString());
        }, 1000);
        // clearing interval
        return () => clearInterval(timer);
    });

    return (
        <>
            <div className={classes.time}>
                <p>{value}</p>
            </div>
        </>
    );
}

export default Time;