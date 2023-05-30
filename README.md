Esta es una aplicación que muestra información sobre videogames. Las tecnologías utilizadas son: Javasript, react, redux, express y sequlize, y trabaja con datos de la api rawg de videogames y una base de datos local.

Inicia con una landing page que muestra un a breve descripción, al iniciar, se pasa a la página principal que muestra una barra superior, una barra de comandos a la izquierda y un espacio donde muestra videogames.

En la barra superior cuenta con un título, botones de paginación y botones para volver a la Landing y otro para ir a un formulario, el cual sirve para agregar un nuevo videogame a la base de datos, y cuenta con validaciones en el front, en el servidor y en la base de datos, y como resultado al presionar el botón para agregar un videogame indica si falta algún campo que rellenar, un mensaje de error si el formulario pudo ser enviado pero ocurrió un error en el proceso y un mensaje de éxito si todo resultó correctamente.

En la barra de comandos muestra una siguientes opciones:
   1.- Un buscador de videogames por identificador, el cual hace una búsqueda en la api y en la base de datos.
   2.- Un buscador de videogames por nombre, con búsqueda en api y base de edatos.
   3.- Un filtro por género, trabaja sobre el front con los videogmaes cargados inicialmente, y muestra los videogames que tienen ese género.
   4.- Botón para mostrar sólo los videogames de la api.
   5.- Botón para mostrar sólo los videogames de la base de datos.
   6.- Botón para volver a mostrar los videogames de la api y de la base de datos jutos.
   7.- Botón para ordenar los videogames alfabéticamente por nombre, de forma ascendente y descendente.
   8.- Botón para ordenar los videogames por rating, de forma ascendente y descendente.

En el espacio de muestra de videogames se exhiben hasta 15 videgames por página, pudiendo ingresar haciendo click en la tarjeta de cad videogame, a una vista del mismo con mayor cantidad de información.
