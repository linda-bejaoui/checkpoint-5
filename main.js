var txt = document.getElementById("text");

function BOLD() {
    if (txt.style.fontWeight != 'bold') {


        txt.style.fontWeight = 'bold';
    }
    else {
        txt.style.fontWeight = 'normal';
    }
}

function ITALIC() {
    if (txt.style.fontStyle != 'italic') {


        txt.style.fontStyle = 'italic';
    }
    else {
        txt.style.fontStyle = 'normal';
    }

}
function UNDERLINED() {
    if (txt.style.textDecoration != 'underline') {


        txt.style.textDecoration = 'underline';
    }
    else {
        txt.style.textDecoration = 'none';
    }
}
var fs = document.getElementById('fs');
fs.onchange = function() {
txt.style.fontSize = this.value;
}

var fst = document.getElementById('fst');
fst.onchange = function() {
txt.style.fontFamily = this.value;
}

var fs = document.getElementById('fs');
fs.onchange = function() {
txt.style.fontSize = this.value;
}
$(".div1 .button").css("opacity",0);
$(".div1").hover(function(){
    $(this).find(".button").css("opacity",1);
},
function(){
    $(this).find(".button").css("opacity",0);
});