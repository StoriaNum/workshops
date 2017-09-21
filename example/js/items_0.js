// add items to the "Add Items" tab

$(document).ready(function() {
  var items_0 = [
     {
      "name" : "Porta Chiusa",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "7"
    }, 
    {
      "name" : "Porta Aperta",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "7"
    }, 
    {
      "name" : "Finestra/Porta scorrevole",
      "image" : "models/thumbnails/thumbnail_finestra_scorrevole.jpg",
      "model" : "models/js/finestra_scorrevole.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "3"
    },
    {
      "name" : "Finestra 1",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "3"
    },
    {
      "name" : "Finestra 2",
      "image" : "models/thumbnails/thumbnail_finestra2.jpg",
      "model" : "models/js/finestra2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "3"
    },
    {
      "name" : "Finestra 3",
      "image" : "models/thumbnails/thumbnail_finestra3.jpg",
      "model" : "models/js/finestra3quater.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "3"
    },
     {
      "name" : "Scale tipo 1",
      "image" : "models/thumbnails/thumbnail_scale1.jpg",
      "model" : "models/js/scale1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Scale tipo 2",
      "image" : "models/thumbnails/thumbnail_scala2.jpg",
      "model" : "models/js/scala2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Scale tipo 3",
      "image" : "models/thumbnails/thumbnail_scale3.jpg",
      "model" : "models/js/scale3.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Scale tipo 4",
      "image" : "models/thumbnails/thumbnail_scale4.jpg",
      "model" : "models/js/scale4.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Scale tipo 5",
      "image" : "models/thumbnails/thumbnail_scale5.jpg",
      "model" : "models/js/scale5.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Scale tipo 6",
      "image" : "models/thumbnails/thumbnail_scale6.jpg",
      "model" : "models/js/scale6.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Ascensore tipo 1",
      "image" : "models/thumbnails/thumbnail_ascensore1.jpg",
      "model" : "models/js/ascensore1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Ascensore tipo 2",
      "image" : "models/thumbnails/thumbnail_ascensore2.jpg",
      "model" : "models/js/ascensore2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Barriera",
      "image" : "models/thumbnails/thumbnail_barriera.jpg",
      "model" : "models/js/barriera.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Figura umana maschile",
      "image" : "models/thumbnails/thumbnail_man.jpg",
      "model" : "models/js/man.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Figura umana femminile",
      "image" : "models/thumbnails/thumbnail_donna.jpg",
      "model" : "models/js/donna.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Figura umana bambino",
      "image" : "models/thumbnails/thumbnail_bambino.jpg",
      "model" : "models/js/bambino.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
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



  var itemsDiv_0 = $("#items-wrapper_0")
  for (var i = 0; i < items_0.length; i++) {
    var item = items_0[i];
    var html_0 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_0" model-name="' + 
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
               '<br><i> ' + item.price +    /* per complementi di progettazione che non sono in vendita */
                '</i></a></div>';
    itemsDiv_0.append(html_0);
  }
});
