
var respuestas= new Array();
var iconoBien= new Array();
var iconoMal = new Array();
var cajasA= new Array();
respuestas.push(400);
respuestas.push(250);
respuestas.push(90);
respuestas.push(875);

iconoBien.push("bien1");
iconoBien.push("bien2");
iconoBien.push("bien3");
iconoBien.push("bien4");

iconoMal.push("mal1");
iconoMal.push("mal2");
iconoMal.push("mal3");
iconoMal.push("mal4");

var cajasInput= new Array();
function inicio(){
ajustar();
acomodar("texto",45);
acomodar("caja",10);
acomodar("texto2",70);


cajasInput.push("txt1");
cajasInput.push("txt2");
cajasInput.push("txt3");
cajasInput.push("txt4");


cajasA.push("caja1");
cajasA.push("caja2");
cajasA.push("caja3");
cajasA.push("caja4");
ocultarbtnVerificar();

}

function mostrarFlechaSiguiente(){
 $("#flecha").css("visibility","visible");
}

function mostrarFlechaMal(){
	$("#caja1").addClass("form-group has-error has-feedback");
	$("#sp1").css("visibility","visible");
}


function acomodar(clase,ancho){
var clase1=document.getElementsByClassName(clase);
var alt=24;  var anch=ancho;
alt=clase=="caja"?26:alt;
for(var i=0; i<clase1.length; i++){
	clase1[i].style.position="absolute";
   clase1[i].style.top=alt+"%";
   clase1[i].style.left=anch+"%";
   alt+=18;
}





}

function getIconoMal(idCajaInput){
var getpos= cajasInput.indexOf(idCajaInput);
return getpos;
} 


 function mostrarIconoBien(id,cajaid){
 $("#"+cajaid).addClass("form-group has-success has-feedback");
 $("#"+id).css("visibility","visible");
  }


function ocultarIconoBien(id,cajaid){
$("#"+cajaid).removeClass("form-group has-success has-feedback");
$("#"+id).css("visibility","hidden");
}

  function mostrarIconoMal(id,cajaId){
  	 $("#"+cajaId).addClass("form-group has-error has-feedback");
  	$("#"+id).css("visibility","visible")
  }

  function ocualtarIconoMal(id,cajaId){
   $("#"+cajaId).removeClass("form-group has-error has-feedback");	
   $("#"+id).css("visibility","hidden");
  }




function ajustar(){
   var alto=$(window).height();
   var ancho=$(window).width();
   ancho=(ancho+alto)/2;
   var tamanio= ancho/45;

$(".texto").css("fontSize",(tamanio*1.5)+"px");
$(".caja").css("fontSize",(tamanio*1.5)+"px");
$(".texto2").css("fontSize",(tamanio*1.5)+"px");
$("input").css("fontSize",(tamanio*1.5)+"px");
$("#consigna").css("fontSize",(tamanio*1.2)+"px");

}

function marcarCajaInput(idcaja){
 $("#"+idcaja).attr('disabled','disabled');
 $("#"+idcaja).addClass("noseleccionable");

}

$("#verificar").on("click",verif);



function verif(event){
  //var v1=parseInt($("#txt1").val());
var con=0;  var dim=cajasA.length;
 for(var i=0; i<cajasInput.length; i++){
  //console.log($("#"+cajasInput[i]).val()); 


  if(parseInt($("#"+cajasInput[i]).val())==""+respuestas[i]){
    marcarCajaInput(cajasInput[i]);
    mostrarIconoBien(iconoBien[i],cajasA[i]);
    con++;


  }else{
   mostrarIconoMal(iconoMal[i],cajasA[i]);
  }

 }

     if(con==dim){
    mostrarFlechaSiguiente();
    sonidoBien();
    }else{
  sonidoMal();
    }

ocultarbtnVerificar();
}



 function mostrarbtnVerificar(){
  $("#verificar").css("visibility","visible");
 }


 function ocultarbtnVerificar(){
  $("#verificar").css("visibility","hidden");
 }


$("input").on("click",setfocus);

function setfocus(e){
 
 $("#"+e.target.id).val("")  
 var pos=getIconoMal(e.target.id);
 ocualtarIconoMal(iconoMal[pos],cajasA[pos]);

 $("#"+e.target.id).focus();
 
  ocultarbtnVerificar();
 
  //
}

function soloNumero(ob){
  var ingreso=false;
  var caracter = event.keyCode;
  //console.log(caracter);
 if (caracter >=48 && caracter<=57){ 
   if(todosLlenos()){
    mostrarbtnVerificar();
   } 
 }else{
 	return event.returnValue = false;
 }

return ;
}

function sonidoBien(){
  var s=document.createElement("audio");
  s.src="../sonidos/bien.mp3";
  s.play();
}


function sonidoMal(){
  var s=document.createElement("audio");
  s.src="../sonidos/mal.mp3";
  s.play();
}


function todosLlenos(){
var ca= cajasInput; 
for(var i=0; i< ca.length; i++){
console.log(ca.length);
   if($("#"+ca[i]).val()===''){
    //console.log("false")
   return false;
}
}
 //console.log("true")
 return true;
}


 