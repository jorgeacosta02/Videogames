import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './nameNotFound.module.css';
import {currentPage0, concat, concatToDisplay} from '../../redux/actions';

const NameNotFound = ()=>{

    const display = useSelector(state => state.display)
    const dispatch = useDispatch();
    
    const globalDisplayConcatHandler = async ()=>{
        await dispatch(currentPage0());
        dispatch(concat());
        dispatch(concatToDisplay());
    };

    return(
        <div className={styles.global}>
            <div className={styles.div}>
                <h1 className={styles.message}>{display}</h1>
                <button className={styles.button} onClick={globalDisplayConcatHandler}>Aceptar</button>
            </div>
        </div>
    )
};

export default NameNotFound;