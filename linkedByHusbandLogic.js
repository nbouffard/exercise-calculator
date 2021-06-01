// to check that the select work
const onSelectChange = (index) => {
  console.log(
    `new selected value for select ${index}:`,
    document.getElementsByTagName("select")[index].value
  );
};

// initialize empty arrays that we will populate later
let lightInput = [];
let moderateInput = [];
let highInput = [];

const exerciseIntensity = ["Light", "Moderate", "High"];

const exerciseDuration = [10, 20, 30, 40, 50, 60];

const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// these are your methods, re-usasble within your project
const calculateTime = (inputArray) => {
  return inputArray.reduce((sum, time) => {
    return sum + time;
  }, 0);
};

const getResults = (passedArray) => {
  const results = [];
  for (i = 0; i < exerciseIntensity.length; i++) {
    results.push(
      `You have done ${exerciseIntensity[i]} exercise for ${passedArray[i]} minutes this week!\n\n`
    );
  }
  return results.join('');
};

// when a method returns a boolean, it's a good convention to have it named isSomething or hasWhatever
const hasValue = (index) =>
  !!document.getElementsByTagName("select")[index].value;

// the function that runs when the button is clicked
const submitData = () => {
  /* we populate the light/moderate/highInputs array that we defined as empty above.
   we used the indexes (21 select, 3 for each day). If you changed the order of the select
   it would break and as a result using classes or Ids would make more sense but for the
   purpose of the project we are fine with select */
  [0, 3, 6, 9, 12, 15, 18].forEach((index) => {
    lightInput.push(
      hasValue(index)
        ? parseInt(document.getElementsByTagName("select")[index].value, 10)
        : 0
    );
  });

  [1, 4, 7, 10, 13, 16, 19].forEach((index) => {
    moderateInput.push(
      hasValue(index)
        ? parseInt(document.getElementsByTagName("select")[index].value, 10)
        : 0
    );
  });

  [2, 5, 8, 11, 14, 17, 20].forEach((index) => {
    highInput.push(
      hasValue(index)
        ? parseInt(document.getElementsByTagName("select")[index].value, 10)
        : 0
    );
  });

  // we run all that you wrote and at the end of it, populate the HTML of a div.
  const lightTime = calculateTime(lightInput);
  const moderateTime = calculateTime(moderateInput);
  const highTime = calculateTime(highInput);

  const resultsArray = [lightTime, moderateTime, highTime];
  const results = getResults(resultsArray);
  document.getElementById("results").innerHTML = results;
};