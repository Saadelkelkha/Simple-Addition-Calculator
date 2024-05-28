function calculer(){
    var nombre = document.getElementsByTagName("input");
    var calc = parseFloat(nombre[0].value) + parseFloat(nombre[1].value) ;
    document.querySelector("p").innerHTML = calc;
};