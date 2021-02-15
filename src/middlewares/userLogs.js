/*midlewares de APLICACION!! ES UNA FUNCION se va ejecutar cuando la llamamemos, y le decimos que es lo que queres que haga a NIVEL APLICACION
 en este caso como es de aplicacion se va a ejecutar en todaa nuestra apliacion, son mas generales,
 cuando controla toda la aplicacion */
const fs = require('fs');

function logMiddleware(req,res,next){
    //una vez que se ejecute este middlewares que pase al NEXT middlewares que sigue 
        
    //Esto va hacer.. nos detalle en el archivo txt donde va ingresando el usuario en nuestra aplicacion
        //y escribirlo dentro de un archivo txt 
    fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingreso a : ${req.url} \n`);
    
    /* writeFileSync : lo sobreescribe 
       appendFileSync : no lo sobreescribe, lo vaa ir agegando
    */
    
    next(); //siempre alfinal, para que se ejecute next y pase al siguiente middlware
}

module.exports = logMiddleware;