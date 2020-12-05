const alarmSubmit = document.getElementById('alarmsubmit');

alarmSubmit.addEventListener('click', setAlarm);

function ringBell() {
    var ring = new Audio('alarm.mp3');
    ring.play();
}

function setAlarm(e) {
    e.preventDefault();          //to stop the refresh the whole page after clicking set alarm button

    const alarm = document.getElementById('alarm');
    const alarmTime = new Date(alarm.value);
    let nowTime = new Date();

    let timeForAlarm = alarmTime - nowTime;
    // console.log(timeForAlarm);
    if (timeForAlarm >= 0) {
        setTimeout(() => {
            console.log('ringing is start now');
            ringBell();
        }, timeForAlarm)
    }
    else {
        alert('The time was alredy gone!  please enter a correct time.');
        window.location.reload();
    }
}