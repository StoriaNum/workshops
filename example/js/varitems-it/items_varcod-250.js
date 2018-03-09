// add items to the "Add Items" tab

$(document).ready(function() {
  var items_var = [
    {
      "name" : "Sedia 01",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "https://raw.githubusercontent.com/StoriaNum/workshops/gh-pages/example/models/js/gus-churchchair-whiteoak.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=s1&Sy=s2&Sz=s3&Px=p1&Py=p2&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
      "type" : "1"
    },
    
        {
      "name" : "Sedia 02",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "https://raw.githubusercontent.com/StoriaNum/workshops/gh-pages/example/models/js/Box.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=s1&Sy=s2&Sz=s3&Px=p1&Py=p2&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
      "type" : "1"
    },
    
     {
      "name" : "Sedia 03",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "https://raw.githubusercontent.com/StoriaNum/workshops/gh-pages/example/models/js/Duck.js",
      "price" : "x,y &euro;",
      "buybasket" : "http://biblioborbonica.altervista.org/",
      "gallery": "#",
      "datar": "Sx=s1&Sy=s2&Sz=s3&Px=p1&Py=p2&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
      "type" : "1"
    },
    
     {
      "name" : "Sedia 04",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "https://raw.githubusercontent.com/StoriaNum/workshops/gh-pages/example/models/js/HRG20610DA_07.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=s1&Sy=s2&Sz=s3&Px=p1&Py=p2&D=6:0!-1.6!-2!-2.6!-3.7!-5.3!-6.3!-7.8!-8.9",
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



  var itemsDiv_var = $("#items-wrapper_var")
  for (var i = 0; i < items_var.length; i++) {
    var item = items_var[i];
    var html_var = '<head><script src="js/blueprint3d.js"></script><script src="js/bootstrap.js"></script><script src="js/exampleVAR58.js"></script><script src="js/html2canvas.js"></head><div class="col-sm-4">' +
                '<a class="thumbnail add-item_var" model-name="' + 
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
    itemsDiv_var.append(html_var);
  }
});
