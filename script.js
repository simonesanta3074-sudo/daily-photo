let datePicker = document.getElementById("datePicker");
let photo = document.getElementById("photo");
let message = document.getElementById("message");
let caption = document.getElementById("caption");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let buttons = document.getElementById("buttons");

photo.classList.add("hidden");

function loadPhoto() {
  let selectedDate = datePicker.value;

  if (selectedDate === "") {
    photo.src = "";
    photo.classList.add("hidden");
    caption.textContent = "";
    message.textContent = "";
    buttons.classList.add("hidden");
    return;
  }

  buttons.classList.remove("hidden");

  let imagePath = "photos/" + selectedDate + ".jpeg";

  photo.onload = function () {
    photo.classList.remove("hidden");
    message.textContent = "";
  };

  photo.onerror = function () {
    photo.src = "";
    photo.classList.add("hidden");
    caption.textContent = "";
    message.textContent = "No photo available for this date";
  };

  photo.src = imagePath;
  caption.textContent = "Photo from " + selectedDate;
}

datePicker.addEventListener("change", loadPhoto);

prevButton.addEventListener("click", function () {
  let currentDate = new Date(datePicker.value);
  currentDate.setDate(currentDate.getDate() - 1);

  let minDate = new Date(datePicker.min);

  if (currentDate >= minDate) {
    datePicker.value = currentDate.toISOString().split("T")[0];
    loadPhoto();
  }
});

nextButton.addEventListener("click", function () {
  let currentDate = new Date(datePicker.value);
  currentDate.setDate(currentDate.getDate() + 1);

  let maxDate = new Date(datePicker.max);

  if (currentDate <= maxDate) {
    datePicker.value = currentDate.toISOString().split("T")[0];
    loadPhoto();
  }
});