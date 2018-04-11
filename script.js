var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()
{
var message = document.getElementById("timeEvent");
var image = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = 			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME…";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeUpTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else if (time > evening) {
		messageText = "Good Evening!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else {
		messageText = "Good afternoon!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	}

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
};

	var showCurrentTime = function ()
{//display the string on the webpage
	var clock = document.getElementById("clock")
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	//set hours
	if (hours >= noon)
	{
		meridian = "PM"
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}
	//set minutes – put a zero infront – 01, 09, 10
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	// set seconds – put a zero infront – 01, 09, 10
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
};

updateClock();

//Define variables
var oneSecond = 1000;
setInterval (updateClock, oneSecond);
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
//Functions
var partyEvent = function()
{
	if (isPartyTime === false)
	{
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party on, Wayne!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "Party's Over…";
		partyTimeButton.style.backgroundColor = "#222";
	}
	};

//Events
var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function ()
{
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function ()
{
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

lunchTimeSelector.addEventListener("change", lunchEvent);

napTimeSelector.addEventListener("change", napEvent);
