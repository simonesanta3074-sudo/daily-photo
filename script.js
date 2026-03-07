let datePicker = document.getElementById("datePicker");
let photo = document.getElementById("photo");
let message = document.getElementById("message");
let caption = document.getElementById("caption");
let description = document.getElementById("description");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let buttons = document.getElementById("buttons");


let descriptions = {
  "2025-09-21": "My first fucking maccies",
  "2025-09-22": "I mean",
  "2025-09-23": "my fav smokehouse",
  "2025-09-24": "Hanging american girl",
  "2025-09-25": "Se non mi capite vi capisco",
  "2025-09-26": "Chomp",
  "2025-09-27": "Best burger in the UK easy",
  "2025-09-28": "First Pasta Group picture",
  "2025-09-29": "Crazy secret place",
  "2025-09-30": "Volleygang",
  "2025-10-01": "She didn't let me buy them :(",
  "2025-10-02": "Chilling in the flat",
  "2025-10-03": "I think it was Kraken night",
  "2025-10-04": "My beasts",
  "2025-10-05": "Sorry Italy",
  "2025-10-06": "Wtf",
  "2025-10-07": "Peak day at Peak District",
  "2025-10-08": "They were better than they looked",
  "2025-10-09": "Jack nightttt",
  "2025-10-10": "Loved this",
  "2025-10-11": "The gang and Paddington",
  "2025-10-12": "Vibez",
  "2025-10-13": "Salama proving herself useful",
  "2025-10-14": "Sorry mum",
  "2025-10-15": "Hit",
  "2025-10-16": "We won",
  "2025-10-17": "Time for them to taste Negronis",
  "2025-10-18": "Still don't know if it's football or soccer",
  "2025-10-19": "Ordered volleygang",
  "2025-10-20": "Proud of this one",
  "2025-10-21": "A few moments before Ollie came",
  "2025-10-22": "GOGO MOMO",
  "2025-10-23": "Elena approves",
  "2025-10-24": "INB you are beautiful",
  "2025-10-25": "Leedz",
  "2025-10-26": "Pizza people with pizzas",
  "2025-10-27": "Always available for free stuff",
  "2025-10-28": "Weirdest race ever. Sportsmanship won",
  "2025-10-29": "I swear I have two eyes",
  "2025-10-30": "Sorry Elena my bad",
  "2025-10-31": "High five",
  "2025-11-01": "",
  "2025-11-02": "",
  "2025-11-03": "",
  "2025-11-04": "",
  "2025-11-05": "",
  "2025-11-06": "",
  "2025-11-07": "",
  "2025-11-08": "",
  "2025-11-09": "",
  "2025-11-10": "",
  "2025-11-11": "",
  "2025-11-12": "",
  "2025-11-13": "",
  "2025-11-14": "",
  "2025-11-15": "",
  "2025-11-16": "",
  "2025-11-17": "",
  "2025-11-18": "",
  "2025-11-19": "",
  "2025-11-20": "",
  "2025-11-21": "",
  "2025-11-22": "",
  "2025-11-23": "",
  "2025-11-24": "",
  "2025-11-25": "",
  "2025-11-26": "",
  "2025-11-27": "",
  "2025-11-28": "",
  "2025-11-29": "",
  "2025-11-30": "",
  "2025-12-01": "",
  "2025-12-02": "",
  "2025-12-03": "",
  "2025-12-04": "",
  "2025-12-05": "",
  "2025-12-06": "",
  "2025-12-07": "",
  "2025-12-08": "",
  "2025-12-09": "",
  "2025-12-10": "",
  "2025-12-11": "",
  "2025-12-12": "",
  "2025-12-13": "",
  "2025-12-14": "",
  "2025-12-15": "",
  "2025-12-16": "",
  "2025-12-17": "",
  "2025-12-18": "",
  "2025-12-19": "",
  "2025-12-20": "",
  "2025-12-21": "",
  "2025-12-22": "",
  "2025-12-23": ""
};

photo.classList.add("hidden");

function loadPhoto() {
  let selectedDate = datePicker.value;

  if (selectedDate === "") {
    photo.src = "";
    photo.classList.add("hidden");
    caption.textContent = "";
    description.textContent = "";
    message.textContent = "";
    buttons.classList.add("hidden");
    return;
  }

  buttons.classList.remove("hidden");

  if (selectedDate < datePicker.min || selectedDate > datePicker.max) {
    photo.src = "";
    photo.classList.add("hidden");
    caption.textContent = "";
    description.textContent = "";
    message.textContent = "Please choose a date between September 21 and December 23, 2025.";
    return;
  }

  let imagePath = "photos/" + selectedDate + ".jpeg";

  photo.onload = function () {
    photo.classList.remove("hidden");
    caption.textContent = "Photo from " + selectedDate;
    description.textContent = descriptions[selectedDate] || "";
    message.textContent = "";
  };

  photo.onerror = function () {
    photo.src = "";
    photo.classList.add("hidden");
    caption.textContent = "Photo from " + selectedDate;
    description.textContent = "";
    message.textContent = "No photo available for this date.";
  };

  photo.src = imagePath;
}

function goToPreviousDay() {
  if (datePicker.value === "") {
    return;
  }

  let currentDate = new Date(datePicker.value);
  currentDate.setDate(currentDate.getDate() - 1);

  let minDate = new Date(datePicker.min);

  if (currentDate >= minDate) {
    datePicker.value = currentDate.toISOString().split("T")[0];
    loadPhoto();
  }
}

function goToNextDay() {
  if (datePicker.value === "") {
    return;
  }

  let currentDate = new Date(datePicker.value);
  currentDate.setDate(currentDate.getDate() + 1);

  let maxDate = new Date(datePicker.max);

  if (currentDate <= maxDate) {
    datePicker.value = currentDate.toISOString().split("T")[0];
    loadPhoto();
  }
}

datePicker.addEventListener("change", loadPhoto);
prevButton.addEventListener("click", goToPreviousDay);
nextButton.addEventListener("click", goToNextDay);