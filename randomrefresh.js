// <script>
min = 700000 //11.67 mins - minimum wait time, change vaules as desired in miliseconds
max = 900000 //15 mins - maximum wait time change vaules as desired in miliseconds

// generate random number between min and max number (min and max included)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);  // included min and max values change as desired
}

// refresh function
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
rand = getRandomInt(min, max)
window.onload = timedRefresh(rand);
// </script>
