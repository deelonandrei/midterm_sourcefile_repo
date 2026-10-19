// Heroes Class
class Heroes {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    // Calculate the average score
    getAve() {
        let sum = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return sum / this.scores.length;
    }

    // Determine the letter grade
    getLetterGrade() {
        let average = this.getAve();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}


// Test Data
const heroData = [
    { name: "Invinsible Woman", scores: [85, 90, 92] },
    { name: "The Thing", scores: [70, 75, 68] },
    { name: "Mr Fantastic", scores: [95, 98, 92] },
    { name: "Human Torch", scores: [55, 60, 58] }
];


// Convert data into Heroes instances
const heroes = [];

for (let i = 0; i < heroData.length; i++) {
    heroes.push(
        new Heroes(heroData[i].name, heroData[i].scores)
    );
}


// Analyze the heroes
function analyzeClass(heroes) {
    let classSum = 0;
    let topHero = null;
    let highestAverage = 0;

    console.log("------- HERO REPORT -------");

    for (let i = 0; i < heroes.length; i++) {
        let hero = heroes[i];
        let average = hero.getAve();
        let grade = hero.getLetterGrade();

        console.log(
            `${hero.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
        );

        classSum += average;

        if (average > highestAverage) {
            highestAverage = average;
            topHero = hero;
        }
    }

    let classAverage = classSum / heroes.length;

    console.log("-----------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Hero: ${topHero.name} with ${highestAverage.toFixed(1)}`);
}


// Run the analyzer
analyzeClass(heroes);