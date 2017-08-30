// add items to the "Add Items" tab

$(document).ready(function() {
  var items_5 = [
    {
      "name" : "Tappeto",
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "8"
    },
        {
      "name" : "Tappeto Kilim 1",
      "image" : "models/thumbnails/thumbnail_HTR034-87_1.jpg",
      "model" : "models/js/tappetokilim1.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "8"
    },
    {
      "name" : "Poster Torre",
      "image" : "models/thumbnails/thumbnail_torre-di-pisa.jpg",
      "model" : "models/js/poster-pisa.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "2"
    },
    {
      "name" : "Poster-Quadro-Foto",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "2"
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
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +  
                '<br><i>Prezzo:</i> ' + item.price +
                '</a></div>';
    itemsDiv_5.append(html_5);
  }
});

