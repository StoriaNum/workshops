// add items to the "Add Items" tab

$(document).ready(function() {
  var items_0 = [
    {
      "name" : "Scaffalatura 00",
      "image" : "models/thumbnails/hoehe-2700-mm-8-ebenen.jpg",
      "model" : "models/js/HZGA27310EX_ZEILE_5_02_002_20.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
         {
      "name" : "Scaffalatura 01",
      "image" : "models/thumbnails/hoehe-2000-mm-6-ebenen.jpg",
      "model" : "models/js/HRG20610DA_07.js",
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
                '<br><i>Prezzo:</i> ' + item.price +
                '</a></div>';
    itemsDiv_0.append(html_0);
  }
});
