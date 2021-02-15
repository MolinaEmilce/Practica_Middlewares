module.exports = {
    index: (req,res)=>{
        res.render('index');
    },
    admin: (req,res)=>{
        res.render('admin',{
            welcome : 'Hola admin :) ' + req.query.user
            //req.query.user : query trae nos trae datos, user relacion que trae el name del input.
        });
    }
}