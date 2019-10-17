function changeName() {
    var x = document.getElementById("btn-name").value;
    document.getElementById("default-btn").innerHTML = x;
};

function changeSize(){
  var x = document.getElementById("btn-font").value;
    document.getElementById("default-btn").style.fontSize = x+'px';  
};

function changeFontColor(){
  var x = document.getElementById("btn-color").value;
  document.getElementById("default-btn").style.color = x ;
};

function changePadding(){
  var a = document.getElementById("pd-top").value;
  var b = document.getElementById("pd-right").value;
  var c = document.getElementById("pd-bottom").value;
  var d = document.getElementById("pd-left").value;
  document.getElementById("default-btn").style.paddingTop = a+"px";
  document.getElementById("default-btn").style.paddingRight = b+"px";
  document.getElementById("default-btn").style.paddingBottom = c+"px";
  document.getElementById("default-btn").style.paddingLeft = d+"px";
};


function changeBackColor(){
  var x = document.getElementById("back-color").value;
  document.getElementById("default-btn").style.background = x ;
};


function changeBorderColor(){
  var x = document.getElementById("brd-color").value;
  document.getElementById("default-btn").style.borderColor = x ;
};

function changeBorderWidth(){
  var x = document.getElementById("brd-width").value;
  document.getElementById("default-btn").style.borderWidth = x + 'px';
};

function changeBorderRadius(){
  var x = document.getElementById("brd-radius").value;
  document.getElementById("default-btn").style.borderRadius = x + 'px';
};


document.getElementById('code-btn').addEventListener('click',function(){
  event.preventDefault();
  var x = document.getElementById('default-btn').style.cssText;
  document.getElementById('code-wrapper').style.display = 'block';
  document.getElementById('result').innerText = x;
})

document.getElementById('close').addEventListener('click',function(){
  document.getElementById('code-wrapper').style.display = 'none';
})