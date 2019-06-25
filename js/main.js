window.addEventListener('load',function() {
    
    document.getElementById('portfolio_ul').addEventListener('click', fnShowImgViewer);
    document.getElementById('full_Size_Container').addEventListener('click', fnHideImgViewer);
    
    function fnShowImgViewer(){
        console.log(" target == "+event.target.src);
        var path = event.target.src.replace("Portfolio_thumbnails", "Portfolio_original");
        document.getElementById("full_Size_Container").innerHTML = "<img src="+path+">";// <img class = close_btn src=images/close-circled.png alt=Image_1>";
        document.getElementById("full_Size_Container").className = "full_Size_Img_Container_Show";
    }
    function fnHideImgViewer(){ 
        document.getElementById("full_Size_Container").className = "full_Size_Img_Container_Hide";
    }
   $( "#menu" ).click(function() {
      console.log( "Handler for .click() called." );
       $("#nav").toggle();
       $("#show-menu").toggle();
       $("#hide-menu").toggle();
    }); 
    $( "body" ).click(function( event ) {
    // console.log( "clicked: " + );
       if(event.target.parentElement.id != 'show-menu'&& Number($( "body" ).width())<=800){
           $("#nav").hide();     
           $("#hide-menu").hide();      
           $("#show-menu").show();
       } 
    });
    $( window ).resize(function() {
        console.log($( window ).width());
      if(Number($( "body" ).width())>=800){
          $("#nav").show();    
      }
        else{
          $("#nav").hide();  
            $("#hide-menu").hide();      
           $("#show-menu").show();
      }
    });
    
});
