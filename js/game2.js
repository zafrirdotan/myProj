// function allowDrop(ev) {
//     ev.preventDefault();
// }



$(document).ready(function(){
    
$('#drag1').draggable({
    opacity: 0.5,
    revert: 'invalid',
    drop: function(event,ui){
        $(ui.draggable).css({maxHeight: $(this.height)});
    }
});
$('#drag2').draggable({
    opacity: 0.5,    
    revert: 'invalid'    
});
$('#li1').droppable({
    drop: function(e,ui){
        $(ui.draggable).css('position', 'static').appendTo(this);
        // $(ui.draggable).attr('class','').addClass('b')
        $('#li1').replaceWith('<li>3<li>');
        // $('#li1').remove();
        $(".winNums li").eq(3).remove();
        // console.log('ui.draggable:',ui.draggable);
        // console.log('e:',e);
        // console.log('ui:',ui);
        isWin();
        
        
    }
});
$('#li2').droppable({
    drop: function(e,ui){
        $(ui.draggable).css('position','static').appendTo(this);
        $('#li2').replaceWith('<li>7<li>');
        // $('#li2').remove();
        $(".winNums li").eq(7).remove();
        isWin();
        
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
    // var a = document.querySelector('.winNums');
    // var li1 = document.querySelector('#li1');
    // var li2 = document.querySelector('#li2');
    // var t1 = document.querySelector('#drag1');
    // var t2 = document.querySelector('#drag2');
    // var x1 = parseInt(li1.innerText);
    // var x2 = parseInt(li2.innerText);
    
    
    // console.log('x1: ',x1);
    // console.log('li2: ',li2.innerText);
    // console.log('t1: ',t1.innerHTML);
    // console.log('t2: ',t2.innerHTML);
    
    // if (x1 === 3 && x2 === 7)    alert('WIN');
    // else                         alert('NOT');
    // for (var i = 1;i <11;i++){
        
    // }
    var win = true;
    var i = 1;
    $("li").each(function(){
            // console.log(($(this).text()));
            var x = parseInt($(this).text())
            if ( x !== i) win = false;
            i++;
        });
    if (win) alert('WIN')
    else alert('NOT');
}
// setInterval(function(){isWin();},1000);
// isWin();