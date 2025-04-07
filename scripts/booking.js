/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dayCounter = 0;
let calculatedCost = document.getElementById("calculated-cost");
let dailyRate = 35;
let halfDays = document.getElementById("half");
let fullDays = document.getElementById("full");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickMonday() {
  if (!monday.classList.contains("clicked")) {
    monday.classList.add("clicked");
    dayCounter++;
    calculate();
  }
}

function clickTuesday() {
  if (!tuesday.classList.contains("clicked")) {
    tuesday.classList.add("clicked");
    dayCounter++;
    calculate();
  }
}

function clickWednesday() {
  if (!wednesday.classList.contains("clicked")) {
    wednesday.classList.add("clicked");
    dayCounter++;
    calculate();
  }
}

function clickThursday() {
  if (!thursday.classList.contains("clicked")) {
    thursday.classList.add("clicked");
    dayCounter++;
    calculate();
  }
}

function clickFriday() {
  if (!friday.classList.contains("clicked")) {
    friday.classList.add("clicked");
    dayCounter++;
    calculate();
  }
}

monday.addEventListener("click", clickMonday);
tuesday.addEventListener("click", clickTuesday);
wednesday.addEventListener("click", clickWednesday);
thursday.addEventListener("click", clickThursday);
friday.addEventListener("click", clickFriday);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  dayCounter = 0;
  calculate();
}

clearButton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRate() {
  if (fullDays.classList.contains("clicked")) {
    fullDays.classList.remove("clicked");
    halfDays.classList.add("clicked");
    dailyRate = 20;
  } else if (halfDays.classList.contains("clicked")) {
    halfDays.classList.remove("clicked");
    fullDays.classList.add("clicked");
    dailyRate = 35;
  }
  calculate();
}

halfDays.addEventListener("click", changeRate);
fullDays.addEventListener("click", changeRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  calculatedCost.innerHTML = dailyRate * dayCounter;
}
