// add items to the "Add Items" tab

$(document).ready(function() {
  var items_1 = [
    
    {
      "name" : "Tavolino in Legno",
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    }, 
{
      "name" : "Tavolino 00",
      "image" : "models/thumbnails/03_15_535_2_02.jpg",
      "model" : "models/js/03_15_535_2A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
         {
      "name" : "Tavolino 01",
      "image" : "models/thumbnails/03_20_580_01.jpg",
      "model" : "models/js/03_20_580_20A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
             {
      "name" : "Tavolino 02",
      "image" : "models/thumbnails/03_19_01bis.jpg",
      "model" : "models/js/03_19_26A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
                 {
      "name" : "Tavolo Johannes",
      "image" : "models/thumbnails/thumbnail_zantoprova.jpg",
      "model" : "models/js/johannes_1.js",
      "price" : "2750,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
                 {
      "name" : "Tavolo Cerere",
      "image" : "models/thumbnails/thumbnail_zantoprova.jpg",
      "model" : "models/js/cerere.js",
      "price" : "2900,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
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
      "name" : "Tavolo a crescente 00",
      "image" : "models/thumbnails/51204940.jpg",
      "model" : "models/js/Howe_Tempest_Flip_Cresent_1500x750.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "http://mediametalli.altervista.org/sweetmodalalert/gallery/codnum/codnum.html",
      "datar": "#",
      "type" : "1"
    },
{
      "name" : "Tavolo a crescente SU MISURA",
      "image" : "models/thumbnails/5120494.jpg",
      "model" : "models/js/Howe_Tempest_Flip_Cresent_1500x750.js",
      "price" : "CUSTOM:A-RICHIESTA",
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



  var itemsDiv_1 = $("#items-wrapper_1")
  for (var i = 0; i < items_1.length; i++) {
    var item = items_1[i];
    var html_1 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_1" model-name="' + 
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
    itemsDiv_1.append(html_1);
  }
});
