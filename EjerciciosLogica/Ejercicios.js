/*Ejemplo que estaba probando de clases

class Saludo{
constructor(age,name) {
this._age = age;
this._name = name;
}
get name() {
return this._name;
}
get age() {
return this._age;
}
saludar() {
console.log("Hola " + this.name+" I am "+this.age+" years old");
}
}
const saluda = new Saludo(18,"Pepe");
saluda.saludar();

*/

//EJERCICIOS LÓGICA JS

// Programa una funcion que cuente el numero de caracteres de una cadena de texto
/*
function contarCaracteres(cadena="") { //funcion declarada
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena"); //Manda un aviso
    } else {
        console.info("La cadena " + cadena + " tiene " + cadena.length + " caracteres");
    }
}
*/
/*
//Funcion expresada -> la guardamos en una variable
const contarCaracteres = (cadena = "") => (!cadena) 
? console.warn("No ingresaste ninguna cadena") 
: console.log("La cadena " + cadena + " tiene " + cadena.length + " caracteres"); //condicion?caso que se cumple: caso contrario (CONDICIONAL TERNANRIO)

contarCaracteres();
contarCaracteres("Hola mundo");
*/

// Programa una funcion que te devuelva el texto recortado segun el numero ed caracteres indicado
/*
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena) ? console.warn("No ingresaste texto"):
(longitud === undefined)
?console.warn("No ingresaste la longitud de la nueva cadena recortada")
:console.info(cadena.slice(0,longitud)); //Caracter en el que empieza, longitud de la cadena recortada

recortarTexto("HolaMundo", 6);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto();
*/

//Programa una funcion que dado un string te devuelva un array de textos separados por espacio
/*
const cadenaAArray = (cadena = "", separador = undefined) =>
(!cadena)
? console.warn("No ingresaste una cadena de texto")
: (separador === undefined)
? console.warn("No ingresaste el caracter separador")
: console.info(cadena.split(separador));

cadenaAArray("Lorem ipsum wehwue efwewifn eifwifw", "");
cadenaAArray("Loremi psumweh wueefwe wifnei fwifw", " ");
cadenaAArray("Hola mundo");
cadenaAArray();
cadenaAArray("", "-");
*/

//Programa una funcion que repita un texto x veces
/*
const repetirTexto = (texto = "", veces = undefined) => {
if (!texto) {
    return console.warn("No hay ningun texto ingresado");
}
if (veces===undefined) {
    return console.warn("No has especificado las veces que se repite el texto");
}
if (veces == 0) {
    return console.error("El numero de veces no puede ser 0");
}
if (Math.sign(veces)===-1) {
    return console.error("El valor no puede ser negativo")
}

for (let i = 1; i <= veces; i++){ 
    console.info(texto+": "+i);
    }
}

repetirTexto(" Hola amigos", 4) repetirTexto(); repetirTexto("Hola amigos"); repetirTexto("Hola amigos",0);
repetirTexto("Hola amigos",-29); 
*/

//Programa una funcion que invierta las palabras de una cadena de texto
/*
    const invertirCadena=(cadena="" )=>
        ? console.warn("No ingresaste cadena de texto")
        : console.log(cadena.split("").reverse().join("")); //reverse invierte el orden de las letras y join las vuelve aunir despues de usar split
    
    invertirCadena();
    invertirCadena("Hola mundo");
    */

//Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo
/*
const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) {
        console.warn("No ingresaste texto");
    }
    if (!texto) {
        console.warn("No ingresaste ninguna palabra a evaluar");
    }

    let i = 0;
    let contador = 0;

    while (i != -1 && contador<cadena.length) { //Cuando indexOf no encuentra el texto a buscar devuelve -1
        i = cadena.indexOf(texto, i); //Buscamos el texto a evaluar en el texto grande y que busque la primera coincidencia (i)
        if (i != -1) { // Encontramos el texto pedido
            i++;
            contador++;//Incrementamos las veces que se ha encontrado el texto
        }
    }
    if (cadena && texto) {
        return console.info("La palabra " + texto + " se repite " + contador + " veces."); //Cuando acabe de leer el texto devuelve el valor de las veces que se ha encontrado el texto
    }
}
textoEnCadena("","Goo");
textoEnCadena("Hola mundo Hola mundooo Hola munde", "mundo");
textoEnCadena("Hey heyyyy","y");
textoEnCadena("Hey heyyyy","");
*/

