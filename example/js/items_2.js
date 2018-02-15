// add items to the "Add Items" tab

$(document).ready(function() {
  var items_2 = [
  
     {
      "name" : "Mobiletto 0",
      "image" : "models/thumbnails/thumbnails_tiefe60104.jpg",
      "model" : "models/js/prova1x2x1m.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "D=11:0!-1!-1.6!-2.5",
      "type" : "1"
    }, 
  {
      "name" : "Mobiletto ",
      "image" : "models/thumbnails/thumbnails_tiefe60104.jpg",
      "model" : "models/js/60_104A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    }, 
{
      "name" : "Mobiletto 2",
      "image" : "models/thumbnails/thumbnail_60_303_01.jpg",
      "model" : "models/js/60_303.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
     {
      "name" : "Mobiletto 3",
      "image" : "models/thumbnails/thumbnail_60_340_03.jpg",
      "model" : "models/js/60_304A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Mobiletto 4",
      "image" : "models/thumbnails/60_701_01.jpg",
      "model" : "models/js/60_701A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto 5",
      "image" : "models/thumbnails/713-2422_special_02.jpg",
      "model" : "models/js/713-2422.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto 6",
      "image" : "models/thumbnails/thumbnail_780-1311_01.jpg",
      "model" : "models/js/780-1311A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto 7",
      "image" : "models/thumbnails/thumbnail_1000-2321_02.jpg",
      "model" : "models/js/1000_2321A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
            {
      "name" : "Mobiletto 8",
      "image" : "models/thumbnails/1000-0222_01.jpg",
      "model" : "models/js/1000_0222A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
{
      "name" : "Armadietto 1",
      "image" : "models/thumbnails/02_118_04_neu_01.jpg",
      "model" : "models/js/02_118_04.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
      {
      "name" : "Armadietto 2",
      "image" : "models/thumbnails/02_95_01-3_01.jpg",
      "model" : "models/js/02_95_01-3A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Armadietto 3",
      "image" : "models/thumbnails/02_98_00-02_1080_4_03.jpg",
      "model" : "models/js/02_2098_00K.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
        {
      "name" : "Armadietto 4",
      "image" : "models/thumbnails/02_140_03.jpg",
      "model" : "models/js/02_140-1RA.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
{
      "name" : "Armadio 1",
      "image" : "models/thumbnails/04_155_4_01.jpg",
      "model" : "models/js/04_155_04A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
                        {
      "name" : "Armadio 2",
      "image" : "models/thumbnails/04_155_02.jpg",
      "model" : "models/js/04_155_12A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
 {
      "name" : "Cassettiera laboratorio 00",
      "image" : "models/thumbnails/11_502_010.jpg",
      "model" : "models/js/11_502_010lista.js",
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
      "gallery": "url di interesse",
      "datar": "#",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv_2 = $("#items-wrapper_2")
  for (var i = 0; i < items_2.length; i++) {
    var item = items_2[i];
    var html_2 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_2" model-name="' + 
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
    itemsDiv_2.append(html_2);
  }
});
