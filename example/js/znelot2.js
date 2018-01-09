/*
 * Camera Buttons
 */

var CameraButtons = function(blueprint3d) {

  var orbitControls = blueprint3d.three.controls;
  var three = blueprint3d.three;

  var panSpeed = 30;
  var directions = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  }

  function init() {
    // Camera controls
    $("#zoom-in").click(zoomIn);
    $("#zoom-out").click(zoomOut);  
    $("#zoom-in").dblclick(preventDefault);
    $("#zoom-out").dblclick(preventDefault);

    $("#reset-view").click(three.centerCamera)

    $("#move-left").click(function(){
      pan(directions.LEFT)
    })
    $("#move-right").click(function(){
      pan(directions.RIGHT)
    })
    $("#move-up").click(function(){
      pan(directions.UP)
    })
    $("#move-down").click(function(){
      pan(directions.DOWN)
    })

    $("#move-left").dblclick(preventDefault);
    $("#move-right").dblclick(preventDefault);
    $("#move-up").dblclick(preventDefault);
    $("#move-down").dblclick(preventDefault);
  }

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function pan(direction) {
    switch (direction) {
      case directions.UP:
        orbitControls.panXY(0, panSpeed);
        break;
      case directions.DOWN:
        orbitControls.panXY(0, -panSpeed);
        break;
      case directions.LEFT:
        orbitControls.panXY(panSpeed, 0);
        break;
      case directions.RIGHT:
        orbitControls.panXY(-panSpeed, 0);
        break;
    }
  }

  function zoomIn(e) {
    e.preventDefault();
    orbitControls.dollyIn(1.1);
    orbitControls.update();
  }

  function zoomOut(e) {
    e.preventDefault;
    orbitControls.dollyOut(1.1);
    orbitControls.update();
  }

  init();
}

/*
 * Context menu for selected item
 */ 

