

document.addEventListener("DOMContentLoaded",function(event){
    setInterval(runTheClock, 1000);

    function runTheClock(){
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        var secondsAngle = sec*6;
        var minAngle = min*6 + (sec/60)*6;
        var hourAngle = hr*30 + (min/60)*30 + (sec/3600)*30;

        
        document.getElementById('second').style.transform= 'rotate(' + secondsAngle+ 'deg)'
        document.getElementById('minute').style.transform = 'rotate(' + minAngle+ 'deg)'
        document.getElementById('hour').style.transform = 'rotate(' + hourAngle+ 'deg)'
        
    }
    
});
   
    setInterval(diplayTheTime, 1000);

    function displayTheTime(){
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

    
        document.getElementById().innerHTML = ('ddital')
    
    }
    



