
var gChals = [
    {
        id: 'game1',
        name: 'The Garden',
        isSolved: true
    },
    {
        id: 'game2',
        name: 'The Forest',
        isSolved: false
    },
    {
        id: 'game3',
        name: 'The Beach',
        isSolved: false
    },
    {
        id: 'game4',
        name: 'The Mountain ',
        isSolved: false
    }
];

function init(){
    $('.firstLayer').css('zIndex',0);
    $('.firstLayer').hide();
    
    $('.boardContainer').css('zIndex',1);
    
}

// progress();
// function progress(){
//     var game1 = $('#game1');
//     var game2 = $('#game2');
//     // game2.click = null;
//     console.log('game1: ',game1);
//     console.log('gstate: ',gState);
    
    
    
    // $(function () {
    // $("#game2").click(function(){alert('test');});
    // $("#game2").off('click');

// });
    
// }
function getChals() {
    
}

function getChalById(chalId) {
    var obj = gChals.filter(function ( obj ) {
    return obj.id === chalId;
})[0];
}

function reportSolved(chalId){}


function renderChals(mat,selector) {
    var elContainer = document.querySelector(selector);
    var strHTML ='';
    mat.forEach(function(chal,i){
        strHTML += '<div onclick="redirect(this)" id="' +chal.id + '" class="game '+ chal.id + '">'+ chal.name +'</div>';
    })
        console.log('str: ',strHTML);
        elContainer.innerHTML = strHTML;
        console.log('elContainer: ', elContainer);
        
        
}




renderChals(gChals,'.boardContainer');

function redirect(el){
    
   
    console.log('state.currChalId: ' ,gState.currChalId);
       
   
    
    console.log('el' ,el.id);
    if (el.id === gState.currChalId){
        var str ='';
        str+=el.id + '.html';
        str = '/C:/coding%20acadmy/sprint2/' + str;
        console.log('str:',str);
        var pathname = window.location.pathname;
        console.log('pathname:',pathname);
        window.location = str;
        
    } else {alert('YOU HAVE NOT PASSED PREV GAME')}
    
    
        
}