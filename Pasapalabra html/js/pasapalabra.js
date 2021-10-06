const questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ] 



    const questions2 = [

        { letter: "a", answer: "abducir2", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien2"},
    
        { letter: "b", answer: "bingo2", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso2"},
    
        { letter: "c", answer: "churumbel2", status: 0, question: "CON LA C. Niño, crío, bebé2"},
    
        { letter: "d", answer: "diarrea2", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida2"},
    
        { letter: "e", answer: "ectoplasma2", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación2"},
    
        { letter: "f", answer: "facil2", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad2"},
    
        { letter: "g", answer: "galaxia2", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas2"},
    
        { letter: "h", answer: "harakiri2", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento2"},
    
        { letter: "i", answer: "iglesia2", status: 0, question: "CON LA I. Templo cristiano2"},
    
        { letter: "j", answer: "jabali2", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba2"},
    
        { letter: "k", answer: "kamikaze2", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria2"},
    
        { letter: "l", answer: "licantropo2", status: 0, question: "CON LA L. Hombre lobo2"},
    
        { letter: "m", answer: "misantropo2", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas2"},
    
        { letter: "n", answer: "necedad2", status: 0, question: "CON LA N. Demostración de poca inteligencia2"},
    
        { letter: "ñ", answer: "señal2", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.2"},
    
        { letter: "o", answer: "orco2", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien2"},
    
        { letter: "p", answer: "protoss2", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft2"},
    
        { letter: "q", answer: "queso2", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche2"},
    
        { letter: "r", answer: "raton2", status: 0, question: "CON LA R. Roedor2"},
    
        { letter: "s", answer: "stackoverflow2", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático2"},
    
        { letter: "t", answer: "terminator2", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.2"},
    
        { letter: "u", answer: "unamuno2", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.2"},
    
        { letter: "v", answer: "vikingos2", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa2"},
    
        { letter: "w", answer: "sandwich2", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso2"},
    
        { letter: "x", answer: "botox2", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética2"},
    
        { letter: "y", answer: "peyote2", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos2"},
    
        { letter: "z", answer: "zen2", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional2"}, ]


    const questions3 = [

        { letter: "a", answer: "abducir3", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien3"},
    
        { letter: "b", answer: "bingo3", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso3"},
    
        { letter: "c", answer: "churumbel3", status: 0, question: "CON LA C. Niño, crío, bebé3"},
    
        { letter: "d", answer: "diarrea3", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida3"},
    
        { letter: "e", answer: "ectoplasma3", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación3"},
    
        { letter: "f", answer: "facil3", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad3"},
    
        { letter: "g", answer: "galaxia3", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas3"},
    
        { letter: "h", answer: "harakiri3", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento3"},
    
        { letter: "i", answer: "iglesia3", status: 0, question: "CON LA I. Templo cristiano3"},
    
        { letter: "j", answer: "jabali3", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba3"},
    
        { letter: "k", answer: "kamikaze3", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria3"},
    
        { letter: "l", answer: "licantropo3", status: 0, question: "CON LA L. Hombre lobo3"},
    
        { letter: "m", answer: "misantropo3", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas3"},
    
        { letter: "n", answer: "necedad3", status: 0, question: "CON LA N. Demostración de poca inteligencia3"},
    
        { letter: "ñ", answer: "señal3", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.3"},
    
        { letter: "o", answer: "orco3", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien3"},
    
        { letter: "p", answer: "protoss3", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft3"},
    
        { letter: "q", answer: "queso3", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche3"},
    
        { letter: "r", answer: "raton3", status: 0, question: "CON LA R. Roedor3"},
    
        { letter: "s", answer: "stackoverflow3", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático3"},
    
        { letter: "t", answer: "terminator3", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.3"},
    
        { letter: "u", answer: "unamuno3", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.3"},
    
        { letter: "v", answer: "vikingos3", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa3"},
    
        { letter: "w", answer: "sandwich3", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso3"},
    
        { letter: "x", answer: "botox3", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética3"},
    
        { letter: "y", answer: "peyote3", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos3"},
    
        { letter: "z", answer: "zen3", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional3"}, ]


let bienvenida = "Bienvenido al maravilloso PASAPALABRA!!!";
let instrucciones = "Acierta cada palabra en orden alfabético por su definición y ganarás... en sabiduría!! Wow "
let preparados = "Prepárate, comienza el juego!!"

let respuesta;
let numRespuestasCorrectas = 0;
let numRespuestasFalladas = 0;
let letrasRosco = [
    {letra: "A", estado: 0}, 
    {letra: "B", estado: 0}, 
    {letra: "C", estado: 0}, 
    {letra: "D", estado: 0}, 
    {letra: "E", estado: 0}, 
    {letra: "F", estado: 0}, 
    {letra: "G", estado: 0}, 
    {letra: "H", estado: 0}, 
    {letra: "I", estado: 0}, 
    {letra: "J", estado: 0}, 
    {letra: "K", estado: 0}, 
    {letra: "L", estado: 0}, 
    {letra: "M", estado: 0}, 
    {letra: "N", estado: 0}, 
    {letra: "Ñ", estado: 0}, 
    {letra: "O", estado: 0}, 
    {letra: "P", estado: 0}, 
    {letra: "Q", estado: 0}, 
    {letra: "R", estado: 0}, 
    {letra: "S", estado: 0}, 
    {letra: "T", estado: 0}, 
    {letra: "U", estado: 0}, 
    {letra: "V", estado: 0}, 
    {letra: "W", estado: 0}, 
    {letra: "X", estado: 0}, 
    {letra: "Y", estado: 0}, 
    {letra: "Z", estado: 0},];

let roscoEscogido;
let numRoscos = 3; 
let roscos = [questions, questions2, questions3];

let ranking = [];
let newUserRanking = {nombre: "Alvaro Cabero", acertadas: 28 };
let rankingPanel = [];

let velo;
let mensaje;
let pregunta;

window.onload = pasapalabra;

//function inicio(){

    /*velo = document.querySelector("#velo");
    mensaje = document.querySelector("#mensaje");
    mensaje.innerHTML ="";
    velo.style.display= 'none';
    

    //alert(bienvenida);
    document.querySelector("#velo").style.display= 'flex';
    mensaje.insertAdjacentHTML('beforeend', bienvenida);*/


//    pasapalabra();
//}



    function pasapalabra (){

        //pregunta = document.querySelector(".pregunta");
        //respuesta = document.querySelector(".respuesta");
        

        /*document.querySelector("#velo").style.display= 'none';
        document.querySelector("#mensaje").innerHTML ="";

        document.querySelector("#velo").style.display= 'flex';
        document.querySelector("#mensaje").insertAdjacentHTML('beforeend', bienvenida);

        //alert(instrucciones);
        document.querySelector("#mensaje").innerHTML ="";
        document.querySelector("#velo").style.display= 'flex';
        document.querySelector("#mensaje").insertAdjacentHTML('beforeend', preparados);*/
        //document.querySelector(".pregunta").innerHTML ="Con la A";

        reinicioRosco();

        roscoEscogido = Number(Math.floor(Math.random()*numRoscos) + 1); //min numero de Roscos de preguntas es 1
        
        //alert(preparados);
       // document.querySelector("#velo").style.display = 'flex';
        //document.querySelector("#mensaje").insertAdjacentHTML('beforeend', preparados);
        
        //alert('El rosco de preguntas escogido es el número ' + roscoEscogido); 
        //alert(`Letra ${letrasRosco[0].letra}-> Estado:  ${letrasRosco[0].estado}`);
        //alert(`Letra ${questions[0].letter} -> Estado:  ${questions[0].status}`);
        //console.log(`Letra ${letrasRosco[0].letra} -> Estado:  ${letrasRosco[0].estado}`);
        //console.log(`Letra ${questions[0].letter} -> Estado:  ${questions[0].status}`);

        do{  
            
            //vueltasAlRosco();

            for(j=0; j<27; j++){
                let j=0;
                console.log(`Letra ${letrasRosco[j].letra} -> Estado:  ${letrasRosco[j].estado}`);
                document.querySelector(".pregunta").innerHTML ="";
                document.querySelector(".respuesta").innerHTML ="";
                
                if(letrasRosco[j].estado == 0){
                    
                    do{
                        console.log(roscos[roscoEscogido-1][j].question);
                        document.querySelector(".pregunta").innerHTML = roscos[roscoEscogido-1][j].question;
                        //document.querySelector(".pregunta").insertAdjacentHTML('beforeend', roscos[roscoEscogido-1][j].question);
                        //respuesta = prompt ('----------------------------------Pregunta----------------------------------\n\n' + roscos[roscoEscogido-1][j].question);
                        
                        //document.querySelector(".boton").onclick = comprobarRespuesta;
                        document.querySelector(".boton").addEventListener("click", comprobarRespuesta);
                        respuesta = comprobarRespuesta();
                        alert(respuesta);

                        if(respuesta != null){

                            respuesta = (respuestaSinTildes(respuesta)).toLowerCase();
                        }
                    
                    }while(respuesta == "" );

                    console.log(respuesta);

                    if(respuesta != "end" && respuesta != null){

                        if (respuesta == 'pasapalabra' ){

                            letrasRosco[j].estado = 0;
                        }
                        //document.querySelector("#pasapalabra").addEventListener("click", pasarPalabra);
                        

                        if (respuesta == roscos[roscoEscogido-1][j].answer ){

                            numRespuestasCorrectas++;
                            letrasRosco[j].estado = 1;
                           // alert ('¡Muy bien! ¡Respuesta correcta!');
                           //document.querySelector(".respuesta").insertAdjacentHTML('beforeend', '¡Muy bien! ¡Respuesta correcta!');
                        }
                        else{

                            numRespuestasFalladas++;
                            letrasRosco[j].estado = 2;
                            //alert ('Pero, ¿Qué dices? ¡Respuesta incorrecta desgraciad@!');
                            //alert (`La respuesta correcta es: ${roscos[roscoEscogido-1][j].answer}`);
                            //document.querySelector(".respuesta").insertAdjacentHTML('beforeend', 'Pero, ¿Qué dices? ¡Respuesta incorrecta desgraciad@!');
                            //document.querySelector(".respuesta").insertAdjacentHTML('beforeend', `La respuesta correcta es: ${roscos[roscoEscogido-1][j].answer}`);
                        }
                    }
                    else{
                       break;
                    }
                    //alert(`Letra ${letrasRosco[0].letra}-> Estado:  ${letrasRosco[0].estado}`);
                    //alert(`Letra ${questions[0].letter} -> Estado:  ${questions[0].status}`);
                    
                }
                //alert(numRespuestasCorrectas + numRespuestasFalladas);
                /*if((numRespuestasCorrectas + numRespuestasFalladas >= 27) || respuesta == 'end')
                {
                    break;
                }*/
                
            }

        }while(respuesta != "end" && (numRespuestasCorrectas + numRespuestasFalladas < 27));
    
        mostrarResultados();
        
        if(numRespuestasFalladas + numRespuestasCorrectas >= 27){

            alert('Enhorabuena, has ganado el premio de hoy!!!');
            
            newUserRanking.nombre = prompt ('Introduce tu nombre y te colocamos en el ranking');
            newUserRanking.acertadas = numRespuestasCorrectas;

            if (newUserRanking != null);{
                
                ranking.push(newUserRanking); //almaceno el nuevo usuario 
                ranking.sort(function(a,b){return b.acertadas-a.acertadas}); //ordeno
                rankingPanel.push (`${ranking.length}.- ${newUserRanking.nombre} - ${newUserRanking.acertadas}`);    //almaceno la cadena para imprimir
                alert(rankingPanel.join('\n'));
            }

        }

        if(confirm("¿Deseas volver a jugar a esta pasada de juego?")){
            pasapalabra ();
        }
        else{
            alert('Pues hasta pronto!!');   
        }   

}

pasapalabra ();

function comprobarRespuesta(){
    let answer = document.querySelector(".boton2").value;
    return answer;  
}

/*function pasarPalabra(){
    letrasRosco[j].estado = 0;
}*/

function mostrarResultados(){

    if(numRespuestasCorrectas == 0){
        alert(`No has dado pie con bola... ni una respuesta correcta... Qué triste!`);
    }
    else if (numRespuestasCorrectas == 1) {
        alert(`Has acertado ${numRespuestasCorrectas} respuesta! Espabila!`);
    }
    else{
        alert(`Has acertado ${numRespuestasCorrectas} respuestas! Muy bien!`);
    }

    if(numRespuestasFalladas == 0){
        alert(`...y no has fallado ni una respuesta, ole ole! Menuda máquina!`);
    }
    else if (numRespuestasFalladas == 1) {
        alert(`...y has fallado solo ${numRespuestasFalladas} respuesta, no está nada mal!`);
    }
    else{
        alert(`...y has fallado ${numRespuestasFalladas} respuestas, ya te vale..`);
    }
}

function respuestaSinTildes(respuesta){

    respuesta = respuesta.replace(/á/gi,"a");
    respuesta = respuesta.replace(/é/gi,"e");
    respuesta = respuesta.replace(/í/gi,"i");
    respuesta = respuesta.replace(/ó/gi,"o");
    respuesta = respuesta.replace(/ú/gi,"u");

    return respuesta;
}

function reinicioRosco(){
     
    for(i=0; i<27; i++){

        letrasRosco[i].estado = 0;
    }
    numRespuestasCorrectas = 0;
    numRespuestasFalladas = 0;
}