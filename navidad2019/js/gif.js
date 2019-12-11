  /*var urls = [
    'img/2020-alcohol-anniversary-3036525.jpg',
    'img/pexels-photo-1050244.jpeg'
    'img/frame3.png',
    'img/frame4.png',
    'img/frame5.png',
    'img/frame6.png',
    'img/frame7.png',
    'img/frame8.png',
    'img/frame9.png',
    'img/frame10.png'
  ];*/
  var papaNoel = [
    '/navidad2019/img/papaNoel/papanoel1.png',
    '/navidad2019/img/papaNoel/papanoel2.png',
    '/navidad2019/img/papaNoel/papanoel3.png',
    '/navidad2019/img/papaNoel/papanoel4.png',
    '/navidad2019/img/papaNoel/papanoel5.png'];
  var navidadMovimiento = [
    '/navidad2019/img/navidadMovimiento/navidadMovimiento1.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento2.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento3.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento4.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento5.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento6.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento7.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento8.png',
    '/navidad2019/img/navidadMovimiento/navidadMovimiento9.png'//,
    //'img/navidadMovimiento/navidadMovimiento10.png',
  ];
  var arbolito = [
    '/navidad2019/img/patinar/patinar1.png',
    '/navidad2019/img/patinar/patinar2.png',
    '/navidad2019/img/patinar/patinar3.png',
    '/navidad2019/img/patinar/patinar4.png',
    '/navidad2019/img/patinar/patinar5.png',
    '/navidad2019/img/patinar/patinar6.png',
    '/navidad2019/img/patinar/patinar7.png',
    '/navidad2019/img/patinar/patinar8.png'];

  var urls = [];//not empty
  var text = [];//not empty
  var w  , h , //720p x 1280
      canvas, ctx, encoder, image, gifEscogido, delay = 250;//250

  var addFrame = function(i, callback) {
    this.img = new Image();
    this.img.src = urls[i];
    // Wait for image to be loaded
    img.onload = function() {
      
      // Clear canvas by painting white
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(0, 0, w, h);
      // Copy image element onto canvas
      ctx.drawImage(this, 0, 0, w, h);
      
      //text on canvas-> fill text(text, "x", "y")
      //ctx.font = "50px sans-serif"; //ctx.font = "30px Arial";//tamanio y tipo letra
      //ctx.fillStyle = "green";//color
      //ctx.fillStyle = "#ff0000";
      //ctx.textAlign = "center";

      //funcion separar texto
     // separarTexto(text[0],text[1]);
      //ponerTexto(texto, firma, posicion de textoX, textoY, poiscion firmaX, firmaY)
     
     switch(gifEscogido){
        case "1":
            ponerTexto(text[0], text[1], 145, 340, 180, 580);
        break;
        case "2":
            ponerTexto(text[0], text[1], 140, 190, 180, 320);
        break;
        case "3":
            ponerTexto(text[0], text[1], 745, 180, 745, 470);
        break;
      }
      
      //ctx.fillText(text[0], 90, 50);//msj 1 50? Os deseamos unas felices fiestas y un prospero año
     // ctx.fillText(text[1], 200, 300);//msj 2 25? Oficina de Software Libre
      
      // Add animation frame
      encoder.addFrame(ctx);

      // Call next iteration only if there's more images left
      if (urls[++i]) {
        // Time wait only for demo purpose
        setTimeout(function() {
          callback(i, callback);
        }, 200);
      } else {
        encoder.finish();
        generateGIF();
      }
    };
  };

  var generateGIF = function() {
    // Create ArrayBuffer with unsigned int 8 bit view
    var bin = new Uint8Array(encoder.stream().bin);
    // Create Blob of GIF type
    var blob = new Blob([bin.buffer], {type:'image/gif'});
    // Create object URL from blob
    var url = URL.createObjectURL(blob);
    var image = document.getElementById('image');
    /* You can also generate DataURL from binary
      var b64 = window.btoa(encode.stream().getData());
      image.src = 'data:image/gif;base64,'+b64;
     */
    image.src = url;
    image.onload = function() {
      // Don't forget to revoke object url after load
      URL.revokeObjectURL(url);
    }
    //encoder.finish();
    //encoder.download("download.gif");
  };
