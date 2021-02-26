# CURSO BASICO DE JAVASCRIPT
## ¿QUE ES JAVASCRIPT?

### ¿Cómo nace Javascript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

### ¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

**Débilmente tipado**
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

    4 + "7"; // 47
    4 * "7"; // 28
    2 + true; // 3
    false - 3; // -3

**Dinámico**

Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

### ¿Realmente es Javascript un lenguaje interpretado?

Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

### Javascript es Basckwards Compatible

Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

<img src="https://static.platzi.com/media/user_upload/Dise%C3%B1o%20sin%20t%C3%ADtulo-3115bd9f-ec1c-425d-aa60-8462f4ffe7a3.jpg" alt="Javascript notes">

## Porqué JavaScript?

3 Lenguajes estándares: HTML5 - CSS3 - JS

**HTML**: Para maquetar la información. Texto, imagenes, videos, etc.
**CSS:** Para darle estilo a la información.
**JS:** Programación para que la página sea dinámica o generar una app web.

En el 2019 la W3C decidió y subió como nuevo estandar y lenguaje **WA (WebAssembly)**. Es un lenguaje nuevo a utilizar para construir productos web. Con este no será necesario utilizar HTML, CSS y JS para hacer productos web.

JS tiene una comunidad enorme de devs que ayudan a generar diferentes cosas. Para apps web hay muchos frameworks y librerías construidas en JS, que ayudan a desarrollar proyectos de una manera mucho más rápida, eficiente y robusta.
**Angular, Vue, React** son algunos de los frameworks que podemos utilizar para hacer productos web.

Si no sólo quieres hacer productos web podemos utilizar un framework llamado **React Native**, para poder construir aplicaciones nativas para **Android y IOS**.
Electron: framework JS que nos permite desarrollar aplicaciones para escritorio, tanto para Mac como para Windows.

En toda web y app tenemos 2 partes. El Front-end y el Back-end.

**Front-end:** Es todo lo que se ve en nuestra web/app y con lo que podemos interactuar.
**Back-end: **Va manejando las bases de datos, las interacciones y peticiones que el Front-end le va a pedir.

**Node.JS** es un entorno de ejecución de JS que corre en el Back-end. Permite trabajar aplicaciones **IOT** (Internet de las cosas), hace inteligente ciertos dispositivos conectados a internet.

## ELEMENTOS DE UN LENGUAJE DE PROGRAMACIÓN: VARIABLES, FUNCIONES Y SINTAXIS

