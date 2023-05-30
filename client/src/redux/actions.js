import dotenv from 'dotenv';
export const GET_API = 'GET_API';
export const GET_DB = 'GET_DB';
export const CONCAT = 'CONCAT';
export const CONCAT_TO_DISPLAY = 'CONCAT_TO_DISPLAY';
export const CHANGE_ID = 'CHANGE_ID';
export const GET_API_ID = 'GET_API_ID';
export const GET_DB_ID = 'GET_DB_ID';
export const ID_CONCAT = 'ID_CONCAT';
export const ID_CONCAT_TO_DISPLAY = 'ID_CONCAT_TO_DISPLAY';
export const CHANGE_NAME = 'CHANGE_NAME';
export const NAME0 = 'NAME0';
export const ID0 = 'ID0';
export const GET_API_NAME = 'GET_API_NAME';
export const GET_DB_NAME = 'GET_DB_NAME';
export const NAME_CONCAT = 'NAME_CONCAT';
export const NAME_CONCAT_TO_DISPLAY = 'NAME_CONCAT_TO_DISPLAY';
export const NAME_NOT_FOUND = 'NAME_NOT_FOUND';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const CURRENT_PAGE_0 = 'CURRENT_PAGE_0';
export const UPDATE_PAGINATED = 'UPDATE_PAGINATED';
export const CHANGE_GENRE = 'CHANGE_GENRE';
export const FILTER_GENRE = 'FILTER_GENRE';
export const CLEAN_GENRE = 'CLEAN_GENRE';
export const DISPLAY_API = 'DISPLAY_API';
export const DISPLAY_DB = 'DISPLAY_DB';
export const CHANGE_AZ = 'CHANGE_AZ';
export const NAME_AZ = 'NAME_AZ';
export const NAME_ZA = 'NAME_ZA';
export const CHANGE_RATING_AZ = 'CHANGE_RATING_AZ'
export const RATING_AZ = 'RATING_AZ';
export const RATING_ZA = 'RATING_ZA';
export const ADD_ID_NAME_GENRE = 'ADD_ID_NAME_GENRE';
export const REMOVE_GENRE = 'REMOVE_GENRE';
export const REMOVE_ALL_GENRES = 'REMOVE_ALL_GENRES';
export const CHANGE_ERORR_FROM_BACK = 'CHANGE_ERORR_FROM_BACK';
export const CHANGE_SUCCESS_FROM_BACK = 'CHANGE_SUCCESS_FROM_BACK';
export const SEARCH_GENRES = 'SEARCH_GENRES';

dotenv.config();
const apiKey = process.env.REACT_APP_API_KEY;

export const getApi = () => async (dispatch) => {
    console.log('apiKey en action getApi',apiKey);
    
    const response1 = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&page_size=40&page=10`);
        const data1 = await response1.json();
        const gameList1 = data1.results;
        
        const response2 = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&page_size=40&page=20`);
        const data2 = await response2.json();
        const gameList2 = data2.results;
        
        const response3 = await fetch(
            `https://api.rawg.io/api/games?key=${apiKey}&page_size=20&page=3`);
            const data3 = await response3.json();
            const gameList3 = data3.results;
        
            const gameList = gameList1.concat(gameList2,gameList3);
            
            console.log('gameList en action getApi',gameList);
            dispatch({type:GET_API,payload:gameList});
        };
        
export const getDB = () => async dispatch => {
    await fetch('http://localhost:3001/videogames')
    .then(res => res.json())
    .then(data => {
    const formattedData = data.map(game => ({
        ...game,
        genres: game.genres.map(g => g.name)
    }));
    console.log('data en la action getDB', data)
    console.log('formattedData en la action getDB', formattedData)
    return dispatch({type:GET_DB, payload: formattedData});
        })
        .catch(err => console.log(err));
};

export const concat = ()=>{
    return {type:CONCAT}
};

export const concatToDisplay = ()=>{
    return {type: CONCAT_TO_DISPLAY}
};

export const changeId =(index)=>{
    return {type:CHANGE_ID, payload:index}
};

export const id0 =()=>{
    return {type:ID0}
};

export const getApiId = (id) => async dispatch => {
    console.log('apiKey en action getApiId',apiKey)
    console.log('id en la action getApiId', typeof(id));
    try{
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        const data = await response.json();
        console.log('data en getApiId', data);
        if(data.detail !== 'Not found.')
        return dispatch({type:GET_API_ID,payload:data})
    }catch (error){
        console.log('error en getApiId', error)
    }

};

