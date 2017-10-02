// add items to the "Add Items" tab

$(document).ready(function() {
  var items_3 = [
    
   {
      "name" : "Carrellino ",
      "image" : "models/thumbnails/thumbnail_46_500BR.jpg",
      "model" : "models/js/46500BR.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
{
      "name" : "Carrellino 2",
      "image" : "models/thumbnails/46_301BR_02.jpg",
      "model" : "models/js/46_301BR.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
      {
      "name" : "Carrellino 3",
      "image" : "models/thumbnails/68_221_04.jpg",
      "model" : "models/js/68_221AM_01.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Carrellino 4",
      "image" : "models/thumbnails/68_700_01.jpg",
      "model" : "models/js/68_700AM.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Carrellino 5",
      "image" : "models/thumbnails/04_10_09.jpg",
      "model" : "models/js/04_10_05B.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
            {
      "name" : "Carrellino 6",
      "image" : "models/thumbnails/04_10_08.jpg",
      "model" : "models/js/04_10_06B.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
{
      "name" : "Tavolo attrezzato 1",
      "image" : "models/thumbnails/04_512_04_Lochwand_01.jpg",
      "model" : "models/js/04_512_04A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
            {
      "name" : "Tavolo attrezzato 2",
      "image" : "models/thumbnails/04_512_01.jpg",
      "model" : "models/js/04_512_03A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
                {
      "name" : "Armadietto carrellino 1",
      "image" : "models/thumbnails/04_11_03.jpg",
      "model" : "models/js/04_11_05A_01.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
                    {
      "name" : "Carrellino CNC 1",
      "image" : "models/thumbnails/02_88_02.jpg",
      "model" : "models/js/02_88_06A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
                        {
      "name" : "Carrellino CNC 2",
      "image" : "models/thumbnails/02_86_01.jpg",
      "model" : "models/js/02_85_07A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
                            {
      "name" : "Carrellino CNC 3",
      "image" : "models/thumbnails/02_780_04_ge_ffnet_01.jpg",
      "model" : "models/js/02_580_04RB.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
{
      "name" : "Armadietto 5",
      "image" : "models/thumbnails/04_110_M_offen_01.jpg",
      "model" : "models/js/04_110B.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
                {
      "name" : "Armadietto 6",
      "image" : "models/thumbnails/04_105K_01.jpg",
      "model" : "models/js/04_105K.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
{
      "name" : "Tavolino 03",
      "image" : "models/thumbnails/05_10_09.jpg",
      "model" : "models/js/05_10_03B.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
{
      "name" : "Rack 00",
      "image" : "models/thumbnails/04_118_600.jpg",
      "model" : "models/js/04_118_600A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "http://mediametalli.altervista.org/sweetmodalalert/gallery/codnum/codnum.html",
      "type" : "1"
    },
{
      "name" : "Stazione appoggiatutto 00",
      "image" : "models/thumbnails/53_450_876thurmetall.jpg",
      "model" : "models/js/53_450_876thurmetall.js",
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



  var itemsDiv_3 = $("#items-wrapper_3")
  for (var i = 0; i < items_3.length; i++) {
    var item = items_3[i];
    var html_3 = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item_3" model-name="' + 
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
                '</a></div><a class="btn btn-block btn-info" href=" '+ item.gallery +' " target="_blank"><span class="glyphicon glyphicon-align-center"></span> Info arredo</a>';
    itemsDiv_3.append(html_3);
  }
});

