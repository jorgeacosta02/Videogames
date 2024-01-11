import React from "react";
import styles from './genreName.module.css';

const GenreName = (props)=>{

    return(
        <div className={styles.div}>
            <p className={styles.name}>{props.name}</p>
            <button className={styles.button} onClick={props.onClick}>X</button>
        </div>
    )
};

export default GenreName;