// function allowDrop(ev) {
//     ev.preventDefault();
// }



$(document).ready(function(){
    
$('#drag1').draggable({
   revert: 'invalid'
});
$('#drag2').draggable({
   revert: 'invalid'    
});
$('#li1').droppable({
    drop: function(e,ui){
        $(ui.draggable).css('position', 'static').appendTo(this);
    }
});
$('#li2').droppable({
    drop: function(e,ui){
        $(ui.draggable).css('position','static').appendTo(this);
    }
});
});
    
    
    
    
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     isWin();
// }

function isWin(){
    var a = document.querySelector('.winNums');
    var li1 = document.querySelector('#li1');
    var li2 = document.querySelector('#li2');
    var t1 = document.querySelector('#drag1');
    var t2 = document.querySelector('#drag2');
    var x1 = parseInt(li1.innerText);
    var x2 = parseInt(li2.innerText);
    
    
    console.log('x1: ',x1);
    console.log('li2: ',li2.innerText);
    console.log('t1: ',t1.innerHTML);
    console.log('t2: ',t2.innerHTML);
    
    if (x1 === 3 && x2 === 7)    alert('WIN');
    
}
// setInterval(function(){isWin();},1000);
isWin();