import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navBar.module.css';
import { useDispatch,useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";


export const itemsPerPage = 15;

const NavBar =(props)=>{
    
    const currentPage = useSelector(state=>state.currentPage);
    const display = useSelector(state=>state.display);
    const dispatch = useDispatch();
    
    const nextHandler =()=>{
        if(currentPage+itemsPerPage<display.length)
        return dispatch(nextPage(),console.log('nextHandler funciona'));
    };

    const prevHandler =()=>{
        if(currentPage>0)
        return dispatch(prevPage());
    };

    return(
        <div className={styles.div}>
            <h1 className={styles.title}>Aplicación Videogames Henry</h1>
            <div className={styles.pageDiv}>
                <button onClick={prevHandler}className={styles.pageBut}>{'<<Prev'}</button>
                <p className={styles.page}>Página: {(currentPage/itemsPerPage)+1}</p>
                <button onClick={nextHandler} className={styles.pageBut}>{'Próx>>'}</button>
            </div>
            <div className={styles.rightDiv}>
                <NavLink to='/' className={styles.landing}>INICIO</NavLink>
                <NavLink to='/form' className={styles.landing}>AGREGAR</NavLink>
            </div>
        </div>
    )
};

export default NavBar;