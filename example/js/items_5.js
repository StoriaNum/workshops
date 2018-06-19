// add items to the "Add Items" tab

$(document).ready(function() {
  var items_5 = [
    {
      "name" : "Scaffalatura 00",
      "image" : "models/thumbnails/hoehe-2700-mm-8-ebenen.jpg",
      "model" : "models/js/HZGA27310EX_ZEILE_5_02_002_20.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    
    {
      "name" : "Tavolo Cucu",
      "image" : "models/thumbnails/thumbnail_zantoprova.jpg",
      "model" : "models/js/cerere.js",
      "price" : "2900,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
    
        {
      "name" : "Albero di Natale Box",
      "image" : "models/thumbnails/thumbnail_alberonatale.jpg",
      "model" : "models/js/Box.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    
     {
      "name" : "Albero di Natale Duck",
      "image" : "models/thumbnails/thumbnail_alberonatale.jpg",
      "model" : "models/js/Duck.js",
      "price" : "x,y &euro;",
      "buybasket" : "http://biblioborbonica.altervista.org/",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    
     {
      "name" : "Scaffalatura 01",
      "image" : "models/thumbnails/hoehe-2000-mm-6-ebenen.jpg",
      "model" : "models/js/HRG20610DA_07.js",
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
      "datar": "#",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv_5 = $("#items-wrapper_5")
  for (var i = 0; i < items_5.length; i++) {
    var item = items_5[i];
    var html_5 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_5" model-name="' + 
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
    itemsDiv_5.append(html_5);
  }
});
