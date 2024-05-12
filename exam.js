const questions = [
  {
    question: "1. Where do most Philippines typhoons form?",
    options: [
      "At the equator",
      "Sea over the Philippine Deep",
      "Caroline-Marianas area of the pacific",
      "Habagat",
    ],
    answer: 1,
  },
  {
    question: "2. What is the basis in categorizing tropical cyclones?",
    options: [
      "Temperature",
      "Atmospheric Temperature",
      "Amount of rainfall",
      "Wind speed",
    ],
    answer: 0,
  },
  {
    question:
      "3. What can you say about the temperature of the bodies of water in the vicinity of he Philippines?",
    options: ["cold", "lukewarm", "warm", "warm and cold"],
    answer: 0,
  },
  {
    question: "4. Where do the tropical cyclones form?",
    options: ["on air", "in the ocean", "on land ", "on mountain"],
    answer: 0,
  },
  {
    question:
      "5. What is the category of the tropical cyclone if the wind speed is between 65 - 118 kph?",
    options: [
      "Tropical Depression",
      "Tropical Storm",
      "Typhoon",
      "Supertyphoon",
    ],
    answer: 0,
  },
  {
    question: "6. What causes damage in a hurricane/typhoon?",
    options: ["winds", "storm surge", "flooding", "all of the above"],
    answer: 0,
  },
  {
    question: "7. What is the difference between typhoons and hurricanes?",
    options: [
      "wind speed",
      "amount of rainfall",
      "strength of winds",
      "place of origin",
    ],
    answer: 0,
  },
  {
    question: "8. How is the weather in the eye of a hurricane?",
    options: ["calm", "intense", "windy", "violent"],
    answer: 0,
  },
  {
    question:
      "9. What sea temperature is needed for tropical cyclones to form?",
    options: ["20.5°C", "26.5°C", "23.5°C", "27.5°C"],
    answer: 0,
  },
  {
    question:
      "10. What causes the storm surge that often accompanies a cyclone making landfall?",
    options: [
      "Global warming",
      "Low air pressure",
      "Intense rainfall",
      "Winds pushing waves onshore",
    ],
    answer: 0,
  },
  {
    question: "11. What is the most intense part of a tropical cyclone?",
    options: ["eye", "eyeball", "eyebands", "rain bands"],
    answer: 0,
  },
  {
    question: "12. What is the largest part of a tropical cyclone?",
    options: ["eye", "the tail", "eyewall", "rain bands"],
    answer: 0,
  },
  {
    question: "13. What is the correct order for the development of a typhoon?",
    options: [
      "supertyphoon, typhoon, tropical depression, tropical storm",
      "tropical storm, tropical depression, typhoon, supertyphoon",
      "tropical depression, tropical storm, typhoon, supertyphoon",
      "typhoon, tropical depression, tropical storm, supertyphoon",
    ],
    answer: 0,
  },
  {
    question: "14.  What does PAGASA mean?",
    options: [
      "Philippine Atmospheric, Geographical, and Astronomical Services Administration",
      "Philippine Atmosphere, Geophysical, and Astronomical Services Administration",
      "Philippine Atmospheric, Geophysical, and Astronomical Services Administration",
      "Philippine Atmospheric, Gravitational, and Astronomical Services   Administration",
    ],
    answer: 0,
  },
  {
    question:
      "15.  What are the three factors necessary for a tropical cyclone to form?",
    options: [
      "100 degrees of warmer water, surface level high pressure, upper level low pressure",
      "80 degrees of warmer water, surface level low pressure, upper level high pressure",
      "80 degrees of warmer water, surface level high pressure, upper level low pressure",
      "100 degrees of warmer water, surface level low pressure, upper level high pressure",
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
