// creating an array to store the different alien 
// ship objects: 

let alienShipList = []; 

// This is the number of alien ships requested in the prompt. 
// we are initializing a variable to hold this value instead of hardcoding it 
// into the for loop below
let numberOfAlienShips = 6; 

// **The alien ships** should each have the following *ranged* properties determined randomly:
//  hull - between `3` and `6`
//  firepower - between `2` and `4`
// accuracy - between `.6` and `.8`

const hullMin = 3; 
const hullMax = 6; 

const firepowerMin = 2; 
const firepowerMax = 4; 

const accuracyMin = 0.6; 
const accuracyMax = 0.8; 

// create a class to serve as a template for the 
// alien ship objects, since there are six of them:

class newShip { //class names have to be capitalized 
    constructor (name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}

// **Your spaceship, the USS Assembly** should have the following properties:
//  **hull** - `20`
//  **firepower** - `5`
//  **accuracy** - `.7`

// we can go ahead and create the player's ship from the newShip Class.
// This can be hardcoded as it's specified in the prompt: 

let USSAssembly = new newShip("USS Assembly", 20, 5, 0.7)

// getRandomIntInclusive was copied directly from the internet. I have never 
// used this function before, so I am putting it in my code to understand the concept. 
// Because this is my first time using it, I don't know how to rewrite it in my own way. 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
} 

//this is a dedicated function for the accuracy, since it is a fraction
function getRandomAccuracy(min, max) {
    return  Math.random() * (max - min) + min; // The maximum is inclusive and the minimum is inclusive
} 

// creating a for loop that will create six alien ships, 
// adding each one to the alienShipList[] with every 
// iteration 

for (let i = 1; i <= numberOfAlienShips; i++) {

    //putting getRandomIntInclusive(min, max) passes those values to the newShip class
    let newAlienShip = new newShip("Alien Ship " + i, getRandomIntInclusive(hullMin, hullMax), getRandomIntInclusive(firepowerMin, firepowerMax), getRandomAccuracy(accuracyMin, accuracyMax))

    // this adds the new alien ship to the ship list array
    alienShipList.push(newAlienShip)
}

// As of these  Console.log, the code is functional: 

// console.log(USSAssembly)
// console.log(alienShipList)



//   ************************************************
//   *******   BELOW HERE IS THE GAME LOGIC    ******
//   ************************************************

/** GAME INSTRUCTIONS: 
 * 
 * 
 * - You attack the first alien ship
 * 
-If the ship survives, it attacks you

- If you survive, you attack the ship again

- If it survives, it attacks you again

- Etc.
- If you destroy the ship, you have the option to **attack** the next ship or to **retreat**

- If you retreat, the game is over, perhaps leaving the game open for further developments or options.

- You win the game if you destroy all of the aliens.

- You lose the game if you are destroyed.

 */

// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }

// Let's start with a for loop that will iterate through the alienShipList[] (unless we lose): 

for (let j = 0; j <= alienShipList.length - 1; j++) {
    
    // hitDetector lets us console.log a contingency message incase neither ship score a hit
    let = hitDetector = false; 

    // this while loop will have the ships attack eachother while they are still alive
    while (alienShipList[j].hull > 0 && USSAssembly.hull > 0) {
        // the ship is alive if the above conditional is true. 
        // here is the attack logic:

        // this tests if the alien ship hit you
        if (Math.random() < alienShipList[j].accuracy) {
        	console.log('You have been hit!');
            USSAssembly.hull = USSAssembly.hull - alienShipList[j].firepower;

            //this lets us know the ship scored a hit
            return hitDetector = true;
        }
        
        // this tests if you hit the alien ship
        if (Math.random() < USSAssembly.accuracy) {
        	console.log('The USS Assembly hit the enemy!');
            alienShipList[j].hull = alienShipList[j].hull - USSAssembly.firepower;
            
            //this lets us know the ship scored a hit
            return hitDetector = true;
        }

        // incase neither ship scores a hit, hit detector remains false and this message is printed 
        if (hitDetector == false) {
            console.log("Neither ship scored a hit. Re-engaging!")
        }
    }

    //setting up some if statements to test if either of the ships have been destroyed inside of the while loop 
    if (alienShipList[j].hull <= 0) {
        console.log(alienShipList[j].name + ' has been destroyed.'); 
    }

    if (USSAssembly.hull <= 0 ) {
        console.log('The USS Assembly has been destroyed. RIP.')
        break; 
    }

    //This lets the player decide to attack or retreat: 
    let decision = prompt("Do you want to attack or retreat? Enter 'a' for attack, or 'r' for retreat: "); 
    if (decision = 'a') {
        console.log("The game continues.  Another ship approaches!")
    } 
    if (decision = 'r') {
        console.log("USS Assembly has retreated. Game Over.")
        break; 
    }
}

