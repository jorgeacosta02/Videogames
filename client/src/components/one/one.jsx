import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './one.module.css';
import { NavLink } from "react-router-dom";

const One = (props)=>{
    
    const display = useSelector(state=>state.display);
    const params = useParams();
    console.log('typeof(params.id)',typeof(params.id));
    console.log('params.id',params.id);
    
    let game = display.filter(game => game.id == params.id)[0];
  
    console.log('game',game);
    console.log('game.id',game.id);

    return(
        <div className={styles.div}>
            <h1 className={styles.name}>Nombre: <b>{game.name?game.name:'Sin datos.'}</b> </h1>
            <img src={game.image?game.image:game.background_image?game.background_image:'sin imagen'} alt='imagen' className={styles.image}/>
            <div className={styles.container}>
                <p>Id:   <b>{game.id}</b> </p>
                <p>Plataformas:   <b>{typeof(game.platforms)==='string'?game.platforms:game.platforms.map(obj => obj.platform.name).join(', ')}</b> </p>
                <p className={styles.description}>Descripción:   <b>{
                    game.description?
                    game.description:
                    'sin datos'}</b> </p>
                <p>Fecha de lanzamiento:   <b>{
                    game.released?
                    game.released:
                    game.releaseDate?
                    game.releaseDate:
                    'sin datos'
                }</b>
                </p>
                <p>Rating:   <b>{
                    game.rating?
                    game.rating:
                    'sin datos'
                }</b>
                </p>
                <p>Géneros:   <b>{
                    typeof(game.genres[0])!=='string'?
                    game.genres.map(g => g.name).join(', '):
                    game.genres.join(', ')
                }</b>
                </p>
            </div>
                <NavLink to='/videogames' className={styles.home}>VOLVER</NavLink>
        </div>
    )
};

export default One;