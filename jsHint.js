
function alertCall(){
     
    alert("hello world");
}

function changeFontSize(){
  document.getElementById("area").className="changeFont";
     
}

function bling(){
    var area = document.getElementById("area");
    var check = document.getElementById("check");
    
    if(check.checked === true){
      area.className = "blingClass";
    }else{
         area.className ="";
    }
}

function timer(){
    setInterval(function(){
    var size = parseInt($("#area").css('font-size'));
    size = size + 2;
    document.getElementById("area").style.fontSize = size+"pt";
    },500);
}

/* arrow function , spread separators, functional programming (filter,map,reduce(with initial value)) , alternative for loop(for in,for each,for , for of),timer */