[Editor de texto](http://code.visualstudio.com "Editor de texto")

Tipo de datos:
<img src="https://static.platzi.com/media/user_upload/169c0df8121445d6c2848875d91521c7-f6097583-9431-489d-ba3d-263cfdb5e7e9.jpg" alt="tipo de datos javascript">

Otro grafico:
<img src="https://static.platzi.com/media/user_upload/CU01112E_1-f9d2b6fc-f60c-4bf4-a61d-6bf9df36b268.jpg" alt="tipo de datos">

## VARIABLES

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

**Var: **Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

o** Se puede reinicializar**: osea todas las variables se inicializan, por ejemplo:
Var pokemonType = ‘electric’ entonces reinicializar es:
Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.

o **Se puede reasignar:** osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var

o **Su alcance es función global**: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

CONST Y LET es la forma en que se declaran las variables a partir de ECMAScript 6,

**CONST:** sirve para declarar variables que nunca van a ser modificadas:
o **No se puede reinicilizar
No se pude re asignar:
No es inmutable:**: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
o **No se puede reinicilizar
No se pude re asignar:
No es inmutable:** una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
o **No se puede reinicilizar
No se pude re asignar:
No es inmutable:** osea no puede cambiar con objetos:

**LET:** Son variables que pueden ser modificadas, se pueden cambiar:
o **No se puede reinicilizar:** es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o **Se puede reasignar:** Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o **Su contexto de es bloque:** Solo funciona dentro de un bloque {}, fuera de ello no.


## FUNCIONES

    //hay dos tipos de funciones
    // funciones declarativas
    
    function miFuncion(){
        return 3;
    }
    
    //asi hago el llamado
    miFuncion();
    
    // funciones de expresion
    //declaramos una variable que guarda una funcion
    // los parametros van dentro de los parentesis cuando declaro la funcion
    var miXFuncion = function(a, b){
        return a + b;
    }
    
    //asi hago el llamado
    miXFuncion(2, 3);
    
    function saludarEstudiantes(estudiante) { 
        console.log(`hola ${estudiante}`); 
    }
    
    function sumar(a, b){ 
        var resultado = a + b; 
        return resultado;
    }
	
	
<img src="https://static.platzi.com/media/user_upload/JavaScript%20%281%29-997fdbe2-5817-4e30-a6b4-71f2bf6c53e2.jpg" alt="funciones">
<br>

[========]


## SCOPE
Es el alcance que tiene las variables.

Existen dos tipos de Scope:

• Scope Global: lo que está en global no puede acceder a lo que está en local.
• Scope Local: lo que está en local puede acceder a lo que está en global.

    //El alcance (scope) de una variable puede ser:
    //1- Global:
    var miNombre = "Diego";
    
    //2- Local:
    function nombre(){
        var miApellido = "De Granda";
        console.log(miNombre + " " + miApellido);
    }
    
    nombre(); //Devuelve "Diego De Granda"
    
    //En todo el código podemos utilizar la variable global.
    //Las variables locales sólo pueden ser accedidas 
    //dentro de la función en la que fueron declaradas.

<br>

[========]

## HOISTING
Sucede cuando llamamos una variable antes de declararla e inicializarla.

var (solo la declaración), la function (por completo) y el import (por completo) “suben” hacia arriba del scope.

    //aqui se da el hoisting en las variables
    //donde la variable es usada antes de ser declarada
    //
    console.log(miNombre);
    var miNombre = "Francisco";
    
    hey();
    
    function hey() {
        console.log("hola " + miNombre);
    }
    
    var miNombre = "Francisco";
    
    //Lo ideal es que se declaren la funcines al inicio
	


## COERSION

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

**Coerción implícita** = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
**Coerción explicita** = es cuando obligamos a que cambie el tipo de valor.

    //Ejemplos de Coerción:
    
    var a = 4 + "7"; //Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"
    
    4 * "7"; //Convierte al "7" en un número y realiza la operación, por esto devuelve 28
    
    var a = 20;
    var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
    console.log(b); 
    
    var c = String(a); //Aquí obligamos a la variable a convertirse en string (coerción explícita)
    console.log(c);
    
    var d = Number(c); //Aquí obligamos a la variable a convertirse en número (coerción explícita)
    console.log(d);
	
<br>

[========]

## VALORES: TRUTHY Y FALSY

    //Ejemplos en los que Boolean devuelve Falso:
    Boolean(0); //false
    Boolean(null); //false
    Boolean(NaN); //false
    Boolean(undefined); //false
    Boolean(false); //false
    Boolean(""); //false
    
    //Ejemplos en los que Boolean devuelve verdadero:
    Boolean(1); //true para 1 o cualquier número diferente de cero (0)
    Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
    Boolean([]); //true aunque el array esté vacío
    Boolean({}); //true aunque el objeto esté vacío
    Boolean(function(){}); //Cualquier función es verdadera también

## OPERADORES ASIGNACION COMPARACION ARITMETICOS

**Operador de asignacion**

Simbolo	Descripcion
=	operador de asignacion

**Operadores de comparacion**
Simbolo	Descripcion
   	 ==	igual que
    ===	estrictamente igual que
    > or >= or >==	mayor o mayor igual que
    < or <= or <==	menor o menor igual que
    != or !==	diferente que

**Operadores aritmeticos**
Simbolo	Descripcion

" +"	operador suma este se utiliza para concatener dos cadenas de texto.

" -"	operador resta

" *"  operador de multicacion

" / "  operador de division

"%"	 operador de modulo

"****" operador de potenciacion


**Operadores logicos**

Simbolo	Descripcion
!	NOT niega un valor
&&	AND
||	OR

    //Operadores binarios:
    3 + 2 //Suma
    50 - 10 // Resta
    10 * 20 //Multiplicación
    20 / 2 //División
    
    "Diego " + "De Granda" //concatenación de strings
    
    //Operadores unitarios:
    !false //negación de la negación = true
    
    //Operadores de asignación:
    var a = 1; //Asignamos un valor a la variable
    
    //Operadores para comparar:
    3 == "3"; //Compara los valores y devuelve "true" en este caso
    
    3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso
    
    5 < 3 //Compara y valida si el 5 es menor a 3
    5 > 3 //Compara y valida si el 5 es mayor a 3
    5 <= 6 //Compara y valida si el 5 es menor o igual al 6
    5 >= 6 //Compara y valida si el 5 es mayor o igual al 6
    
    a && b //Valida si ambas variables son verdaderas para que se cumpla la condición
    a || b //Aquí se cumple la condición si alguna de las dos variables es verdadera
    
    var edad = 40
    edad++ //Incrementa el valor en 1
    
    edad += 2 //Incrementa el valor por 2


## CONDICIONALES: IF, ELSE, ELSE IF

    var option1 = "piedra";
    var option2 = "papel";
    var option3 = "tijera";
    
    
    
    
    var resultado = function juego (user, pc){
        if (user != pc){
            if (user ===option1 && pc===option3){
                console.log("Gana usuario con " + option1);
            }
            else if (user ===option2 && pc ===option3){
                console.log("Usuario gana con: " + option2);
            }
    
            else if (user === option3 && pc===option2){
                console.log("Usuario gana con: " + option3)
            }
    
            else 
                console.log("Pc te ganó :P");
    
        }
    
        else 
            console.log("Es un empate")
    }
    
    
    resultado(option3, option1)
	

<br>

[========]

## SWITCH

// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 

<br>

[========]

## OBJECTS FUNCION CONSTRUCTORA

    <//Función constructora:
    function auto(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
    
    
    //new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
    var numero = prompt("How many cars?")
    var autos = []; //array
    for(var i = 0; i < numero; i++){
    
        var marca = prompt("brand?");
        var modelo = prompt("model?");
        var annio = prompt("year?");
        autos.push(new auto(marca, modelo, annio));
    }
    
    for(var i = 0; i < autos.length; i++) {
        console.log(autos[i])
    }
    
<br>

[========]

## MÉTODOS DE RECORRIDOS DE ARRAYS

**.filter **: nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.
**.map **: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

    // Metodos de Recorridos de arrays en JavaScript
    
    // Declarando el array principal.
    var electronicos = [
        {nombre:"Telefono", precio: "3200", color: "Negro"},
        {nombre:"Computadora", precio: "8700", color: "Roja"},
        {nombre:"TV", precio: "4000", color: "Negro"},
        {nombre:"Teclado", precio: "550", color: "Negro"},
        {nombre:"Mouse", precio: "780", color: "Colores"},
        {nombre:"Funda", precio: "250", color: "Transparente"},
        {nombre:"Cable USB", precio: "280", color: "Blanco"},
        {nombre:"Adaptador Corriente", precio: "150", color: "Negro"},
    ]
    
    // Filter : Permite Filtrar en un array a partir de una condición. 
    // Pero regresara todos los objetos (todo lo que contiene)  de los que que cumplan con dicha condición
    
    var filtrado = electronicos.filter(function(elemento){
        return elemento.color === "Negro";
    });
    
    
    // Map : Permite mapear el array, es decir recorrerlo
    // Permite obtener unicamente los valores a partir del elemento indicado.
    
    var mapeado = electronicos.map(function(elemento){
        return elemento.nombre;
    });


<br>

[========]

## Recorriendo Arrays con .find(), .forEach() y .some()


**find() :** Devuelve el primer elemento del array que cumpla con la condición dada
**foreach() :** Ejecuta lo que le definamos una vez por cada elemento de nuestro array
**some() :** Comprueba si al menos un elemento del array cumple con la condición que le damos
**filter() :** Devuelve todos los elementos del array que cumplan con la condición dada

Acá te dejo la documentación de cada uno: [find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find "find()") - [foreach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach "foreach()") - [some()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some "some()") - [filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter "filter()")



    var articulos = [
        { nombre: "Bici", costo: 3000 },
        { nombre: "TV", costo: 2500 },
        { nombre: "Libro", costo: 320 },
        { nombre: "Celular", costo: 10000 },
        { nombre: "Laptop", costo: 20000 },
        { nombre: "Teclado", costo: 500 },
        { nombre: "Audifonos", costo: 1700 },
    ];
    
    //filter Genera un nuevo array
    var articulosFiltrados = articulos.filter(function(articulo){
        return articulo.costo <= 500; //articulos con precio menor a 500 pesos
    });
    
    //map Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
    var nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre;
    });
    
    //find Ayuda a encontrar algo dentro del array articulos
    var encuentraArticulo = articulos.find(function(articulo){
        return articulo.nombre === "Laptop";
    });
    
    //forEach No es necesario generar nuevo array, se utiliza para realizar un recorrido de un array principal
    articulos.forEach(function(articulo){
        console.log(articulo.nombre);
    });
    
    //some Se genera nuevo array, regresa un condición en Boolean
    var articulosBaratos = articulos.some(function(articulo){
        return articulo.costo <= 700;
    });


<br>

[========]

## ELIMINANDO ELEMENTOS DE UN ARRAY

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

<img src ="https://static.platzi.com/media/user_upload/Imagen%203-633de332-2242-4957-a79d-d263bff35c1a.jpg" alt ="shift">

Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.

Bonus Track
Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.

<img src="https://static.platzi.com/media/user_upload/Imagen%204-f2fc98b7-a80a-4598-a049-1533cbb78404.jpg" alt="pop">

<br>

[========]

## CONCLUSIONES
Cursos recomendados

[Fundamentos de JavaScript](https://platzi.com/clases/fundamentos-javascript/ "Fundamentos de JavaScript")
[V8 y el navegador](https://platzi.com/clases/javascript-navegador/ "V8 y el navegador")
[ECMAScript 6+](https://platzi.com/clases/ecmascript-6/ "ECMAScript 6+")
