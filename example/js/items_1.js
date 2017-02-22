// add items to the "Add Items" tab

$(document).ready(function() {
  var items_1 = [
    {
      "name" : "Tappeto",
      "image" : "models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "models/js/cb-blue-block-60x96.js",
      "price" : "x,y &euro;",
      "gallery": "",
      "type" : "8"
    },
    {
      "name" : "Poster-Quadro-Foto",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "price" : "x,y &euro;",
      "gallery": "",
      "type" : "2"
    }
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "price" : "x,y &euro;",
      "gallery": "",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv_1 = $("#items-wrapper_1")
  for (var i = 0; i < items_1.length; i++) {
    var item = items_1[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +  
                '<br><i>Prezzo:</i> ' + item.price +
                '</a></div>';
    itemsDiv_1.append(html);
  }
});
