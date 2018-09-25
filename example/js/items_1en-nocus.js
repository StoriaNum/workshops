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
      "name" : "Table Johannes",
      "image" : "models/thumbnails/thumbnail_johannes.jpg",
      "model" : "models/js/johannes_1.js",
      "price" : "2750,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
   /*    {
      "name" : "Table Johannes TAILORED",
      "image" : "models/thumbnails/thumbnail_johannes-mis.jpg",
      "model" : "models/js/johannes_1.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    },  */
    {
      "name" : "Table Tellus",
      "image" : "models/thumbnails/thumbnail_-tellus.jpg",
      "model" : "models/js/tellus.js",
      "price" : "2900,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
  /*  {
      "name" : "Table Tellus TAILORED",
      "image" : "models/thumbnails/thumbnail_-tellus-mis.jpg",
      "model" : "models/js/tellus.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    }, */
/*       {
      "name" : "Table Asteria",
      "image" : "models/thumbnails/thumbnail_-asteria-temp.jpg",
      "model" : "models/js/asteria2.js",
      "price" : "2750,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
    {
      "name" : "Table Dione",
      "image" : "models/thumbnails/thumbnail_-dione-temp.jpg",
      "model" : "models/js/dione2.js",
      "price" : "2900,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    }, */
{
      "name" : "Coffee table Dorico",
      "image" : "models/thumbnails/thumbnail_avrevsdoricvs.jpg",
      "model" : "models/js/avrevsdoricvs.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
 /*   {
      "name" : "Coffee table TAILORED",
      "image" : "models/thumbnails/thumbnail_avrevsdoricvs-mis.jpg",
      "model" : "models/js/avrevsdoricvs.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    },  */
   {
      "name" : "Coffee table Argedorico",
      "image" : "models/thumbnails/thumbnail_argedoricvs.jpg",
      "model" : "models/js/argentevsdoricvs.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
  /*  {
      "name" : "Coffee table TAILORED",
      "image" : "models/thumbnails/thumbnail_argedoricvs-mis.jpg",
      "model" : "models/js/argentevsdoricvs.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    },  */
   {
      "name" : "Coffee table Cuprodorico",
      "image" : "models/thumbnails/thumbnail_cvprodoricvs.jpg",
      "model" : "models/js/cuprodorico.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
  /*  {
      "name" : "Coffee table TAILORED",
      "image" : "models/thumbnails/thumbnail_cvprodoricvs-mis.jpg",
      "model" : "models/js/cuprodorico.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    },  */
      {
      "name" : "Table Levana",
      "image" : "models/thumbnails/thumbnail_levana.jpg",
      "model" : "models/js/levana.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
    /*    {
      "name" : "Table Levana TAILORED",
      "image" : "models/thumbnails/thumbnail_levana.jpg",
      "model" : "models/js/levana.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
       {
      "name" : "Table Vessinna",
      "image" : "models/thumbnails/thumbnail_vessinna.jpg",
      "model" : "models/js/vessinna.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
     /*   {
      "name" : "Table Vessinna TAILORED",
      "image" : "models/thumbnails/thumbnail_vessinna.jpg",
      "model" : "models/js/vessinna.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
       {
      "name" : "Table Epona",
      "image" : "models/thumbnails/thumbnail_epona.jpg",
      "model" : "models/js/epona.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
   /*     {
      "name" : "Table Epona TAILORED",
      "image" : "models/thumbnails/thumbnail_epona.jpg",
      "model" : "models/js/epona.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
       {
      "name" : "Table Centaurus",
      "image" : "models/thumbnails/thumbnail_centaurus.jpg",
      "model" : "models/js/centaurus.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
   /*     {
      "name" : "Table Centaurus TAILORED",
      "image" : "models/thumbnails/thumbnail_centaurus.jpg",
      "model" : "models/js/centaurus.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },    */
       {
      "name" : "Table Taurus",
      "image" : "models/thumbnails/thumbnail_taurus.jpg",
      "model" : "models/js/taurus.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
    /*    {
      "name" : "Table Taurus TAILORED",
      "image" : "models/thumbnails/thumbnail_taurus.jpg",
      "model" : "models/js/taurus.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
       {
      "name" : "Table Bovem",
      "image" : "models/thumbnails/thumbnail_bovem.jpg",
      "model" : "models/js/bovem.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
     /*   {
      "name" : "Table Bovem TAILORED",
      "image" : "models/thumbnails/thumbnail_bovem.jpg",
      "model" : "models/js/bovem.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },   */
       {
      "name" : "Table Achelous",
      "image" : "models/thumbnails/thumbnail_achelous.jpg",
      "model" : "models/js/achelous.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
     /*   {
      "name" : "Table Achelous TAILORED",
      "image" : "models/thumbnails/thumbnail_achelous.jpg",
      "model" : "models/js/achelous.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
       {
      "name" : "Table Vellus",
      "image" : "models/thumbnails/thumbnail_vellus.jpg",
      "model" : "models/js/vellus.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
  /*      {
      "name" : "Table Vellus TAILORED",
      "image" : "models/thumbnails/thumbnail_vellus.jpg",
      "model" : "models/js/vellus.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },    */
       {
      "name" : "Table Apis",
      "image" : "models/thumbnails/thumbnail_apis.jpg",
      "model" : "models/js/apis.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
     /*   {
      "name" : "Table Apis TAILORED",
      "image" : "models/thumbnails/thumbnail_apis.jpg",
      "model" : "models/js/apis.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },  */
      {
      "name" : "Conference table Imperium",
      "image" : "models/thumbnails/thumbnail_imperium.jpg",
      "model" : "models/js/imperium.js",
      "price" : "0,00 &euro;",
      "buybasket" : "",
      "gallery": "#",
      "datar": "Sx=0.006&Sy=0.009&Sz=0.008&Px=-1&Py=0&D=10:-0.2!-0!0.2!0.5!0.75",
      "type" : "1"
    },
  /*      {
      "name" : "Table Imperium TAILORED",
      "image" : "models/thumbnails/thumbnail_imperium.jpg",
      "model" : "models/js/imperium.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"  
    },   */
{
      "name" : "Tavolo a crescente 00",
      "image" : "models/thumbnails/51204940.jpg",
      "model" : "models/js/Howe_Tempest_Flip_Cresent_1500x750.js",
      "price" : "x,y &euro;",
      "buybasket" : "",
      "gallery" : "http://mediametalli.altervista.org/sweetmodalalert/gallery/codnum/codnum.html",
      "datar": "#",
      "type" : "1"
    }
/*   {
      "name" : "Tavolo a crescente TAILORED",
      "image" : "models/thumbnails/5120494.jpg",
      "model" : "models/js/Howe_Tempest_Flip_Cresent_1500x750.js",
      "price" : "CUSTOM:A-RICHIESTA",
      "buybasket" : "",
      "gallery": "#",
      "datar": "#",
      "type" : "1"   
    }  */
      
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
                '<br><i>Price:</i> ' + item.price +
                '<a class="btn btn-block2 btn-info" href=" '+ item.gallery +' " target="_blank"><span class="glyphicon glyphicon-align-center"></span> <b>Info</b><i> ' + item.name + '</i></a></a></div>';
    itemsDiv_1.append(html_1);
  }
});
