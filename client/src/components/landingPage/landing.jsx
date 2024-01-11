import React from "react";
import { Link } from "react-router-dom";
import styles from './landing.module.css';


const Landing =()=>{
    return(
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <h1 className={styles.homeTitle}>Página presentación Proyecto Individual Videogames Henry</h1>   
                <p className={styles.homeText}>Esta es una aplicación donde se podrán ver distintos videojuegos con su imagen, y características. Se podrá acceder a mayor cantidad de información de cada videojuego ingresando a través de cada tarjeta.</p>
                <div className={styles.divLink}>
                    <Link to='/videogames' className={styles.link}>INGRESAR</Link>
                </div>
            </div>
        </div>
    )
};

export default Landing;