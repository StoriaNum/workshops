// add items to the "Add Items" tab

$(document).ready(function() {
  var items_4 = [
    {
      "name" : "Rack 00",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "models/js/04_118_600A.js",
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



  var itemsDiv_4 = $("#items-wrapper_4")
  for (var i = 0; i < items_4.length; i++) {
    var item = items_4[i];
    var html_4 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_4" model-name="' + 
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
    itemsDiv_4.append(html_4);
  }
});