var ContextMenu = function(blueprint3d) {

  var scope = this;
  var selectedItem;
  var three = blueprint3d.three;
  

  function init() {
    $("#context-menu-delete").click(function(event) {
        selectedItem.remove();
    });

    three.itemSelectedCallbacks.add(itemSelected);
    three.itemUnselectedCallbacks.add(itemUnselected);

    initResize();

    $("#fixed").click(function() {
        var checked = $(this).prop('checked');
        selectedItem.setFixed(checked);
    });
  }

  function cmToIn(cm) {
    return cm;
  }

  function inToCm(inches) {
    return inches;
  }

  function itemSelected(item) {
    selectedItem = item;

    $("#context-menu-name").text(item.metadata.itemName);
    
    var nomeItemx3D = ""+item.metadata.itemName+"";
    
   var modelGalleryuri = ""+item.metadata.modelGallery+""; 
   document.getElementById("modelGallerylink").href = modelGalleryuri;
    
   $("#modelPricetot").text(item.metadata.modelPrice); 
      
   var modelAr3Duri = ""+item.metadata.modelUrl+"";
   var modelAr3Duribis = modelAr3Duri.replace("models/js/","");
   var modelAr3Duriter = modelAr3Duribis.replace(".js",".gltf"); 
   document.getElementById("modelAr3Dlink").href = "https://storianum.github.io/workshops/example/zzalert3.html?link="+modelAr3Duriter+"&item="+nomeItemx3D+"";
   document.getElementById("avocado").src = "LINK PER MODELLO GLTF"+modelAr3Duriter+"";
   
   document.getElementById("nomeitemcam").innerHTML = "Arredo selezionato: <i><b>"+nomeItemx3D+"</b></i>";
    
  var selettoreifprezzo = ""+item.metadata.modelPrice+"";
  
  var modelBuybasketuri = ""+item.metadata.modelBuybasket+"";
  document.getElementById("modelBuybasketlink").href = modelBuybasketuri;
  
  var modelBuybasketuri2 = ""+item.metadata.modelBuybasket+"";
  document.getElementById("modelBuybasketlink2").href = modelBuybasketuri2;
   
    
  if (selettoreifprezzo === "NOT-ON-SALE") { 
            document.getElementById("modelGallerylink").style.display="none";
            document.getElementById("prez").setAttribute("hidden", true);
            document.getElementById("infoiva").setAttribute("hidden", true);
            document.getElementById("modelPricetot").setAttribute("hidden", true);
            document.getElementById("modelBuybasketlink").style.display="none";
            document.getElementById("modelBuybasketlink2").style.display="none";
            document.getElementById("item-width").removeAttribute("readonly");
            document.getElementById("item-depth").removeAttribute("readonly");
            document.getElementById("item-height").removeAttribute("readonly");
            document.getElementById("contentdimens").innerHTML = "Varia Dimensione";
            document.getElementById("namecodeitem").style.display="none";
            document.getElementById('panelcustomitem').className = 'panel panel-default';
  
  }

    
          else if(selettoreifprezzo === "CUSTOM:A-RICHIESTA") {    
    
                   $("#modelGallerylink").show();
                   document.getElementById("prez").removeAttribute("hidden");
                   document.getElementById("modelPricetot").removeAttribute("hidden");
                   document.getElementById("infoiva").setAttribute("hidden", true); 
                   $("#modelBuybasketlink2").show();                 
                   document.getElementById("namecodeitem").href= "http://mediametalli.altervista.org/sweetmodalalert/emailbox/promptit.html?Arredo="+item.metadata.itemName+"";
                   document.getElementById("namecodeitem").style.display="none";
                   document.getElementById("modelBuybasketlink").style.display="none";
                   document.getElementById("item-width").removeAttribute("readonly");
                   document.getElementById("item-depth").removeAttribute("readonly");
                   document.getElementById("item-height").removeAttribute("readonly");
                   document.getElementById("contentdimens").innerHTML = "<b>Inserisci le tue misure personalizzate</b>";
                   document.getElementById('panelcustomitem').className = 'panel panel-danger';

          }      else  {
                                        
    
            $("#modelGallerylink").show();
            document.getElementById("prez").removeAttribute("hidden");
            document.getElementById("infoiva").removeAttribute("hidden");
            document.getElementById("modelPricetot").removeAttribute("hidden");
            $("#modelBuybasketlink").show();
            document.getElementById("modelBuybasketlink2").style.display="none";
            document.getElementById("item-width").setAttribute("readonly", true);
            document.getElementById("item-depth").setAttribute("readonly", true);
            document.getElementById("item-height").setAttribute("readonly", true);
            document.getElementById("contentdimens").innerHTML = "Dimensione Oggetto";            
            document.getElementById("namecodeitem").style.display="none";
            document.getElementById('panelcustomitem').className = 'panel panel-default';
  
  }       
   
//   var modelBuybasketuri = ""+item.metadata.modelBuybasket+"";      definita qualche rigo prima
//   document.getElementById("modelBuybasketlink").href = modelBuybasketuri;      definita qualche rigo prima
    
    
    $("#item-width").val(cmToIn(selectedItem.getWidth()).toFixed(0));
    $("#item-height").val(cmToIn(selectedItem.getHeight()).toFixed(0));
    $("#item-depth").val(cmToIn(selectedItem.getDepth()).toFixed(0));

    $("#context-menu").show();

    $("#fixed").prop('checked', item.fixed);
  }

  function resize() {
    selectedItem.resize(
      inToCm($("#item-height").val()),
      inToCm($("#item-width").val()),
      inToCm($("#item-depth").val())
    );
  }

  function initResize() {
    $("#item-height").change(resize);
    $("#item-width").change(resize);
    $("#item-depth").change(resize);
  }

  function itemUnselected() {
    selectedItem = null;
    $("#context-menu").hide();
  }

  init();
}

/*
 * Loading modal for items
 */

