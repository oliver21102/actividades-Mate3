var iconoBien= new Array();
var iconoMal = new Array();

var respuestas= new Array();
respuestas.push("primero");
respuestas.push("segundo");
respuestas.push("tercero");
respuestas.push("cuarto");
respuestas.push("quinto");

iconoBien.push("bien1");
iconoBien.push("bien2");
iconoBien.push("bien3");
iconoBien.push("bien4");
iconoBien.push("bien5");

iconoMal.push("mal1");
iconoMal.push("mal2");
iconoMal.push("mal3");
iconoMal.push("mal4");
iconoMal.push("mal5");

var cajasInput= new Array();
var cajasA= new Array();

cajasInput.push("txt1");
cajasInput.push("txt2");
cajasInput.push("txt3");
cajasInput.push("txt4");
cajasInput.push("txt5");


cajasA.push("caja1");
cajasA.push("caja2");
cajasA.push("caja3");
cajasA.push("caja4");
cajasA.push("caja5");
var numerosRan;
var puntero=0;

 var respuestas2 = new Array();

 function ajustar(){
   var alto=$(window).height();
   var ancho=$(window).width();
   ancho=(ancho+alto)/2;
   var tamanio= ancho/45;   

   $("#consigna").css("font-size",(tamanio*1.6)+"px");
   $(".cuadroNumeros").css("font-size",(tamanio*1.6)+"px");
   $(".form-control").css("font-size",(tamanio*0.9)+"px");
   
   //$(".cabecera").css("font-size",(tamanio*1.2)+"px");
 }


 function inicio(){
 ajustar();
colocarImagenes("imagenes",0);
 
colocarImagenes("numeros",0);

acomodarmini();
acomodarInput();
var v1=document.getElementsByClassName("cajas");
var v2=document.getElementsByClassName("imagenC")
 numerosRan=desordenar(v1,v2);
ocultarbtnVerificar();
colocarPrimerCursor();
//colocarImagensRandomicas();
 }

 function colocarPrimerCursor(){
   var vcajas=document.getElementsByClassName("form-control");
  $("#"+ vcajas[numerosRan[puntero]-1].id).focus();
  //console.log(vcajas[numerosRan[0]-1].id);

 }
 function siguienteFoco(){
     var vcajas=document.getElementsByClassName("form-control");
 
    puntero++;
    if(puntero>(vcajas.length)-1){
     puntero=0;
    }
    console.log("diasbled "+$("#"+vcajas[numerosRan[puntero]-1].id).attr("disabled"));
    if($("#"+vcajas[numerosRan[puntero]-1].id).attr("disabled")==false){
    $("#"+vcajas[numerosRan[puntero]-1].id).focus();
    sonidoBien();
    }else{
    
    }

 }


$("#verificar").on("click",fverificar);
 function fverificar(){
  var cont=0;
  var ventrada= document.getElementsByClassName("form-control");
   for(var i=0; i< respuestas.length; i++){
  // console.log($("#"+ventrada[i].id).val()+"   "+respuestas[i]);
  if(  $("#"+ventrada[i].id).val()==respuestas[i] || $("#"+ventrada[i].id).val()==respuestas2[i]){
     marcarCajaInput(cajasInput[i]);
    mostrarIconoBien(iconoBien[i],cajasA[i]);
  //$("#"+ventrada[i].id).attr('disabled','disabled');
   $("#"+cajasInput[i]).attr("marca","bien");
  cont++;
  
  }else{
     mostrarIconoMal(iconoMal[i],cajasA[i]);
     $("#"+cajasInput[i]).attr("marca","mal");
    // sonidoMal();
  }

   }
   if(cont==ventrada.length){
    mostrarFlecha();
    ocultarbtnVerificar(); 
    sonidoBien();
   }else{
    sonidoMal();
   }

 }

