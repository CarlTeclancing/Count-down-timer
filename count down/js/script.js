const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const NewYear = '1 jan 2022'
const currentDate = '28 oct 2021'

function countdown() {
    const newYearsDate = new Date(NewYear);
    const currentDate = new Date();
    var mainDate = newYearsDate - currentDate;

    /*var seconds = Math.floor(mainDate /60);

    var minutes = Math.floor(mainDate / 3600);

    var hours = Math.floor(mainDate / 36000);

    var days = Math.floor(mainDate /3600 / 24);*/
    const seconds = Math.floor( (mainDate/1000) % 60 );
  const minutes = Math.floor( (mainDate/1000/60) % 60 );
  const hours = Math.floor( (mainDate/(1000*60*60)) % 24 );
  const days = Math.floor( mainDate/(1000*60*60*24) );


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    


    
}
countdown();

setInterval(countdown, 1000);
