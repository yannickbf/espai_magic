
    
    var mydata = JSON.parse(data);

    //function readTextFile(file, callback) { var rawFile = new XMLHttpRequest(); rawFile.overrideMimeType("application/json"); rawFile.open("GET", file, true); rawFile.onreadystatechange = function() { if (rawFile.readyState === 4 && rawFile.status == "200") { callback(rawFile.responseText); } } rawFile.send(null); } //usage: readTextFile("/Users/Documents/workspace/test.json", function(text){ var data = JSON.parse(text); console.log(data); }); 

    //const arrayObj = [{"id":1,"fecha":"2012/04/30 10:14:23","titulo":"entrada1","descripcion":"entrada1 descripcion"},{"id":2,"fecha":"2020/09/22 16:28:23","titulo":"entrada2","descripcion":"entrada2 descripcion"}];
    const arrayObj = mydata;

    for(var i=0; i<arrayObj.length; i++){
        alert(
            "Id: "+arrayObj[i].id+
            "\nFecha: "+arrayObj[i].fecha+
            "\nTitulo: "+arrayObj[i].titulo+
            "\nDescripcion: "+arrayObj[i].descripcion
            );
    }

    //Funcion para generar objeto con titulo y cuerpo
    function generarObjEntradaBlog() {
        var entradaBlog = new Object();
        entradaBlog.titulo = document.getElementById("titulo").value;
        entradaBlog.cuerpo = document.getElementById("cuerpo").value;
        return entradaBlog;
    }

    function generarJsonEntradaBlog() {

    }

    //Aqui controlamos que se hayan introducido los datos, devuelve "" si se han introducido los 2 datos, de lo contrario devuelve un string con los fallos
    function controlDeDatos() {
        var strErrores = "";

        //Si no han introducido el titulo sera error
        if (document.getElementById("titulo").value == "") {
            strErrores += "Titulo no introducido\n";
        }

        if (document.getElementById("cuerpo").value == "") {
            strErrores += "Cuerpo no introducido\n";
        }

        return strErrores;
    }

    //Funcion para añadir entrada
    function anadirEntrada() {
        alert(llistatHotels);

        var datosCompletados = controlDeDatos();
        if (datosCompletados == "") {

        }
        else {
            alert("Faltan datos por completar:\n" + datosCompletados);
        }
    }

