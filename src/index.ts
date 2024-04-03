const timeDOM = document.getElementById('time')
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();

if (timeDOM) timeDOM.innerHTML = time;