let time = prompt('What is the time?');
let meridian = prompt('is it AM or PM?');

if (meridian === "AM"){
    alert('24 hour format: ' + time + ':00');

} else if (meridian === "PM"){
    alert('24 hour format: ' + (time + 12) + ':00');
}