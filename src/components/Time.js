import React from 'react';
import classes from './Time.module.css'

const Time = () => {
    const time = new Date();
    let minute = null;
    if(time.getMinutes()<10){
        minute = '0' + time.getMinutes()
    }else{
        minute = time.getMinutes()
    }

    return (
        <>
        <div className={classes.time}>
            <p>{time.getHours()} : {minute}</p>
        </div>
        <div className={classes.date}>
        <p>{time.getDate()} / {time.getMonth()+1} / {time.getFullYear()}</p>
        </div>
        </>
    );
}

export default Time;