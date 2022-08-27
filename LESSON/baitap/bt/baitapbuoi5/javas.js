localStorage.setItem("user1","hà");
localStorage.setItem("user2","nam");
localStorage.setItem("user1","phước");
localStorage.removeItem("user2");
localStorage.clear("");



// bài 2{
var c = setTimeout(function(){
    var h1 = document.createElement("h1");
    var node = document.createTextNode("I do the same thing, I told you that I never would")
    h1.appendChild(node)
    var div = document.getElementById("demo")
    div.appendChild(h1)
},1000);
var c = setTimeout(function(){
    var h1 = document.createElement("h1");
    var node = document.createTextNode("I told you I changed, even when I knew I never could")
    h1.appendChild(node)
    var div = document.getElementById("demo")
    div.appendChild(h1)
},2000);
var c = setTimeout(function(){
    var h1 = document.createElement("h1");
    var node = document.createTextNode("I know that I can't find nobody else as good as you")
    h1.appendChild(node)
    var div = document.getElementById("demo")
    div.appendChild(h1)
},3000);
var c = setTimeout(function(){
    var h1 = document.createElement("h1");
    var node = document.createTextNode("I need you to stay, need you to stay, hey")
    h1.appendChild(node)
    var div = document.getElementById("demo")
    div.appendChild(h1)
},4000);
var c = setTimeout(function(){
    var h1 = document.createElement("h1");
    var node = document.createTextNode("I get drunk, wake up, I'm wasted still")
    h1.appendChild(node)
    var div = document.getElementById("demo")
    div.appendChild(h1)
},5000);