//Programa una funcion que valide si una palabra o texto dado es un palindromo
/*
const palindromo = (palabra="") => {
    if (!palabra) return console.warn("No ingresaste texto");
    
    palabra = palabra.toLowerCase().replace(/\s/g,''); //Quitamos los espacios en blanco para evaluar si es palindromo de manera mas sencilla
    let alReves = palabra.split("").reverse().join("").replace(/\s/g,'');//Quitamos los espacios en blanco
    return (palabra === alReves) ? console.info("Si es un palindromo, Palabra original: " + palabra + ", palabra al revés: " + alReves)
        : console.info("No es un palindromo, Palabra original: " + palabra + ", palabra al revés: " + alReves);
}
palindromo();
palindromo("PEPE wue tal");
palindromo("Dabale arroz a la zorra el abad")
*/

//Programa una funcion que elimine cierto patron de caracteres de un texto dado
/*
const eliminarChar = (texto = "", patron = "") => {
    if (!texto) {
        console.warn("No ingresaste un texto");
    } else if (!patron) {
        console.warn("No ingresaste un patron de caracteres");
    } else if (texto && patron) {
        console.info(texto.replace(new RegExp(patron,"ig"),"")) //Usamos el patron ig instanciando la clase RegExp para buscar patrones de texto (la i evita que se distinga entre mayus y minus a la hora de encontrar coincidencias y la g hace que no se pare en la primera coincidencia, sino que ejecutara todas)
    }
}

eliminarChar();
eliminarChar("www");
eliminarChar("xyz1,xyZ2,XYZ3,XyZ4","xyz");
*/

//Programa una funcion que obtenga un numero aleatorio entre 501 y 600
/*
const numAleatorio = () => {
    console.log(Math.round((Math.random() * 100) + 500));
}

numAleatorio();
*/

//Programa una funcion que reciba un numero y diga si es capicua
/*
const capicua = (numero = 0) => {
    if (!numero) {
        console.warn("No has ingresado ningun numero");
    }
    if (typeof numero !== "number") {
        console.error("El valor ingresado: " + numero + " no es un numero");
    }

    if (typeof numero === "number" && numero) { 
        numero = numero.toString();
        let alReves = numero.split("").reverse().join("");

        if ((numero) === alReves) {
            console.info("Es capicua. Numero original: " + numero + ". Numero al reves: " + alReves);
        } else {
            console.info("No es capicua. Numero original: " + numero + ". Numero al reves: " + alReves);
        }
    }
}
capicua();
capicua("24");
capicua(22200222);
capicua(22330)
*/

//Programa una funcion que calcule el factorial de un numero
/*
const factorial = (numero=undefined) => {
    if (!numero) {
        console.warn("No has ingresado numero");
    }
    if (typeof numero !== "number") {
        console.error("El valor ingresado: " + numero + " no es un numero");
    }
    if (numero < 0) {
        console.error("El numero no puede ser negativo ni 0");
    }
    let factorial=numero;
    if (typeof numero === "number" && numero && numero > 0) { 
        for (let i = factorial-1; i > 0; i--){
            factorial *= i;
        }
        console.log("El factorial de "+numero+" es "+factorial);
    }
}

factorial();
factorial("e");
factorial(-2);
factorial(5);
*/

