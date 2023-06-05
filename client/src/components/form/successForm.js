import React from "react";
import styles from './successForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeSuccessFromBack } from "../../redux/actions";

const SuccessForm = ()=>{

    const successFromBack = useSelector(state => state.successFromBack);
    const dispatch = useDispatch();

    const cleanSuccessFromBackHandler = (value) => {
        return dispatch(changeSuccessFromBack(value))
    };

    return(
        <div className={styles.global}>
            <div className={styles.div}>
                <p className={styles.message}>{successFromBack}</p>
                <button className={styles.button} onClick={()=>cleanSuccessFromBackHandler('')}>Aceptar</button>
            </div>
        </div>
    )
};

export default SuccessForm;