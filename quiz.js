const questions = [
  {
    question:
      "1. What agency takes charge of giving information about the coming typhoon?",
    options: ["DOST", "PAGASA ", "PHIVOLCS", "NDRRMC"],
    answer: 1,
  },
  {
    question: "2. What is necessary to form a typhoon?",
    options: ["warm air", "moist air", "heated air", "cool air"],
    answer: 0,
  },
  {
    question:
      "3. For at least how many hours can we expect a PSWS #3 tropical cyclones before it affects the locality?",
    options: ["36 hours", "24 hours", "18 hours", "12 hours"],
    answer: 0,
  },
  {
    question:
      "4. When a tropical cyclone passes over a certain place, it is the ______ that has greater wind speed?",
    options: ["eye", "eyewall", "rainbands", "directions"],
    answer: 0,
  },
  {
    question:
      "5. In which layer of the atmosphere, do all weather disturbances happen?",
    options: ["Thermosphere", "Mesosphere", "Stratosphere", "Troposphere"],
    answer: 0,
  },
  {
    question:
      "6. In which category of a typhoon do rain clouds build over a warm ocean?",
    options: [
      "Tropical depression",
      "Tropical storm",
      "Typhoon",
      "Super typhoon",
    ],
    answer: 0,
  },
  {
    question:
      "7. What is the global generic term for an intense circulating weather system over tropical seas and oceans?",
    options: [
      "Tropical depression",
      "Tropical cyclone",
      "Typhoon storm",
      "Typhoon",
    ],
    answer: 0,
  },
  {
    question:
      "8. What do we call the tropical cyclone that occurs in the Northwest Pacific Ocean?",
    options: ["Hurricane", "Tropical storm", "Typhoon", "None of the above"],
    answer: 0,
  },
  {
    question:
      "9. What happens when sea level rises and strong winds blow from offshore to the coastline area?",
    options: ["Tsunami", "Thunderstorms ", "Tropical storm", "Storm surge "],
    answer: 0,
  },
  {
    question:
      "10. Which of the following will we NOT experience during a typhoon?",
    options: [
      "Very strong winds",
      "Heavy rains",
      "Large ocean waves",
      "shaking of ground",
    ],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  const currentQues = questions[currentQuestion];
  questionElement.innerHTML = currentQues.question;
  optionsElement.innerHTML = "";

  //  DISPLAY THE OPTIONS
  for (let i = 0; i < currentQues.options.length; i++) {
    const option = document.createElement("div");

    option.classList.add("form-check");
    option.innerHTML = `
          <input class="form-check-input" type="radio" name="option" value="${i}" id="option${i}">
          <label class="form-check-label" for="option${i}">${currentQues.options[i]}</label>
      `;
    optionsElement.appendChild(option);
    // console.log(option);
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  //   console.log(selectedOption);
  if (!selectedOption) {
    alert("Please select an answer.");
    loadQuestion();
  }
  return parseInt(selectedOption.value) === questions[currentQuestion].answer;
}

document.getElementById("nextButton").addEventListener("click", function () {
  const revealAnswer = document.getElementById("checkAnswer");
  const answer = questions[currentQuestion]["options"];

  if (checkAnswer()) {
    score++;
    console.log(score);
    revealAnswer.style.display = "block";
    revealAnswer.classList.remove("bg-danger");
    revealAnswer.classList.add("bg-success");
    revealAnswer.textContent = `Correct: ${
      answer[questions[currentQuestion].answer]
    } `;

    setTimeout(() => {
      revealAnswer.style.display = "none";
    }, 1500);
  } else {
    revealAnswer.style.display = "block";
    revealAnswer.classList.remove("bg-success");
    revealAnswer.classList.add("bg-danger");
    revealAnswer.textContent = `Wrong: Correct answer is ${
      answer[questions[currentQuestion].answer]
    } `;
    setTimeout(() => {
      revealAnswer.style.display = "none";
    }, 1500);
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document
      .getElementById("tryAgainBtn")
      .addEventListener("click", function () {});
    const totalScore = document.getElementById("score");
    totalScore.style.display = "block";
    totalScore.innerHTML = `Your score is ${score}`;

    let tryAgainButton = document.getElementById("tryAgainBtn");
    tryAgainButton.style.display = "block";
    console.log(tryAgainButton);
    tryAgainButton.addEventListener("click", function () {
      totalScore.style.display = "none"; // Hide total score
      tryAgainButton.style.display = "none"; //Hide try again
      currentQuestion = 0; // Reset question index
      score = 0; // Reset score
      loadQuestion(); // Load the first question again
    });
  }
});
// ITEM INCREMENTAL
// window.onload = function () {
//   // Get the current number from storage or set it to 0 if it doesn't exist
//   let currentNumber = localStorage.getItem("incrementedNumber");
//   if (!currentNumber) {
//     currentNumber = 0;
//   }

//   // Increment the number and display it
//   currentNumber++;
//   document.getElementById("number-item").innerText = currentNumber;

//   // Store the updated number
//   localStorage.setItem("incrementedNumber", currentNumber);
// };

// // RESET
// function resetNumber() {
//   // Reset the number to zero
//   localStorage.setItem("incrementedNumber", 0);
//   document.getElementById("number-item").innerText = 1;
// }

loadQuestion();
// resetNumber();
// checkAnswer();
// console.log(selectedOption);
