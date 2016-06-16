
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
    if(localStorage.getItem('player') === null){
        
        localStorage.setItem('player',JSON.stringify(gChals));        
        renderChals(gChals,'.boardContainer');
        
    } else{
        removeLayer();
        renderChals(gChals,'.boardContainer');
    }
}

function removeLayer(){
    $('.firstLayer').css('zIndex',0);
    $('.firstLayer').hide();
    $('.boardContainer').css('zIndex',1);
    renderChals(gChals,'.boardContainer');
}



function getChals() {
    
}

function getChalById(chalId) {
    var obj = gChals.filter(function ( obj ) {
    return obj.id === chalId;
})[0];
}

function reportSolved(chalId){
    
}


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

function redirect(el){
    console.log('el id' ,el.id);
    var gChal = JSON.parse(localStorage.getItem('player'));
    console.log('gchal before is: ',gChal);
    var num = el.id;
    // parseInt($(str).text().match(/\d+/)[0], 10); 
    var num2 = num.charAt(4);
    num2--;
    num2 = 'game' + num2;
    console.log('num2 is: ',num2);
    
    var currlevel = gChal.filter(function(cell){
        return (cell.id === num2)
    });
    
    console.log('currlevel',currlevel[0].isSolved);
    if (currlevel[0].isSolved){
        var str ='';
        str+=el.id + '.html';
        str = '/C:/coding%20acadmy/sprint2/' + str;
        console.log('str:',str);
        var pathname = window.location.pathname;
        console.log('pathname:',pathname);
        window.location = str;
        
    } else {alert('YOU HAVE NOT PASSED PREV GAME')}
    
    
        
}