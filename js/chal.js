
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
    }
];

function getChals() {}
function getChalById(chalId) {}
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
    // var id = 
    console.log('el' ,el.id);
        
}