//Programa una funcion que determine si un numero es primo
/*
const primo = (numero = undefined) => {
    if (!numero) {
        console.warn("No has ingresado numero");
    }
    if (typeof numero !== "number") {
        console.error("El valor ingresado: " + numero + " no es un numero");
    }
    if (numero < 0) {
        console.error("El numero no puede ser negativo ni 0");
    }
    
    if (typeof numero === "number" && numero && numero > 0) { 
        let i = 2; //Empezamos a iterar desde el 2 hasta el numero - 1 porque ya sabemos que todo numero es divisible entre si mismo y 1
        let esPrimo = false;
        while (i < numero - 1 && esPrimo == false) {
            if (numero % i == 0) {
                esPrimo = true; //Salimos del bucle porque hay un numero al menos divisible, por lo que ya no es primo
            }
            i++;
        }
        if (esPrimo) {
            console.log(numero + " no es un numero primo");
        } else {
            console.log(numero + " es un numero primo");
        }
    }
    
}
primo();
primo(30);
primo(-3);
*/

//Programa una funcion que determine si un numero es par o impar
/*
const paridad = (numero = undefined) => {
    if (!numero) {
        console.warn("No has ingresado numero");
    }
    if (typeof numero !== "number") {
        console.error("El valor ingresado: " + numero + " no es un numero");
    }
    if (typeof numero === "number" && numero) { 
        if (numero % 2 == 0) {
            console.log(numero + " es par");
        } else {
            console.log(numero + " es impar");
        }
    }
}
paridad();
paridad(15);
paridad(2);
*/

//Programa una funcion para convertir grados Celsius a Fahrenheit y viceversa
/*
const convertirGrados = (grados = undefined,unidad=undefined) => {
    if (grados===undefined) {
        console.warn("No has ingresado grados");
    }
    if (typeof grados !== "number") {
        console.error("El valor ingresado: " + grados + " no es un numero");
    }
    if (unidad === undefined) {
        console.warn("No ingresaste la unidad de los grados a convertir");
    }
    if (typeof unidad !== "string") {
        console.error("El valor " + unidad + " ingresado, no es una cadena de texto");
    }
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) { //Expresion regular: si la letra no es C o F
        console.warn("Valor de unidad invalido");
    }
    if (unidad === "C") {
        console.info(grados + "ºC = " + (grados * (9 / 5) + 32) + "ºF");
    }
    else if (unidad === "F") {
        console.info(grados + "ºF = " + Math.round(((grados-32)  * (5/ 9))) + "ºC");
    }
}
convertirGrados(3, "C");
convertirGrados(90, "F");
*/

//Programa una funcion para convertir numeros de base binaria a decimal y vicerversa
/*
const convertirNum = (numero = undefined,base=undefined) => {
    if (numero===undefined) {
        console.warn("No has ingresado numero");
    }
    if (typeof numero !== "number") {
        console.error("El valor ingresado: " + numero + " no es un numero");
    }
    if (base === undefined) {
        console.warn("No ingresaste la base del numero a convertir");
    }
    if (typeof base !== "number") {
        console.error("El valor " + base + " ingresado, no es un numero");
    }
    if (base === 2) { //Convertimos el numero a decimal
        return console.info(numero + " base " + base+" = " + parseInt(numero, base) + " base 10");
    } else if (base === 10) {//Convertimos el numero a binario
        return console.info(numero + " base " + base+" = " + (numero.toString(2)) + " base 2");//le pasamos el parametro base a toString() para convertirlo en binario en este caso
    } else {
        return console.error("El tipo de base a convertir no valido");
    }
}
convertirNum();
convertirNum(100, 2);
convertirNum(100);
convertirNum("2");
convertirNum(1000, 2);
convertirNum(2, 10);
convertirNum(110011, 2);
convertirNum(51, 10);
*/