var ModalEffects = function(blueprint3d) {

  var scope = this;
  var blueprint3d = blueprint3d;
  var itemsLoading = 0;

  this.setActiveItem = function(active) {
    itemSelected = active;
    update();
  }

  function update() {
    if (itemsLoading > 0) {
      $("#loading-modal").show();
    } else {
      $("#loading-modal").hide();
    }
  }

  function init() {
    blueprint3d.model.scene.itemLoadingCallbacks.add(function() {
      itemsLoading += 1;
      update();
    });

     blueprint3d.model.scene.itemLoadedCallbacks.add(function() {
      itemsLoading -= 1;
      update();
    });   

    update();
  }

  init();
}

/*
 * Side menu
 */

var SideMenu = function(blueprint3d, floorplanControls, modalEffects) {
  var blueprint3d = blueprint3d;
  var floorplanControls = floorplanControls;
  var modalEffects = modalEffects;

  var ACTIVE_CLASS = "active";

  var tabs = {
    "FLOORPLAN" : $("#floorplan_tab"),
    "SHOP" : $("#items_tab"),
    "SHOP_0" : $("#items_tab_0"),
    "SHOP_0MOB" : $("#items_tab_0mob"),
    "SHOP_1" : $("#items_tab_1"),
    "SHOP_2" : $("#items_tab_2"),
    "SHOP_3" : $("#items_tab_3"),
    "SHOP_4" : $("#items_tab_4"),
    "SHOP_5" : $("#items_tab_5"),   
    "DESIGN" : $("#design_tab")  
  }

  var scope = this;
  this.stateChangeCallbacks = $.Callbacks();

  this.states = {
    "DEFAULT" : {
      "div" : $("#add-items_0mob"),
      "tab" : tabs.DESIGN
    },
    "FLOORPLAN" : {
      "div" : $("#floorplanner"),
      "tab" : tabs.FLOORPLAN
    },
    
    "SHOP_0" : {
      "div" : $("#add-items_0"),
      "tab" : tabs.SHOP_0
    },
    
    "SHOP_0MOB" : {
      "div" : $("#add-items_0mob"),
      "tab" : tabs.SHOP_0MOB
    },
    
    "SHOP_1" : {
      "div" : $("#add-items_1"),
      "tab" : tabs.SHOP_1
    },
    
    "SHOP_2" : {
      "div" : $("#add-items_2"),
      "tab" : tabs.SHOP_2
    },
    
    "SHOP_3" : {
      "div" : $("#add-items_3"),
      "tab" : tabs.SHOP_3
    },
    
    "SHOP_4" : {
      "div" : $("#add-items_4"),
      "tab" : tabs.SHOP_4
    },
    
    "SHOP_5" : {
      "div" : $("#add-items_5"),
      "tab" : tabs.SHOP_5
    },
    
    "SHOP" : {
      "div" : $("#add-items"),
      "tab" : tabs.SHOP
    }
  }

  // sidebar state
  var currentState = scope.states.FLOORPLAN;

  function init() {
    for (var tab in tabs) {
      var elem = tabs[tab];
      elem.click(tabClicked(elem));
    }

    $("#update-floorplan").click(floorplanUpdate);

    initLeftMenu();

    blueprint3d.three.updateWindowSize();
    handleWindowResize();

    initItems();

    setCurrentState(scope.states.DEFAULT);
  }

  function floorplanUpdate() {
    setCurrentState(scope.states.DEFAULT);
  }

  function tabClicked(tab) {
    return function() {
      // Stop three from spinning
      blueprint3d.three.stopSpin();

      // Selected a new tab
      for (var key in scope.states) {
        var state = scope.states[key];
        if (state.tab == tab) {
          setCurrentState(state);
          break;
        }
      }
    }
  }
  
  function setCurrentState(newState) {

    if (currentState == newState) {
      return;
    }

    // show the right tab as active
    if (currentState.tab !== newState.tab) {
      if (currentState.tab != null) {
        currentState.tab.removeClass(ACTIVE_CLASS);          
      }
      if (newState.tab != null) {
        newState.tab.addClass(ACTIVE_CLASS);
      }
    }

    // set item unselected
    blueprint3d.three.getController().setSelectedObject(null);

    // show and hide the right divs
    currentState.div.hide()
    newState.div.show()

    // custom actions
    if (newState == scope.states.FLOORPLAN) {
      floorplanControls.updateFloorplanView();
      floorplanControls.handleWindowResize();
    } 

    if (currentState == scope.states.FLOORPLAN) {
      blueprint3d.model.floorplan.update();
    }

    if (newState == scope.states.DEFAULT) {
      blueprint3d.three.updateWindowSize();
    }
 
    // set new state
    handleWindowResize();    
    currentState = newState;

    scope.stateChangeCallbacks.fire(newState);
  }

  function initLeftMenu() {
    $( window ).resize( handleWindowResize );
    handleWindowResize();
  }

  function handleWindowResize() {
    $(".sidebar").height(window.innerHeight);
    $("#add-items").height(window.innerHeight);
    $("#add-items_0").height(window.innerHeight);
    $("#add-items_0mob").height(window.innerHeight);
    $("#add-items_1").height(window.innerHeight);
    $("#add-items_2").height(window.innerHeight);
    $("#add-items_3").height(window.innerHeight);
    $("#add-items_4").height(window.innerHeight);
    $("#add-items_5").height(window.innerHeight);
   
  };

  // TODO: this doesn't really belong here
  function initItems() {
    $("#add-items,#add-items_0,#add-items_0mob,#add-items_1,#add-items_2,#add-items_3,#add-items_4,#add-items_5").find(".add-item, .add-item_0, .add-item_0mob, .add-item_1, .add-item_2, .add-item_3, .add-item_4, .add-item_5").mousedown(function(e) {
      var modelUrl = $(this).attr("model-url");
      var itemType = parseInt($(this).attr("model-type"));
      var modelPrice = $(this).attr("model-price");
      var modelBuybasket = $(this).attr("model-buybasket");
      var modelGallery = $(this).attr("model-gallery");
      var metadata = {
        itemName: $(this).attr("model-name"),
        resizable: true,
        modelUrl: modelUrl,
        modelPrice: modelPrice,
        modelBuybasket: modelBuybasket,
        modelGallery: modelGallery,
        itemType: itemType
      }

      blueprint3d.model.scene.addItem(itemType, modelUrl, modelPrice, modelBuybasket, modelGallery, metadata);
      setCurrentState(scope.states.DEFAULT);
    });
  }
 
  init();

}