/*
  window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    encoder = new GIFEncoder();
    encoder.setRepeat(0);
    encoder.setDelay(1000);
    encoder.setSize(w, h);
    canvas.width = w;
    canvas.height = h;
    encoder.start();
    addFrame(0, addFrame);
    
  }
*/

window.onload = function() {
  var dir = "img/";
  
}

function genGif() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    encoder = new GIFEncoder(720, 480, 'neuquant', true, 20);
    encoder.setRepeat(0);
    encoder.setDelay(delay);
    encoder.setSize(w, h);
    canvas.width = w;
    canvas.height = h;
    encoder.start();
    addFrame(0, addFrame);
}

function descargaGif() {
    //encoder.finish();
    encoder.download("NavidadOSL2019.gif");
}

function ponerTexto(texto, firma, textoX, textoY, firmaX, firmaY){
  var separameTexto = [];
  var tamTemp = 0, posIniX = textoX, posIniY = textoY, textoTemp = [];
  
  //separa texto
  separameTexto = texto.split(" ");
  //opciones texto canvas
  ctx.textBaseline = "bottom";
  ctx.font = "normal normal 50px dejavu serif";
  ctx.fillStyle = "#732424";

  separameTexto.forEach(element => {
    //console.log(element.length);
    tamTemp += element.length;
    console.log(tamTemp*33+textoX, " palabras", element,separameTexto[separameTexto.length -1]);
    if((tamTemp*33 + posIniX + (textoTemp.length -1)) < (w)){ //numero de caracteres(sin espacio)*pixeltaml + posicionInicial + espacios
        textoTemp.push(element.toString());//llenar texto temporal
        // console.log("array temp", textoTemp);

        //si es ultima palabra escribe
        if(element.toString() == separameTexto[separameTexto.length -1].toString()){
        ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY);
        }
    }
    else{
      console.log("array temp", textoTemp);
      //ctx.textAlign = "left";
      ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY); //poner texto temporal
      //resetear y modificar valores
      textoTemp = []; //vaciar textotemporal
      textoTemp.push(element.toString());//llenar texto temporal con la palabra saltada
      if(gifEscogido == '3'){
        //posIniX += 40;
        posIniY += 60;
      }else{
        posIniX += 40;
        posIniY += 60;
      }
      tamTemp = element.length;
      
      //condicion adicional última palabra
      if(element.toString() == separameTexto[separameTexto.length -1].toString()){
        console.log("ultima palabra");
        ctx.fillText(element.toString(), posIniX, posIniY); //poner texto temporal
      }
    }
  });//fin bucle palabras texto

  //config text2 canvas 
  //separar texto 
  console.log("fiiiirmaaaa",firma);
  separameTexto = firma.split(" ");
  //actualizar variables
  textoTemp = [];
  tamTemp = 0;

  //opciones firma canvas
  ctx.textBaseline = "bottom";
  ctx.font = "normal normal 40px dejavu serif";
  ctx.fillStyle = "#732424";
  posIniX = firmaX; posIniY = firmaY;
  separameTexto.forEach(element => {
    //console.log(element.length);
    tamTemp += element.length;
    console.log(tamTemp);
    if((tamTemp*33 + posIniX + (textoTemp.length -1)) < (w)){ //numero de caracteres(sin espacio)*pixeltaml + posicionInicial + espacios
        textoTemp.push(element.toString());//llenar texto temporal
        // console.log("array temp", textoTemp);

        //si es ultima palabra escribe
        if(element.toString() == separameTexto[separameTexto.length -1].toString()){
        ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY);
        }
    }
    else{
      console.log("array temp", textoTemp);
      //ctx.textAlign = "left";
      ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY); //poner texto temporal
      //resetear y modificar valores
      textoTemp = []; //vaciar textotemporal
      textoTemp.push(element.toString());//llenar texto temporal con la palabra saltada
      if(gifEscogido == '3'){
        //posIniX += 40;
        posIniY += 60;
      }else{
        posIniX += 40;
        posIniY += 60;
      }
      tamTemp = element.length;
      
      //condicion adicional última palabra
      if(element.toString() == separameTexto[separameTexto.length -1].toString()){
        //console.log("ultima palabra");
        ctx.fillText(element.toString(), posIniX, posIniY); //poner texto temporal
      }
    }
  });//fin bucle palabras firma  
}

