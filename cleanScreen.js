(function() {
  "use strict";

  $(function() {
    var colors = ["green","yellow","black","gray","blue"];  

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      } 

    $("#button").on("click", function() {
      let width = $("#width").val();
      let amount = parseInt($("#amount").val());
      let rate = $("#rate").val();
      let num = $("#num").val();

      for (let i = 1; i <= num; i++) {
        $("#cycles").append(
          $("<div>", {
            css: {
                "position": "absolute",
                "left": getRandomInt(0,600)+"px",
                "top" : getRandomInt(0,500)+"px",
                "width": width+"px",
                "height": width+"px",
                "background-color": colors[getRandomInt(0,5)]+"",
                "border-radius": "50%",
                "text-align": "center"
            },
            "class" : "cycle",
            "click" :function(){
                $(this).remove();
            }
          })
        );
      }

      setInterval(function() {
        let oldwidth = parseInt($(".cycle").css("width"));
        let newWidth = oldwidth + amount + "px";
        $(".cycle").css("width", newWidth);
        $(".cycle").css("height", newWidth);
      },rate);
    });
  });
})();
