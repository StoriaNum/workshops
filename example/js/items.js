// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
  

    {
      "name" : "Sedia",
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=s1&Sy=s2&Sz=s3&Px=p1&Py=p2&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
      "type" : "1"
    },
 {
      "name" : "Sedia Colore Rosso",
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=1&Sy=2&Sz=3&Px=4&Py=5&D=9:0!-1.4!-2.22!-2.64!-3.02!-5.1!",
      "type" : "1"
    },
    {
      "name" : "Sedia Colore Blu",
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
{
      "name" : "Bliss Rovere con Tessuto Grigio",
      "image" : "models/thumbnails/thumbnail_bliss_rovere.jpg",
      "model" : "models/js/bliss1.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Bliss Nero Lucido con Ecopelle",
      "image" : "models/thumbnails/thumbnail_bliss_pelle-nerolucido.jpg",
      "model" : "models/js/bliss2.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },    
        {
      "name" : "Bliss con braccioli blu e nero",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/blisswithoutblend.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },  
     {
      "name" : "C1 nero e acciaio",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/c1vitra.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    }
    
    
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=ooo&Sy=ooo&Sz=ooo&Px=ooo&Py=ooo&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
      "type" : "1"
    }, 
    
    Sx=ooo&Sy=ooo&Sz=ooo&Px=ooo&Py=ooo&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9
    ho le componenti dei due vettori di #avocado gltf file per la prospettiva
    dove D di sopra mi definisce il Pz nei vari casi definiti da distanza target
    
    */
  ]



  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '" model-price="' +
                item.price +
                '" model-buybasket="' +
                item.buybasket +
                '" model-gallery="' + 
                item.gallery +
                '" model-datar="' +
                item.datar +
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +  
                '<br><i>Prezzo:</i> ' + item.price +
                '<a class="btn btn-block2 btn-info" href=" '+ item.gallery +' " target="_blank"><span class="glyphicon glyphicon-align-center"></span> <b>Info</b><i> ' + item.name + '</i></a></a></div>';
    itemsDiv.append(html);
  }
});
