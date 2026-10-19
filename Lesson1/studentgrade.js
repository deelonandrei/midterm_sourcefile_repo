//Scores Values
let scores = [95, 62, 80, 74, 100]; 

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

//Students Scores
console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log("");

//Identifying Grades
for (let i = 0; i < scores.length; i++) {

    if(scores[i] >= 90) {
        console.log("Student " + (i + 1) + ": " + (scores[i]) + " - Passed" );
    }
    else if(scores[i] >= 80) {
        console.log("Student " + (i + 1) + ": " + (scores[i]) + " - Passed" );
    }
    else if (scores[i] >= 75) {
        console.log("Student " + (i + 1) + ": " + (scores[i]) + " - Passed" );
    } 
    else {
        console.log("Student " + (i + 1) + ": " + (scores[i]) + " - Failed" );
    }

    //Passed or Failed
    if (scores[i] >= 75) {
        passed = passed + 1;
    }
    else {
        failed = failed + 1;
    }

    //Calculating the total of the grades
    total = total + scores[i];

    //Fixing Highest to Lowest
    if (scores[i] > highest) {
        highest = scores[i];
    }
    
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

//Calculating the average score
let average = total / scores.length;

//Printing the Outputs
console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);