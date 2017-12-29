// add items to the "Add Items" tab

$(document).ready(function() {
  var items_0mob = [
  
 
    
      
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



  var itemsDiv_0mob = $("#items-wrapper_0mob")
  for (var i = 0; i < items_0mob.length; i++) {
    var item = items_0mob[i];
    var html_0mob = '<div class="col-sm-4">' +
                '<a class="thumbnailold add-item_0mob" model-name="' + 
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
               '<br><i> ' + item.price +    
                '</i></a></div>';
    itemsDiv_0mob.append(html_0mob);
  }
});


 

