/*function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  info.innerHTML = hours + ":" + mins + ":" + secs;
}

let a;
let b;

setInterval(printTime, 1000);
console.log(2 + 9);88

*/

let userName = prompt("Kullanici Adinizi Giriniz !");

document.getElementById("myName").textContent = userName;

const weekday = [
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function showTime() {
  const d = new Date();
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  year = d.getFullYear();
  mount = addZero(d.getMonth() + 1);
  day = addZero(d.getDate());
  gün = weekday[d.getDay() - 1];

  second = addZero(d.getSeconds());
  minute = addZero(d.getMinutes());
  hours = addZero(d.getHours());

  const tarih = day + "." + mount + "." + year + " " + gün;
  const saat = hours + ":" + minute + ":" + second;

  document.getElementById("myDay").textContent = tarih;
  document.getElementById("myClock").textContent = saat;
}

setInterval(showTime, 1000);
