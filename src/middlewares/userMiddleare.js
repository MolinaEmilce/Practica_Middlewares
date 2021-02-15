//si el usuario es es tal nos muestra la vista, de lo contrario no tiene privilegios para ingresar
//MIDDLEWARE DE RUTA, se coloca en la ruta

function adminMiddleware (req,res,next){
    if(req.query.user == "Ada" || req.query.user == "Greta" || req.query.user == "Vim" || req.query.user == "Tim"){
        next(); //que pase al siguiente middleware  ala siguiente ejecucion
    }else{
        res.send('No tienes privilegios para ingresar');
    }
}
module.exports = adminMiddleware;