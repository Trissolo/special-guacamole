## *"one-roll"* Margin of Success combat mechanic

### The Math in Action
To see how this *homebrew* **one-roll combat** mechanic works (without the typo), let's look at an example:

Imagine you are attacking an enemy with a **DC of 12** using a **sword (Base Damage = 3)**.

Your Total Roll | Compared to DC (12) | Damage Calculation | Result
---|---|---|---
Roll a 10 | 2 points *under* | (3 - 2 = 1 ) | **Glancing Hit**: Deals 1 damage.
Roll a 9 | 3 points *under* | (3 - 3 = 0) | **Miss**: Reduced to 0.
Roll a 12 | Exactly *meets DC* | (3 + 0 = 3) | **Clean Hit**: Deals standard 3 damage.
Roll a 15 | 3 points *ove*r | (3 + 3 = 6) | **Great Hit**: Deals 6 damage.

This type of mechanic is called a *"Margin of Success"* or *"Degrees of Success"* system. While **DC** is a massive industry standard, the specific calculation this Redditor created is their own custom homebrew variant designed to eliminate a separate damage roll!


It handles the math symmetrically around the **DC** (fixing their "FC" typo) and automatically reduces the damage to zero (a miss) if the glancing blow is too weak.

```
const WEAPONS = {
    DAGGER:
    {
        name: "Dagger",
        damage: 2
    },
    SWORD:
    {
        name: "Sword",
        damage: 3
    },
    AXE:
    {
        name: "Axe",
        damage: 4
    }
};

// 2. Character Class managing stats, weapons, and actions
class Character
{
    /**
     * @param {string} name - Name of the combatant
     * @param {number} attackBonus - The flat modifier added to their d20 attack rolls
     * @param {Object} weapon - A weapon object from the WEAPONS list
     */
    constructor(name, attackBonus, weapon)
    {
        this.name = name;
        this.attackBonus = attackBonus;
        this.weapon = weapon;
    }

    /**
     * Simulates rolling a 20-sided die.
     * @returns {number} A random integer between 1 and 20.
     */
    rollD20()
    {
        return Math.floor(Math.random() * 20) + 1;
    }

    /**
     * Executes a single attack against a target's Difficulty Class (DC).
     * Calculates the Margin of Success (MoS) using the Reddit user's mechanic.
     * @param {number} targetDC - The enemy's defense threshold.
     * @returns {Object} Full breakdown of the attack attempt.
     */
    attack(targetDC)
    {
        const rawRoll = this.rollD20();
        const totalRoll = rawRoll + this.attackBonus;
        const margin = totalRoll - targetDC;

        // Reddit system math: final = base weapon damage + margin
        let finalDamage = this.weapon.damage + margin;

        // Rule: If damage is reduced to 0 or below, it results in a miss
        if (finalDamage <= 0)
        {
            return {
                attacker: this.name,
                weapon: this.weapon.name,
                rawRoll,
                totalRoll,
                margin,
                damageDealt: 0,
                outcome: "🛡️ Miss (Glancing blow dealt no damage)"
            };
        }

        // Classify narrative performance based on accuracy margin
        let outcome = "Clean Hit";
        if (margin > 0) outcome = "🩸 Great Hit!";
        if (margin < 0) outcome = "💥 Glancing Hit";

        return {
            attacker: this.name,
            weapon: this.weapon.name,
            rawRoll,
            totalRoll,
            margin,
            damageDealt: finalDamage,
            outcome
        };
    }
}

// ============================================================================
// SIMULATION DEMONSTRATION
// ============================================================================

// Create two distinct heroes
const hero1 = new Character("Valerie the Swift", 4, WEAPONS.DAGGER); // +4 to hit, Base 2 Dagger
const hero2 = new Character("Garrick the Bold", 2, WEAPONS.AXE); // +2 to hit, Base 4 Axe

// Set an enemy armor threshold (DC)
const ENEMY_DC = 14;

console.log(`=== The Heroes confront a Goblin Raider (DC ${ENEMY_DC}) ===\n`);

// Run 3 simulated rounds for both heroes to see the variety of outcomes
for (let round = 1; round <= 3; round++)
{
    console.log(`--- ROUND ${round} ---`);

    [hero1, hero2].forEach(hero =>
    {
        const log = hero.attack(ENEMY_DC);
        const sign = log.margin >= 0 ? "+" : "";

        console.log(
            `${log.attacker} swings their ${log.weapon}!\n` +
            `  • Roll: d20(${log.rawRoll}) + Bonus(${hero.attackBonus}) = Total: ${log.totalRoll}\n` +
            `  • Margin vs DC ${ENEMY_DC}: [${sign}${log.margin}]\n` +
            `  • Result: ${log.outcome}\n` +
            `  • Damage Dealt: ${log.damageDealt} HP\n`
        );
    });
}
```


```
// ==========================================
// DEMONSTRATION (Using the Sword example: Base Damage = 3, DC = 12)
// ==========================================
const DC = 12;
const SWORD_DAMAGE = 3;
const testRolls = []; //new Array(10).fill(0);
for (let i =0; i < 20; i++)
{
   testRolls.push(i);
}

console.log(testRolls);
console.log("--- BATTLE LOG ---");
testRolls.forEach(roll => {
  const result = MarginOfSuccessCombat.resolveAttack(roll, DC, SWORD_DAMAGE);
  
  console.log(`
Roll: ${result.roll} vs DC ${result.dc} (Margin: ${result.margin >= 0 ? '+' : ''}${result.margin})
Result: ${result.outcome}
Damage Dealt: ${result.damageDealt} points
-----------------------------------`);
});
```