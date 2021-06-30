//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    //scores will be an array of test results.
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  //As our candidates complete more tests, we need to be able to add the new scores to their records.
  // Create an addScore method in CrewCandidate. The function must take a new score as a parameter. Code this function OUTSIDE of constructor. (If you need to review the syntax, revisit Assigning Class Methods).
  addScore(newScore) {
    //When passed a score, the function adds the value to this.scores with the push array method.
    this.scores.push(newScore);
  }

  //Now that we can add scores to our candidates' records, we need to be able to evaluate their fitness for our astronaut program. 
  //Let's add two more methods to CrewCandidate---one to average the test scores and the other to indicate if the candidate should be admitted.
  //Add an average() method outside constructor. The function does NOT need a parameter.
  average() {
    //To find the average, add up the entries from this.scores, then divide the sum by the number of scores.
    let total = 0;
    for(let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }
    //To make the average easier to look at, round it to 1 decimal place, then return the result from the function
    return Math.round(total / this.scores.length * 10) / 10;
    }
  
  
  //Add a status() method to CrewCandidate. The method returns a string (Accepted, Reserve, Probationary, or Rejected) depending on a candidate's average.
  status() {

    //The status method requires the average test score, which can be called as a parameter OR from inside the function. That's correct - methods can call other methods inside a class! Just remember to use the this keyword
    let average = this.average();

    //Candidates with averages at or above 90% are automatically accepted to our training program. Reserve candidates average between 80 - 89%, while probationary candidates average between 70 - 79%. Averages below 70% lead to a rejection notice.
    if (average >= 90) {
      return "Accepted";
    } else if (average >= 80) {
      return "Reserve";
    } else if (average >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  } 
}

//Create objects for the following candidates:
//Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
// Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
// Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62
let candidate1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Use console.log for each object to verify that your class correctly assigns the key/value pairs.
console.log(candidate1);
console.log(candidate2);
console.log(candidate3);

//Test out your new method by adding a score of 83 to Bubba's record, then print out the new score array with objectName.scores
candidate1.addScore(83);
console.log(candidate1.scores);
console.log(candidate1.average());
//Verify your code by evaluating and printing Merry's average test score (92.7)
console.log(candidate2.average());
// Once status has a candidate's average score, evaluate that score, and return the appropriate string.
console.log(candidate2.status());

// Test the status method on each of the three candidates. Use a template literal to print out '___ earned an average test score of ___% and has a status of ___.'
console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}`);
console.log(`${candidate2.name} earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status()}`);
console.log(`${candidate3.name} earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status()}`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testsToReserve = 0;
let testsToAccepted = 0;
while (candidate3.status() !== "Accepted"){
    if (candidate3.status() === "Probationary") {
    testsToReserve += 1;
  }
    testsToAccepted += 1;
  candidate3.addScore(100);
}

console.log("Tests till Reserve : " + testsToReserve);
console.log("Tests till Accepted : " + testsToAccepted);