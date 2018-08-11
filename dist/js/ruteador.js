function routearModulo(objeto,modulo,archivo){
    console.log(objeto+'cargando el archivo -->'+modulo+"/"+archivo)
    $("#"+objeto).load("modulos/"+modulo+"/"+archivo+".html" );
}