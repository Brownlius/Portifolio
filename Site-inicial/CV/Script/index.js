let info;
        
document.addEventListener('DOMContentLoaded', ev=>{
    info = document.querySelector('#grafico  .info');
    doRotations();
    let timmy = setInterval(function(){
        let num = parseInt(info.textContent) + 1;
        num = (num>100)?0:num;
        info.textContent = num;
        doRotations();
    }, 500)
});

function doRotations(){
    let coverOver = document.querySelector('#grafico  .cover-over50');
    let coverUnder = document.querySelector('#grafico  .cover-under50');
    let fillOver = document.querySelector('#grafico  .fill-over50');
    let infoNum = parseInt(info.textContent);
    let pct = (infoNum - 50) * 360 / 100;
    //get the percentage of 360 degrees
    console.log('num', infoNum, pct, 'deg');
    if(infoNum > 50){
        coverOver.style.zIndex = 20;
        fillOver.style.zIndex = 30;
        //blue on right on top
        fillOver.style.transform = 'rotate(180deg)';
        coverUnder.style.transform = 'rotate(180deg)';
        //move a grey under the purple
        coverOver.style.transform = `rotate(${pct}deg)`;
    }else{
        coverOver.style.zIndex = 30;
        fillOver.style.zIndex = 20;
        //blue on left under grey
        coverOver.style.transform = 'rotate(0deg)';
        fillOver.style.transform = 'rotate(0deg)';
        //rotate a grey to reveal bottom-most purple
        coverUnder.style.transform = `rotate(${pct}deg)`;
    }
    
    //extra code for the demo in the alt section
    let altCOver = document.querySelector('#alt .cover-over50');
    let altCUnder = document.querySelector('#alt .cover-under50');
    let altFOver = document.querySelector('#alt .fill-over50');
    altCOver.style.transform = coverOver.style.transform;
    altCUnder.style.transform = coverUnder.style.transform;
    altFOver.style.transform = fillOver.style.transform;
}
