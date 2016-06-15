$(document).ready(function(){
    renderImg()
    randerGrid()
    randerAnss()
})

function renderImg() {
     var imgSrc = 'img/game3Imgs/elephant.jpg'; 
     var strHTMLImg = '<img src="'+ imgSrc +'" alt="">';

    $('.game3Img').html(strHTMLImg);
}

function randerGrid() {
    var strHTML ='';
    var container = document.querySelector('.game3grid');
    for (var i = 0; i < 9; i++) {
        strHTML += '<div class="grid" id='+ (i+1) +'></div>'
    }
    console.log('container: ', container);
    console.log('strHTML: ', strHTML);
    
    container.innerHTML = strHTML;
}

function randerAnss() {
    var strHTML ='';
    var container = document.querySelector('.game3Ans');
    for (var i = 0; i < 9; i++) {
        strHTML += '<div class="ans" id='+ (i+1) +'></div>'
    }
    console.log('container: ', container);
    console.log('strHTML: ', strHTML);
    
    container.innerHTML = strHTML;
}