import React from "react";
import { useState, useEffect } from "react";
import styles from './form.module.css';
import GenreName from "./genreName";
import { Link } from "react-router-dom";
import ErrorForm from "./errorForm";
import SuccessForm from "./successForm";
import { useDispatch, useSelector } from "react-redux";
import {
    addIdNameGenre,
    removeGenre,
    removeAllGenres,
    changeErrorFromBack,
    changeSuccessFromBack,
    searchGenres,
} from "../../redux/actions";

export const videogameURL = 'http://localhost:3001/videogames';

const Form =()=>{
    
    const dispatch = useDispatch();
    const selectedGenres = useSelector(state => state.selectedGenres);
    const errorFromBack = useSelector(state => state.errorFromBack);
    const successFromBack = useSelector(state => state.successFromBack);
    const genres = useSelector(state => state.genres);
    console.log('selectedGenres',selectedGenres);

    // const [genres, setGenres] = useState([]);

    // const searchGenres = async () => {
    //     console.log('entrando a searchGenres')
    //     try {
    //         console.log('entrando al try de searchGenres')
    //         const response = await fetch('http://localhost:3001/genres');
    //         console.log('response en el try de searchGenres', response);
    //         if (!response.ok) {
    //             throw new Error('Error en la respuesta de la solicitud');
    //         }
    //         const data = await response.json();
    //         console.log('data en searchGenres', data);
    //         setGenres(data);
    //     } catch (error) {
    //         console.error(error);
    //         console.log('Error en useEffect del form al obtener los tipos de pokemon');
    //     }
    //   };


      
    // useEffect(() => {
    //     searchGenresHandler();
    // },[]);
    
    console.log(searchGenres);
    
    const [estado,setEstado] = useState({
        name:'',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSyftxMxT5Jul0j3FOSIyT4djzuJZFf5CYw&usqp=CAU',
        description:'',
        platforms:'',
        releaseDate:'',
        rating:'',
        genreIds: []
    });

    const [errorName,setErrorName] = useState('');
    const [errorImage,setErrorImage] = useState('');    
    const [errorDescription,setErrorDescription] = useState('');
    const [errorPlatforms,setErrorPlatforms] = useState('');
    const [errorReleaseDate,setErrorReleaseDate] = useState('');
    const [errorRating,setErrorRating] = useState('');
    const [errorGenreIds,setErrorGenreIds] = useState('');
   
    let Error = true;

    if(
        estado.name
        && estado.image
        && estado.description
        && estado.platforms
        && estado.releaseDate
        && estado.rating
        && estado.genreIds.length!==0
        && !errorName
    ){
        Error = false;
    };

    const addGenreHandler =(event)=>{
        
        const selGenre = event.target.value;
        const selGenreName = event.target.options[event.target.selectedIndex].label;
        
        if(!estado.genreIds.includes(selGenre)){
            setEstado({...estado,genreIds:[...estado.genreIds,selGenre]})
            setErrorGenreIds('');
            const data = {id:selGenre, name:selGenreName}
            return dispatch(addIdNameGenre(data))
        };
        
        console.log('estado.genreIds al final dentro de genresHandler', estado.genreIds);
    }; 

    const removeGenreHandler = (id)=>{
        setEstado({...estado,genreIds:estado.genreIds.filter(genre => genre!==id)})
        dispatch(removeGenre(id))
    };

    const emptyMessage = 'Este campo debe ser completado.';
    
    // const regex = /^(.{5,20})$/;
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
    // const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    // const regexComments = /^.{1,255}$/;
      
    const nameHandler =(event)=>{
        const name = event.target.value;
        if(!regexName.test(name)){
            setErrorName('El nombre debe contener solo letras.');
        }else{
            setEstado({...estado,name:name});
            setErrorName('');
        };
    };

    const imageHandler =(event)=>{
        const value = event.target.value;
        setEstado({...estado, image:value});
        setErrorImage('');
    };
    
    const descriptionHandler =(event)=>{
        const value = event.target.value;
        setEstado({...estado, description: value});
        setErrorDescription('');
    };
    
    const platformsHandler =(event)=>{
        const value = event.target.value;
        setEstado({...estado, platforms:value});
        setErrorPlatforms('');
    };
    
    const releaseDateHandler =(event)=>{
        const value = event.target.value;
        setEstado({...estado, releaseDate:value});
        setErrorReleaseDate('');
    };
    
    const ratingHandler =(event)=>{
        const value = event.target.value;
        setEstado({...estado, rating:value});
        setErrorRating('');
    };

    const changeErrorFromBackHandler = (value) => {
        return dispatch(changeErrorFromBack(value));
    };

    const changeSuccessFromBackHandler = () => {
        const successMessage = 'Videogame cargado con éxito!!';
        return dispatch(changeSuccessFromBack(successMessage));
    };
    
    const submitHandler = async (event)=>{
        event.preventDefault();
    };

    const addDBHandler = async ()=>{
        
        try {
            const response = await fetch(videogameURL,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(estado)
            });
            const data = await response.json();
            if(response.ok){
                setEstado({
                    name:'',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSyftxMxT5Jul0j3FOSIyT4djzuJZFf5CYw&usqp=CAU',
                    description:'',
                    platforms:'',
                    releaseDate:'',
                    rating:'',
                    genreIds: []        
                });
                dispatch(removeAllGenres());
                changeSuccessFromBackHandler();
            }else{
                await changeErrorFromBackHandler(data.message);
                console.log('errorFromBack en addDBHandler', errorFromBack);
            }
        } catch (error) {
            alert('Error al enviar el formulario, por favor intente más tarde');
        }
    };

    const errorNameHandler =()=>{
        console.log('entrando a errorNameHandler');
        if(!estado.name){
            setErrorName(emptyMessage);
        };
    };

    const errorImageHandler =()=>{
        console.log('entrando a errorImageHandler');
        if(!estado.image){
            setErrorImage(emptyMessage);
        };
    };

    const errorDescriptionHandler =()=>{
        console.log('entrando a errorDescriptionHandler');
        if(!estado.description){
            setErrorDescription(emptyMessage);
        };
    };
    
    const errorPlatformsHandler =()=>{
        console.log('entrando a errorPaltformsHandler');
        if(!estado.platforms){
            setErrorPlatforms(emptyMessage);
        };
    };

    const errorReleaseDateHandler =()=>{
        console.log('entrando a errorReleaseDateHandler');
        if(!estado.releaseDate){
            setErrorReleaseDate(emptyMessage);
        };
    };

    const errorRatingHandler =()=>{
        console.log('entrando a errorRatingHandler');
        if(!estado.rating){
            setErrorRating(emptyMessage);
        };
    };

    const errorGenreIdsHandler =()=>{
        console.log('entrando a errorGenreIdsgHandler');
        if(estado.genreIds.length===0){
            setErrorGenreIds('Selecionar.');
        };
    };

    const errorMessageHandler = async ()=>{
        errorNameHandler();
        errorImageHandler();
        errorDescriptionHandler();
        errorPlatformsHandler();
        errorReleaseDateHandler();
        errorRatingHandler();
        errorGenreIdsHandler();
    };
    
    console.log('errorName en form', errorName);
    console.log('errorImage en form', errorImage);
    console.log('errorDescription en form', errorDescription);
    console.log('errorPlatforms en form', errorPlatforms);
    console.log('errorReleaseDate en form', errorReleaseDate);
    console.log('errorRating en form', errorRating);
    console.log('errorGenerrorGenreIds en form',errorGenreIds);
    console.log('estado en form', estado);
    console.log('errorFromBack fuera de addDBHandler', errorFromBack);

    return(
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.div}>
                <div className={styles.divTitle}>
                    <h1 className={styles.title}>Agregar Videojuego</h1>
                    <Link to='/videogames' className={styles.back}>VOLVER</Link>
                    <div>
                        <button
                            onClick={
                                !Error ?
                                addDBHandler
                                : errorMessageHandler
                            }
                            className={styles.submit}
                            // disabled={Error}
                        >Cargar a Base de datos</button>
                    </div>
                </div>
                <div className={styles.divData}>
                    <div className={styles.divItem}>
                        {}
                        <label className={styles.item}>Nombre:</label>
                        <input onChange={nameHandler} value={estado.name} className={styles.input} />
                        <p className={
                            errorName?
                            styles.commentError:
                            styles.comment}>{
                                errorName?
                                errorName:
                                `El nombre ingresado es: ${estado.name}`}</p>
                    </div>
                    <div className={styles.divItem}>
                        <label className={styles.item}>Url de imagen:</label>
                        <input onChange={imageHandler} value={estado.image} className={styles.input} />
                        <p className={
                            errorImage?
                            styles.commentError:
                            styles.comment}>{
                                errorImage?
                                errorImage:
                                `La url ingresada es: ${estado.image}`}</p>
                    </div>
                    <div className={styles.divItem}>
                        <label className={styles.item}>Descripción:</label>
                        <input onChange={descriptionHandler} value={estado.description} className={styles.input} />
                        <p className={
                            errorDescription?
                            styles.commentError:
                            styles.comment}>{
                            errorDescription?
                            errorDescription:
                            `La descripción ingresada es: ${estado.description}`}</p>
                    </div>
                    <div className={styles.divItem}>
                        <label className={styles.item}>Plataformas:</label>
                        <input onChange={platformsHandler} value={estado.platforms} className={styles.input} />
                        <p className={
                            errorPlatforms?
                            styles.commentError:
                            styles.comment}>{
                                errorPlatforms?
                                errorPlatforms:
                                `Las plataformas ingresadas son: ${estado.platforms}`}</p>
                    </div>
                    <div className={styles.divItem}>
                        <label className={styles.item}>Lanzamiento:</label>
                        <input onChange={releaseDateHandler} value={estado.releaseDate} className={styles.input} />
                        <p className={
                            errorReleaseDate?
                            styles.commentError:
                            styles.comment}>{
                                errorReleaseDate?
                                errorReleaseDate:
                                `El lanzamiento ingresado es: ${estado.releaseDate}`}</p>
                    </div>
                    <div className={styles.divItem}>
                        <label className={styles.item}>Rating:</label>
                        <input onChange={ratingHandler} value={estado.rating} className={styles.input} />
                        <p className={
                            errorRating?
                            styles.commentError:
                            styles.comment}>{
                                errorRating?
                            errorRating:
                            `El rating ingresado es: ${estado.rating}`}</p>
                    </div>
                </div>
                <div className={styles.selectDiv}>
                    <label className={
                        errorGenreIds?
                        styles.commentError:
                        styles.selectLabel} htmlFor="genres">{
                            errorGenreIds?
                            errorGenreIds:
                            'Géneros:'
                        }</label>
                    <select
                        className={styles.select}
                        id="genres"
                        name="genres"
                        multiple
                        value={estado.genreIds}
                        onChange={addGenreHandler}
                    >
                        {genres.map((genre) => (
                            <option
                            key={genre.id}
                            value={genre.id}
                        >
                            {genre.name}
                        </option>
                        ))}
                    </select>
                    <div className={styles.divSelect}>
                        {selectedGenres.map(genre => <GenreName
                            name={genre.name}
                            id={genre.id}
                            key={genre.id}
                            onClick={()=>removeGenreHandler(genre.id)}
                            />
                            )}
                    </div>
                </div>
            </div>
            {successFromBack && <SuccessForm/>}
            {errorFromBack && <ErrorForm/>}
        </form>
    )
};

export default Form;
