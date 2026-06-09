let healt=100;


const wave = [
    // --- FAZA 1: WPROWADZENIE (Rundy 1-5) ---
    {
        enemies: [{ type: "goblin", count: 5, hp: 100, playerDamage: 2 }], 
        reward: 10
    },
    {
        enemies: [
            { type: "goblin", count: 8, hp: 110, playerDamage: 2 },
            { type: "orc", count: 2, hp: 250, playerDamage: 5 } 
        ],
        reward: 25
    },
    {
        enemies: [
            { type: "goblin", count: 12, hp: 120, playerDamage: 2 },
            { type: "fast_goblin", count: 4, hp: 70, playerDamage: 1 } 
        ],
        reward: 40
    },
    {
        enemies: [
            { type: "orc", count: 5, hp: 270, playerDamage: 5 },
            { type: "fast_goblin", count: 8, hp: 75, playerDamage: 1 }
        ],
        reward: 50
    },
    {
        enemies: [
            { type: "goblin", count: 15, hp: 130, playerDamage: 2 },
            { type: "orc", count: 6, hp: 300, playerDamage: 5 },
            { type: "armored_orc", count: 1, hp: 600, playerDamage: 15 } 
        ],
        reward: 65
    },

    // --- FAZA 2: ROZGRZEWKA (Rundy 6-10) ---
    {
        enemies: [{ type: "fast_goblin", count: 18, hp: 85, playerDamage: 1 }],
        reward: 75
    },
    {
        enemies: [
            { type: "orc", count: 10, hp: 330, playerDamage: 5 },
            { type: "armored_orc", count: 3, hp: 650, playerDamage: 15 }
        ],
        reward: 90
    },
    {
        enemies: [
            { type: "goblin", count: 20, hp: 150, playerDamage: 2 },
            { type: "shaman", count: 2, hp: 200, playerDamage: 4 }
        ],
        reward: 110
    },
    {
        enemies: [
            { type: "fast_goblin", count: 15, hp: 95, playerDamage: 1 },
            { type: "armored_orc", count: 6, hp: 700, playerDamage: 15 }
        ],
        reward: 130
    },
    {
        enemies: [
            { type: "orc", count: 12, hp: 360, playerDamage: 5 },
            { type: "shaman", count: 4, hp: 230, playerDamage: 4 },
            { type: "golem", count: 1, hp: 1500, playerDamage: 25 } 
        ],
        reward: 160
    },

    // --- FAZA 3: ŚRODEK GRY (Rundy 11-15) ---
    {
        enemies: [{ type: "goblin", count: 35, hp: 180, playerDamage: 2 }],
        reward: 180
    },
    {
        enemies: [
            { type: "fast_goblin", count: 25, hp: 110, playerDamage: 1 },
            { type: "orc", count: 15, hp: 400, playerDamage: 5 }
        ],
        reward: 200
    },
    {
        enemies: [
            { type: "armored_orc", count: 10, hp: 800, playerDamage: 15 },
            { type: "shaman", count: 5, hp: 260, playerDamage: 4 }
        ],
        reward: 230
    },
    {
        enemies: [
            { type: "golem", count: 3, hp: 1800, playerDamage: 25 },
            { type: "fast_goblin", count: 20, hp: 120, playerDamage: 1 }
        ],
        reward: 260
    },
    {
        enemies: [
            { type: "troll", count: 5, hp: 1200, playerDamage: 10 },
            { type: "orc", count: 20, hp: 450, playerDamage: 5 }
        ],
        reward: 300
    },

    // --- FAZA 4: ZAAWANSOWANA (Rundy 16-20) ---
    {
        enemies: [
            { type: "armored_orc", count: 15, hp: 950, playerDamage: 15 },
            { type: "troll", count: 8, hp: 1400, playerDamage: 10 }
        ],
        reward: 350
    },
    {
        enemies: [{ type: "fast_goblin", count: 50, hp: 150, playerDamage: 1 }],
        reward: 400
    },
    {
        enemies: [
            { type: "golem", count: 6, hp: 2200, playerDamage: 25 },
            { type: "shaman", count: 8, hp: 320, playerDamage: 4 }
        ],
        reward: 450
    },
    {
        enemies: [
            { type: "troll", count: 12, hp: 1600, playerDamage: 10 },
            { type: "armored_orc", count: 12, hp: 1100, playerDamage: 15 }
        ],
        reward: 520
    },
    {
        enemies: [
            { type: "boss_knight", count: 1, hp: 8000, playerDamage: 50 }, 
            { type: "orc", count: 25, hp: 550, playerDamage: 5 }
        ],
        reward: 650
    },

    // --- FAZA 5: ENDGAME (Rundy 21-25) ---
    {
        enemies: [
            { type: "goblin", count: 40, hp: 250, playerDamage: 2 },
            { type: "fast_goblin", count: 40, hp: 180, playerDamage: 1 },
            { type: "shaman", count: 10, hp: 400, playerDamage: 4 }
        ],
        reward: 800
    },
    {
        enemies: [
            { type: "golem", count: 10, hp: 3000, playerDamage: 25 },
            { type: "troll", count: 15, hp: 2000, playerDamage: 10 }
        ],
        reward: 1000
    },
    {
        enemies: [
            { type: "armored_orc", count: 30, hp: 1400, playerDamage: 15 },
            { type: "boss_knight", count: 2, hp: 10000, playerDamage: 50 }
        ],
        reward: 1200
    },
    {
        enemies: [
            { type: "fast_goblin", count: 80, hp: 220, playerDamage: 2 }, 
            { type: "golem", count: 8, hp: 3500, playerDamage: 25 }
        ],
        reward: 1500
    },
    {
        enemies: [
            { type: "orc", count: 30, hp: 800, playerDamage: 5 },
            { type: "troll", count: 20, hp: 2500, playerDamage: 10 },
            { type: "boss_dragon", count: 1, hp: 35000, playerDamage: 100 }
        ],
        reward: 5000
    }
];


const sciezka = [
    { c: 1, r: 5 },  
    { c: 4, r: 5 },  
    { c: 4, r: 3 },  
    { c: 7, r: 3 },  
    { c: 7, r: 6 },  
    { c: 4, r: 6 },  
    { c: 4, r: 7 },  
    { c: 12, r: 7 }, 
    { c: 12, r: 5 }, 
    { c: 9, r: 5 },  
    { c: 9, r: 4 },  
    { c: 12, r: 4 }, 
    { c: 12, r: 2 }, 
    { c: 14, r: 2 }  
];

let krok=0;

setInterval( ()=>{
    if(krok<sciezka.length){
        


        krok++;
    }


},500)