/*
 * Change floor and wall textures
 */

var TextureSelector = function (blueprint3d, sideMenu) {

  var scope = this;
  var three = blueprint3d.three;
  var isAdmin = isAdmin;

  var currentTarget = null;

  function initTextureSelectors() {
    $(".texture-select-thumbnail").click(function(e) {
      var textureUrl = $(this).attr("texture-url");
      var textureStretch = ($(this).attr("texture-stretch") == "true");
      var textureScale = parseInt($(this).attr("texture-scale"));
      currentTarget.setTexture(textureUrl, textureStretch, textureScale);

      e.preventDefault();
    });
  }

  function init() {
    three.wallClicked.add(wallClicked);
    three.floorClicked.add(floorClicked);
    three.itemSelectedCallbacks.add(reset);
    three.nothingClicked.add(reset);
    sideMenu.stateChangeCallbacks.add(reset);
    initTextureSelectors();
  }

  function wallClicked(halfEdge) {
    currentTarget = halfEdge;
    $("#floorTexturesDiv").hide();  
    $("#wallTextures").show();  
  }

  function floorClicked(room) {
    currentTarget = room;
    $("#wallTextures").hide();  
    $("#floorTexturesDiv").show();  
  }

  function reset() {
    $("#wallTextures").hide();  
    $("#floorTexturesDiv").hide();  
  }

  init();
}

