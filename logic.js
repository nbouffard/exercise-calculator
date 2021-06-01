console.log('\n--- exercice calculator ---\n\n');

// write your code

const exerciseIntensity = ['Light', 'Moderate', 'High'];

const exerciseDuration = [10, 20, 30, 40, 50, 60];

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const lightInput = [10, 20, 30, 20, 20, 20, 10];

const moderateInput = [40, 20, 0, 0, 30, 0, 10];

const highInput = [0, 0, 30, 30, 0, 0, 30];

const calculateTime = (inputArray) => {
    return inputArray.reduce((sum, time) => {
      return sum + time;
  }, 0)
}

const lightTime = calculateTime(lightInput);
const moderateTime = calculateTime(moderateInput);
const highTime = calculateTime(highInput);

const resultsArray = [lightTime, moderateTime, highTime]


const results = () => {
    for (i = 0; i < exerciseIntensity.length; i++) {
       console.log(` You have done ${exerciseIntensity[i]} exercise for ${resultsArray[i]} minutes this week!`)
      }
    }



console.log(results());