function separarTexto(texto, texto2){ 
  var tempText = [];
  tempText = texto.split(" ");
 // console.log("mis texto", tempText.length);
 // console.log(tempText.slice(0,4));
//  var x = tempText.slice(0,4);
 // console.log(x.toString().replace(/,/g, ' '));
  /*ctx.fillText(x.toString().replace(/,/g, ' '), 90, 50);
  x = tempText.slice(4,tempText.length);
  ctx.fillText(x.toString().replace(/,/g, ' '), 130, 90);*/
  localizacionTexto(gifEscogido,tempText, texto2)

}


//   Os deseamos unas felices fiestas y un prospero año                Oficina de Software Libre
//   Oficina de Software Libre
function localizacionTexto(opcion,texto, texto2){
  switch (opcion) {
    case "1":
      /*let partir;
      //config text1 canvas 
      ctx.font = "60px ChristmasSparkle_PERSONAL";
      ctx.fillStyle = "#ff0000";
      partir = texto.slice(0,3);
      // console.log(x.toString().replace(/,/g, ' '));
      ctx.fillText(partir.toString().replace(/,/g, ' '), 190, 100);
      partir = texto.slice(4,6);
      ctx.fillText(partir.toString().replace(/,/g, ' '), 215, 160);
      partir = texto.slice(6,texto.length);
      ctx.fillText(partir.toString().replace(/,/g, ' '), 235, 210);
      */
      
      //console.log(texto);
      //config text1 canvas
      ctx.textBaseline = "bottom";
      ctx.font = "normal normal 50px dejavu serif";//normal normal 20px Verdana //normal normal 55px ChristmasSparkle_PERSONAL
      ctx.fillStyle = "#732424";
      //w=720 h=1280
      var tamTemp = 0, posIniX = 145, posIniY = 340, textoTemp = [];
      
      texto.forEach(element => {
        //console.log(element.length);
        tamTemp += element.length;
        console.log(tamTemp);
        if((tamTemp*33 + posIniX + (textoTemp.length -1)) < (w-20)){ //numero de caracteres(sin espacio)*pixeltaml + posicionInicial + espacios
            textoTemp.push(element.toString());//llenar texto temporal
           // console.log("array temp", textoTemp);
           if(element.toString() == texto[texto.length -1].toString()){
            ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY);
           }
        }
        else{
          console.log("array temp", textoTemp);
          //ctx.textAlign = "left";
          ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY); //poner texto temporal
          //resetear y modificar valores
          textoTemp = []; //vaciar textotemporal
          textoTemp.push(element.toString());//llenar texto temporal con la palabra saltada
          posIniX += 40;
          posIniY += 60;
          tamTemp = element.length;
          
          //condicion adicional última palabra
          if(element.toString() == texto[texto.length -1].toString()){
            //console.log("ultima palabra");
            ctx.fillText(element.toString(), posIniX, posIniY); //poner texto temporal
          }
        }
      });

      //config text2 canvas 
      ctx.font = "normal normal 40px dejavu serif";
      //ctx.fillStyle = "green";
      ctx.fillText(texto2, 180, 550);
    break;

    case "2":
      /*let partir2 ;
      //config text1 canvas 
      ctx.font = "60px ChristmasSparkle_PERSONAL";
      ctx.fillStyle = "#ff0000";
      partir2 = texto.slice(0,4);
      // console.log(x.toString().replace(/,/g, ' '));
      ctx.fillText(partir2.toString().replace(/,/g, ' '), 150, 100);
      partir2 = texto.slice(4,6);
      ctx.fillText(partir2.toString().replace(/,/g, ' '), 175, 160);
      partir2 = texto.slice(6,texto.length);
      ctx.fillText(partir2.toString().replace(/,/g, ' '), 150, 210);
      //config text2 canvas 
      ctx.font = "55px ChristmasSparkle_PERSONAL";
      ctx.fillStyle = "green";
      ctx.fillText(texto2, 160, 270);*/
      //config text1 canvas
      ctx.textBaseline = "bottom";
      ctx.font = "normal normal 40px Verdana";//normal normal 20px Verdana //normal normal 55px ChristmasSparkle_PERSONAL
      ctx.fillStyle = "#732424";
      //w=720 h=1280
      var tamTemp = 0, posIniX = 150, posIniY = 100, textoTemp = [];
      
      texto.forEach(element => {
        //console.log(element.length);
        tamTemp += element.length;
        console.log(tamTemp);
        if((tamTemp*25 + posIniX + (textoTemp.length -1)) < (850)){ //numero de caracteres(sin espacio)*pixeltaml + posicionInicial + espacios
            textoTemp.push(element.toString());//llenar texto temporal
           // console.log("array temp", textoTemp);
           if(element.toString() == texto[texto.length -1].toString()){
            ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY);
           }
        }
        else{
          console.log("array temp", textoTemp);
          //ctx.textAlign = "left";
          ctx.fillText(textoTemp.toString().replace(/,/g, ' '), posIniX, posIniY); //poner texto temporal
          //resetear y modificar valores
          textoTemp = []; //vaciar textotemporal
          textoTemp.push(element.toString());//llenar texto temporal con la palabra saltada
          posIniX += 50;
          posIniY += 60;
          tamTemp = element.length;
          
          //condicion adicional última palabra
          if(element.toString() == texto[texto.length -1].toString()){
            //console.log("ultima palabra");
            ctx.fillText(element.toString(), posIniX, posIniY); //poner texto temporal
          }
        }
      });

      //config text2 canvas 
      ctx.font = "normal normal 40px Verdana";
     // ctx.fillStyle = "green";
      ctx.fillText(texto2, 160, 270);

    break;

    case "3":
      var x = texto.slice(0,4);
      // console.log(x.toString().replace(/,/g, ' '));
      ctx.fillText(x.toString().replace(/,/g, ' '), 90, 50);
      x = texto.slice(4,texto.length);
      ctx.fillText(x.toString().replace(/,/g, ' '), 130, 90);
    break;


  }
}


