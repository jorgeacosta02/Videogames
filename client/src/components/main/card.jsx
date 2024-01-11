import React from "react";
import { Link } from "react-router-dom";
import styles from './card.module.css';

const Card = (props)=>{
   
    return(
        <Link className={styles.card} to={`videogames/${props.id}`}>
            <img src={props.img} alt='Imagen' className={styles.img}/>
            <p className={styles.name}>Nombre: {props.name} </p>
            <p className={styles.genres}>Géneros: {props.genres}</p>
            {/* <p className={styles.genres}>Rating: {props.rating}</p> */}
        </Link>
    )
};

export default Card;
