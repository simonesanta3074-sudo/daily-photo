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
  "2025-09-23": "boh"
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