function asignarGif(opcion){
    //console.log("opcion", opcion);
    switch(opcion){
      case "1":
        urls = papaNoel;
        w = 720 ; h = 1280;
      break;
      case "2":
        urls = navidadMovimiento;
        //w = 720 ; h = 1280;
        w = 1280 ; h = 720;
      break;
      case "3":
        urls = arbolito;
        //w = 720 ; h = 1280;
        w = 1280 ; h = 720;
      break;
    }
   // console.log("asiganarGif", urls);
  }

$(document).ready(function(){
  $("select").imagepicker({
    limit_reached: function(){alert('Postal ya escogida, si quiere escoger otra distinta deseleccione primero');}
    });

  $("#reiniciar").click(function(){
    //console.log($("select").data('picker').selected_values());
    //$("ul").find("div").removeClass("selected").addClass("thumbnail");
    //$("select").data('picker'); 
    
   // urls = $("select").data('picker').selected_values();
    //genGif();
    
  }); 

  $("#createGif").click(function(){
     //    urls = $("select").data('picker').selected_values();

     let gif = $("select").data('picker').selected_values();
     console.log(gif);
     gifEscogido = gif[0].replace(/\D/g, '');
     asignarGif(gifEscogido );
   
 
     if($("#textoNombre").val() != "")
      text[0] = $("#textoNombre").val();
     if($("#dedicatoria").val() != "")
      text[1] = $("#dedicatoria").val();
     //console.log("texto?: " + text[0] + " y "+ text[1]+ "tam?"+ text.length);
     //console.log($("select").data('picker').selected_values(), urls.length);
     
     if(urls.length <= 0 || text.length <= 0){
       if(urls.length <= 0)
        alert("Debes seleccionar imagenes para tu gif en el paso 1");
       if(text[0].length <= 0)
         alert("Debes seleccionar poner texto en el paso 2");
       
     }else{
       genGif();
       
       //$("#previsualizador").removeClass("hidden");
     }
     //console.log($("select").data('picker').selected_values(), urls.length);
  });
    
    
  
  
    /*$("#previsualizador").on('load',function () {
      $('#canvas').fadeIn(500);
      $('#canvas').fadeOut(500);
    });
    */
    
    /*$('ul.image_picker_selector li:first').remove(".image_picker_image");
    console.log("hola",$('ul.image_picker_selector li:first').remove(".image_picker_image"));
    */
  });