function marcarCajaInput(idcaja){
 $("#"+idcaja).attr('disabled','disabled');
 $("#"+idcaja).addClass("noseleccionable");

}


 function mostrarbtnVerificar(){
  $("#verificar").css("visibility","visible");
 }


 function ocultarbtnVerificar(){
  $("#verificar").css("visibility","hidden");
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



 function mostrarFlecha(){
 $("#flecha").css("visibility","visible");
 }


$("input").on("click",setfocus);

function setfocus(e){
 
 if( $("#"+e.target.id).attr("disabled")=="disabled" || $("#"+e.target.id).attr("marca")=="mal"  ){
 $("#"+e.target.id).val("");
 var pos=getIconoMal(e.target.id);
 ocualtarIconoMal(iconoMal[pos],cajasA[pos]);
 $("#"+e.target.id).attr("marca"," ");
 }

  $("#"+e.target.id).focus();
  ocultarbtnVerificar();  
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
//console.log($("#"+ca[i]).val());
   if($("#"+ca[i]).val()===''){
   return false;
}
}
 //console.log("true")
 return true;
}



 function acomodarmini(){
  /*
  $("#im1").css("left","5%");
  $("#im1").css("top","45%");

 $("#caja1").css("left","7%");
  $("#caja1").css("top","65%");*/


  var vv= document.getElementsByClassName("imagenC");
var an=5; var al=55;
  for(var i=0; i<vv.length; i++){
    vv[i].style.left=an+"%";
    vv[i].style.top=al+"%";
  an+=18;
  if(i==4){
    al+=25; an=5;
  }
  }
 }




 function  acomodarInput(){
    var vv= document.getElementsByClassName("cajas");
var an=5; var al=70;
  for(var i=0; i<vv.length; i++){
    vv[i].style.left=an+"%";
    vv[i].style.top=al+"%";
  an+=18;
  }
 }


 function solotexto(evt){
    
  var caracter = event.keyCode;
  //console.log(caracter);
 
 

    var texto= $(evt).val();
   

    if(texto=="septim"){
      $(evt).val("séptim");
    }

    if(texto=="decim"){
      $(evt).val("décim");
    }
    if(texto=="undecim"){
           $(evt).val("undécim");
    }
        if(texto=="duodecim"){
           $(evt).val("duodécim");
    }

      if(texto=="vigesim"){
           $(evt).val("vigésim");
    }

          if(texto=="décimo septim"){
           $(evt).val("décimo séptim");
    }
          if(texto=="trigesim"){
           $(evt).val("trigésim");
    } 

    if(texto=="cuadragesim"){
           $(evt).val("cuadragésim");
    }

if(texto=="quincuagesim"){
           $(evt).val("quincuagésim");
    }
if(texto=="sexagesim"){
           $(evt).val("sexagésim");
    }


if(texto=="septuagesim"){
           $(evt).val("septuagésim");
    }

if(texto=="octogesim"){
      $(evt).val("octogésim");
    }

if(texto=="nonagesim"){
           $(evt).val("nonagésim");
    }

if(texto=="centesim"){
           $(evt).val("centésim");
    }




 if (caracter >=48 && caracter<=57){ 
  return event.returnValue = false;
 }





  if(todosLlenos()){
    mostrarbtnVerificar();
   }

 return ;
 }

  function estaEnlaCadena(cad1,cade2){
 return cad1.indexOf(cade2)!=-1;

 }


 function colocarCajas(ar){
   var caj=document.getElementsByClassName(ar);
   var anch=0; var alt=0;
   for(var i=0; i<caj.length; i++){
      caj[i].style.position="absolute";
      caj[i].style.left=anch+"%";
      caj[i].style.top=alt+"%";
      alt+=20;
   }
 }


 function colocarImagenesC(ar){
   var caj=document.getElementsByClassName(ar);
   var anch=0; var alt=0;
   for(var i=0; i<caj.length; i++){
      caj[i].style.position="absolute";
      caj[i].style.left=anch+"%";
      caj[i].style.top=alt+"%";
      alt+=20;
   }
 }



 function colocarCuadros(){
 $("#cuadro1").css("left", "30%");
 $("#cuadro1").css("top", "50%");
 $("#cuadro2").css("left", "62%");
 $("#cuadro2").css("top", "50%");
 }



 function colocarImagenes(ar,ay){
 	var ar1= document.getElementsByClassName(ar);
 	var ancho=15; var alto=ay;
 	for(var i=0; i<ar1.length; i++){
        ar1[i].style.left=ancho+"%";
        ar1[i].style.top=alto+"%";
        ancho+=14;
 	}
 }


function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }

      return numeros;
  }
  
   
function desordenar(ar1,ar2){
   var numeros=ran(ar1.length);  ///321
   var posiciones1=[];
   var posiciones2=[];
 
   console.log(numeros);
   
    for( var i=0; i<ar1.length; i++){
    posiciones1.push({lf:ar1[i].style.left,tp:ar1[i].style.top,idA:ar1[i].id }); 
    posiciones2.push({lf:ar2[i].style.left,tp:ar2[i].style.top}); 
     }
 
   for( var ii=0; ii<ar1.length; ii++){
  ar1[numeros[ii]-1].style.left=posiciones1[ii].lf;
  ar1[numeros[ii]-1].style.top=posiciones1[ii].tp;

  ar2[numeros[ii]-1].style.left=posiciones2[ii].lf;
  ar2[numeros[ii]-1].style.top=posiciones2[ii].tp;
 //onsole.log($("#"+ar1[ii].id).children("input").attr("id"));
 

  }
 
  return numeros;

}

 
 




