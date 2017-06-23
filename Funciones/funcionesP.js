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

function desordenar(ar1){
   var numeros=ran(ar1.length);
   var posiciones1=[];
   
    for( var i=0; i<ar1.length; i++){
    posiciones1.push({lf:ar1[i].style.left,tp:ar1[i].style.top});
 
 
     }

  for( var ii=0; ii<ar1.length; ii++){
   ar1[ii].style.left=posiciones1[numeros[ii]-1].lf;
  ar1[ii].style.top=posiciones1[numeros[ii]-1].tp;

  }

}