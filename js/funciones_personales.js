document.getElementById('btn_datos').addEventListener('click', function(){
    document.getElementById("informacion1").innerHTML ='<h3>Datos Personales</h3>\nNombre y Apellido: Samuel Rodriguez\n Edad: 40 años\n Nacionalidad: Argentina\n Estado Civil: Casado\n Cantidad de hijos: Varios';
} );

document.getElementById('btn_ubicacion').addEventListener('click', function(){
    document.getElementById("informacion2").innerHTML ='<h3>Domicilio</h3>\nLocalidad: Rosario\n Domicilio: Salta 2053\n Cerca de: Terminal de Ómnibus\n Provincia: Santa Fe';
} );

document.getElementById('btn_contacto').addEventListener('click', function(){
    document.getElementById("informacion3").innerHTML ='<h3>Datos de contacto</h3>\nTeléfono Fijo: 0341 470-7389\n Celular: 341-979797\n WhatsApp: Si, de 9:00 a 17:00 hs\n e-mail: s.rodriguez@gmail.com';
} );