//Programa una funcion que devuelva el monto final despues de aplicar una descuenta a una cantidad dada
/*
const descuento = (cantidad = undefined, porcentaje = 0) => {
    if (cantidad===undefined) {
        return console.warn("No has ingresado cantidad");
    }
    if (typeof cantidad !== "number") {
        return console.error("El valor ingresado: " + cantidad + " no es un numero");
    }
    if (cantidad === 0) {
        return console.error("La cantidad no puede ser 0");
    }
    if (cantidad < 0) {
        return console.error("La cantidad no puede ser negativa");
    }
    if (typeof porcentaje !== "number") {
        return console.error("El valor " + porcentaje + " no es un numero");
    }
    if (porcentaje < 0) {
        return console.error("El descuento no puede ser negativo");
    }

    let descontar = cantidad * (1 - (porcentaje / 100));
    console.info(cantidad + " con el " + porcentaje + " % de descuento al final se queda en: " + descontar);
}
descuento();
descuento(100, -23);
descuento(0);
descuento(-23, -45);
descuento(150, 23);
descuento("r");
*/

//Programa una funcion que dada una fecha valida diga cuantos años han pasado hasta el dia de hoy
/*
const calcularAnios = (fecha=undefined) => {
    if (fecha === undefined) {
        return console.warn("No ingresaste ninguna fecha");
    }
    if (!(fecha instanceof Date)) { //Esta vez no usamos el typeof porque con este siempre va a devolver un tipo objeto, negamos si fecha es una instancia de Date
        return console.warn("El valor " + fecha + " ingresado no es una fecha valida");
    }
    let anios = new Date().getTime() - fecha.getTime();//Obtenemos en ms el tiempo pasado desde la fecha dada hasta el dia de hoy. getTime() da la fecha en milisegundos y new Date() nos da la fecha actual
    let aniosEnMs = 1000 * 60 * 60 * 24 * 365; //1 año en milisegundos
    let aniosHumanos = Math.floor(anios/aniosEnMs);
    if (Math.sign(aniosHumanos) === -1) {
        return console.warn("Faltan " + (Math.abs(aniosHumanos)) + " años para llegar al año " + fecha.getFullYear()); //Math.abs hace que el programa ignore si el numero es negativo o positivo, solo elimina el signo que sea
    } else if (Math.sign(aniosHumanos) === 1) {
        console.info("Han pasado " + aniosHumanos + " años desde " + fecha.getFullYear());
    } else {
        console.info("Estamos en el año actual: " + fecha.getFullYear());
    }

}
calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1900,3,5));
calcularAnios(new Date(2084,3,5));
*/

//Programa una funcion que dada una cadena de texto cuente el numero de vocales y consonantes
/*
const contarLetras = (cadena = "") => {
    if (!cadena) {
        return console.warn("No has ingresado una cadena de texto");
    }
    if (typeof cadena !== "string") {
        return console.error("El valor ingresado " + cadena + " no es un string");
    }

    let vocales = 0;
    let consonantes = 0;

    for (let letra of cadena) {
        if (/[aeiouáéíóúüAEIOUÜÁÉÍÓÚ]/.test(letra)) {
            vocales++;
        } else if(letra!==' '){
            consonantes++;
        }
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
contarLetras();
contarLetras(3);
contarLetras("Hola Munfo")
*/

//Programa una funcion que valide qeu un texto sea un nombre válido
/*
const validarNombre = (nombre = "") => {
    if (!nombre) {
        return console.warn("No has ingresado una cadena de texto");
    }
    if (typeof nombre !== "string") {
        return console.error("El valor ingresado " + nombre + " no es un string");
    }

    let expReg = /^[A-Za-zÑñáéíóúÜÁÉÍÓÚü\s]+$/g.test(nombre);

    return (expReg)
        ?console.info(nombre + " es un nombre válido")
        :console.warn(nombre+" no es un nombre válido")
}
validarNombre();
validarNombre(3);
validarNombre("Pepe Rodriguez Julio")
*/

//Programa una funcion que valide que un texto sea una email valido
/*
const validarMail = (mail = "") =>{
    if (!mail) {
        return console.warn("No has ingresado una cadena de texto");
    }
    if (typeof mail !== "string") {
        return console.error("El valor ingresado " + mail + " no es un string");
    }
    let expReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(mail); //Expresion regular para validar email

    return (expReg)
        ?console.info(mail + " es un email válido")
        :console.warn(mail+" no es un email válido")
}
validarMail();
validarMail(3);
validarMail("Pepe98@gmail.com");
*/

