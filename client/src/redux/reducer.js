import { itemsPerPage } from "../components/main/navBar";
import { 
    GET_API,
    GET_DB,
    CONCAT,
    CONCAT_TO_DISPLAY,
    CHANGE_ID,
    ID0,
    GET_API_ID,
    GET_DB_ID,
    ID_CONCAT,
    ID_CONCAT_TO_DISPLAY,
    CHANGE_NAME,
    NAME0,
    GET_API_NAME,
    GET_DB_NAME,
    NAME_CONCAT,
    NEXT_PAGE,
    PREV_PAGE,
    CURRENT_PAGE_0,
    CHANGE_GENRE,
    FILTER_GENRE_API,
    FILTER_GENRE_DB,
    CLEAN_GENRE,
    DISPLAY_API,
    DISPLAY_DB,
    CHANGE_AZ,
    NAME_AZ,
    NAME_ZA,
    CHANGE_RATING_AZ,
    RATING_AZ,
    RATING_ZA,
    ADD_ID_NAME_GENRE,
    REMOVE_GENRE,
    REMOVE_ALL_GENRES,
    CHANGE_ERORR_FROM_BACK,
    CHANGE_SUCCESS_FROM_BACK,
       
} from "./actions"

const initialState = {
    gamesFromApi:[],
    gamesFromDB:[],
    concatened:[],
    display:[],
    currentPage:0,
    id:'',
    idFromApi:[],
    idFromDB:[],
    idConcatened:[],
    name:'',
    nameFromApi:[],
    nameFromDB:[],
    nameConcatened:[],
    nameNotFound:false,
    orderName:[],
    az:true,
    ratAZ:true,
    genre:'',
    filteredGenre:[],
    selectedGenres:[],
    errorFromBack:'',
    successFromBack:'',
};

