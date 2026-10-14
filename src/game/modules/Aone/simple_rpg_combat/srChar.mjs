import GUI from "./newgui.mjs";

class Character
{
    /**
     * @param {string} name - Character name
     * @param {number} maxHp - Maximum health points
     * @param {number} accuracy - Base chance to hit (1-100)
     * @param {number} defense - Base chance to evade/mitigate (1-100)
     * @param {number} attackPower - Base damage dealt on a normal hit
     * @param {number} armor - Flat damage reduction for normal hits
     * @param {number} speed - Used to determine turn order (initiative)
     */
    constructor(name, maxHp, accuracy, defense, attackPower, armor, speed) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp; 
        this.accuracy = accuracy;
        this.defense = defense;
        this.attackPower = attackPower;
        this.armor = armor;
        this.speed = speed;

        this.summary();
    }
    summary()
    {
        GUI.print(this.name, 28)
        const props = ["maxHp", "accuracy", "defense", "attackPower", "armor", "speed"];
        let i = 0;
        for (const prop of props)
        {
            const interchange = i++ & 1;

            GUI.print(`${(prop).padEnd(13, " ")}`, interchange? 6:9, `${this[prop]}`, interchange? 6:9);
        }
    }

    isAlive()
    {
        return this.hp > 0;
    }

    /**
     * Rolls for initiative at the start of combat.
     * Uses base speed plus a dynamic d20 random modifier.
     * @returns {number} Final initiative score
     */
    rollInitiative()
    {
        const diceRoll = Math.floor(Math.random() * 20) + 1;
        return this.speed + diceRoll;
    }
}

function resolveAttack(attacker, defender)
{
    if (!attacker.isAlive() || !defender.isAlive()) return null;

    const baseThreshold = attacker.accuracy - defender.defense;

    const hitThreshold = Math.max(5, Math.min(95, baseThreshold));

    const criticalRange = Math.max(1, Math.floor(hitThreshold * 0.10));
    
    const parryRange = hitThreshold + 20;
    
    const roll = Math.floor(Math.random() * 100) + 1;

    GUI.print(`${attacker.accuracy} - ${defender.defense}`, ` baseThreshold: `, 5, `${baseThreshold}`, 21);
    GUI.print(` criticalRange:  `, 8, `${criticalRange}`, 17);
    GUI.print(` hitThreshold:  `, 0, `${hitThreshold}`, 14);
    GUI.print(` parryRange:   `, 2, `${parryRange}`, 16);

    let outcome = '';
    let mitigatedDamage = 0;

    if (roll <= criticalRange)
    {
        outcome = 'CRITICAL HIT';
        mitigatedDamage = attacker.attackPower * 2;
    }
    else if (roll <= hitThreshold)
    {
        outcome = 'NORMAL WOUND';
        mitigatedDamage = Math.max(1, attacker.attackPower - defender.armor);
    }
    else if (roll <= parryRange)
    {
        outcome = 'PARRY';
    }
    else
    {
        outcome = 'MISS';
    }

    defender.hp = Math.max(0, defender.hp - mitigatedDamage);

    GUI.print(`⚔️ ${attacker.name}`, 3, ` attacks ${defender.name} -> Roll: `, `${roll}`, 14, ` (${outcome}). `);
    GUI.drawBar(criticalRange, hitThreshold, parryRange, roll);

    if (mitigatedDamage > 0)
    {
        GUI.print(`Dealt ${mitigatedDamage} damage. `);

        if (outcome === 'NORMAL WOUND' && defender.armor > 0)
        {
            GUI.print(`(${defender.armor} absorbed by armor). `);
        }

        GUI.print(defender.isAlive() ? `[${defender.name}: ${defender.hp}/${defender.maxHp} HP]` : `💀 ${defender.name} falls!`);
    }
    else
    {
        GUI.print(`${defender.name} took no damage.`);
    }

    //GUI.print(logMessage);

    return defender.isAlive();
}



/**
 * Runs a complete turn-based combat simulation until a character dies.
 * @param {Character} char1 
 * @param {Character} char2 
 */
function runCombatSimulation(char1, char2)
{
    //GUI.print(`========================================`, 11);
    GUI.print(`💥 COMBAT ENGAGED: ${char1.name} vs ${char2.name} 💥`, 11);
    //GUI.print(`========================================\n`, 11);

    // 1. Roll Initiative at the very beginning of the fight
    const init1 = char1.rollInitiative();
    const init2 = char2.rollInitiative();

    GUI.print(`🎲 Initiative Rolls:`);
    GUI.print(`   - ${char1.name} rolled ${init1} (Speed: ${char1.speed})`);
    GUI.print(`   - ${char2.name} rolled ${init2} (Speed: ${char2.speed})`);

    // Arrange fighters in order. If tied, char1 defaults to going first.
    const turnOrder = init1 >= init2 ? [char1, char2] : [char2, char1];
    GUI.print(`👉 Turn Order: ${turnOrder[0].name} goes first!\n`);

    let round = 1;

    // 2. Main combat loop
    while (char1.isAlive() && char2.isAlive())
    {
        GUI.print(`--- ⏳ Round ${round} ---`);

        // First attacker acts
        resolveAttack(turnOrder[0], turnOrder[1]);

        // Second attacker acts only if they survived the first blow
        if (turnOrder[1].isAlive())
        {
            resolveAttack(turnOrder[1], turnOrder[0]);
        }

        GUI.addBR(); ////print(""); // Blank line between rounds
        round++;
    }

    // 3. Declare Winner
    const winner = char1.isAlive() ? char1 : char2;
    GUI.print(`========================================`, 14);
    GUI.print(`🏆 VICTORY: ${winner.name} wins the battle!`, 14);
    GUI.print(`========================================`, 14);
}

// ==========================================
// TEST SCENARIO
// ==========================================

// Swift Rogue: Fragile and weak, but very fast (High Speed) and precise (High Accuracy)
const rogue = new Character("Rogue", 70, 90, 25, 18, 2, 14);

// Heavy Warrior: Slow (Low Speed), hard to miss, but heavily armored and hits like a truck
const warrior = new Character("Warrior", 120, 65, 10, 28, 8, 4);

// Run the automated simulation
runCombatSimulation(rogue, warrior);
