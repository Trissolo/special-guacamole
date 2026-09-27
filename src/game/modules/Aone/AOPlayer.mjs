import AOCharacterAttributes from "./AOPlayerAttributes.mjs";

export default class AOPlayer
{
    attrAry = new Uint8Array(Object.keys(AOCharacterAttributes).length);

    constructor()
    {

    }

    get fo()
    {
        return this.attrAry[AOCharacterAttributes.STRENGTH];
    }
}


/*
const CharacterAttributes = {
  "STRENGTH": 0,
  "INTELLIGENCE": 1,
  "DEXTERITY": 2,
  "LUCK": 3,
  "CONSTITUTION": 4,
  "CHARM": 5
};

class AOPlayer {
  // Allocate exactly enough 8-bit slots for our attributes
  #attrAry = new Uint8Array(Object.keys(CharacterAttributes).length);

  constructor() {
    this.#attrAry.fill(16); // Default all stats to 16
  }

  // --- PRIVATE GETTERS ---
  // These internal getters isolate the array indices from the rest of the class logic
  get #strength() { return this.#attrAry[CharacterAttributes.STRENGTH]; }
  get #constitution() { return this.#attrAry[CharacterAttributes.CONSTITUTION]; }
  get #dexterity() { return this.#attrAry[CharacterAttributes.DEXTERITY]; }

  // --- PUBLIC GETTERS ---
  // Your public API. Notice how we can fix the STRENGTH bug cleanly here.
  get st() {
    return this.#strength; 
  }

  get cn() {
    return this.#constitution;
  }

  // Example of the advantage: We can calculate a public compound stat 
  // (like Max Weight Capacity) without exposing the raw strength value.
  get maxCarryWeight() {
    return this.#strength * 5; 
  }
  
  // Example combat logic using internal private getters
  takeDamage(amount) {
    // Constitution reduces damage internally, completely hidden from the outside world
    const actualDamage = Math.max(1, amount - Math.floor(this.#constitution / 4));
    console.log(`Player takes ${actualDamage} damage.`);
  }
}

const player = new AOPlayer();
console.log(player.st);             // Output: 16 (Correctly pulls Strength)
console.log(player.maxCarryWeight); // Output: 80
player.takeDamage(20);              // Output: "Player takes 16 damage."

*/

// setter!
// const CharacterAttributes = {
//   "STRENGTH": 0,
//   "INTELLIGENCE": 1,
//   "DEXTERITY": 2,
//   "LUCK": 3,
//   "CONSTITUTION": 4,
//   "CHARM": 5
// };

// class AOPlayer {
//   #attrAry = new Uint8Array(Object.keys(CharacterAttributes).length);
  
//   // Game rules constants
//   #MAX_STAT_CAP = 100;
//   #MIN_STAT_CAP = 10;

//   constructor() {
//     this.#attrAry.fill(16); // Default stats to 16
//   }

//   // --- PRIVATE GETTERS ---
//   get #strength() { return this.#attrAry[CharacterAttributes.STRENGTH]; }
//   get #constitution() { return this.#attrAry[CharacterAttributes.CONSTITUTION]; }

//   // --- PRIVATE SETTERS ---
//   // This is where we safely clamp values so your Uint8Array never overflows 
//   // or violates your RPG's design rules.
//   set #strength(value) {
//     this.#attrAry[CharacterAttributes.STRENGTH] = Math.max(this.#MIN_STAT_CAP, Math.min(value, this.#MAX_STAT_CAP));
//   }

//   set #constitution(value) {
//     this.#attrAry[CharacterAttributes.CONSTITUTION] = Math.max(this.#MIN_STAT_CAP, Math.min(value, this.#MAX_STAT_CAP));
//   }

//   // --- PUBLIC GETTERS (Read-Only API) ---
//   get st() { return this.#strength; }
//   get cn() { return this.#constitution; }

//   // --- PUBLIC MUTATOR METHODS ---
//   // The outside world uses these intent-driven methods to modify stats safely.
  
//   /**
//    * Permanently increases a stat when leveling up
//    */
//   trainStrength(points) {
//     console.log(`Training strength by +${points}...`);
//     // Uses the private setter internally
//     this.#strength += points; 
//   }

//   /**
//    * Simulates a debuff (like poison or curses) reducing stats
//    */
//   inflictCurse() {
//     console.log("A dark curse weakens your resolve! (-10 Constitution)");
//     this.#constitution -= 10;
//   }
// }

// // --- Verification ---
// const player = new AOPlayer();
// console.log(`Initial Strength: ${player.st}`); // Output: 16

// // 1. Normal modification via public method
// player.trainStrength(5);
// console.log(`After training: ${player.st}`); // Output: 21

// // 2. Testing the clamping protection in the private setter
// player.trainStrength(500); 
// console.log(`Max capped Strength: ${player.st}`); // Output: 100 (Safely capped!)

// // 3. Testing the floor limit protection
// player.inflictCurse();
// console.log(`Cursed Constitution: ${player.cn}`); // Output: 10 (Safely hit the floor cap of 10)

// // 4. External safety check
// // player.st = 99; // Error or Silently Ignored (no public setter exists!)