/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d) {

  var canvasWrapper = '#floorplanner';

  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';

  this.floorplanner = blueprint3d.floorplanner;

  var scope = this;

  function init() {

    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();

    // mode buttons
    scope.floorplanner.modeResetCallbacks.add(function(mode) {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == scope.floorplanner.modes.MOVE) {
          $(move).addClass(activeStlye);
      } else if (mode == scope.floorplanner.modes.DRAW) {
          $(draw).addClass(activeStlye);
      } else if (mode == scope.floorplanner.modes.DELETE) {
          $(remove).addClass(activeStlye);
      }

      if (mode == scope.floorplanner.modes.DRAW) {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      } else {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.MOVE);
    });

    $(draw).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.DRAW);
    });

    $(remove).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
}; 

var mainControls = function(blueprint3d) {
  var blueprint3d = blueprint3d;

  function newDesign() {
    blueprint3d.model.loadSerialized('{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}');
  }

  function loadDesign() {
    files = $("#loadFile").get(0).files;
    var reader  = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result;
        blueprint3d.model.loadSerialized(data);
    }
    reader.readAsText(files[0]);
  }

  function saveDesign() {
    var data = blueprint3d.model.exportSerialized();
    var a = window.document.createElement('a');
    var blob = new Blob([data], {type : 'text'});
    a.href = window.URL.createObjectURL(blob);
    a.download = 'design.storiablue';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a)
  }
  


  function init() {
    $("#new").click(newDesign);
    $("#loadFile").change(loadDesign);
    $("#saveFile").click(saveDesign);
  }

  init();
}

/*
 * Initialize!
 */

