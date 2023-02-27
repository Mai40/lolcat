var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 8; // 8AM
var bedTime = 22; //10PM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var bedTimeSelector = document.getElementById("bedTimeSelector");


var updateClock = function() {
  var message = document.getElementById("timeEvent");
  var messageText;
  var lolcat = document.getElementById('lolcat');
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

  if (time == partyTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "IZ NAP TIME…";
  } else if (time == lunchTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good morning!";
  } else if (time == evening) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good Evening!"; 
  } else if (time >= bedTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Time for bed!";
  } else {
      messageText = "Good afternoon!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  }
  //console.log(messageText);
  message.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();
};

//creating clock
var showCurrentTime = function() {
  //display the string on the webpage
  var clock = document.getElementById ('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  //set hours
  if (hours >= noon) {
    meridian = "PM";
  } 
    if (hours > noon) {
      hours = hours - 12;
  }

  //set minutes
  if (minutes < 10) 
  {
    minutes = "0" + minutes;
  }

  // set Seconds
  if (seconds < 10 ) 
  {
    seconds = "0" + seconds;
  }

  //put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000; 
setInterval(updateClock, oneSecond);

//
var partyEvent = function() {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor =  "#0A8DAB"; 
  } else { 
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party Over";
      partyTimeButton.style.backgroundColor = "#222";
  }
};

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
  lunchTime = wakeUpTimeSelector.value;
};
var napEvent = function()
{
  napTime = napTimeSelector.value;
};
var bedEvent = function()
{
  bedTime = bedTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
bedTimeSelector.addEventListener('change', bedEvent);