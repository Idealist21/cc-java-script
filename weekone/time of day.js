let time = prompt('TYPE Time In 24 hours ');
// console.log(time);

if (time >= 6 &&  time < 12){
    alert('Good Morning.')
} else if (time >= 12 && time < 16){
    alert('Good afternoon');
}else if (time >= 16 && time < 23){
    alert('Good eveniging');
} else {
    alert('You should be in bed');
}
