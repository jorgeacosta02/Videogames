(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,a,n){e.exports={cards:"cards_cards__3XB3h"}},136:function(e,a,n){e.exports=n(258)},141:function(e,a,n){},142:function(e,a,n){},154:function(e,a){},160:function(e,a){},162:function(e,a){},173:function(e,a){},175:function(e,a){},19:function(e,a,n){e.exports={div:"navBar_div__30WYG",title:"navBar_title__zPr-Z",pageDiv:"navBar_pageDiv__8YdB7",pageBut:"navBar_pageBut__3ESE_",page:"navBar_page__1gnuf",rightDiv:"navBar_rightDiv__2nhWY",landing:"navBar_landing__1fsR8",form:"navBar_form__2Te9N"}},2:function(e,a,n){e.exports={form:"form_form__3jkhN",container:"form_container__1lA8k",divTitle:"form_divTitle__UoROd",title:"form_title__3QOzG",buttonsDiv:"form_buttonsDiv__2_zpp",submit:"form_submit__g8ubl",back:"form_back__EpT5y",divUnder:"form_divUnder__ezfGk",divData:"form_divData__2GZHv",divItem:"form_divItem__1ReqY",item:"form_item__3XqZR",input:"form_input__3UIvf",comment:"form_comment__3XRck",commentError:"form_commentError__25C6r",selectDiv:"form_selectDiv__1aO7f",selectLabel:"form_selectLabel__19MIg",select:"form_select__1XJIk",divSelect:"form_divSelect__1isJ3",message:"form_message__1JhZa"}},202:function(e,a){},204:function(e,a){},205:function(e,a){},210:function(e,a){},212:function(e,a){},218:function(e,a){},220:function(e,a){},239:function(e,a){},251:function(e,a){},254:function(e,a){},258:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(50),l=n.n(r),c=(n(141),n(142),n(6)),s=n(11),i=n(26),m=n.n(i);var d=()=>o.a.createElement("div",{className:m.a.home},o.a.createElement("div",{className:m.a.homeContainer},o.a.createElement("h1",{className:m.a.homeTitle},"P\xe1gina presentaci\xf3n Proyecto Individual Videogames Henry"),o.a.createElement("p",{className:m.a.homeText},"Esta es una aplicaci\xf3n donde se podr\xe1n ver distintos videojuegos con su imagen, y caracter\xedsticas. Se podr\xe1 acceder a mayor cantidad de informaci\xf3n de cada videojuego ingresando a trav\xe9s de cada tarjeta."),o.a.createElement("div",{className:m.a.divLink},o.a.createElement(s.b,{to:"/videogames",className:m.a.link},"INGRESAR")))),g=n(19),p=n.n(g),_=n(4),u=n(133),E=n.n(u),N=n(2),y=n.n(N),A=n(51),f=n.n(A);var b=e=>o.a.createElement("div",{className:f.a.div},o.a.createElement("p",{className:f.a.name},e.name),o.a.createElement("button",{className:f.a.button,onClick:e.onClick},"X")),v=n(41),C=n.n(v);var D=()=>{const e=Object(_.c)(e=>e.errorFromBack),a=Object(_.b)();return o.a.createElement("div",{className:C.a.global},o.a.createElement("div",{className:C.a.div},o.a.createElement("p",{className:C.a.message},e),o.a.createElement("button",{className:C.a.button,onClick:()=>(e=>a(j(e)))("")},"Aceptar")))},h=n(42),I=n.n(h);var G=()=>{const e=Object(_.c)(e=>e.successFromBack),a=Object(_.b)();return o.a.createElement("div",{className:I.a.global},o.a.createElement("div",{className:I.a.div},o.a.createElement("p",{className:I.a.message},e),o.a.createElement("button",{className:I.a.button,onClick:()=>(e=>a(k(e)))("")},"Aceptar")))};const O="https://videogames-backend-95zt.onrender.com";var B=()=>{const e=Object(_.b)(),a=Object(_.c)(e=>e.selectedGenres),n=Object(_.c)(e=>e.errorFromBack),r=Object(_.c)(e=>e.successFromBack),l=Object(_.c)(e=>e.genres);console.log("selectedGenres",a),console.log(P);const[c,i]=Object(t.useState)({name:"",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSyftxMxT5Jul0j3FOSIyT4djzuJZFf5CYw&usqp=CAU",description:"",platforms:"",releaseDate:"",rating:"",genreIds:[]}),[m,d]=Object(t.useState)(""),[g,p]=Object(t.useState)(""),[u,E]=Object(t.useState)(""),[N,A]=Object(t.useState)(""),[f,v]=Object(t.useState)(""),[C,h]=Object(t.useState)(""),[I,B]=Object(t.useState)("");let T=!0;c.name&&c.image&&c.description&&c.platforms&&c.releaseDate&&c.rating&&0!==c.genreIds.length&&!m&&(T=!1);const S="Este campo debe ser completado.",H=/^[A-Za-z\xd1\xf1\xc1\xe1\xc9\xe9\xcd\xed\xd3\xf3\xda\xfa\xdc\xfc\s]*$/;return console.log("errorName en form",m),console.log("errorImage en form",g),console.log("errorDescription en form",u),console.log("errorPlatforms en form",N),console.log("errorReleaseDate en form",f),console.log("errorRating en form",C),console.log("errorGenerrorGenreIds en form",I),console.log("gameContent en form",c),console.log("errorFromBack fuera de addDBHandler",n),o.a.createElement("form",{onSubmit:async e=>{e.preventDefault()},className:y.a.form},o.a.createElement("div",{className:y.a.container},o.a.createElement("div",{className:y.a.divTitle},o.a.createElement("h1",{className:y.a.title},"Agregar Videojuego"),o.a.createElement("div",{className:y.a.buttonsDiv},o.a.createElement(s.b,{to:"/videogames",className:y.a.back},"VOLVER"),o.a.createElement("button",{onClick:T?async()=>{console.log("entrando a errorNameHandler"),c.name||d(S),console.log("entrando a errorImageHandler"),c.image||p(S),console.log("entrando a errorDescriptionHandler"),c.description||E(S),console.log("entrando a errorPaltformsHandler"),c.platforms||A(S),console.log("entrando a errorReleaseDateHandler"),c.releaseDate||v(S),console.log("entrando a errorRatingHandler"),c.rating||h(S),console.log("entrando a errorGenreIdsgHandler"),0===c.genreIds.length&&B("Selecionar.")}:async()=>{try{const t=await fetch("".concat(O,"/videogames"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}),o=await t.json();t.ok?(i({name:"",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSyftxMxT5Jul0j3FOSIyT4djzuJZFf5CYw&usqp=CAU",description:"",platforms:"",releaseDate:"",rating:"",genreIds:[]}),e(R()),e(k("Videogame cargado con \xe9xito!!"))):(await(a=>e(j(a)))(o.message),console.log("errorFromBack en addDBHandler",n))}catch(a){alert("Error al enviar el formulario, por favor intente m\xe1s tarde")}},className:y.a.submit},"Cargar a DB"))),o.a.createElement("div",{className:y.a.divUnder},o.a.createElement("div",{className:y.a.divData},o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Nombre:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;H.test(a)?(i({...c,name:a}),d("")):d("El nombre debe contener solo letras.")},value:c.name,className:y.a.input}),o.a.createElement("p",{className:m?y.a.commentError:y.a.comment},m||"El nombre ingresado es: ".concat(c.name))),o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Url de imagen:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;i({...c,image:a}),p("")},value:c.image,className:y.a.input}),o.a.createElement("p",{className:g?y.a.commentError:y.a.comment},g||"La url ingresada es: ".concat(c.image))),o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Descripci\xf3n:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;i({...c,description:a}),E("")},value:c.description,className:y.a.input}),o.a.createElement("p",{className:u?y.a.commentError:y.a.comment},u||"La descripci\xf3n ingresada es: ".concat(c.description))),o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Plataformas:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;i({...c,platforms:a}),A("")},value:c.platforms,className:y.a.input}),o.a.createElement("p",{className:N?y.a.commentError:y.a.comment},N||"Las plataformas ingresadas son: ".concat(c.platforms))),o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Lanzamiento:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;i({...c,releaseDate:a}),v("")},value:c.releaseDate,className:y.a.input}),o.a.createElement("p",{className:f?y.a.commentError:y.a.comment},f||"El lanzamiento ingresado es: ".concat(c.releaseDate))),o.a.createElement("div",{className:y.a.divItem},o.a.createElement("label",{className:y.a.item},"Rating:"),o.a.createElement("input",{onChange:e=>{const a=e.target.value;i({...c,rating:a}),h("")},value:c.rating,className:y.a.input}),o.a.createElement("p",{className:C?y.a.commentError:y.a.comment},C||"El rating ingresado es: ".concat(c.rating)))),o.a.createElement("div",{className:y.a.selectDiv},o.a.createElement("label",{className:I?y.a.commentError:y.a.selectLabel,htmlFor:"genres"},I||"G\xe9neros:"),o.a.createElement("select",{className:y.a.select,id:"genres",name:"genres",multiple:!0,value:c.genreIds,onChange:a=>{const n=a.target.value,t=a.target.options[a.target.selectedIndex].label;if(!c.genreIds.includes(n))return i({...c,genreIds:[...c.genreIds,n]}),B(""),e(F({id:n,name:t}));console.log("gameContent.genreIds al final dentro de genresHandler",c.genreIds)}},l.slice(1).map(e=>o.a.createElement("option",{key:e.id,value:e.id},e.name))),o.a.createElement("div",{className:y.a.divSelect},a.map(a=>o.a.createElement(b,{name:a.name,id:a.id,key:a.id,onClick:()=>(a=>{i({...c,genreIds:c.genreIds.filter(e=>e!==a)}),e(w(a))})(a.id)})))))),r&&o.a.createElement(G,null),n&&o.a.createElement(D,null))};E.a.config();const T="898b7edb24b448c1b6172564ca6c6c20",F=e=>(console.log("selGenre en actions",e),{type:"ADD_ID_NAME_GENRE",payload:e}),w=e=>(console.log("id en action removeType",e),{type:"REMOVE_GENRE",payload:e}),R=()=>({type:"REMOVE_ALL_GENRES"}),j=e=>({type:"CHANGE_ERORR_FROM_BACK",payload:e}),k=e=>({type:"CHANGE_SUCCESS_FROM_BACK",payload:e}),P=()=>async e=>{console.log("entrando a searchGenres");try{console.log("entrando al try de searchGenres");const n=await fetch("".concat(O,"/genres"));if(console.log("response en el try de searchGenres",n),!n.ok)throw new Error("Error en la respuesta de la solicitud");const t=await n.json();return console.log("data en searchGenres",t),e({type:"SEARCH_GENRES",payload:t})}catch(a){console.error(a),console.log(a.message)}};var S=e=>{const a=Object(_.c)(e=>e.currentPage),n=Object(_.c)(e=>e.display),t=Object(_.b)();return o.a.createElement("div",{className:p.a.div},o.a.createElement("h1",{className:p.a.title},"Aplicaci\xf3n Videogames Henry"),o.a.createElement("div",{className:p.a.pageDiv},o.a.createElement("button",{onClick:()=>{if(a>0)return t({type:"PREV_PAGE"})},className:p.a.pageBut},"<<Prev"),o.a.createElement("p",{className:p.a.page},"P\xe1gina: ",a/15+1),o.a.createElement("button",{onClick:()=>{if(a+15<n.length)return t((console.log("nextPage funciona"),{type:"NEXT_PAGE"}),console.log("nextHandler funciona"))},className:p.a.pageBut},"Pr\xf3x>>")),o.a.createElement("div",{className:p.a.rightDiv},o.a.createElement(s.c,{to:"/",className:p.a.landing},"INICIO"),o.a.createElement(s.c,{to:"/form",className:p.a.landing},"AGREGAR")))},H=n(43),L=n.n(H);var M=e=>o.a.createElement(s.b,{className:L.a.card,to:"videogames/".concat(e.id)},o.a.createElement("img",{src:e.img,alt:"Imagen",className:L.a.img}),o.a.createElement("p",{className:L.a.name},"Nombre: ",e.name," "),o.a.createElement("p",{className:L.a.genres},"G\xe9neros: ",e.genres)),Z=n(44),x=n.n(Z);var z=()=>{const e=Object(_.c)(e=>e.display),a=Object(_.b)();return o.a.createElement("div",{className:x.a.global},o.a.createElement("div",{className:x.a.div},o.a.createElement("h1",{className:x.a.message},e),o.a.createElement("button",{className:x.a.button,onClick:async()=>{await a({type:"CURRENT_PAGE_0"}),a({type:"CONCAT"}),a({type:"CONCAT_TO_DISPLAY"})}},"Aceptar")))},Y=n(134),V=n.n(Y);var U=e=>{let{display:a}=e;console.log("display in Cards",a);const n=Object(_.c)(e=>e.currentPage),t=n+15,r=[...a.slice(n,t)];return o.a.createElement("div",{className:V.a.cards},"string"===typeof a[0]?o.a.createElement(z,null):r.map(e=>o.a.createElement(M,{img:e.image?e.image:e.background_image,name:e.name,id:e.id,key:e.id,genres:"string"!==typeof e.genres[0]?e.genres.map(e=>e.name).join(", "):e.genres.join(", "),rating:e.rating})))},J=n(9),X=n.n(J);var K=e=>{const a=Object(_.b)(),n=Object(_.c)(e=>e.display),r=Object(_.c)(e=>e.gamesFromApi),l=Object(_.c)(e=>e.id),c=Object(_.c)(e=>e.name),s=Object(_.c)(e=>e.nameConcatened),i=Object(_.c)(e=>e.az),m=Object(_.c)(e=>e.ratAZ),d=Object(_.c)(e=>e.genre),g=Object(_.c)(e=>e.genres);console.log("genres en leftBar",g),console.log("display en left bar",n);Object(t.useEffect)(()=>{(async()=>{await p(),await u(),await F(),await E(),await N(),await y(),await A()})()},[]);const p=async()=>{try{const a=await fetch("".concat(O,"/genres"),{method:"POST"});console.log("data en postGenres",a)}catch(e){console.log(e)}},u=()=>{a(P())},E=()=>a(async e=>{console.log("apiKey en action getApi",T);const a=await fetch("https://api.rawg.io/api/games?key=".concat(T,"&page_size=40&page=10")),n=(await a.json()).results,t=await fetch("https://api.rawg.io/api/games?key=".concat(T,"&page_size=40&page=20")),o=(await t.json()).results,r=await fetch("https://api.rawg.io/api/games?key=".concat(T,"&page_size=20&page=3")),l=(await r.json()).results,c=n.concat(o,l);console.log("gameList en action getApi",c),e({type:"GET_API",payload:c})}),N=()=>a(async e=>{await fetch("".concat(O,"/videogames")).then(e=>e.json()).then(a=>{const n=a.map(e=>({...e,genres:e.genres.map(e=>e.name)}));return console.log("data en la action getDB",a),console.log("formattedData en la action getDB",n),e({type:"GET_DB",payload:n})}).catch(e=>console.log(e))}),y=()=>a({type:"CONCAT"}),A=()=>a({type:"CONCAT_TO_DISPLAY"}),f=e=>(console.log("id en getApiIdHandler",e),a((e=>async a=>{console.log("apiKey en action getApiId",T),console.log("id en la action getApiId",typeof e);try{const t=await fetch("https://api.rawg.io/api/games/".concat(e,"?key=").concat(T)),o=await t.json();if(console.log("data en getApiId",o),"Not found."!==o.detail)return a({type:"GET_API_ID",payload:o})}catch(n){console.log("error en getApiId",n)}})(e))),b=e=>(console.log("id en getDBIdHandler",e),a((e=>async a=>{console.log("entrando a getDBId"),console.log("idVideogame en getDBId",e);try{console.log("dentro del try de getDBId");const t=await fetch("".concat(O,"/videogames/").concat(e));console.log("despu\xe9s del fetch de getDBId"),console.log("response en getDBId",t);const o=await t.json();if(console.log("data en getDBId",o),!o.error)return a({type:"GET_DB_ID",payload:o},console.log("dispatch en getDBId"))}catch(n){console.log(n)}})(e))),v=()=>(console.log("entrando a idConcatHandler"),a((console.log("entrando a idConcat"),{type:"ID_CONCAT"}))),C=()=>(console.log("entrando a idConcatToDisplayHandler"),a((console.log("entrando a idConcatToDisplay"),{type:"ID_CONCAT_TO_DISPLAY"}))),D=async e=>(console.log("id en globalGetIdHandler",e),""!==e?(await F(),await f(e),await b(e),await v(),await C(),a({type:"ID0"})):a({type:"ID0"})),h=()=>a({type:"NAME0"}),I=e=>a((e=>async a=>{try{return console.log("name en la action getApiName",e),console.log("apiKey en la action getApiName",T),await fetch("https://api.rawg.io/api/games?search=".concat(e,"&key=").concat(T,"&page_size=15")).then(e=>e.json()).then(e=>a({type:"GET_API_NAME",payload:e.results}))}catch(n){console.log("no se encontr\xf3 videogame con ese nombre")}})(e)),G=e=>a((e=>async a=>(console.log("name en la action getDBName",e),await fetch("".concat(O,"/videogames/?name=").concat(e)).then(e=>e.json()).then(e=>a({type:"GET_DB_NAME",payload:e}))))(e)),B=async e=>(console.log("name en globalGetNameHandler",e),F(),""!==e?(await F(),await I(e),await G(e),await a({type:"NAME_CONCAT"}),h()):h());console.log("nameConcatened del reducer",s);const F=()=>a({type:"CURRENT_PAGE_0"}),w=async e=>(await F(),await(e=>(console.log("genre en filterTypeHandler de leftBar",e),a((e=>({type:"FILTER_GENRE",payload:e}))(e))))(e),a({type:"CLEAN_GENRE"})),R=e=>(console.log("changeAzHandler funciona"),a((e=>(console.log("value en changeAz",e),{type:"CHANGE_AZ",payload:e}))(e))),j=()=>(console.log("nameAZHandler funciona"),a((console.log("nameAZ funciona"),{type:"NAME_AZ"}))),k=()=>(console.log("nameAZHandler funciona"),a({type:"NAME_ZA"})),S=e=>(console.log("changeAZHandler funciona"),a((e=>(console.log("value en changeRAtingAZ",e),{type:"CHANGE_RATING_AZ",payload:e}))(e))),H=()=>(console.log("ratingAZHandler funciona"),a({type:"RATING_AZ"})),L=()=>(console.log("ratingZAHandler funciona"),a({type:"RATING_ZA"}));return console.log("genre en leftBar",d),o.a.createElement("div",{className:X.a.container},o.a.createElement("label",{className:X.a.label},"Ingrese id:"),o.a.createElement("input",{className:X.a.input,type:"text",onChange:e=>{console.log("event.target.value",e.target.value);const n=e.target.value;if("string"===typeof n)return a((e=>({type:"CHANGE_ID",payload:e}))(n));console.log("value en changeIdHandler",n),console.log("id antes de dispatch de changeId",l)},value:l}),o.a.createElement("button",{className:X.a.button,onClick:()=>D(l)},"Buscar por el id ",o.a.createElement("b",null,l)),o.a.createElement("br",null),o.a.createElement("label",{className:X.a.label},"Ingrese nombre:"),o.a.createElement("input",{className:X.a.input,type:"text",onChange:e=>{const n=e.target.value;return a((e=>({type:"CHANGE_NAME",payload:e}))(n))},value:c}),o.a.createElement("button",{className:X.a.button,onClick:()=>B(c)},"Buscar por nombre "),o.a.createElement("label",{className:X.a.label},"Seleccionar G\xe9nero:"),o.a.createElement("select",{className:X.a.select,id:"genre",name:"genre",value:d,onChange:e=>{console.log("en changeGenreHandler de leftBar");const n=e.target.options[e.target.selectedIndex].label;return a((e=>({type:"CHANGE_GENRE",payload:e}))(n))}},g.map(e=>o.a.createElement("option",{key:e.id,value:e.id},e.name))),o.a.createElement("button",{className:X.a.button,onClick:"Seleccionar un g\xe9nero"!==d&&""!==d?()=>w(d):null},"Buscar por el g\xe9nero: ","Seleccionar un g\xe9nero"!==d&&d),o.a.createElement("button",{className:X.a.button,onClick:()=>{F(),a((e=>({type:"DISPLAY_API",payload:e}))(r.length))}},"Mostrar juegos de la Api"),o.a.createElement("button",{className:X.a.button,onClick:()=>{F(),a((e=>({type:"DISPLAY_DB",payload:e}))(r.length))}},"Mostrar juegos de la Base"),o.a.createElement("button",{className:X.a.button,onClick:async()=>{await F(),y(),A()}},"Mostrar todos"),o.a.createElement("button",{className:X.a.button,onClick:async()=>{console.log("globalNameAZHandler funciona"),F(),i?(await j(),R(!1)):(await k(),R(!0))}},i?"Ordenar por nombre A-Z":"Ordenar por nombre Z-A"),o.a.createElement("button",{className:X.a.button,onClick:()=>{console.log("globalRatingAZHandler funciona"),F(),m?(H(),S(!1)):(L(),S(!0))}},m?"Ordenar por rating <->":"Ordenar por rating >-<"))},q=n(77),Q=n.n(q);var W=()=>{const e=Object(_.c)(e=>e.display);return o.a.createElement("div",{className:Q.a.main},o.a.createElement(S,null),o.a.createElement("div",{className:Q.a.under},o.a.createElement(K,null),o.a.createElement(U,{display:e})))},$=n(27),ee=n.n($);var ae=e=>{const a=Object(_.c)(e=>e.display),n=Object(c.f)();console.log("typeof(params.id)",typeof n.id),console.log("params.id",n.id);let t=a.filter(e=>e.id==n.id)[0];return console.log("game",t),console.log("game.id",t.id),o.a.createElement("div",{className:ee.a.div},o.a.createElement("h1",{className:ee.a.name},"Nombre: ",o.a.createElement("b",null,t.name?t.name:"Sin datos.")," "),o.a.createElement("img",{src:t.image?t.image:t.background_image?t.background_image:"sin imagen",alt:"imagen",className:ee.a.image}),o.a.createElement("div",{className:ee.a.container},o.a.createElement("p",null,"Id:   ",o.a.createElement("b",null,t.id)," "),o.a.createElement("p",null,"Plataformas:   ",o.a.createElement("b",null,"string"===typeof t.platforms?t.platforms:t.platforms.map(e=>e.platform.name).join(", "))," "),o.a.createElement("p",{className:ee.a.description},"Descripci\xf3n:   ",o.a.createElement("b",null,t.description?t.description:"sin datos")," "),o.a.createElement("p",null,"Fecha de lanzamiento:   ",o.a.createElement("b",null,t.released?t.released:t.releaseDate?t.releaseDate:"sin datos")),o.a.createElement("p",null,"Rating:   ",o.a.createElement("b",null,t.rating?t.rating:"sin datos")),o.a.createElement("p",null,"G\xe9neros:   ",o.a.createElement("b",null,"string"!==typeof t.genres[0]?t.genres.map(e=>e.name).join(", "):t.genres.join(", ")))),o.a.createElement(s.c,{to:"/videogames",className:ee.a.home},"VOLVER"))};var ne=()=>o.a.createElement("div",null,o.a.createElement("h1",null,"Error 404: Not Found"));var te=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/"},o.a.createElement(d,null)),o.a.createElement(c.a,{exact:!0,path:"/videogames",render:()=>o.a.createElement("div",null," ",o.a.createElement(W,null)," ")}),o.a.createElement(c.a,{path:"/form"},o.a.createElement(B,null)),o.a.createElement(c.a,{exact:!0,path:"/videogames/:id",render:()=>o.a.createElement(ae,null)}),o.a.createElement(c.a,{path:"*",component:ne})))};var oe=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then(a=>{let{getCLS:n,getFID:t,getFCP:o,getLCP:r,getTTFB:l}=a;n(e),t(e),o(e),r(e),l(e)})},re=n(52);const le={gamesFromApi:[],gamesFromDB:[],concatened:[],display:[],currentPage:0,id:"",idFromApi:[],idFromDB:[],idConcatened:[],name:"",nameFromApi:[],nameFromDB:[],nameConcatened:[],nameNotFound:!1,orderName:[],az:!0,ratAZ:!0,genre:"",genres:[{id:0,name:"Seleccionar un g\xe9nero"}],filteredGenre:[],selectedGenres:[],errorFromBack:"",successFromBack:""};var ce=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(console.log("action antes del switch",a),console.log("selectedGenres en el reducer",e.selectedGenres),a.type){case"GET_API":return{...e,gamesFromApi:a.payload};case"GET_DB":return console.log("GET_DB",a.payload),{...e,gamesFromDB:a.payload};case"CONCAT":let n;return console.log("gamesFromApi en CONCAT del reducer",e.gamesFromApi),console.log("gamesFromDB en CONCAT del reducer",e.gamesFromDB),n=e.gamesFromDB?e.gamesFromApi.concat(e.gamesFromDB):e.gamesFromApi,{...e,concatened:n};case"CONCAT_TO_DISPLAY":return{...e,display:e.concatened};case"CHANGE_ID":return{...e,id:a.payload};case"ID0":return{...e,id:""};case"GET_API_ID":return console.log("action.payload en GET_API_ID",a.payload),"Not found"===a.payload.detail?{...e}:{...e,idFromApi:[a.payload]};case"GET_DB_ID":return console.log("acton.payload en GET_DB_ID",a.payload),{...e,idFromDB:[a.payload]};case"ID_CONCAT":return console.log("state.idFromApi en ID_CONCAT",e.idFromApi),console.log("state.idFromDB en ID_CONCAT",e.idFromDB),{...e,idConcatened:e.idFromApi.concat(e.idFromDB)};case"ID_CONCAT_TO_DISPLAY":return console.log("state.idConcatened en ID_CONCAT_TO_DISPLAY",e.idConcatened),{...e,display:e.idConcatened,idFromApi:[],idFromDB:[]};case"CHANGE_NAME":return{...e,name:a.payload};case"NAME0":return{...e,name:""};case"GET_API_NAME":return console.log("action.payload en GET_API_NAME",a.payload),{...e,nameFromApi:a.payload};case"GET_DB_NAME":return console.log("action.payload en GET_DB_NAME",a.payload),{...e,nameFromDB:a.payload};case"NAME_CONCAT":return console.log("nameFromApi en NAME_CONCAT",e.nameFromApi),console.log("nameFromDB en NAME_CONCAT",e.nameFromDB),e.nameFromApi[0]||e.nameFromDB[0]?{...e,display:e.nameFromApi.concat(e.nameFromDB)}:{...e,display:["No se encontr\xf3 ning\xfan videojuego con el nombre solicitado."]};case"NEXT_PAGE":return console.log("case NEXT_PAGE funciona"),{...e,currentPage:e.currentPage+=15};case"PREV_PAGE":return{...e,currentPage:e.currentPage-=15};case"CURRENT_PAGE_0":return{...e,currentPage:0};case"CHANGE_GENRE":return console.log("action.payload en CHANGE_GENRE del reducer",a.payload),{...e,genre:a.payload};case"FILTER_GENRE":const t=e.gamesFromApi.filter(e=>e.genres.some(e=>e.name.toLowerCase()===a.payload.toLowerCase())),o=e.gamesFromDB.filter(e=>e.genres.some(e=>e.toLowerCase()===a.payload.toLowerCase()));return{...e,display:t.concat(o)};case"CLEAN_GENRE":return{...e,genre:"Seleccionar un g\xe9nero"};case"DISPLAY_API":return{...e,display:[...e.concatened.slice(0,a.payload)]};case"DISPLAY_DB":return console.log("reducer display_db"),{...e,display:[...e.concatened.slice(a.payload)]};case"CHANGE_AZ":return{...e,az:a.payload};case"NAME_AZ":console.log("NAME_AZ funciona al inicio"),console.log("state.display en reducer al inicio de NAME_AZ",e.display);let r=[...e.display];return e.display=[],{...e,display:r.sort((e,a)=>e.name.toLowerCase()<a.name.toLowerCase()?-1:e.name.toLowerCase()>a.name.toLowerCase()?1:0)};case"NAME_ZA":console.log("NAME_AZ funciona al inicio"),console.log("state.display en reducer al inicio de NAME_ZA",e.display);let l=[...e.display];return e.display=[],{...e,display:l.sort((e,a)=>e.name.toLowerCase()<a.name.toLowerCase()?1:e.name.toLowerCase()>a.name.toLowerCase()?-1:0)};case"CHANGE_RATING_AZ":return{...e,ratAZ:a.payload};case"RATING_AZ":console.log("RATING_AZ funciona al inicio"),console.log("state.display en reducer al inicio de RATING_AZ",e.display);let c=[...e.display];return e.display=[],{...e,display:c.sort((e,a)=>parseFloat(e.rating)<parseFloat(a.rating)?-1:parseFloat(e.rating)>parseFloat(a.rating)?1:0)};case"RATING_ZA":console.log("NAME_AZ funciona al inicio"),console.log("state.display en reducer al inicio de RATING_ZA",e.display);let s=[...e.display];return e.display=[],{...e,display:s.sort((e,a)=>parseFloat(e.rating)<parseFloat(a.rating)?1:parseFloat(e.rating)>parseFloat(a.rating)?-1:0)};case"ADD_ID_NAME_GENRE":return{...e,selectedGenres:[...e.selectedGenres,a.payload]};case"REMOVE_GENRE":return console.log("action.payload en REMOVE_GENRE del reducer ",a.payload),{...e,selectedGenres:e.selectedGenres.filter(e=>e.id!==a.payload)};case"REMOVE_ALL_GENRES":return{...e,selectedGenres:[]};case"CHANGE_ERORR_FROM_BACK":return{...e,errorFromBack:a.payload};case"CHANGE_SUCCESS_FROM_BACK":return{...e,successFromBack:a.payload};case"SEARCH_GENRES":return{...e,genres:e.genres.concat(a.payload)};default:return{...e}}},se=n(135);const ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.b,me=Object(re.c)(ce,ie(Object(re.a)(se.a)));l.a.render(o.a.createElement(_.a,{store:me},o.a.createElement(s.a,null,o.a.createElement(te,null))),document.getElementById("root")),oe()},26:function(e,a,n){e.exports={home:"landing_home__3QHA_",homeContainer:"landing_homeContainer__36Zj6",homeTitle:"landing_homeTitle__3m2OQ",homeText:"landing_homeText__3KwkC",divLink:"landing_divLink__3gAZF",link:"landing_link__3doVM"}},27:function(e,a,n){e.exports={div:"one_div__2fHqx",name:"one_name__1wTpU",image:"one_image__1-Rm3",container:"one_container__vH2rK",home:"one_home__1pOaa",description:"one_description__26mYA"}},41:function(e,a,n){e.exports={global:"errorForm_global__3M31i",div:"errorForm_div__2102A",button:"errorForm_button__3HazB"}},42:function(e,a,n){e.exports={global:"successForm_global__2sVzJ",div:"successForm_div__1j-bt",button:"successForm_button__32wNP"}},43:function(e,a,n){e.exports={card:"card_card__3Wb3R",img:"card_img__ifvEX",name:"card_name__2U56d",genres:"card_genres__1xzbt"}},44:function(e,a,n){e.exports={global:"nameNotFound_global__2jPlp",div:"nameNotFound_div__1ogE7",button:"nameNotFound_button__23mcv"}},51:function(e,a,n){e.exports={div:"genreName_div__tWNY8",name:"genreName_name__1XFaf",button:"genreName_button__2QTRT"}},77:function(e,a,n){e.exports={main:"home_main__23v99",under:"home_under__2svaa"}},9:function(e,a,n){e.exports={container:"leftBar_container__3E_aJ",label:"leftBar_label__2YtlF",button:"leftBar_button__1Y9ww",input:"leftBar_input__aNmYP",select:"leftBar_select__2VfQ-",genreButton:"leftBar_genreButton__pfPiC"}}},[[136,1,2]]]);
//# sourceMappingURL=main.1a075776.chunk.js.map