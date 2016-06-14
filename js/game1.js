
var gGame1Quess = [
    {
        name: 'DoraStar',
        imgSrc: 'img/game1Imgs/dora.gif',
        trueAns: 'Dora is riching for the star',
        falseAns: 'Dora is riching for the moon',
    },
    {
        name: 'DoraStar',
        imgSrc: 'img/game1Imgs/doraAndRabit.jpg',
        trueAns: 'Dora is riching for the star',
        falseAns: 'Dora is riching for the moon'
    },
    {
        name: 'DoraStar',
        imgSrc: 'img/game1Imgs/doraAtBeach.jpg',
        trueAns: 'Dora is riching for the star',
        falseAns: 'Dora is riching for the moon'
    },
    {
        name: 'DoraStar',
        imgSrc: 'img/game1Imgs/doraIsCrayng.jpg',
        trueAns: 'Dora is riching for the star',
        falseAns: 'Dora is riching for the moon'
    }

];

$(document).ready(function(){    
var i = 0;
renderQues(gGame1Quess, i);
});

function renderQues(arrOfQuess, i) {

    // render img
    var strHTMLImg = '<img src="'+ arrOfQuess[i].imgSrc +'" alt="">';

    $('.game1Img').html(strHTMLImg);
    // render ansors
    var oneOrZero = Math.round(Math.random());
    console.log('oneOrZero: ', oneOrZero);
    
    var strHTMLAns1;
    var strVALAns1;

    var strHTMLAns2;
    var strVALAns2;

    if(oneOrZero === 0){
        strTEXTAns1 = arrOfQuess[i].trueAns;
        strVALAns1 = true;
        strTEXTAns2 = arrOfQuess[i].falseAns;
        strHTMLAns2 = false;

    }else{
        strTEXTAns1 = arrOfQuess[i].falseAns;
        strVALAns1 = false;
        strTEXTAns2 = arrOfQuess[i].trueAns;
        strVALAns2 = true;
    }

    $('.ans1').text(strTEXTAns1);
    $('.ans1').val(strVALAns1);

    $('.ans2').text(strTEXTAns2);
    $('.ans2').val(strVALAns2);
}

function button1Clicked(value) {
   console.log(value);
   console.log(typeof($.parseJSON(value)));

//    var pushedWrongAns = false;
   if( $.parseJSON(value) ){
    //    if()

   }else{
   
        $('.ans1').addClass('wrongAns');
        console.log($('.ans1'));
        pushedWrongAns = true;
        
   }     
}
