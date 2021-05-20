setInterval(() =>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hrotate = (30 * hour) + (minute / 2);
    mrotate = (6 * minute);
    srotate = (6 * second);

    document.getElementById("hour").style.transform = `rotate(${hrotate}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotate}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotate}deg)`;
},1000)