export const getDBId = (idVideogame) => async dispatch => {
    console.log('entrando a getDBId');
    console.log('idVideogame en getDBId',idVideogame);
    try{
        console.log('dentro del try de getDBId');
        const response = await fetch(`http://localhost:3001/videogames/${idVideogame}`);
        console.log('después del fetch de getDBId');
        console.log('response en getDBId', response);
        const data = await response.json();
        console.log('data en getDBId', data);
        if(!data.error){
            return dispatch({type:GET_DB_ID, payload:data},console.log('dispatch en getDBId'))
        }

    }catch(err){
        console.log(err)
    }
};

export const idConcat = () => {
    console.log('entrando a idConcat');
    return {type: ID_CONCAT}
};

export const idConcatToDisplay = () => {
    console.log('entrando a idConcatToDisplay');
    return {type: ID_CONCAT_TO_DISPLAY}
};

export const changeName =(name)=>{
    return{type:CHANGE_NAME, payload:name}
};

export const name0 =()=>{
    return {type:NAME0}
};

export const getApiName = (name) => async dispatch => {
    try{
        console.log('name en la action getApiName', name);
        console.log('apiKey en la action getApiName', apiKey);
        return await fetch(`https://api.rawg.io/api/games?search=${name}&key=${apiKey}&page_size=15`)
        .then(r => r.json())
        .then(data => dispatch({type:GET_API_NAME, payload:data.results}))
    }catch(error){
        console.log('no se encontró videogame con ese nombre');
    };
};

export const getDBName = (name) => async dispatch => {
    console.log('name en la action getDBName', name);
    return await fetch(`http://localhost:3001/videogames/?name=${name}`)
    .then(r => r.json())
    .then(data => dispatch({type:GET_DB_NAME, payload:data}))
};

export const nameConcat =()=>{
    return {type: NAME_CONCAT}
};

export const nextPage =()=>{
    console.log('nextPage funciona');
    return{type:NEXT_PAGE}
};

export const prevPage =()=>{
    return{type:PREV_PAGE}
};

export const currentPage0 = ()=>{
    return {type:CURRENT_PAGE_0}
};

export const changeGenre =(genre)=>{
    return {type:CHANGE_GENRE, payload:genre}
};

export const filterGenre =(genre)=>{
    return {type:FILTER_GENRE, payload:genre}
};

export const cleanGenre =()=>{
    return{type:CLEAN_GENRE}
};

export const displayApi = (id)=>{
    return {type:DISPLAY_API, payload:id}
};

export const displayDB = (id)=>{
    return {type:DISPLAY_DB, payload:id}
};

export const changeAz =(value)=>{
    console.log('value en changeAz',value);
    return {type:CHANGE_AZ, payload:value}
};

export const nameAZ = ()=>{
    console.log('nameAZ funciona');
    return {type: NAME_AZ}
};

export const nameZA = ()=>{
    return {type: NAME_ZA};
};

export const changeRatingAZ =(value)=>{
    console.log('value en changeRAtingAZ',value);
    return {type:CHANGE_RATING_AZ, payload:value}
};

export const ratingAZ = ()=>{
    return {type: RATING_AZ};
};

export const ratingZA = ()=>{
    return {type: RATING_ZA};
};

export const addIdNameGenre = (data)=>{
    console.log('selGenre en actions',data);
    return {type: ADD_ID_NAME_GENRE, payload:data};
};

export const removeGenre = (id)=>{
    console.log('id en action removeType',id);
    return {type: REMOVE_GENRE, payload:id};
};

export const removeAllGenres = ()=>{
    return {type:REMOVE_ALL_GENRES};
};

export const changeErrorFromBack = (value) => {
    return {type: CHANGE_ERORR_FROM_BACK, payload: value};
};

export const changeSuccessFromBack = (value) => {
    return {type: CHANGE_SUCCESS_FROM_BACK, payload: value};
};

export const searchGenres = () => async (dispatch) => {
    console.log('entrando a searchGenres')
    try {
        console.log('entrando al try de searchGenres')
        const response = await fetch('http://localhost:3001/genres');
        console.log('response en el try de searchGenres', response);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la solicitud');
        }
        const data = await response.json();
        console.log('data en searchGenres', data);
        return dispatch({type: SEARCH_GENRES, payload: data})
    } catch (error) {
        console.error(error);
        console.log(error.message);
    }
  };