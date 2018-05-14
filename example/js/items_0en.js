// add items to the "Add Items" tab

$(document).ready(function() {
  var items_0 = [
     {
      "name" : "Door type 1",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
   //   "VarCod": "N*",
      "type" : "7"
    }, 
    {
      "name" : "Open Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    }, 
    {
      "name" : "Door type 2",
      "image" : "models/thumbnails/thumbnail_porta2.jpg",
      "model" : "models/js/porta2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Door type 3",
      "image" : "models/thumbnails/thumbnail_porta3.jpg",
      "model" : "models/js/porta3.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Door type 4",
      "image" : "models/thumbnails/thumbnail_porta4.jpg",
      "model" : "models/js/porta4.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Door type 5",
      "image" : "models/thumbnails/thumbnail_porta5.jpg",
      "model" : "models/js/porta5.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Door type 6",
      "image" : "models/thumbnails/thumbnail_porta6.jpg",
      "model" : "models/js/porta6.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Door type 7",
      "image" : "models/thumbnails/thumbnail_porta7.jpg",
      "model" : "models/js/porta7.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Portal type 1",
      "image" : "models/thumbnails/thumbnail_portale.jpg",
      "model" : "models/js/portale.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Portal type 2",
      "image" : "models/thumbnails/thumbnail_portale2.jpg",
      "model" : "models/js/portale2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Portal type 3",
      "image" : "models/thumbnails/thumbnail_portale3.jpg",
      "model" : "models/js/portale3.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "7"
    },
    {
      "name" : "Window/Sliding Door",
      "image" : "models/thumbnails/thumbnail_finestra_scorrevole.jpg",
      "model" : "models/js/finestra_scorrevole.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "3"
    },
    {
      "name" : "Window type 1",
      "image" : "models/thumbnails/thumbnail_window.png",
      "model" : "models/js/whitewindow.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "3"
    },
    {
      "name" : "Window type 2",
      "image" : "models/thumbnails/thumbnail_finestra2.jpg",
      "model" : "models/js/finestra2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "3"
    },
    {
      "name" : "Window type 3",
      "image" : "models/thumbnails/thumbnail_finestra3.jpg",
      "model" : "models/js/finestra3quater.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "3"
    },
     {
      "name" : "Staircase type 1",
      "image" : "models/thumbnails/thumbnail_scale1.jpg",
      "model" : "models/js/scale1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Staircase type 2",
      "image" : "models/thumbnails/thumbnail_scala2.jpg",
      "model" : "models/js/scala2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Staircase type 3",
      "image" : "models/thumbnails/thumbnail_scale3.jpg",
      "model" : "models/js/scale3.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Staircase type 4",
      "image" : "models/thumbnails/thumbnail_scale4.jpg",
      "model" : "models/js/scale4.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Staircase type 5",
      "image" : "models/thumbnails/thumbnail_scale5.jpg",
      "model" : "models/js/scale5.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Staircase type 6",
      "image" : "models/thumbnails/thumbnail_scale6.jpg",
      "model" : "models/js/scale6.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    /*    {
      "name" : "Staircase type 7",
      "image" : "https://storianum.github.io/repoworkshops/example/models/thumbnails/thumbnail_scale7.jpg",
      "model" : "https://storianum.github.io/repoworkshops/example/models/js/scale7.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
       {
      "name" : "Staircase type 8",
      "image" : "https://storianum.github.io/repoworkshops/example/models/thumbnails/thumbnail_scale8.jpg",
      "model" : "https://storianum.github.io/repoworkshops/example/models/js/scale8.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },   */
    {
      "name" : "Lift type 1",
      "image" : "models/thumbnails/thumbnail_ascensore1.jpg",
      "model" : "models/js/ascensore1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Lift type 2",
      "image" : "models/thumbnails/thumbnail_ascensore2.jpg",
      "model" : "models/js/ascensore2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Barrier",
      "image" : "models/thumbnails/thumbnail_barriera.jpg",
      "model" : "models/js/barriera.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Socket type 1",
      "image" : "models/thumbnails/thumbnail_presa1.jpg",
      "model" : "models/js/presa1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Socket type 2",
      "image" : "models/thumbnails/thumbnail_presa2.jpg",
      "model" : "models/js/presa2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Socket type 3",
      "image" : "models/thumbnails/thumbnail_presa3.jpg",
      "model" : "models/js/presa3.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Electrical Cabinet",
      "image" : "models/thumbnails/thumbnail_quadroelettrico.jpg",
      "model" : "models/js/quadroelettrico.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Fire Locker type 1",
      "image" : "models/thumbnails/thumbnail_estintore1.jpg",
      "model" : "models/js/estintore1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Fire Locker type 2",
      "image" : "models/thumbnails/thumbnail_estintore2.jpg",
      "model" : "models/js/estintore2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Alarm",
      "image" : "models/thumbnails/thumbnail_allarme.jpg",
      "model" : "models/js/allarme.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Restroom Sign type 1",
      "image" : "models/thumbnails/thumbnail_toilette1.jpg",
      "model" : "models/js/toilette1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Restroom Sign type 2",
      "image" : "models/thumbnails/thumbnail_toilette2.jpg",
      "model" : "models/js/toilette2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Signpost type 1",
      "image" : "models/thumbnails/thumbnail_segnaletica1.jpg",
      "model" : "models/js/segnaletica1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Signpost type 2",
      "image" : "models/thumbnails/thumbnail_segnaletica2.jpg",
      "model" : "models/js/segnaletica2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Monitor",
      "image" : "models/thumbnails/thumbnail_monitor.jpg",
      "model" : "models/js/monitor.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Carpet Kilim",
      "image" : "models/thumbnails/thumbnail_HTR034-87_1.jpg",
      "model" : "models/js/tappetokilim1.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "8"
    },
    {
      "name" : "Photo Tower",
      "image" : "models/thumbnails/thumbnail_torre-di-pisa.jpg",
      "model" : "models/js/poster-pisa.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Poster/Picture/Engraving",
      "image" : "models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "models/js/nyc-poster2.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "First Aid Box",
      "image" : "models/thumbnails/thumbnail_firstaid.jpg",
      "model" : "models/js/firstaid.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "2"
    },
    {
      "name" : "Male human figure",
      "image" : "models/thumbnails/thumbnail_man.jpg",
      "model" : "models/js/man.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Female human figure",
      "image" : "models/thumbnails/thumbnail_donna.jpg",
      "model" : "models/js/donna.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Boy",
      "image" : "models/thumbnails/thumbnail_bambino.jpg",
      "model" : "models/js/bambino.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Girl",
      "image" : "models/thumbnails/thumbnail_bambina.jpg",
      "model" : "models/js/bambina.js",
      "price" : "NOT-ON-SALE",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"
    },
    {
      "name" : "Plant",
      "image" : "models/thumbnails/thumbnail_pianta.jpg",
      "model" : "models/js/pianta.js",
      "price" : "NOT-ON-SALE",
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



  var itemsDiv_0 = $("#items-wrapper_0")
  for (var i = 0; i < items_0.length; i++) {
    var item = items_0[i];
    var html_0 = '<div class="col-sm-4">' +
                '<a class="thumbnailold add-item_0" model-name="' + 
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
               '<br><i> ' + item.price +    /* per complementi di progettazione che non sono in vendita */
                '</i></a></div>';
    itemsDiv_0.append(html_0);
  }
});
