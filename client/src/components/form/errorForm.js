import React from "react";
import styles from './errorForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeErrorFromBack } from "../../redux/actions";

const ErrorForm = ()=>{

    const errorFromBack = useSelector(state => state.errorFromBack);
    const dispatch = useDispatch();
    const cleanErrorFromBackHandler = (value) => {
        return dispatch(changeErrorFromBack(value))
    };
    return(
        <div className={styles.global}>
            <div className={styles.div}>
                <p className={styles.message}>{errorFromBack}</p>
                <button className={styles.button} onClick={()=>cleanErrorFromBackHandler('')}>Aceptar</button>
            </div>
        </div>
    )
};

export default ErrorForm;