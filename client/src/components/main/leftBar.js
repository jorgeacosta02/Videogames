import styles from './leftBar.module.css';
import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { apiKey } from '../form/form';

import { 
    getApi,
    getDB,
    concat,
    concatToDisplay,
    changeId,
    id0,
    getDBId,
    getApiId,
    idConcat,
    idConcatToDisplay,
    changeName,
    name0,
    getApiName,
    getDBName,
    nameConcat,
    changeGenre,
    filterGenreApi,
    filterGenreDB,
    cleanGenre,
    displayApi,
    displayDB,
    currentPage0,
    nameAZ,
    nameZA,
    changeAz,
    ratingAZ,
    ratingZA,
    changeRatingAZ
    
} from "../../redux/actions";


const LeftBar =(props)=>{
    
    const dispatch = useDispatch();
    const display = useSelector(state => state.display);
    const gamesFromApi = useSelector(state => state.gamesFromApi);
    const gamesFromDB = useSelector(state => state.gamesFromDB);
    const concatened = useSelector(state => state.concatened);
    const id = useSelector(state => state.id);
    const name = useSelector(state => state.name);
    const nameConcatened = useSelector(state => state.nameConcatened);
    const az = useSelector(state => state.az);
    const ratAZ = useSelector(state => state.ratAZ);
    const genre = useSelector(state => state.genre);

    console.log('display en left bar',display);

    const start = async ()=>{
        await postGenres();
        await currentPage0Handler();
        await getApiHandler();
        await getDBHandler();
        await concatHandler();
        await concatToDisplayHandler();
    };
    
    useEffect(()=>{
        start();
    },[]);
      
    const postGenres = async () => {
        try {
          const response = await fetch('http://localhost:3001/genres',
          {
              method: 'POST',
            });
            console.log('data en postGenres', response);
        } catch (error) {
            console.log(error);
        }
    };
    
    const getApiHandler = ()=>{
        return dispatch(getApi())
    };
    
    const getDBHandler = ()=>{
        return dispatch(getDB())
    };
    
    const concatHandler = ()=>{
        return dispatch(concat())
    };
    
    const concatToDisplayHandler = ()=>{
        return dispatch(concatToDisplay())
    };
    
    const changeIdHandler = (event)=>{
        console.log('event.target.value',event.target.value)
        const value = event.target.value;
        if(typeof(value)==='string'){
            return dispatch(changeId(value));
        };
        console.log('value en changeIdHandler',value);
        console.log('id antes de dispatch de changeId', id);
    };

    const id0Handler =()=>{
        return dispatch(id0());
    };

    const getApiIdHandler = (id)=>{
        console.log('id en getApiIdHandler',id);
        return dispatch(getApiId(id));
    };

    const getDBIdHandler =(id)=>{
        console.log('id en getDBIdHandler',id);
         return dispatch(getDBId(id));
    };

    const idConcatHandler = () => {
        console.log('entrando a idConcatHandler');
        return dispatch(idConcat());
    };

    const idConcatToDisplayHandler = () => {
        console.log('entrando a idConcatToDisplayHandler');
        return dispatch(idConcatToDisplay());
    };

    const globalGetIdHandler = async (id)=>{
        console.log('id en globalGetIdHandler',id);
        if(id!==''){
            await currentPage0Handler();
            await getApiIdHandler(id);
            await getDBIdHandler(id);
            await idConcatHandler();
            await idConcatToDisplayHandler();
            return id0Handler();
        }else{
            return dispatch(id0());
        }
    };

    const changeNameHandler =(event)=>{
        const name = event.target.value;
        return dispatch(changeName(name))
    };
    
    const name0Handler =()=>{
        return dispatch(name0())
    };
    
    const getApiNameHandler =(name)=>{
        return dispatch(getApiName(name));
    };
    
    const getDBNameHandler =(name)=>{
        return dispatch(getDBName(name));
    };
    
    const nameConcatHandler =()=>{
        return dispatch(nameConcat());
    };
    
    const globalGetNameHandler = async (name)=>{
        console.log('name en globalGetNameHandler', name);
        currentPage0Handler();
        if(name!==''){
            await getApiNameHandler(name);
            await getDBNameHandler(name);
            await nameConcatHandler();
            return dispatch(name0());
        }else{
            return dispatch(name0());
        }
    };
    
    console.log('nameConcatened del reducer', nameConcatened);

    const currentPage0Handler =()=>{
        return dispatch(currentPage0())
    };

    const changeGenreHandler = (event)=>{
        const genre = event.target.value;
        return dispatch(changeGenre(genre))
    };

    const filterGenreApiHandler = (genre)=>{
        console.log('genre en filterTypeHandler de leftBar', genre)
        return dispatch(filterGenreApi(genre))
    };

    const filterGenreDBHandler = (genre)=>{
        console.log('genre en filterTypeHandler de leftBar', genre)
        return dispatch(filterGenreDB(genre))
    };

    const cleanGenreHandler =()=>{
        return dispatch(cleanGenre());
    };

    const globalFilterApiGenreHandler = async (genre)=>{
        await filterGenreApiHandler(genre);
        return cleanGenreHandler();
    };

    const globalFilterDBGenreHandler = async (genre)=>{
        await filterGenreDBHandler(genre);
        return cleanGenreHandler();
    };

    const displayApiHandler = ()=>{
        return dispatch(displayApi(gamesFromApi.length))
    };
    
    const globalDisplayApiHandler = ()=>{
        currentPage0Handler();
        displayApiHandler()
    };
    
    const displayDBHandler = ()=>{
        return dispatch(displayDB(gamesFromApi.length))
    };
    
    const globalDisplayDBHandler =()=>{
        currentPage0Handler();
        displayDBHandler()
    };
    
    const globalDisplayConcatHandler = async ()=>{
        await currentPage0Handler();
        concatHandler();
        concatToDisplayHandler();
    };
    
    const globalNameAZHandler = ()=>{
        console.log('globalNameAZHandler funciona');
        currentPage0Handler();
        if(az){
            nameAZHandler();
            changeAzHandler(false);
        }else{
            nameZAHandler();
            changeAzHandler(true);
        };
    };
    
    const changeAzHandler =(value)=>{
        console.log('changeAzHandler funciona');
        return dispatch(changeAz(value))
    };
    
    const nameAZHandler =()=>{
        console.log('nameAZHandler funciona');
        return dispatch(nameAZ())
    };
   
    const nameZAHandler =()=>{
        console.log('nameAZHandler funciona');
        return dispatch(nameZA())
    };

    const globalRatingAZHandler = ()=>{
        console.log('globalRatingAZHandler funciona');
        currentPage0Handler();
        if(ratAZ){
            ratingAZHandler();
            changeRatingAZHandler(false);
        }else{
            ratingZAHandler();
            changeRatingAZHandler(true);
        };
    };
    
    const changeRatingAZHandler =(value)=>{
        console.log('changeAZHandler funciona');
        return dispatch(changeRatingAZ(value))
    };
    
    const ratingAZHandler =()=>{
        console.log('ratingAZHandler funciona');
        return dispatch(ratingAZ())
    };
   
    const ratingZAHandler =()=>{
        console.log('ratingZAHandler funciona');
        return dispatch(ratingZA())
    };  
   

    console.log('display en leftBar 200', display);
    console.log('concatened', concatened);
    console.log('gamesFromApi', gamesFromApi);
    console.log('gamesFromDB', gamesFromDB);
   

    return(
        <div className={styles.container}>
            <label className={styles.label}>Ingrese id:</label>
            <input className={styles.input} type='text' onChange={changeIdHandler} value={id}/>
            <button className={styles.button} onClick={()=>globalGetIdHandler(id)}       
            >Buscar por el id <b>{id}</b></button><br/>
            <label className={styles.label}>Ingrese nombre:</label>

            <input className={styles.input} type='text' onChange={changeNameHandler} value={name}/>
            <button className={styles.button} onClick={()=>globalGetNameHandler(name)}       
            >Buscar por nombre </button>

             <label className={styles.label}>Seleccionar Género:</label>
            <input className={styles.input} type='text' onChange={changeGenreHandler} value={genre}/>
            <button className={styles.button} onClick={()=>globalFilterApiGenreHandler(genre)}       
            >Buscar por Género en Api </button>
            <button className={styles.button} onClick={()=>globalFilterDBGenreHandler(genre)}       
            >Buscar por Género en Base </button>

            <button className={styles.button} onClick={globalDisplayApiHandler}>Mostrar juegos de la Api</button>
            <button className={styles.button} onClick={globalDisplayDBHandler}>Mostrar juegos de la Base</button>
            <button className={styles.button} onClick={globalDisplayConcatHandler}>Mostrar todos</button>
            <button className={styles.button} onClick={globalNameAZHandler}>{az?'Ordenar por nombre A-Z':'Ordenar por nombre Z-A'}</button>
            <button className={styles.button} onClick={globalRatingAZHandler}>{ratAZ?'Ordenar por rating <->':'Ordenar por rating >-<'}</button>
         
        </div>
    )
};

export default LeftBar;