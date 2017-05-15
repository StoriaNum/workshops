// add items to the "Add Items" tab

$(document).ready(function() {
  var items_2 = [
    {
      "name" : "Comodino in Legno",
      "image" : "models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "models/js/bd-shalebedside-smoke_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    }, 
    {
      "name" : "Comodino Colore Bianco",
      "image" : "models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "models/js/cb-archnight-white_baked.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Consolle Luigi XV",
      "image" : "models/thumbnails/thumbnail_tavoloexp.png",
      "model" : "models/js/tavoloexp.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "type" : "1"
    },
    {
      "name" : "Pouf Scoiattolo Colore Blue",
      "image" : "models/thumbnails/thumbnail_scoiattolopouf.png",
      "model" : "models/js/scoiattolopouf.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "https://ohsnapboutique.com/product/2016-easter-palooza-cards/#prettyPhoto[product-gallery]/0/",
      "type" : "1"
    },
    {
      "name" : "Bliss Rovere con Tessuto Grigio",
      "image" : "models/thumbnails/thumbnail_bliss_rovere.jpg",
      "model" : "models/js/bliss1.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Bliss Nero Lucido con Ecopelle",
      "image" : "models/thumbnails/thumbnail_bliss_pelle-nerolucido.jpg",
      "model" : "models/js/bliss2.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },    
        {
      "name" : "Bliss con braccioli blu e nero",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/blisswithoutblend.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },  
     {
      "name" : "C1 nero e acciaio",
      "image" : "models/thumbnails/thumbnail_blisswithoutblend.jpg",
      "model" : "models/js/c1vitra.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },   
     {
      "name" : "Mobiletto tedesco",
      "image" : "models/thumbnails/thumbnails_tiefe60104.jpg",
      "model" : "models/js/60_104A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    }, 
     {
      "name" : "Carrellino tedesco",
      "image" : "models/thumbnails/thumbnail_46_500BR.jpg",
      "model" : "models/js/46500BR.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
     {
      "name" : "Mobiletto tedesco 2",
      "image" : "models/thumbnails/thumbnail_60_303_01.jpg",
      "model" : "models/js/60_303.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
     {
      "name" : "Mobiletto tedesco 3",
      "image" : "models/thumbnails/thumbnail_60_340_03.jpg",
      "model" : "models/js/60_304A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Mobiletto tedesco 4",
      "image" : "models/thumbnails/60_701_01.jpg",
      "model" : "models/js/60_701A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto tedesco 5",
      "image" : "models/thumbnails/713-2422_special_02.jpg",
      "model" : "models/js/713-2422.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto tedesco 6",
      "image" : "models/thumbnails/thumbnail_780-1311_01.jpg",
      "model" : "models/js/780-1311A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Mobiletto tedesco 7",
      "image" : "models/thumbnails/thumbnail_1000-2321_02.jpg",
      "model" : "models/js/1000_2321A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
            {
      "name" : "Mobiletto tedesco 8",
      "image" : "models/thumbnails/1000-0222_01.jpg",
      "model" : "models/js/1000_0222A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
         {
      "name" : "Carrellino tedesco 2",
      "image" : "models/thumbnails/46_301BR_02.jpg",
      "model" : "models/js/46_301BR.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
             {
      "name" : "Carrellino tedesco 3",
      "image" : "models/thumbnails/68_221_04.jpg",
      "model" : "models/js/68_221AM_01.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Carrellino tedesco 4",
      "image" : "models/thumbnails/68_700_01.jpg",
      "model" : "models/js/68_700AM.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Tavolo attrezzato tedesco 1",
      "image" : "models/thumbnails/04_512_04_Lochwand_01.jpg",
      "model" : "models/js/04_512_04A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
            {
      "name" : "Tavolo attrezzato tedesco 2",
      "image" : "models/thumbnails/04_512_01.jpg",
      "model" : "models/js/04_512_03A.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Fluttable",
      "image" : "models/thumbnails/thumbnail_tavoloexp.png",
      "model" : "models/js/fluttable.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "Mobiletto Bagno Esemlus",
      "image" : "models/thumbnails/thumbnail_mobilettobagno.jpg",
      "model" : "models/js/mobilettobagno2.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
    {
      "name" : "FluttableBis",
      "image" : "models/thumbnails/thumbnail_tavoloexp.png",
      "model" : "",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "#",
      "type" : "1"
    },
        {
      "name" : "Sediaspec",
      "image" : "models/thumbnails/thumbnail_tavoloexp.png",
      "model" : "models/js/xgiowood2.js",
      "price" : "x,y &euro;",
      "buybasket" : "http://www.google.it",
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
      "gallery": "url di interesse",
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
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +  
                '<br><i>Prezzo:</i> ' + item.price +
                '</a></div>';
    itemsDiv_2.append(html_2);
  }
});
