# **VIDEOGAMES** - Proyecto Individual Henry - Frontend

<br />

<h1 align="center"> DESCRIPCIÓN </h1>

Esta es una aplicación frontend que muestra información sobre videogames. Las tecnologías utilizadas son: **HTML**, **CSS**, **Javasript**, **React** y **Redux**, y trabaja con datos de la api rawg de videogames y una aplicación backend local.

<br />


<h1 align="center"> ESTRUCTURA Y FUNCIONAMIENTO </h1>
<br />

## **Página de incio**

Inicia en una landing page que muestra una imagen de fondo y un recuadro con una breve descripción de la idea fundamental del la aplicación, además un botón con el cual se ingresa a la home page.

<br />

## **Págna principal**

Al ingresar a la página principal nos encontramos con tres sectores diferenciados, una barra de comandos superior, una barra de comandos izquierda y un área de renderizado, todo sobre una imagen de fondo.

<br />

### **Barra de comandos superior**

En la barra superior cuenta con un título, botones de paginación y botones para volver a la Landing y otro para ir a un formulario, el cual sirve para agregar un nuevo videogame a la base de datos.

<br />


### **Barra de comandos izquierda**

En la barra de comandos muestra una siguientes opciones:
- Un buscador de videogames por identificador, el cual hace una búsqueda en la api y en la base de datos.
- Un buscador de videogames por nombre, con búsqueda en api y base de edatos.
- Un filtro por género, trabaja sobre el front con los videogmaes cargados inicialmente, y muestra los videogames que tienen ese género.
- Botón para mostrar sólo los videogames de la api.
- Botón para mostrar sólo los videogames de la base de datos.
- Botón para volver a mostrar los videogames de la api y de la base de datos jutos.
- Botón para ordenar los videogames alfabéticamente por nombre, de forma ascendente y descendente.
- Botón para ordenar los videogames por rating, de forma ascendente y descendente.

<br />

### **Espacio central**

En el espacio de muestra de videogames se exhiben hasta 15 videgames por página, pudiendo ingresar, haciendo click en la tarjeta de cad videogame, a una detail page que muestra al mismo con mayor cantidad de información.

<br />

## **Formulario**

El formulario campos para ingresar la información del nuevo videojuego que se quiere agregar y una opción para seleccionar los géneros que va a tener asociados. Estos campos cuentan con validaciones de completado, es decir que si algún campo no se completa, al momento de presionar el botón de envío del formulario, indica con un comentario los campos que falta rellenar. Además para el campo nombre, cuenta con una validación adicional, la que solo permite ingresar letras o espacios. Además cuenta con un botón para regresar a la página principal.


, en el servidor y en la base de datos, y como resultado al presionar el botón para agregar un videogame indica si falta algún campo que rellenar, un mensaje de error si el formulario pudo ser enviado pero ocurrió un error en el proceso y un mensaje de éxito si todo resultó correctamente.

<br />

## **Página de detalle**

En esta página se muestra un videojuego seleccionado, detallando una mayor cantida de datos que los que se muestran en la página principal. Hay además, un botón para volver a la página principal.

<br />

## **TESTING**

Cuenta con testeo de frontend.

