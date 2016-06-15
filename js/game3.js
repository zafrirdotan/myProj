$(document).ready(function(){
    renderImg()
})

function renderImg() {
     var imgSrc = 'img/game3Imgs/elephant.jpg'; 
     var strHTMLImg = '<img src="'+ imgSrc +'" alt="">';

    $('.game3Img').html(strHTMLImg);
}