$(document).ready(function() {

  // main setup
  var opts = {
    floorplannerElement: 'floorplanner-canvas',
    threeElement: '#viewer',
    threeCanvasElement: 'three-canvas',
    textureDir: "models/textures/",
    widget: false
  }
  var blueprint3d = new Blueprint3d(opts);

  var modalEffects = new ModalEffects(blueprint3d);
  var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
  var contextMenu = new ContextMenu(blueprint3d);
  var sideMenu = new SideMenu(blueprint3d, viewerFloorplanner, modalEffects);
  var textureSelector = new TextureSelector(blueprint3d, sideMenu);        
  var cameraButtons = new CameraButtons(blueprint3d);
  mainControls(blueprint3d);

  // This serialization format needs work
  // Load a simple rectangle room
  
/*
  data = '{"floorplan":{"corners":{"56d9ebd1-91b2-875c-799d-54b3785fca1f":{"x":630.555,"y":-227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":294.64,"y":-227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":294.64,"y":232.664},"254656bf-8a53-3987-c810-66b349f49b19":{"x":745.7439999999998,"y":232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":1044.7019999999998,"y":232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":1044.7019999999998,"y":-105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0":{"x":745.7439999999998,"y":-105.66399999999999}},"walls":[{"corner1":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2":"254656bf-8a53-3987-c810-66b349f49b19","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2":"8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/light_brick.jpg","stretch":false,"scale":100}},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e7db8654-efe1-bda2-099a-70585874d8c0","corner2":"56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/wallmap_yellow.png","stretch":true,"scale":null}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"url":"https://blueprint-dev.s3.amazonaws.com/uploads/floor_wall_texture/file/light_fine_wood.jpg","scale":300}}},"items":[{"item_name":"Full Bed","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/39/ik_nordli_full.js","xpos":939.5525544513545,"ypos":50,"zpos":-15.988409993966997,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Bedside table - White","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/353/cb-archnight-white_baked.js","xpos":1001.0862865204286,"ypos":31.15939942141,"zpos":86.4297300551338,"rotation":-0.7872847644705953,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Open Door","item_type":7,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/174/open_door.js","xpos":745.2440185546875,"ypos":110.5,"zpos":64.8291839065202,"rotation":-1.5707963267948966,"scale_x":1.7003089598352215,"scale_y":0.997292171703541,"scale_z":0.999415040540576,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js","xpos":886.8841174461031,"ypos":139.1510114697785,"zpos":-105.16400146484375,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Dresser - White","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/478/we-narrow6white_baked.js","xpos":898.0548281668393,"ypos":35.611997646165,"zpos":201.10860458067486,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js","xpos":534.9620937975317,"ypos":137.60931398864443,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js","xpos":295.1400146484375,"ypos":141.43383044055196,"zpos":123.2280598724867,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Media Console - White","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/400/cb-clapboard_baked.js","xpos":658.6568227980731,"ypos":67.88999754395999,"zpos":-141.50237235990153,"rotation":-0.8154064090423808,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Blue Rug","item_type":8,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/440/cb-blue-block-60x96.js","xpos":905.8690190229256,"ypos":0.250005,"zpos":44.59927303228528,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"NYC Poster","item_type":2,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/77/nyc-poster2.js","xpos":1038.448276049687,"ypos":146.22618581237782,"zpos":148.65033715350484,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Sofa - Grey","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/596/cb-rochelle-gray_baked.js","xpos":356.92671999154373,"ypos":42.54509923821,"zpos":-21.686174295784554,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Coffee Table - Wood","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/68/ik-stockholmcoffee-brown.js","xpos":468.479104587435,"ypos":24.01483158034958,"zpos":-23.468458996048412,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Floor Lamp","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/614/ore-3legged-white_baked.js","xpos":346.697102333121,"ypos":72.163997943445,"zpos":-175.19915302127583,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Red Chair","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/723/ik-ekero-orange_baked.js","xpos":397.676038151142,"ypos":37.50235073007,"zpos":156.31701312594373,"rotation":2.4062972386507093,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Window","item_type":3,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js","xpos":374.7738207971076,"ypos":138.62749831597068,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Closed Door","item_type":7,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js","xpos":637.2176377788675,"ypos":110.80000022010701,"zpos":232.16400146484375,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Bookshelf","item_type":1,"model_url":"https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/388/cb-kendallbookcasewalnut_baked.js","xpos":533.1460416453955,"ypos":92.17650034119151,"zpos":207.7644213268835,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false}]}'
  vecchia sequenza caricamento ogg in room    
  */
  
/*  
data = '{"floorplan":{"corners":{"56d9ebd1-91b2-875c-799d-54b3785fca1f":{"x":630.555,"y":-227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":294.64,"y":-227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":294.64,"y":232.664},"254656bf-8a53-3987-c810-66b349f49b19":{"x":745.7439999999998,"y":232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":1044.7019999999998,"y":232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":1044.7019999999998,"y":-105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0":{"x":745.7439999999998,"y":-105.66399999999999}},"walls":[{"corner1":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2":"254656bf-8a53-3987-c810-66b349f49b19","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2":"8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/light_brick.jpg","stretch":false,"scale":100}},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e7db8654-efe1-bda2-099a-70585874d8c0","corner2":"56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"http://mediametalli.altervista.org/bru/wallmap_yellow.png","stretch":true,"scale":null}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"url":"http://mediametalli.altervista.org/bru/light_fine_wood.jpg","scale":300}}},"items":[{"item_name":"Poster-Quadro-Foto","item_type":2,"model_url":"models/js/nyc-poster2.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1038.448276049687,"ypos":146.36650685131218,"zpos":127.2945944810669,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tappeto","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":914.5788405991636,"ypos":0.25000500000000003,"zpos":-14.898755542411582,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Aperta","item_type":7,"model_url":"models/js/open_door.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":745.2440185546875,"ypos":110.800000297771,"zpos":44.39619550122137,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Chiusa","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":647.9801837450683,"ypos":110.80000022010701,"zpos":232.16400146484375,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comodino Colore Bianco","item_type":1,"model_url":"models/js/cb-archnight-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1003.0792739860971,"ypos":31.15939942141,"zpos":94.15927688133303,"rotation":-1.0371121156528549,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comò Colore Bianco","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":891.2265247159877,"ypos":35.611997646165,"zpos":201.4265158740954,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Letto Matrimoniale","item_type":1,"model_url":"models/js/ik_nordli_full.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":936.9990764934029,"ypos":50,"zpos":-16.63277266683859,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Postazione Multimediale Colore Bianco","item_type":1,"model_url":"models/js/cb-clapboard_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":667.566835099473,"ypos":67.88999754395999,"zpos":-142.46296101235313,"rotation":-0.8105717780726251,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tavolo Ellittico","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":466.14057540460857,"ypos":24.01483158034958,"zpos":-18.17309413606685,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Lampada da Pavimento","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":342.73036739933065,"ypos":72.163997943445,"zpos":-175.06047825165658,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Libreria","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":522.2361255174952,"ypos":92.17650034119151,"zpos":208.12632343609533,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Sedia Colore Rosso","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":390.3885893585605,"ypos":37.50235073007,"zpos":160.87345065615892,"rotation":2.296471887702932,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":295.1400146484375,"ypos":141.4467085442696,"zpos":134.84916806910527,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":371.2547417297926,"ypos":138.22343858503913,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":526.4108365303404,"ypos":138.7004920791722,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":890.2965221236178,"ypos":132.79681150755556,"zpos":-105.16400146484375,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Divano Colore Grigio","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":358.66510029784695,"ypos":42.54509923821,"zpos":-19.957301718916085,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false}]}'
*/
/*  
  data = '{"floorplan":{"corners":{"56d9ebd1-91b2-875c-799d-54b3785fca1f":{"x":630.555,"y":-227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":294.64,"y":-227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":294.64,"y":232.664},"254656bf-8a53-3987-c810-66b349f49b19":{"x":745.7439999999998,"y":232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":1044.7019999999998,"y":232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":1044.7019999999998,"y":-105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0":{"x":745.7439999999998,"y":-105.66399999999999}},"walls":[{"corner1":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2":"254656bf-8a53-3987-c810-66b349f49b19","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2":"8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/light_brick.jpg","stretch":false,"scale":100}},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e7db8654-efe1-bda2-099a-70585874d8c0","corner2":"56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"url":"https://storianum.github.io/storiablue/example/rooms/textures/light_fine_wood.jpg","scale":300}}},"items":[{"item_name":"Poster-Quadro-Foto","item_type":2,"model_url":"models/js/nyc-poster2.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1038.448276049687,"ypos":146.36650685131218,"zpos":127.2945944810669,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tappeto","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":914.5788405991636,"ypos":0.25000500000000003,"zpos":-14.898755542411582,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Aperta","item_type":7,"model_url":"models/js/open_door.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":745.2440185546875,"ypos":110.800000297771,"zpos":44.39619550122137,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Chiusa","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":647.9801837450683,"ypos":110.80000022010701,"zpos":232.16400146484375,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comodino Colore Bianco","item_type":1,"model_url":"models/js/cb-archnight-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1003.0792739860971,"ypos":31.15939942141,"zpos":94.15927688133303,"rotation":-1.0371121156528549,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comò Colore Bianco","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":891.2265247159877,"ypos":35.611997646165,"zpos":201.4265158740954,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Letto Matrimoniale","item_type":1,"model_url":"models/js/ik_nordli_full.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":936.9990764934029,"ypos":50,"zpos":-16.63277266683859,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Postazione Multimediale Colore Bianco","item_type":1,"model_url":"models/js/cb-clapboard_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":667.566835099473,"ypos":67.88999754395999,"zpos":-142.46296101235313,"rotation":-0.8105717780726251,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tavolo Ellittico","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":466.14057540460857,"ypos":24.01483158034958,"zpos":-18.17309413606685,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Lampada da Pavimento","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":342.73036739933065,"ypos":72.163997943445,"zpos":-175.06047825165658,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Libreria","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":522.2361255174952,"ypos":92.17650034119151,"zpos":208.12632343609533,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Sedia Colore Rosso","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":390.3885893585605,"ypos":37.50235073007,"zpos":160.87345065615892,"rotation":2.296471887702932,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":295.1400146484375,"ypos":141.4467085442696,"zpos":134.84916806910527,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":371.2547417297926,"ypos":138.22343858503913,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":526.4108365303404,"ypos":138.7004920791722,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":890.2965221236178,"ypos":132.79681150755556,"zpos":-105.16400146484375,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Divano Colore Grigio","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":358.66510029784695,"ypos":42.54509923821,"zpos":-19.957301718916085,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false}]}'
*/
  
  data = '{"floorplan":{"corners":{"56d9ebd1-91b2-875c-799d-54b3785fca1f":{"x":630.555,"y":-227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":294.64,"y":-227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":294.64,"y":232.664},"254656bf-8a53-3987-c810-66b349f49b19":{"x":745.7439999999998,"y":232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":1044.7019999999998,"y":232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":1044.7019999999998,"y":-105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0":{"x":745.7439999999998,"y":-105.66399999999999}},"walls":[{"corner1":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2":"254656bf-8a53-3987-c810-66b349f49b19","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2":"8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}},{"corner1":"254656bf-8a53-3987-c810-66b349f49b19","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/light_brick.jpg","stretch":false,"scale":100}},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e7db8654-efe1-bda2-099a-70585874d8c0","corner2":"56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap_yellow.png","stretch":true,"scale":null}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"url":"rooms/textures/light_fine_wood.jpg","scale":300}}},"items":[{"item_name":"Poster-Quadro-Foto","item_type":2,"model_url":"models/js/nyc-poster2.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1038.448276049687,"ypos":146.36650685131218,"zpos":127.2945944810669,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tappeto","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":914.5788405991636,"ypos":0.25000500000000003,"zpos":-14.898755542411582,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Aperta","item_type":7,"model_url":"models/js/open_door.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":745.2440185546875,"ypos":110.800000297771,"zpos":44.39619550122137,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Porta Chiusa","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":647.9801837450683,"ypos":110.80000022010701,"zpos":232.16400146484375,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comodino Colore Bianco","item_type":1,"model_url":"models/js/cb-archnight-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":1003.0792739860971,"ypos":31.15939942141,"zpos":94.15927688133303,"rotation":-1.0371121156528549,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Comò Colore Bianco","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":891.2265247159877,"ypos":35.611997646165,"zpos":201.4265158740954,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Letto Matrimoniale","item_type":1,"model_url":"models/js/ik_nordli_full.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":936.9990764934029,"ypos":50,"zpos":-16.63277266683859,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Postazione Multimediale Colore Bianco","item_type":1,"model_url":"models/js/cb-clapboard_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":667.566835099473,"ypos":67.88999754395999,"zpos":-142.46296101235313,"rotation":-0.8105717780726251,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Tavolo Ellittico","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":466.14057540460857,"ypos":24.01483158034958,"zpos":-18.17309413606685,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Lampada da Pavimento","item_type":1,"model_url":"models/js/ore-3legged-white_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":342.73036739933065,"ypos":72.163997943445,"zpos":-175.06047825165658,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Libreria","item_type":1,"model_url":"models/js/cb-kendallbookcasewalnut_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":522.2361255174952,"ypos":92.17650034119151,"zpos":208.12632343609533,"rotation":-3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Sedia Colore Rosso","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":390.3885893585605,"ypos":37.50235073007,"zpos":160.87345065615892,"rotation":2.296471887702932,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":295.1400146484375,"ypos":141.4467085442696,"zpos":134.84916806910527,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":371.2547417297926,"ypos":138.22343858503913,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":526.4108365303404,"ypos":138.7004920791722,"zpos":-227.08399963378906,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Finestra","item_type":3,"model_url":"models/js/whitewindow.js","model_price":"NOT-ON-SALE","model_buybasket":"","model_gallery":"#","xpos":890.2965221236178,"ypos":132.79681150755556,"zpos":-105.16400146484375,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false},{"item_name":"Divano Colore Grigio","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","model_price":"x,y €","model_buybasket":"","model_gallery":"#","xpos":358.66510029784695,"ypos":42.54509923821,"zpos":-19.957301718916085,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false}]}'

  
  blueprint3d.model.loadSerialized(data);
});