const reducer = (state=initialState,action)=>{
    console.log('action antes del switch',action);
    console.log('selectedGenres en el reducer', state.selectedGenres);
    switch(action.type){
        case GET_API:
            return{
                ...state,
                gamesFromApi: action.payload,
            };
            
            case GET_DB:
                console.log('GET_DB',action.payload);
            return{
                ...state,
                gamesFromDB: action.payload,
            };

        case CONCAT:
            console.log('gamesFromApi en CONCAT del reducer',state.gamesFromApi);
            console.log('gamesFromDB en CONCAT del reducer', state.gamesFromDB)
            let concat
            if(state.gamesFromDB){
                concat = state.gamesFromApi.concat(state.gamesFromDB);
            }else{
                concat = state.gamesFromApi
            };
            
            return{
                ...state,
                concatened: concat,
            };
            
        case CONCAT_TO_DISPLAY:
            return{
                ...state,
                display:state.concatened
            };

        case CHANGE_ID:
            return{
                ...state,
                id: action.payload
            };
            
        case ID0:
            return{
                ...state,
                id:''
            };
            
        case GET_API_ID:
            console.log('action.payload en GET_API_ID', action.payload);
            if(action.payload.detail==='Not found'){
                return {...state}
            }else{
                return{
                    ...state,
                    idFromApi: [action.payload]
                };
            };

        case GET_DB_ID:
            console.log('acton.payload en GET_DB_ID',action.payload);
            return{
                ...state,
                idFromDB: [action.payload]
            };
        
        case ID_CONCAT:
            console.log('state.idFromApi en ID_CONCAT', state.idFromApi);
            console.log('state.idFromDB en ID_CONCAT', state.idFromDB);
            return{
                ...state,
                idConcatened: state.idFromApi.concat(state.idFromDB)
            };

        case ID_CONCAT_TO_DISPLAY:
            console.log('state.idConcatened en ID_CONCAT_TO_DISPLAY', state.idConcatened)
            return{
                ...state,
                display: state.idConcatened,
                idFromApi: [],
                idFromDB: [],
            };

        case CHANGE_NAME:
            return{
                ...state,
                name:action.payload
            };

        case NAME0:
            return{
                ...state,
                name:''
            };

        case GET_API_NAME:
            console.log('action.payload en GET_API_NAME',action.payload);
            return{
                ...state,
                nameFromApi:action.payload
            };

        case GET_DB_NAME:
            console.log('action.payload en GET_DB_NAME',action.payload);
            return{
                ...state,
                nameFromDB:action.payload
            };

        case NAME_CONCAT:
            console.log('nameFromApi en NAME_CONCAT',state.nameFromApi);
            console.log('nameFromDB en NAME_CONCAT',state.nameFromDB);
            if(!state.nameFromApi[0] && !state.nameFromDB[0]){
                return{
                    ...state,
                    display: ['No se encontró ningún videojuego con el nombre solicitado.']
                }
            }else{
                return{
                    ...state,
                    display: state.nameFromApi.concat(state.nameFromDB)
                };
            }
               
        case NEXT_PAGE:
            console.log('case NEXT_PAGE funciona');
            return{
                ...state,
                currentPage: state.currentPage += (1*itemsPerPage),
            };

        case PREV_PAGE:
            return{
                ...state,
                currentPage: state.currentPage -= (1*itemsPerPage)
            };

        case CURRENT_PAGE_0:
            return{
                ...state,
                currentPage:0
            };

        case CHANGE_GENRE:
            return{
                ...state,
                genre: action.payload
            };

        case FILTER_GENRE_API:
            console.log('action.payload en FILTER_GENRE_API',action.payload)
            console.log('state.gamesFromApi',state.gamesFromApi)
            
            return{
                ...state,
                display: state.gamesFromApi.filter(
                    (game) => game.genres.some((genre) => genre.name.toLowerCase() === action.payload.toLowerCase()))
            };

        case FILTER_GENRE_DB:
            const juegosFiltrados = state.gamesFromDB.filter((game) => {
            return game.genres.some((genre) => genre.toLowerCase() === action.payload.toLowerCase());
            });

            return {
                ...state,
                display: juegosFiltrados
            };

        case CLEAN_GENRE:
            return{
                ...state,
                genre: ''
            };

        case DISPLAY_API:
            return{
                ...state,
                display: [...state.concatened.slice(0,action.payload)]
            };

        case DISPLAY_DB:
            console.log('reducer display_db')
            return{
                ...state,
                display: [...state.concatened.slice(action.payload)]
            };
                
        case CHANGE_AZ:
            return{
                ...state,
                az: action.payload
            };
            
        case NAME_AZ:
            console.log('NAME_AZ funciona al inicio');
            console.log('state.display en reducer al inicio de NAME_AZ',state.display);
            
            let nameAuxAz = [...state.display];
            state.display = [];

            return{
                ...state,
                display: nameAuxAz.sort((a,b)=>{
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return -1;
                    }else if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return +1;
                    }else{
                        return 0;
                    };
                }),
            };

        case NAME_ZA:
            console.log('NAME_AZ funciona al inicio');
            console.log('state.display en reducer al inicio de NAME_ZA',state.display);
            
            let nameAuxZa = [...state.display];
            state.display = [];

            return{
                ...state,
                display: nameAuxZa.sort((a,b)=>{
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return +1;
                    }else if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }else{
                        return 0;
                    };
                }),
            };

            case CHANGE_RATING_AZ:
                return{
                    ...state,
                    ratAZ: action.payload
                };
                
            case RATING_AZ:
                console.log('RATING_AZ funciona al inicio');
                console.log('state.display en reducer al inicio de RATING_AZ',state.display);
                
                let ratingAuxAz = [...state.display];
                state.display = [];
    
                return{
                    ...state,
                    display: ratingAuxAz.sort((a,b)=>{
                        if(parseFloat(a.rating) < parseFloat(b.rating)){
                            return -1;
                        }else if(parseFloat(a.rating) > parseFloat(b.rating)){
                            return +1;
                        }else{
                            return 0;
                        };
                    }),
                };
    
            case RATING_ZA:
                console.log('NAME_AZ funciona al inicio');
                console.log('state.display en reducer al inicio de RATING_ZA',state.display);
                
                let ratingAuxZa = [...state.display];
                state.display = [];
    
                return{
                    ...state,
                    display: ratingAuxZa.sort((a,b)=>{
                        if(parseFloat(a.rating) < parseFloat(b.rating)){
                            return +1;
                        }else if(parseFloat(a.rating) > parseFloat(b.rating)){
                            return -1;
                        }else{
                            return 0;
                        };
                    }),
                };

        case ADD_ID_NAME_GENRE:
            return {
                ...state,
                selectedGenres:[ ...state.selectedGenres, action.payload ],
            };

        case REMOVE_GENRE:
            console.log('action.payload en REMOVE_GENRE del reducer ',action.payload);
            return {
                ...state,
                selectedGenres: state.selectedGenres.filter(genre => genre.id !== action.payload)
            };

        case REMOVE_ALL_GENRES:
            return {
                ...state,
                selectedGenres: []
            };

        case CHANGE_ERORR_FROM_BACK:
            return {
                ...state,
                errorFromBack: action.payload
            };

        case CHANGE_SUCCESS_FROM_BACK:
            return {
                ...state,
                successFromBack: action.payload
            };

        default:
            return{
                ...state,

            };
    };
};

export default reducer;