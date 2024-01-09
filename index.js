// Set the date we're counting down to
var countDownDate = new Date("Aug 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);


let h3 = document.querySelector('h3');
const addClass = () => {
  h3.classList.add()
}
// import FlipClock from 'flipclock';

// const clock = $('.clock').FlipClock({
//   clockFace: 'DailyCounter',
//   countdown: true
// });

// // input your custom Date below
// const date = new Date('2024-08-05 22:00:00');


// const dif = (date.getTime() / 1000) - ((new Date().getTime())/1000);

// const end = Math.max(0, dif);

// clock.setTime(end);
// clock.start();