//Fusion dos ejercicios anteriores
/*
const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) {
        return console.warn("No has ingresado una cadena de texto");
    }
    if (typeof cadena !== "string") {
        return console.error("El valor ingresado " + cadena + " no es un string");
    }
    if (patron===undefined) {
        return console.warn("No ingresaste un patron a evaluar");
    }
    if(!(patron instanceof RegExp)) {
        return console.error("El valor ingresado " + patron + " no es una expresion regular");
    }
    let expReg = patron.test(cadena);

    return (expReg)
        ?console.info(cadena + " es un patron existente")
        :console.warn(cadena+" no es un patron existente")
}

validarPatron();
validarPatron("PepeRodriguez",/^[A-Za-zÑñáéíóúÜÁÉÍÓÚü\s]+$/g);
validarPatron("PepeRodriguez@gmail.com", /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i);
*/

//Programa una funcion que dado un array numerico devuelve otro array con los numeros elevados al cuadrado
/*
const elevar = (array = undefined) => {
    for (let num of array) {
        if (typeof num !== "number") {
            return console.error("El valor ingresado no es un número");
        } 
    }
    const newArr = array.map(numb => numb * numb);

    console.log("Array original: " + array + ". Nuevo array: " + newArr);
}
elevar([1, 80, 7]);
*/

//Programa una funcion que dado un array devuelva el numero mas bajo y el mas alto
/*
const mayMen = (array=undefined) => {
    return console.log("Valor mayor: " + Math.max(...array) + ". Valor menor: " + Math.min(...array));
} //Usamos el spread operator "..."

mayMen([1, 6, 9, 23, 0, 45, 78]);
*/

//Programa una funcion que dado un array devuelva un objeto con 2 arrays, en el primero devuelve los pares y en el segundo los impares
/*
const parImpar = (array = undefined) => {
    return console.log({
        pares: array.filter(num => num % 2 === 0),
        impares: array.filter(num => num % 2 !== 0),
    })
}

parImpar([2, 56, 89, 9, 10, 5]);
*/

//Programa una funcion que dado un array de numeros devuelva un objeto con 2 arrays, el primero estará ordenado de forma ascendente y el segundo de forma descendente
/*
const ordenar = (array = undefined) => {
    return console.info({
        array,
        ascendente: array.map(num => num).sort((itemA, itemB) => { //Usamos este callback para que se ordene correctamente
            return itemA - itemB;
        }), //sort ordena de forma ascendente
        descendente: array.map(num => num).sort((itemA, itemB) => {
            return itemA - itemB
        }).reverse() //.reverse para dar la vuelta al array
    })
}
ordenar([90, 1, 78, 23, 0, 15,4, 29]);
*/

//Programa una funcion que dado un array elimine los duplicados
/*
const eliminarDobles = (array = undefined) => {
    
    return console.log(
        array.filter((value,index,self) => self.indexOf(value)===index
        )
    )
    
    
    //Otra forma de hacerlo:
    return console.info(
        [...new Set(array)] //Usamas tipo de dato Set y el spread operator
    )
}
eliminarDobles([1, 7, true, 2, 9, 9, 3, 3, 7, 9, 8, true]);
*/

//Programa una funcion que dado una array de numeros obtenga la media de estos
/*
var sum = 0;
const media = (array = undefined) => {
    
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let mediaa = (sum / array.length);
    return console.log(mediaa);
    
    //Otra forma de hacerlo con .reduce():

    return console.log(
        array.reduce((total, num, index, array) => {
            total += num;
            if (index === array.length - 1) {
                return ("La media de " + array + " es: " + total / array.length); //Esto indica que hemos llegado al final del array
            } else {
                return total; //Para ir retornando el valor de la variable total
            }
        })
    )
}
media([1,6,8,2,4,6]);
*/

