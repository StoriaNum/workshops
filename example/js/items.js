// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   
    {
      "name" : "Porta Chiusa",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "7"
    }, 
    {
      "name" : "Porta Aperta",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "7"
    }, 
    {
      "name" : "Finestra",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "3"
    }, 
    {
      "name" : "Sedia",
      "image" : "models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "models/js/gus-churchchair-whiteoak.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
 {
      "name" : "Sedia Colore Rosso",
      "image" : "models/thumbnails/thumbnail_tn-orange.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Sedia Colore Blu",
      "image" : "models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "models/js/ik-ekero-blue_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
{
      "name" : "Bliss Rovere con Tessuto Grigio",
      "image" : "models/thumbnails/thumbnail_bliss_rovere.jpg",
      "model" : "models/js/bliss1.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Bliss Nero Lucido con Ecopelle",
      "image" : "models/thumbnails/thumbnail_bliss_pelle-nerolucido.jpg",
      "model" : "models/js/bliss2.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },    
        {
      "name" : "Bliss con braccioli blu e nero",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/blisswithoutblend.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },  
     {
      "name" : "C1 nero e acciaio",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/c1vitra.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
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
      "type" : "1"
    }, 
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
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +  
                '<br><i>Prezzo:</i> ' + item.price +
                '</a></div>';
    itemsDiv.append(html);
  }
});
