// uniqueitems.txt
const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

let uniqueItemID = Math.max(...uniqueitems.rows.map((row) => row['*ID']));

uniqueitems.rows.forEach((row) => {

  /*
  =====================================================================================
  ====================================== WEAPONS ======================================
  =====================================================================================
  */

  // Rename unused Azurewrath
  if (row["index"] === "Azurewrath" && row["enabled"] == 0) {
    row["index"] = "Azurewrath Unused"
  }



  /*
  =========================================================================================
  ====================================== BODY ARMORS ======================================
  =========================================================================================
  */

  // Tyrael's Might
  if (row["index"] === "Tyrael's Might") {

    // Allow rerolling multiple times in same game
    row["nolimit"] = 1;

    // replace slain monster rip with sockets
    row["prop4"] = "sock";
    row["min4"] = 1;
    row["max4"] = 3;

    // Dmg to demons
    row["min5"] = 220;
    row["max5"] = 300;

    // FRW
    row["min7"] = 45;
    row["max7"] = 45;

    // Salvation aura instead of all-res
    row["prop8"] = "aura";
    row["par8"] = "Salvation";
    row["min8"] = 2;
    row["max8"] = 3;

    // all skills
    row["prop10"] = "allskills";
    row["min10"] = 1;
    row["max10"] = 2;

    // magic find
    row["prop11"] = "oskill";
    row["par11"] = "Teleport";
    row["min11"] = 1;
    row["max11"] = 1;
  }

  // Templar's Might
  if (row["index"] == "Templar's Might") {

    // FHR
    row["min2"] = 30;
    row["max2"] = 30;

    // replace stamina with rep-dur
    row["prop4"] = "rep-dur";
    row["par4"] = 25;

    // all attributes instead of str/vit
    row["prop5"] = "all-stats";
    row["min5"] = 10;
    row["max5"] = 15;

    // Add Might Aura
    row["prop6"] = "aura";
    row["par6"] = "Might";
    row["min6"] = 6;
    row["max6"] = 8;

    // replace Paladin Off skill with 1-2 allskills
    row["prop7"] = "allskills";
    row["min7"] = 1;
    row["max7"] = 1;

    // requirement
    row["prop8"] = "ease";
    row["min8"] = -40;
    row["max8"] = -40;
  }

  // Arkaine's Valor
  if (row["index"] === "Arkaine's Valor") {

    // +150 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 180;

    // +30% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +1 - 2 to All Skills
    row["prop3"] = "allskills";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 2;

    // Damage Reduced by 10 - 15
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // +0 to Vitality (Based on Character Level)
    row["prop5"] = "vit/lvl";
    row["par5"] = "8";

    // Socketed (1 - 2)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 2;

    // Indestructible
    row["prop7"] = "indestruct";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Fire Resist +30 - 50%
    row["prop8"] = "res-fire";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 50;

    // +0 to Life (Based on Character Level)
    row["prop9"] = "hp/lvl";
    row["par9"] = "16";
  }

  // Leviathan
  if (row["index"] === "Leviathan") {

    // +170 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 200;

    // +100 - 150 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // Damage Reduced by 15 - 25%
    row["prop3"] = "red-dmg%";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // +40 - 50 to Strength
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 50;

    // Indestructible
    row["prop5"] = "indestruct";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // 20% Chance of Crushing Blow
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // All Resistances +15 - 20
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

  }

  // Steel Carapice
  if (row["index"] === "Steel Carapice") {

    // +190 - 220% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 190;
    row["max1"] = 220;

    // +30% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // Damage Reduced by 9 - 14
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 9;
    row["max3"] = 14;

    // Cold Resist +40 - 60%
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 60;

    // Regenerate Mana 10 - 15%
    row["prop5"] = "regen-mana";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // Repairs 1 durability in 0 seconds
    row["prop6"] = "rep-dur";
    row["par6"] = "5";
    row["min6"] = "";
    row["max6"] = "";

    // 15% Chance to cast level 15 Iron Maiden when struck
    row["prop7"] = "gethit-skill";
    row["par7"] = "Iron Maiden";
    row["min7"] = 15;
    row["max7"] = 15;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

    // 15 - 20% Damage Taken Goes To Mana
    row["prop9"] = "dmg-to-mana";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 20;

  }

  // The Gladiator's Bane
  if (row["index"] === "The Gladiator's Bane") {

    // +150 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // Magic Damage Reduced by 15 - 20
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // Damage Reduced by 10 - 15%
    row["prop3"] = "red-dmg%";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // Damage +50 - 70
    row["prop4"] = "dmg";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 70;

    // Poison Length Reduced by 50%
    row["prop5"] = "res-pois-len";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Durability: 103 of 103
    row["prop6"] = "dur";
    row["par6"] = "";
    row["min6"] = 103;
    row["max6"] = 103;

    // +30% Faster Hit Recovery
    row["prop7"] = "balance1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // +175 - 200 Defense
    row["prop8"] = "ac";
    row["par8"] = "";
    row["min8"] = 175;
    row["max8"] = 200;

    // Cannot Be Frozen
    row["prop9"] = "nofreeze";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

  }

  // Corpsemourn
  if (row["index"] === "Corpsemourn") {

    // +8 to Strength
    row["prop1"] = "str";
    row["par1"] = "";
    row["min1"] = 8;
    row["max1"] = 8;

    // +10 to Vitality
    row["prop2"] = "vit";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // Cold Resist +35%
    row["prop3"] = "res-cold";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // 8% Chance to cast level 13 Iron Maiden when struck
    row["prop4"] = "gethit-skill";
    row["par4"] = "76";
    row["min4"] = 8;
    row["max4"] = 13;

    // +150 - 180% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 180;

    // +2 - 3 to Summoning Spells (Necro) [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = 8;
    row["min6"] = 2;
    row["max6"] = 3;

    // Level 5 Corpse Explosion (40/40 Charges)
    row["prop7"] = "charged";
    row["par7"] = "74";
    row["min7"] = 40;
    row["max7"] = 5;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Black Hades
  if (row["index"] === "Black Hades") {

    // -2 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = -2;
    row["max1"] = -2;

    // +200 - 250 to Attack Rating against Demons
    row["prop2"] = "att-demon";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 250;

    // Half Freeze Duration
    row["prop3"] = "half-freeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Socketed (1 - 3)
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 3;

    // +140 - 200% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 200;

    // +130 - 160% Damage to Demons
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 130;
    row["max6"] = 160;

    // +20% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

  }

  // Que-Hegan's Wisdon
  if (row["index"] === "Que-Hegan's Wisdon") {

    // +20% Faster Cast Rate
    row["prop1"] = "cast1";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // +10 - 15 to Mana after each Kill
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // Magic Damage Reduced by 6 - 10
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 10;

    // +15 to Energy
    row["prop4"] = "enr";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +20% Faster Hit Recovery
    row["prop5"] = "balance1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +140 - 160% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 140;
    row["max6"] = 160;

    // +1 to All Skills
    row["prop7"] = "allskills";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Fire Resist +15 - 25%
    row["prop8"] = "res-fire";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 25;

  }

  // Atma's Wail
  if (row["index"] === "Atma's Wail") {

    // +15 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // Replenish Life +10
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // Increase Maximum Mana 15%
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +30% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +2 Defense (Based on Character Level)
    row["prop5"] = "ac/lvl";
    row["par5"] = "16";
    row["min5"] = "";
    row["max5"] = "";

    // Durability: 50 of 50
    row["prop6"] = "dur";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // +120 - 160% Enhanced Defense
    row["prop7"] = "ac%";
    row["par7"] = "";
    row["min7"] = 120;
    row["max7"] = 160;

    // 0,5% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop8"] = "mag%/lvl";
    row["par8"] = "4";
    row["min8"] = "";
    row["max8"] = "";

    // +10% Faster Cast Rate
    row["prop9"] = "cast1";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 10;

  }

  // Toothrow
  if (row["index"] === "Toothrow") {

    // Attacker Takes Damage of 300 - 400
    row["prop1"] = "thorns";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 400;

    // +150 - 250 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 250;

    // +10 - 15 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 40% Chance of Open Wounds
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Fire Resist +15%
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +160 - 220% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 160;
    row["max6"] = 220;

    // Durability: 15 of 15
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // -40% Target Defense
    row["prop8"] = "reduce-ac";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 40;

  }

  // Spiritforge
  if (row["index"] === "Spiritforge") {

    // +4 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 4;
    row["max1"] = 4;

    // +1,5 to Life (Based on Character Level)
    row["prop2"] = "hp/lvl";
    row["par2"] = "12";
    row["min2"] = "";
    row["max2"] = "";

    // Adds 80 - 100 Fire Damage
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 80;
    row["max3"] = 100;

    // Fire Resist +20 - 25%
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 25;

    // +120 - 160% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 120;
    row["max5"] = 160;

    // +15 to Strength
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // +1 - 2 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Skin of the Flayerd One
  if (row["index"] === "Skin of the Flayerd One") {

    // Repairs 1 durability in 10 seconds
    row["prop1"] = "rep-dur";
    row["par1"] = "10";
    row["min1"] = "";
    row["max1"] = "";

    // Replenish Life +15 - 25
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 25;

    // Durability: 30 of 30
    row["prop3"] = "dur";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 5 - 7% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 7;

    // +150 - 190% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 190;

    // Attacker Takes Damage of 15
    row["prop6"] = "thorns";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // +3 - 5 Life after each Kill
    row["prop7"] = "heal-kill";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 5;

    // 20% Chance of Open Wounds
    row["prop8"] = "openwounds";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Heavenly Garb
  if (row["index"] === "Heavenly Garb") {

    // +100% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // All Resistances +10 - 20
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // Regenerate Mana 25%
    row["prop3"] = "regen-mana";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +15 to Energy
    row["prop4"] = "enr";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +50% Damage to Undead
    row["prop5"] = "dmg-undead";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // +100 to Attack Rating against Undead
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // Level 2 - 3 Meditation Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "Meditation";
    row["min7"] = 2;
    row["max7"] = 3;

  }

  // Blinkbats Form
  if (row["index"] === "Blinkbats Form") {

    // +50 Defense vs. Missile
    row["prop1"] = "ac-miss";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // +10% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +25 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +10 to Minimum Fire Damage
    row["prop4"] = "fire-min";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +20 to Maximum Fire Damage
    row["prop5"] = "fire-max";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +40% Faster Hit Recovery
    row["prop6"] = "balance1";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // +1 to Fire Skills
    row["prop7"] = "fireskill";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

  }

  // The Centurion
  if (row["index"] === "The Centurion") {

    // +30 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +50 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Damage Reduced by 2
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // +15 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +15 to Mana
    row["prop5"] = "mana";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +15 Maximum Stamina
    row["prop6"] = "stam";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // Replenish Life +5
    row["prop7"] = "regen";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

    // 25% Slower Stamina Drain
    row["prop8"] = "stamdrain";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    // +15% Faster Run/Walk
    row["prop9"] = "move1";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

  }

  // Darkglow
  if (row["index"] === "Darkglow") {

    // +40 - 50 to Attack Rating
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 50;

    // +5% to Maximum All Resist
    row["prop2"] = "res-all-max";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +3 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

    // +50 Defense vs. Melee
    row["prop4"] = "ac-hth";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // All Resistances +10 - 15
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // +70 - 100% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 100;

    // Adds 50 - 70 Fire/Lightning/Cold Damage
    row["prop7"] = "dmg-elem";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 70;

  }

  // Hawkmail
  if (row["index"] === "Hawkmail") {

    // +80 - 100% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 80;
    row["max1"] = 100;

    // +15% to Maximum Cold Resist
    row["prop2"] = "res-cold-max";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // Cold Resist +15%
    row["prop3"] = "res-cold";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // Cannot Be Frozen
    row["prop4"] = "nofreeze";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +20% Faster Run/Walk
    row["prop5"] = "move1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +3 to Raven ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Raven";
    row["min6"] = 3;
    row["max6"] = 3;

  }

  // Venomsward
  if (row["index"] === "Venomsward") {

    // +15% to Maximum Poison Resist
    row["prop1"] = "res-pois-max";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // Poison Length Reduced by 50%
    row["prop2"] = "res-pois-len";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Poison Resist +90%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 90;
    row["max3"] = 90;

    // +2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // +60 - 100% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 100;

    // -15 - 20% to Enemy Poison Resistance
    row["prop6"] = "pierce-pois";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 20;

    // +15 - 20% to Poison Skill Damage
    row["prop7"] = "extra-pois";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

  }

  // Sparking Mail
  if (row["index"] === "Sparking Mail") {

    // +75 - 85% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 75;
    row["max1"] = 85;

    // Adds 1 - 80 Lightning Damage
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 80;

    // Attacker Takes Lightning Damage of 30 - 40
    row["prop3"] = "light-thorns";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 40;

    // Lightning Resist +30%
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // -10 - 15% to Enemy Lightning Resistance
    row["prop5"] = "pierce-ltng";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // +10 - 15% to Lightning Skill Damage
    row["prop6"] = "extra-ltng";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

  }

  // Iceblink
  if (row["index"] === "Iceblink") {

    // Freezes Target +1
    row["prop1"] = "freeze";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // Cold Resist +30%
    row["prop2"] = "res-cold";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +4 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // Magic Damage Reduced by 1
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +70 - 80% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 70;
    row["max5"] = 80;

    // -10 - 15% to Enemy Cold Resistance
    row["prop6"] = "pierce-cold";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // +10 - 15% to Cold Skill Damage
    row["prop7"] = "extra-cold";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Boneflesh
  if (row["index"] === "Boneflesh") {

    // 5% Life stolen per hit
    row["prop1"] = "lifesteal";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // +100 - 120% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 120;

    // +70 - 80 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 70;
    row["max3"] = 80;

    // 25% Chance of Open Wounds
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 10% Chance to cast level 10 Bone Armor when struck
    row["prop5"] = "gethit-skill";
    row["par5"] = "Bone Armor";
    row["min5"] = 10;
    row["max5"] = 10;

    // Level 10 Bone Prison (20/20 Charges)
    row["prop6"] = "charged";
    row["par6"] = "Bone Prison";
    row["min6"] = 20;
    row["max6"] = 10;

  }

  // Rockfleece
  if (row["index"] === "Rockfleece") {

    // Requirements --10%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -10;
    row["max1"] = -10;

    // +100 - 130% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 130;

    // Damage Reduced by 10 - 15%
    row["prop3"] = "red-dmg%";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // Damage Reduced by 5
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 5;

    // +10 - 15 to Strength
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // +2 Defense (Based on Character Level)
    row["prop6"] = "ac/lvl";
    row["par6"] = "16";
    row["min6"] = "";
    row["max6"] = "";

    // 10 - 15% Increased Chance of Blocking
    row["prop7"] = "block";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Rattlecage
  if (row["index"] === "Rattlecage") {

    // Socketed (2)
    row["prop1"] = "sock";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +90 - 110 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 90;
    row["max2"] = 110;

    // 25% Chance of Crushing Blow
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +200 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 200;

    // -20% Target Defense
    row["prop5"] = "reduce-ac";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +30 - 40 to Life
    row["prop6"] = "hp";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 40;

  }

  // Goldskin
  if (row["index"] === "Goldskin") {

    // +120 - 150% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 120;
    row["max1"] = 150;

    // All Resistances +35
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // Attacker Takes Damage of 40 - 50
    row["prop3"] = "thorns";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 50;

    // +2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 150 - 200% Extra Gold from Monsters
    row["prop5"] = "gold%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 200;

    // 0,5% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop6"] = "mag%/lvl";
    row["par6"] = "4";
    row["min6"] = "";
    row["max6"] = "";

  }

  // Victors Silk
  if (row["index"] === "Victors Silk") {

    // 5% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // +1 to All Skills
    row["prop2"] = "allskills";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // +2 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // +100 - 120% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 120;

    // Socketed (1 - 2)
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 2;

    // +25% Faster Run/Walk
    row["prop6"] = "move1";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }

  // The Spirit Shroud
  if (row["index"] === "The Spirit Shroud") {

    // Cannot Be Frozen
    row["prop1"] = "nofreeze";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +1 to All Skills
    row["prop2"] = "allskills";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Magic Damage Reduced by 7 - 11
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 11;

    // Replenish Life +10
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +150% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 150;

    // Level 5 Oak Sage (18/18 Charges)
    row["prop6"] = "charged";
    row["par6"] = "Oak Sage";
    row["min6"] = 18;
    row["max6"] = 5;

    // Level 5 Heart of Wolverine (18/18 Charges)
    row["prop7"] = "charged";
    row["par7"] = "Heart of Wolverine";
    row["min7"] = 18;
    row["max7"] = 5;

    // Level 5 Spirit of Barbs (18/18 Charges)
    row["prop8"] = "charged";
    row["par8"] = "Spirit of Barbs";
    row["min8"] = 18;
    row["max8"] = 5;

  }

  // Ironpelt
  if (row["index"] === "Ironpelt") {

    // Durability: 125 of 125
    row["prop1"] = "dur";
    row["par1"] = "";
    row["min1"] = 125;
    row["max1"] = 125;

    // +25 to Life
    row["prop2"] = "hp";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // Magic Damage Reduced by 10 - 16
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 16;

    // Damage Reduced by 10 - 15%
    row["prop4"] = "red-dmg%";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // +3 Defense (Based on Character Level)
    row["prop5"] = "ac/lvl";
    row["par5"] = "24";
    row["min5"] = "";
    row["max5"] = "";

    // +50 - 100% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 100;

    // +5 - 8 to Iron Skin
    row["prop7"] = "oskill";
    row["par7"] = "Iron Skin";
    row["min7"] = 5;
    row["max7"] = 8;

  }

  // Crow Caw
  if (row["index"] === "Crow Caw") {

    // 35% Chance of Open Wounds
    row["prop1"] = "openwounds";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // +150 - 180% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 180;

    // +15 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +15% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +20% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +1 - 2 to Druid Skill Levels
    row["prop6"] = "dru";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 2;

  }




  /*
  =====================================================================================
  ====================================== SHIELDS ======================================
  =====================================================================================
  */

  // Darkforge Spawn
  if (row["index"] === "Darkforge Spawn") {

    // +140 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 180;

    // +30 - 40% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 40;

    // Increase Maximum Mana 25%
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +2 - 3 to Summoning Spells (Necro) [Class only] Skills
    row["prop4"] = "skilltab";
    row["par4"] = 8;
    row["min4"] = 2;
    row["max4"] = 3;

    // +2 - 3 to Poison and Bone Skills [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = 7;
    row["min5"] = 2;
    row["max5"] = 3;

    // +2 - 3 to Curses [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = 6;
    row["min6"] = 2;
    row["max6"] = 3;

    // Socketed (2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

  }

  // Boneflame
  if (row["index"] === "Boneflame") {

    // +120 - 150% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 120;
    row["max1"] = 150;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 15% Chance to cast level 20 Fire Wall when struck
    row["prop3"] = "gethit-skill";
    row["par3"] = "Fire Wall";
    row["min3"] = 15;
    row["max3"] = 20;

    // +2 - 3 to Necromancer Skill Levels
    row["prop4"] = "nec";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 3;

    // All Resistances +20 - 30
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // +3 - 5 to Bone Spear ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Bone Spear";
    row["min6"] = 3;
    row["max6"] = 5;

  }

  // Umbral Disk
  if (row["index"] === "Umbral Disk") {

    // Hit Blinds Target +1
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +10 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +30 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +20 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // -2 to Light Radius
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -2;
    row["max5"] = -2;

    // +40 - 50% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 50;

    // 30% Increased Chance of Blocking
    row["prop7"] = "block";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // Durability: 10 - 15 of 10
    row["prop8"] = "dur";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // +5 - 10% to Experience Gained
    row["prop9"] = "addxp";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 10;

  }

  // Stormguild
  if (row["index"] === "Stormguild") {

    // Magic Damage Reduced by 3
    row["prop1"] = "red-mag";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // Lightning Resist +25%
    row["prop2"] = "res-ltng";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +30 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // Adds 1 - 60 Lightning Damage
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 60;

    // +50 - 60% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 60;

    // 30% Increased Chance of Blocking
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // Attacker Takes Lightning Damage of 40
    row["prop7"] = "light-thorns";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // Durability: 10 - 15 of 10
    row["prop8"] = "dur";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Swordback Hold
  if (row["index"] === "Swordback Hold") {

    // Attacker Takes Damage of 2 (Based on Character Level)
    row["prop1"] = "thorns/lvl";
    row["par1"] = "16";
    row["min1"] = "";
    row["max1"] = "";

    // 20% Increased Chance of Blocking
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 50% Chance of Open Wounds
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // Level 5 Thorns Aura When Equipped
    row["prop4"] = "aura";
    row["par4"] = "Thorns";
    row["min4"] = 5;
    row["max4"] = 5;

    // +30 - 60% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 60;

    // +10 Defense
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

  }

  // Bverrit Keep
  if (row["index"] === "Bverrit Keep") {

    // +30 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // Fire Resist +75%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 75;
    row["max2"] = 75;

    // +10 - 15 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // Magic Damage Reduced by 5
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 5;

    // +80 - 120% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 120;

    // 10% Increased Chance of Blocking
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // Durability: 80 - 100 of 80
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 80;
    row["max7"] = 100;

    // Damage Reduced by 10%
    row["prop8"] = "red-dmg%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // Wall of the Eyeless
  if (row["index"] === "Wall of the Eyeless") {

    // +5 - 8 to Mana after each Kill
    row["prop1"] = "mana-kill";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 8;

    // 3% Mana stolen per hit
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // +20 - 30% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 30;

    // Poison Resist +35%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // +30 - 40% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 40;

    // +10 Defense
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // 15% Chance to cast level 7 Bone Armor when struck
    row["prop7"] = "gethit-skill";
    row["par7"] = "Bone Armor";
    row["min7"] = 15;
    row["max7"] = 7;

  }

  // The Ward
  if (row["index"] === "The Ward") {

    // +40 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // Magic Damage Reduced by 2
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 2;

    // +10 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 10% Increased Chance of Blocking
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +100% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // All Resistances +30 - 50
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // +10% Faster Hit Recovery
    row["prop7"] = "balance1";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

  }

  // Visceratuant
  if (row["index"] === "Visceratuant") {

    // +1 - 2 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 2;

    // +30% Faster Block Rate
    row["prop2"] = "block1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 30% Increased Chance of Blocking
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +100 - 150% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // Attacker Takes Lightning Damage of 30
    row["prop5"] = "light-thorns";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // Lightning Resist +10 - 15%
    row["prop6"] = "res-ltng";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // +10 - 15% to Lightning Skill Damage
    row["prop7"] = "extra-ltng";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Mosers Blessed Circle
  if (row["index"] === "Mosers Blessed Circle") {

    // All Resistances +25
    row["prop1"] = "res-all";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // 25% Increased Chance of Blocking
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // Socketed (2)
    row["prop3"] = "sock";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // +180 - 220% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 180;
    row["max4"] = 220;

    // +30% Faster Block Rate
    row["prop5"] = "block1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +5 - 8% to Maximum All Resist
    row["prop6"] = "res-all-max";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 8;

  }

  // Stormchaser
  if (row["index"] === "Stormchaser") {

    // Adds 1 - 99 Lightning Damage
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 99;

    // 20% Increased Chance of Blocking
    row["prop2"] = "block";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // Half Freeze Duration
    row["prop3"] = "half-freeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Lightning Resist +50%
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // +150 to Attack Rating
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 150;

    // +160 - 220% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 160;
    row["max6"] = 220;

    // +15% Faster Block Rate
    row["prop7"] = "block1";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // 25% Chance to cast level 12 Blizzard when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "59";
    row["min8"] = 25;
    row["max8"] = 12;

    // 25% Chance to cast level 12 Tornado when struck
    row["prop9"] = "gethit-skill";
    row["par9"] = "245";
    row["min9"] = 25;
    row["max9"] = 12;

  }

  // Tiamat's Rebuke
  if (row["index"] === "Tiamat's Rebuke") {

    // Adds 27 - 53 Cold Damage
    row["prop1"] = "dmg-cold";
    row["par1"] = "150";
    row["min1"] = 27;
    row["max1"] = 53;

    // Adds 35 - 95 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 95;

    // Adds 1 - 120 Lightning Damage
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 120;

    // All Resistances +25 - 35
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 35;

    // +140 - 200% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 200;

    // 15% Chance to cast level 12 Frost Nova when struck
    row["prop6"] = "gethit-skill";
    row["par6"] = "44";
    row["min6"] = 15;
    row["max6"] = 12;

    // 15% Chance to cast level 12 Nova when struck
    row["prop7"] = "gethit-skill";
    row["par7"] = "48";
    row["min7"] = 15;
    row["max7"] = 12;

    // 15% Chance to cast level 12 Hydra when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "62";
    row["min8"] = 15;
    row["max8"] = 12;

    // Durability: 40 of 40
    row["prop9"] = "dur";
    row["par9"] = "";
    row["min9"] = 40;
    row["max9"] = 40;

    // Socketed (1)
    row["prop10"] = "sock";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1;

  }

  // Lance Guard
  if (row["index"] === "Lance Guard") {

    // +50 - 70 to Life
    row["prop1"] = "hp";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 70;

    // +30% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 15% Damage Taken Goes To Mana
    row["prop3"] = "dmg-to-mana";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // Attacker Takes Damage of 99
    row["prop4"] = "thorns";
    row["par4"] = "";
    row["min4"] = 99;
    row["max4"] = 99;

    // +70 - 120% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 70;
    row["max5"] = 120;

    // 20% Deadly Strike
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +10% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

  }

  // Kerke's Sanctuary
  if (row["index"] === "Kerke's Sanctuary") {

    // Damage Reduced by 11 - 16
    row["prop1"] = "red-dmg";
    row["par1"] = "";
    row["min1"] = 11;
    row["max1"] = 16;

    // Magic Damage Reduced by 14 - 18
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 14;
    row["max2"] = 18;

    // Replenish Life +15
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +180 - 240% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 180;
    row["max4"] = 240;

    // Durability: 100 of 100
    row["prop5"] = "dur";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 30% Increased Chance of Blocking
    row["prop6"] = "block";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // All Resistances +20 - 30
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 30;

    // Level 4 Defiance Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Defiance";
    row["min8"] = 4;
    row["max8"] = 4;

  }

  // Lidless Wall
  if (row["index"] === "Lidless Wall") {

    // +1 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +1 - 2 to All Skills
    row["prop2"] = "allskills";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 2;

    // +20 - 35% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 35;

    // +5 - 7 to Mana after each Kill
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 7;

    // +80 - 130% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 130;

    // +15 to Energy
    row["prop6"] = "enr";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // Increase Maximum Mana 15%
    row["prop7"] = "mana%";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

  }

  // Radimant's Sphere
  if (row["index"] === "Radimant's Sphere") {

    // Adds 80 Poison Damage Over 4 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "100";
    row["min1"] = 204;
    row["max1"] = 204;

    // 10% Chance to cast level 15 Poison Nova when struck
    row["prop2"] = "gethit-skill";
    row["par2"] = "92";
    row["min2"] = 10;
    row["max2"] = 15;

    // Poison Resist +75%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 75;
    row["max3"] = 75;

    // +160 - 200% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 160;
    row["max4"] = 200;

    // 20% Increased Chance of Blocking
    row["prop5"] = "block";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +20% Faster Block Rate
    row["prop6"] = "block1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +5 to Poison Explosion
    row["prop7"] = "oskill";
    row["par7"] = "83";
    row["min7"] = 5;
    row["max7"] = 5;

    // Durability: 20 of 20
    row["prop8"] = "dur";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

    // -15 - 20% to Enemy Poison Resistance
    row["prop9"] = "pierce-pois";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 20;

    // +20% Faster Cast Rate
    row["prop10"] = "cast1";
    row["par10"] = "";
    row["min10"] = 20;
    row["max10"] = 20;

    // Monster Poison Immunity is Sundered
    row["prop11"] = "pierce-immunity-poison";
    row["par11"] = "";
    row["min11"] = 300;
    row["max11"] = 300;

  }

  // Blackoak Shield
  if (row["index"] === "Blackoak Shield") {

    // +0,5 to Dexterity (Based on Character Level)
    row["prop1"] = "dex/lvl";
    row["par1"] = "4";
    row["min1"] = "";
    row["max1"] = "";

    // +160 - 200% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 160;
    row["max2"] = 200;

    // Absorbs Cold Damage 0,625 (Based on Character Level)
    row["prop3"] = "abs-cold/lvl";
    row["par3"] = "5";
    row["min3"] = "";
    row["max3"] = "";

    // 4% Chance to cast level 5 Weaken when struck
    row["prop4"] = "gethit-skill";
    row["par4"] = "72";
    row["min4"] = 4;
    row["max4"] = 5;

    // Durability: 45 of 45
    row["prop5"] = "dur";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 45;

    // +1,25 to Life (Based on Character Level)
    row["prop6"] = "hp/lvl";
    row["par6"] = "10";
    row["min6"] = "";
    row["max6"] = "";

    // +50% Faster Block Rate
    row["prop7"] = "block1";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // Half Freeze Duration
    row["prop8"] = "half-freeze";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // -15% to Enemy Cold Resistance
    row["prop9"] = "pierce-cold";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

    // +2 to Druid Skill Levels
    row["prop10"] = "dru";
    row["par10"] = "";
    row["min10"] = 2;
    row["max10"] = 2;

  }

  // Spike Thorn
  if (row["index"] === "Spike Thorn") {

    // +120 - 150% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 120;
    row["max1"] = 150;

    // Attacker Takes Damage of 4 (Based on Character Level)
    row["prop2"] = "thorns/lvl";
    row["par2"] = "32";
    row["min2"] = "";
    row["max2"] = "";

    // Durability: 250 of 250
    row["prop3"] = "dur";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 250;

    // +30% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // Damage Reduced by 15 - 20%
    row["prop5"] = "red-dmg%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

    // Socketed (1 - 3)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 3;

    // Level 10 Thorns Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "Thorns";
    row["min7"] = 10;
    row["max7"] = 10;

    // 10% Bonus to Attack Rating
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // Medusa's Gaze
  if (row["index"] === "Medusa's Gaze") {

    // +150 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 180;

    // Slows Target by 20%
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 12% Chance to cast level 6 Decrepify when struck
    row["prop3"] = "gethit-skill";
    row["par3"] = "Decrepify";
    row["min3"] = 12;
    row["max3"] = 6;

    // 5 - 9% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 9;

    // 10% Chance to cast level 35 Nova when struck
    row["prop5"] = "gethit-skill";
    row["par5"] = "Nova";
    row["min5"] = 10;
    row["max5"] = 35;

    // Cold Resist +60 - 80%
    row["prop6"] = "res-cold";
    row["par6"] = "";
    row["min6"] = 60;
    row["max6"] = 80;

    // Requirements --40%
    row["prop7"] = "ease";
    row["par7"] = "";
    row["min7"] = -40;
    row["max7"] = -40;

    // Level 3 - 5 Fanaticism Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Fanaticism";
    row["min8"] = 3;
    row["max8"] = 5;

  }

  // Headhunter's Glory
  if (row["index"] === "Headhunter's Glory") {

    // +320 - 420 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 320;
    row["max1"] = 420;

    // +300 - 350 Defense vs. Missile
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 300;
    row["max2"] = 350;

    // Poison Resist +30 - 40%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 40;

    // Socketed (1 - 3)
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 3;

    // Fire Resist +20 - 30%
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // +7 - 10 Life after each Kill
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 7;
    row["max6"] = 10;

    // 0,75% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop7"] = "mag%/lvl";
    row["par7"] = "6";
    row["min7"] = "";
    row["max7"] = "";

    // +25% Faster Run/Walk
    row["prop8"] = "move1";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Spirit Ward
  if (row["index"] === "Spirit Ward") {

    // +130 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 130;
    row["max1"] = 180;

    // Cold Absorb 6 - 11%
    row["prop2"] = "abs-cold";
    row["par2"] = "";
    row["min2"] = 6;
    row["max2"] = 11;

    // All Resistances +30 - 40
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 40;

    // 20 - 30% Increased Chance of Blocking
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // +25% Faster Block Rate
    row["prop5"] = "block1";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // 5% Chance to cast level 8 Fade when struck
    row["prop6"] = "gethit-skill";
    row["par6"] = "Fade";
    row["min6"] = 5;
    row["max6"] = 8;

    // Requirements --20%
    row["prop7"] = "ease";
    row["par7"] = "";
    row["min7"] = -20;
    row["max7"] = -20;

    // +1 to Oak Sage
    row["prop8"] = "oskill";
    row["par8"] = "Oak Sage";
    row["min8"] = 1;
    row["max8"] = 1;

    // Socketed (1 - 2)
    row["prop9"] = "sock";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 2;

  }

  // Alma Negra
  if (row["index"] === "Alma Negra") {

    // +180 - 210% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 210;

    // +30% Faster Block Rate
    row["prop2"] = "block1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +2 to Paladin Skill Levels
    row["prop3"] = "pal";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // 20% Increased Chance of Blocking
    row["prop4"] = "block";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Magic Damage Reduced by 5 - 9
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 9;

    // 75 - 100% Bonus to Attack Rating
    row["prop6"] = "att%";
    row["par6"] = "";
    row["min6"] = 75;
    row["max6"] = 100;

    // +75 - 100% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 75;
    row["max7"] = 100;

    // Socketed (2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

  }

  // Dragonscale
  if (row["index"] === "Dragonscale") {

    // +170 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 200;

    // +15 - 20 Fire Absorb
    row["prop2"] = "abs-fire%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // +5 - 10% to Maximum Fire Resist
    row["prop3"] = "res-fire-max";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 10;

    // +15 - 25 to Strength
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // Adds 211 - 371 Fire Damage
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 211;
    row["max5"] = 371;

    // +25 to Hydra
    row["prop6"] = "oskill";
    row["par6"] = "Hydra";
    row["min6"] = 25;
    row["max6"] = 25;

    // +15% to Fire Skill Damage
    row["prop7"] = "extra-fire";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // +5 to Holy Fire ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "Holy Fire";
    row["min8"] = 5;
    row["max8"] = 5;

    // +1 to Fire Mastery
    row["prop9"] = "oskill";
    row["par9"] = "Fire Mastery";
    row["min9"] = 1;
    row["max9"] = 1;

    // Fire Resist +40 - 50%
    row["prop10"] = "res-fire";
    row["par10"] = "";
    row["min10"] = 40;
    row["max10"] = 50;

    // -20% to Enemy Fire Resistance
    row["prop11"] = "pierce-fire";
    row["par11"] = "";
    row["min11"] = 20;
    row["max11"] = 20;

  }


  /*
  ===================================================================================
  ====================================== HELMS ======================================
  ===================================================================================
  */

  // Coif of Glory
  if (row["index"] === "Coif of Glory") {

    // Attacker Takes Lightning Damage of 21
    row["prop1"] = "light-thorns";
    row["par1"] = "";
    row["min1"] = 21;
    row["max1"] = 21;

    // Hit Blinds Target +1
    row["prop2"] = "stupidity";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Lightning Resist +15%
    row["prop3"] = "res-ltng";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +100 Defense vs. Missile
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // +10 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 15% Deadly Strike
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

  }

  // Howltusk
  if (row["index"] === "Howltusk") {

    // Magic Damage Reduced by 5
    row["prop1"] = "red-mag";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // Attacker Takes Damage of 15 - 20
    row["prop2"] = "thorns";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // +80% Enhanced Defense
    row["prop3"] = "ac%";
    row["par3"] = "";
    row["min3"] = 80;
    row["max3"] = 80;

    // 35% Damage Taken Goes To Mana
    row["prop4"] = "dmg-to-mana";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // +1 - 2 to Warcries [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = 14;
    row["min5"] = 1;
    row["max5"] = 2;

    // -15 to Monster Defense Per Hit
    row["prop6"] = "dmg-ac";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

  }

  // Undead Crown
  if (row["index"] === "Undead Crown") {

    // 5% Life stolen per hit
    row["prop1"] = "lifesteal";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // +40 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Poison Resist +50%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // Half Freeze Duration
    row["prop4"] = "half-freeze";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +30 - 60% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 60;

    // +50% Damage to Undead
    row["prop6"] = "dmg-undead";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // +50 - 100 to Attack Rating against Undead
    row["prop7"] = "att-undead";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 100;

    // +3 - 4 to Skeleton Mastery ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "69";
    row["min8"] = 3;
    row["max8"] = 4;

    // +3 - 4 to Raise Skeleton ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "70";
    row["min9"] = 3;
    row["max9"] = 4;

  }

  // Wormskull
  if (row["index"] === "Wormskull") {

    // +1 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // 5% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +10 to Mana
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // Poison Resist +25%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // Adds 80 Poison Damage Over 8 Seconds
    row["prop5"] = "dmg-pois";
    row["par5"] = "200";
    row["min5"] = 102;
    row["max5"] = 102;

    // +1 - 2 to Poison and Bone Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = 7;
    row["min6"] = 1;
    row["max6"] = 2;

  }

  // Valkiry Wing
  if (row["index"] === "Valkiry Wing") {

    // +150 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +20% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +1 - 2 to Amazon Skill Levels
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // +4 - 6 to Mana after each Kill
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 6;

    // Requirements -30%
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // +40 - 50 to Mana
    row["prop7"] = "mana";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 50;

  }

  // Blackhorn's Face
  if (row["index"] === "Blackhorn's Face") {

    // Attacker Takes Lightning Damage of 25
    row["prop1"] = "light-thorns";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // Slows Target by 20%
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // Prevent Monster Heal
    row["prop3"] = "noheal";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Lightning Absorb 20%
    row["prop4"] = "abs-ltng";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Lightning Resist +15%
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +180 - 220% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 180;
    row["max6"] = 220;

    // Adds 1 - 300 Lightning Damage
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 300;

  }

  // Crown of Thieves
  if (row["index"] === "Crown of Thieves") {

    // +25 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // 9 - 12% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 9;
    row["max2"] = 12;

    // +50 to Life
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +35 to Mana
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 35;

    // Fire Resist +33%
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 33;
    row["max5"] = 33;

    // +160 - 200% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 160;
    row["max6"] = 200;

    // 80 - 100% Extra Gold from Monsters
    row["prop7"] = "gold%";
    row["par7"] = "";
    row["min7"] = 80;
    row["max7"] = 100;

    // 30 - 40% Better Chance of Getting Magic Items
    row["prop8"] = "mag%";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 40;

  }

  // Steelshade
  if (row["index"] === "Steelshade") {

    // +100 - 130% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 130;

    // Fire Absorb 5 - 11%
    row["prop2"] = "abs-fire";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 11;

    // 4 - 8% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 8;

    // Replenish Life +10 - 18
    row["prop4"] = "regen";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 18;

    // Socketed (2)
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 2;

    // 25% Bonus to Attack Rating
    row["prop6"] = "att%";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }

  // Giantskull
  if (row["index"] === "Giantskull") {

    // +250 - 320 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 320;

    // +25 - 35 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 35;

    // 20% Chance of Crushing Blow
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Socketed (2)
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // +80 - 100% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 100;

    // Level 5 Concentration Aura When Equipped
    row["prop6"] = "aura";
    row["par6"] = "Concentration";
    row["min6"] = 5;
    row["max6"] = 5;

  }

  // Veil of Steel
  if (row["index"] === "Veil of Steel") {

    // Plus to Bone Spear
    row["prop8"] = "crush";
    row["min8"] = 15;
    row["max8"] = 20;

    // Add Enhanced damage
    row["prop9"] = "dmg%";
    row["min9"] = 70;
    row["max9"] = 90;
  }

  // Halaberd's Reign
  if (row["index"] === "Halaberd's Reign") {

    // +140 - 170% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 170;

    // +1 to Combat Masteries [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = 13;
    row["min2"] = 1;
    row["max2"] = 1;

    // +2 - 3  to Barbarian Skill Levels
    row["prop3"] = "bar";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 3;

    // +20% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Replenish Life +15 - 23
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 23;

    // +1 - 2 to Battle Orders ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Battle Orders";
    row["min6"] = 1;
    row["max6"] = 2;

    // +1 - 2 to Battle Command ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Battle Command";
    row["min7"] = 1;
    row["max7"] = 2;

    // +25% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    // 1% Bonus to Attack Rating (Based on Character Level)
    row["prop9"] = "att%/lvl";
    row["par9"] = "2";
    row["min9"] = "";
    row["max9"] = "";

    // Socketed (1-2)
    row["prop10"] = "sock";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Darksight Helm
  if (row["index"] === "Darksight Helm") {

    // -4 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = -4;
    row["max1"] = -4;

    // +2 Defense (Based on Character Level)
    row["prop2"] = "ac/lvl";
    row["par2"] = "16";
    row["min2"] = "";
    row["max2"] = "";

    // Cannot Be Frozen
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 5% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 5;

    // 6% Chance to cast level 3 Dim Vision when struck
    row["prop5"] = "gethit-skill";
    row["par5"] = "71";
    row["min5"] = 6;
    row["max5"] = 3;

    // Level 5 Cloak of Shadows (30/30 Charges)
    row["prop6"] = "charged";
    row["par6"] = "264";
    row["min6"] = 30;
    row["max6"] = 5;

    // Fire Resist +20 - 40%
    row["prop7"] = "res-fire";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 40;

    // +1 to Paladin Skill Levels
    row["prop8"] = "pal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  /*
 ===================================================================================
 ====================================== GLOVES ======================================
 ===================================================================================
 */

  // Bloodfist
  if (row["index"] === "Bloodfist") {

    // +5 to Minimum Damage
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // +40 to Life
    row["prop2"] = "hp";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +30% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +10 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +10 - 20% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 20;

    // +10% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // +1 to Sacrifice
    row["prop7"] = "oskill";
    row["par7"] = "Sacrifice";
    row["min7"] = 1;
    row["max7"] = 1;

  }

  // Venom Grip
  if (row["index"] === "Venom Grip") {

    // Poison Resist +30%
    row["prop1"] = "res-pois";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +5% to Maximum Poison Resist
    row["prop2"] = "res-pois-max";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // -10 - 15% to Enemy Poison Resistance
    row["prop3"] = "pierce-pois";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // 5% Chance of Crushing Blow
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 5;

    // 5% Life stolen per hit
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // +15 - 25 Defense
    row["prop6"] = "ac";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 25;

    // +130 - 160% Enhanced Defense
    row["prop7"] = "ac%";
    row["par7"] = "";
    row["min7"] = 130;
    row["max7"] = 160;

    // +1 to Venom
    row["prop8"] = "oskill";
    row["par8"] = "Venom";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // Gravepalm
  if (row["index"] === "Gravepalm") {

    // +10 to Energy
    row["prop1"] = "enr";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // +10 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +100 - 200% Damage to Undead
    row["prop3"] = "dmg-undead";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 200;

    // +100 - 200 to Attack Rating against Undead
    row["prop4"] = "att-undead";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 200;

    // +140 - 180% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 180;

    // +2 - 3 to Skeleton Mastery ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Skeleton Mastery";
    row["min6"] = 2;
    row["max6"] = 3;

    // +2 - 3 to Raise Skeleton ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Raise Skeleton";
    row["min7"] = 2;
    row["max7"] = 3;

    // +2 - 3 to Raise Skeletal Mage ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "Raise Skeletal Mage";
    row["min8"] = 2;
    row["max8"] = 3;

  }

  // Ghoulhide
  if (row["index"] === "Ghoulhide") {

    // +8 to Attack Rating against Undead (Based on Character Level)
    row["prop1"] = "att-und/lvl";
    row["par1"] = "16";
    row["min1"] = "";
    row["max1"] = "";

    // +2% Damage to Undead (Based on Character Level)
    row["prop2"] = "dmg-und/lvl";
    row["par2"] = "16";
    row["min2"] = "";
    row["max2"] = "";

    // 4 - 5% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 5;

    // +30 - 50 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 50;

    // +150 - 190% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 190;

    // 4 - 5% Life stolen per hit
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 5;

    // Damage Reduced by 5%
    row["prop7"] = "red-dmg%";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

  }

  // Lavagout
  if (row["index"] === "Lavagout") {

    // Fire Resist +24%
    row["prop1"] = "res-fire";
    row["par1"] = "";
    row["min1"] = 24;
    row["max1"] = 24;

    // Half Freeze Duration
    row["prop2"] = "half-freeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 10% Chance to cast level 10 Enchant on striking
    row["prop3"] = "hit-skill";
    row["par3"] = "52";
    row["min3"] = 10;
    row["max3"] = 10;

    // +20% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +150 - 200% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 200;

    // Adds 100 - 120 Fire Damage
    row["prop6"] = "dmg-fire";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 120;

    // Durability: 20 of 20
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // -10 - 15% to Enemy Fire Resistance
    row["prop8"] = "pierce-fire";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Hellmouth
  if (row["index"] === "Hellmouth") {

    // Adds 140 - 180 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 180;

    // Fire Absorb 15%
    row["prop2"] = "abs-fire";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +150 - 200% Enhanced Defense
    row["prop3"] = "ac%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // Durability: 15 of 15
    row["prop4"] = "dur";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // 10% Chance to cast level 24 Meteor on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "56";
    row["min5"] = 10;
    row["max5"] = 24;

    // 10% Chance to cast level 24 Volcano on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "Volcano";
    row["min6"] = 10;
    row["max6"] = 24;

    // -15 - 20% to Enemy Fire Resistance
    row["prop7"] = "pierce-fire";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

    // +1 - 2 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Souldrain
  if (row["index"] === "Souldrain") {

    // +90 - 120% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 90;
    row["max1"] = 120;

    // 7 - 9% Mana stolen per hit
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 7;
    row["max2"] = 9;

    // 7 - 9% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 9;

    // 8% Chance to cast level 3 Weaken on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Weaken";
    row["min4"] = 8;
    row["max4"] = 3;

    // --50 to Monster Defense Per Hit
    row["prop5"] = "dmg-ac";
    row["par5"] = "";
    row["min5"] = -50;
    row["max5"] = -50;

    // Increase Maximum Life 10 - 15%
    row["prop6"] = "hp%";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 33% Chance of Open Wounds
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 33;
    row["max7"] = 33;

  }

  // Steelrend
  if (row["index"] === "Steelrend") {

    // +170 - 210 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 210;

    // +20 - 25 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 25;

    // +70 - 100% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 70;
    row["max3"] = 100;

    // 10% Chance of Crushing Blow
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // Damage +20 - 30
    row["prop5"] = "dmg";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // Ignore Target's Defense
    row["prop6"] = "ignore-ac";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 25% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

  }


  /*
  =====================================================================================
  ====================================== BOOTS ======================================
  =====================================================================================
  */

  // Gorefoot
  if (row["index"] === "Gorefoot") {

    // Bloody (Visuals Only)
    row["prop1"] = "bloody";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 5;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // 2% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // Attacker Takes Damage of 20
    row["prop4"] = "thorns";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +12 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 12;
    row["max5"] = 12;

    // +20 - 30% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 30;

    // +3 to Leap
    row["prop7"] = "oskill";
    row["par7"] = "132";
    row["min7"] = 3;
    row["max7"] = 3;

    // 10% Chance of Open Wounds
    row["prop8"] = "openwounds";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // Treads of Cthon
  if (row["index"] === "Treads of Cthon") {

    // +30% Faster Run/Walk
    row["prop1"] = "move1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +50 Defense vs. Missile
    row["prop2"] = "ac-miss";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 50% Slower Stamina Drain
    row["prop3"] = "stamdrain";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +10 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +12 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 12;
    row["max5"] = 12;

    // +30 - 40% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 40;

    // 15 - 25% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 25;

  }

  // Tearhaunch
  if (row["index"] === "Tearhaunch") {

    // +35 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // +5 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +5 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // +20% Faster Run/Walk
    row["prop4"] = "move1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // All Resistances +10 - 15
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // +60 - 80% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 60;
    row["max6"] = 80;

    // +2 to Vigor
    row["prop7"] = "oskill";
    row["par7"] = "115";
    row["min7"] = 2;
    row["max7"] = 2;

    // +5 - 8 to all Attributes
    row["prop8"] = "all-stats";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 8;

  }

  // Infernostride
  if (row["index"] === "Infernostride") {

    // Adds 50 - 70 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 70;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +10% to Maximum Fire Resist
    row["prop3"] = "res-fire-max";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // Fire Resist +30%
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +2 to Light Radius
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 2;

    // +120 - 150% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 120;
    row["max6"] = 150;

    // 40 - 70% Extra Gold from Monsters
    row["prop7"] = "gold%";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 70;

    // +15 Defense
    row["prop8"] = "ac";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    // 15% Chance to cast level 12 Blaze when struck
    row["prop9"] = "gethit-skill";
    row["par9"] = "46";
    row["min9"] = 15;
    row["max9"] = 12;

    // +30 - 40 to Mana
    row["prop10"] = "mana";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 40;

  }

  // Waterwalk
  if (row["index"] === "Waterwalk") {

    // +100 Defense vs. Missile
    row["prop1"] = "ac-miss";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +15 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +180 - 210% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 180;
    row["max4"] = 210;

    // +45 - 65 to Life
    row["prop5"] = "hp";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 65;

    // +40 Maximum Stamina
    row["prop6"] = "stam";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // +5% to Maximum Fire Resist
    row["prop7"] = "res-fire-max";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

    // Heal Stamina Plus 50%
    row["prop8"] = "regen-stam";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

    // +1 - 2 to Cold Spells [Class only] Skills
    row["prop9"] = "skilltab";
    row["par9"] = 5;
    row["min9"] = 1;
    row["max9"] = 2;

  }

  // Sandstorm Trek
  if (row["index"] === "Sandstorm Trek") {

    // +140 - 170% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 170;

    // +20% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +20% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +0 Maximum Stamina (Based on Character Level)
    row["prop4"] = "stam/lvl";
    row["par4"] = "8";
    row["min4"] = "";
    row["max4"] = "";

    // 50% Slower Stamina Drain
    row["prop5"] = "stamdrain";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Poison Resist +40 - 70%
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 70;

    // Repairs 1 durability in 20 seconds
    row["prop7"] = "rep-dur";
    row["par7"] = "5";
    row["min7"] = "";
    row["max7"] = "";

    // +10 - 15 to Strength
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // +10 - 15 to Vitality
    row["prop9"] = "vit";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

    // Poison Length Reduced by 75%
    row["prop10"] = "res-pois-len";
    row["par10"] = "";
    row["min10"] = 75;
    row["max10"] = 75;

    // +2 to Poison and Bone Skills [Class only] Skills
    row["prop11"] = "skilltab";
    row["par11"] = 7;
    row["min11"] = 2;
    row["max11"] = 2;

  }

  // Marrowwalk
  if (row["index"] === "Marrowwalk") {

    // +170 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 200;

    // +25% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // Level 33 Bone Prison (33/33 Charges)
    row["prop3"] = "charged";
    row["par3"] = "Bone Prison";
    row["min3"] = 33;
    row["max3"] = 33;

    // Level 12 Life Tap (33/33 Charges)
    row["prop4"] = "charged";
    row["par4"] = "Life Tap";
    row["min4"] = 33;
    row["max4"] = 12;

    // Heal Stamina Plus 10%
    row["prop5"] = "regen-stam";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // Regenerate Mana 10%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // Half Freeze Duration
    row["prop7"] = "half-freeze";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +10 - 20 to Strength
    row["prop8"] = "str";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

    // +17 to Dexterity
    row["prop9"] = "dex";
    row["par9"] = "";
    row["min9"] = 17;
    row["max9"] = 17;

    // +2 - 3 to Skeleton Mastery ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "Skeleton Mastery";
    row["min10"] = 2;
    row["max10"] = 3;

    // +2 to Summoning Spells (Necro) [Class only] Skills
    row["prop11"] = "skilltab";
    row["par11"] = 8;
    row["min11"] = 2;
    row["max11"] = 2;

  }

  // Shadowdancer
  if (row["index"] === "Shadowdancer") {

    // +70 - 100% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 70;
    row["max1"] = 100;

    // +30% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +30% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +15 - 25 to Dexterity
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 25;

    // +1 - 2 to Shadow Disciplines [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = 19;
    row["min5"] = 1;
    row["max5"] = 2;

    // Requirements --20%
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = -20;
    row["max6"] = -20;

    // +1 to Assassin Skill Levels
    row["prop7"] = "ass";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

  }

  // Silkweave
  if (row["index"] === "Silkweave") {

    // +150 - 190% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 190;

    // +5 to Mana after each Kill
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +200 Defense vs. Missile
    row["prop3"] = "ac-miss";
    row["par3"] = "";
    row["min3"] = 200;
    row["max3"] = 200;

    // Increase Maximum Mana 10%
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +30% Faster Run/Walk
    row["prop5"] = "move1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +10 - 15 to Energy
    row["prop6"] = "enr";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // Cold Resist +15 - 20%
    row["prop7"] = "res-cold";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

  }


  /*
  =====================================================================================
  ====================================== BELTS ======================================
  =====================================================================================
  */

  // Lenyms Cord
  if (row["index"] === "Lenyms Cord") {

    // +15 to Mana
    row["prop1"] = "mana";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // Regenerate Mana 30%
    row["prop2"] = "regen-mana";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // All Resistances +5
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // +1 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +9% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 9;
    row["max5"] = 9;

  }

  // Snakecord
  if (row["index"] === "Snakecord") {

    // Adds 22 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 75;
    row["max1"] = 75;

    // Poison Resist +25%
    row["prop2"] = "res-pois";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +10 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // +20 - 30% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // Replenish Life +5
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // Poison Length Reduced by 50%
    row["prop6"] = "res-pois-len";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // -5 - 10% to Enemy Poison Resistance
    row["prop7"] = "pierce-pois";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

  }

  // Nightsmoke
  if (row["index"] === "Nightsmoke") {

    // All Resistances +10
    row["prop1"] = "res-all";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // 50% Damage Taken Goes To Mana
    row["prop2"] = "dmg-to-mana";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +20 to Mana
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Damage Reduced by 5
    row["prop4"] = "red-dmg";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 5;

    // +15 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +30 - 50% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // 10 - 15% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Bladebuckle
  if (row["index"] === "Bladebuckle") {

    // Attacker Takes Damage of 50
    row["prop1"] = "thorns";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // +40 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Damage Reduced by 6
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 6;

    // +5 - 8 to Strength
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 8;

    // +10 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +80 - 100% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 80;
    row["max6"] = 100;

    // +30% Faster Hit Recovery
    row["prop7"] = "balance1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // 5 - 8% Increased Chance of Blocking
    row["prop8"] = "block";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 8;

  }

  // Snowclash
  if (row["index"] === "Snowclash") {

    // 5% Chance to cast level 20 Blizzard when struck
    row["prop1"] = "gethit-skill";
    row["par1"] = "59";
    row["min1"] = 5;
    row["max1"] = 20;

    // Cold Absorb 15%
    row["prop2"] = "abs-cold";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +15% to Maximum Cold Resist
    row["prop3"] = "res-cold-max";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // Adds 100 - 120 Cold Damage
    row["prop4"] = "dmg-cold";
    row["par4"] = "75";
    row["min4"] = 100;
    row["max4"] = 120;

    // +130 - 170% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 130;
    row["max5"] = 170;

    // +2 to Blizzard ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "59";
    row["min6"] = 2;
    row["max6"] = 2;

    // +3 to Glacial Spike ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "55";
    row["min7"] = 3;
    row["max7"] = 3;

    // +2 to Chilling Armor ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "60";
    row["min8"] = 2;
    row["max8"] = 2;

    // Cold Resist +15%
    row["prop9"] = "res-cold";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

    // +15% to Cold Skill Damage
    row["prop10"] = "extra-cold";
    row["par10"] = "";
    row["min10"] = 15;
    row["max10"] = 15;

  }

  // Gloomstrap
  if (row["index"] === "Gloomstrap") {

    // -3 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = -3;
    row["max1"] = -3;

    // Increase Maximum Mana 15%
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 5% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // +120 - 150% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 120;
    row["max4"] = 150;

    // +15 to Vitality
    row["prop5"] = "vit";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // Regenerate Mana 15%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // +15% Faster Hit Recovery
    row["prop7"] = "balance1";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // +75 - 125 to Attack Rating
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 75;
    row["max8"] = 125;

    // Fire Resist +15 - 20%
    row["prop9"] = "res-fire";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 20;

  }

  // Nosferatu's Coil
  if (row["index"] === "Nosferatu's Coil") {

    // +15 to Strength
    row["prop1"] = "str";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // +2 to Mana after each Kill
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 2;

    // Slows Target by 10%
    row["prop3"] = "slow";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 5 - 7% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 7;

    // +10% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // -3 to Light Radius
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -3;
    row["max6"] = -3;

    // Increase Maximum Life 5 - 10%
    row["prop7"] = "hp%";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

    // 15% Bonus to Attack Rating
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

  }

  /*
  =====================================================================================
  ====================================== STAVES ======================================
  =====================================================================================
  */

  // Bane Ash
  if (row["index"] === "Bane Ash") {

    // -5 - 8% to Enemy Fire Resistance
    row["prop1"] = "pierce-fire";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 8;

    // +5 - 8% to Fire Skill Damage
    row["prop2"] = "extra-fire";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 8;

    // Fire Resist +50%
    row["prop3"] = "res-fire";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +30 to Mana
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +15% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +50 - 60% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 60;

    // +5 to Fire Bolt ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "36";
    row["min7"] = 5;
    row["max7"] = 5;

    // +2 to Warmth ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "37";
    row["min8"] = 2;
    row["max8"] = 2;

  }

  // Serpent Lord
  if (row["index"] === "Serpent Lord") {

    // Adds 22 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 75;
    row["max1"] = 75;

    // Poison Resist +50%
    row["prop2"] = "res-pois";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // -1 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = -1;
    row["max3"] = -1;

    // +10 to Mana
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +30 - 40% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 40;

    // 100% Mana stolen per hit
    row["prop6"] = "manasteal";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // -50% Target Defense
    row["prop7"] = "reduce-ac";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // +5 - 8% to Poison Skill Damage
    row["prop8"] = "extra-pois";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 8;

    // -5 - 8% to Enemy Poison Resistance
    row["prop9"] = "pierce-pois";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 8;

    // +4 to Plague Poppy
    row["prop10"] = "oskill";
    row["par10"] = "222";
    row["min10"] = 4;
    row["max10"] = 4;

  }

  // Lazarus Spire
  if (row["index"] === "Lazarus Spire") {

    // Lightning Resist +75%
    row["prop1"] = "res-ltng";
    row["par1"] = "";
    row["min1"] = 75;
    row["max1"] = 75;

    // Damage Reduced by 5
    row["prop2"] = "red-dmg";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +15 to Energy
    row["prop3"] = "enr";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +1 - 2 to Chain Lightning ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "53";
    row["min4"] = 1;
    row["max4"] = 2;

    // +2 - 3 to Lightning ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "49";
    row["min5"] = 2;
    row["max5"] = 3;

    // +3 - 4 to Static Field ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "42";
    row["min6"] = 3;
    row["max6"] = 4;

    // Regenerate Mana 43%
    row["prop7"] = "regen-mana";
    row["par7"] = "";
    row["min7"] = 43;
    row["max7"] = 43;

    // -10 - 15% to Enemy Lightning Resistance
    row["prop8"] = "pierce-ltng";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // +1 to Sorceress Skill Levels
    row["prop9"] = "sor";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

  }

  // The Salamander
  if (row["index"] === "The Salamander") {

    // Adds 15 - 32 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 32;

    // Fire Resist +30%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +2 to Fire Wall ([Class] only)
    row["prop3"] = "skill";
    row["par3"] = "51";
    row["min3"] = 2;
    row["max3"] = 2;

    // +2 to Fire Ball ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "47";
    row["min4"] = 2;
    row["max4"] = 2;

    // +3 to Warmth ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "37";
    row["min5"] = 3;
    row["max5"] = 3;

    // +3 to Fire Skills
    row["prop6"] = "fireskill";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

    // -10 - 15% to Enemy Fire Resistance
    row["prop7"] = "pierce-fire";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // The Iron Jang Bong
  if (row["index"] === "The Iron Jang Bong") {

    // +30 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +30% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +100% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // 30 - 50% Better Chance of Getting Magic Items
    row["prop4"] = "mag%";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 50;

    // +2 to Fire Spells [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "3";
    row["min5"] = 2;
    row["max5"] = 2;

    // +2 to Lightning Spells [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "4";
    row["min6"] = 2;
    row["max6"] = 2;

    // +2 to Cold Spells [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "5";
    row["min7"] = 2;
    row["max7"] = 2;

    // +2 to Sorceress Skill Levels
    row["prop8"] = "sor";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    // All Resistances +10 - 15
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

  }

  // Razorswitch
  if (row["index"] === "Razorswitch") {

    // +30% Faster Cast Rate
    row["prop1"] = "cast1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // Attacker Takes Damage of 15
    row["prop2"] = "thorns";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +175 to Mana
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 175;
    row["max3"] = 175;

    // +80 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 80;
    row["max4"] = 80;

    // Magic Damage Reduced by 15
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // All Resistances +50
    row["prop6"] = "res-all";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // +2 to All Skills
    row["prop7"] = "allskills";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

  }

  // Chromatic Ire
  if (row["index"] === "Chromatic Ire") {

    // +3 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // All Resistances +20 - 40
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 40;

    // +20% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Attacker Takes Lightning Damage of 20
    row["prop4"] = "light-thorns";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Increase Maximum Life 20 - 25%
    row["prop5"] = "hp%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 25;

    // +1 - 2 to Fire Mastery ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "61";
    row["min6"] = 1;
    row["max6"] = 2;

    // +1 - 2 to Lightning Mastery ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "63";
    row["min7"] = 1;
    row["max7"] = 2;

    // +1 - 2 to Cold Mastery ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "65";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Skullcollector
  if (row["index"] === "Skullcollector") {

    // Increase Maximum Mana 20%
    row["prop1"] = "mana%";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // +20 to Mana after each Kill
    row["prop2"] = "mana-kill";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +2 to All Skills
    row["prop3"] = "allskills";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // 2% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop4"] = "mag%/lvl";
    row["par4"] = "16";
    row["min4"] = "";
    row["max4"] = "";

    // +30% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

  }

  // Ondal's Wisdom
  if (row["index"] === "Ondal's Wisdom") {

    // +45% Faster Cast Rate
    row["prop1"] = "cast1";
    row["par1"] = "";
    row["min1"] = 45;
    row["max1"] = 45;

    // +55 - 77 to Energy
    row["prop2"] = "enr";
    row["par2"] = "";
    row["min2"] = 55;
    row["max2"] = 77;

    // +3 - 5 to All Skills
    row["prop3"] = "allskills";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 5;

    // +450 - 550 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 450;
    row["max4"] = 550;

    // +5 - 10% to Experience Gained
    row["prop5"] = "addxp";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 10;

    // Magic Damage Reduced by 5 - 8
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 8;

    // +3 to Shiver Armor
    row["prop7"] = "oskill";
    row["par7"] = "Shiver Armor";
    row["min7"] = 3;
    row["max7"] = 3;

    // -10 - 15% to Enemy Lightning Resistance
    row["prop8"] = "pierce-ltng";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Mang Song's Lesson
  if (row["index"] === "Mang Song's Lesson") {

    // +7 - 8 to All Skills
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 7;

    // -15 - 20% to Enemy Fire Resistance
    row["prop2"] = "pierce-fire";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // -15 - 20% to Enemy Lightning Resistance
    row["prop3"] = "pierce-ltng";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 20;

    // -25% to Enemy Cold Resistance
    row["prop4"] = "pierce-cold";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // Regenerate Mana 10%
    row["prop5"] = "regen-mana";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +75% Faster Cast Rate
    row["prop6"] = "cast1";
    row["par6"] = "";
    row["min6"] = 75;
    row["max6"] = 75;

    // All Resistances +30 - 40
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 40;

    // +130 - 200 to Mana
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 130;
    row["max8"] = 200;

  }

  /*
  =====================================================================================
  ====================================== WANDS ======================================
  =====================================================================================
  */

  // Iros Torch
  if (row["index"] === "Iros Torch") {

    // +1 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +10% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // Adds 5 - 9 Fire Damage
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 9;

    // +3 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 3;

    // +10 to Energy
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // Regenerate Mana 5%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

  }

  // Maelstromwrath
  if (row["index"] === "Maelstromwrath") {

    // +1 - 2 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 2;

    // Lightning Absorb 8 - 12%
    row["prop2"] = "abs-ltng";
    row["par2"] = "";
    row["min2"] = 8;
    row["max2"] = 12;

    // Lightning Resist +40%
    row["prop3"] = "res-ltng";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // +40 - 50 to Mana
    row["prop4"] = "mana";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 50;

    // +30% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +2 - 3 to Corpse Explosion ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "74";
    row["min6"] = 2;
    row["max6"] = 3;

    // +2 - 3 to Terror ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "77";
    row["min7"] = 2;
    row["max7"] = 3;

    // +2 - 3 to Amplify Damage ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "66";
    row["min8"] = 2;
    row["max8"] = 3;

    // +2 - 3 to Iron Maiden ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "76";
    row["min9"] = 2;
    row["max9"] = 3;

  }

  // Gravenspine
  if (row["index"] === "Gravenspine") {

    // +10 to Strength
    row["prop1"] = "str";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // +10 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +4 to Minimum Cold Damage
    row["prop3"] = "cold-min";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // +8 to Maximum Cold Damage
    row["prop4"] = "cold-max";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 8;

    // Cold Length +75
    row["prop5"] = "cold-len";
    row["par5"] = "";
    row["min5"] = 75;
    row["max5"] = 75;

    // +3 to Raise Skeleton ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Raise Skeleton";
    row["min6"] = 3;
    row["max6"] = 3;

    // +2 to Necromancer Skill Levels
    row["prop7"] = "nec";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // +25 - 50 to Mana
    row["prop8"] = "mana";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 50;

  }

  // Umes Lament
  if (row["index"] === "Umes Lament") {

    // +2 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +40 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +20% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Hit Causes Monster to Flee 64%
    row["prop4"] = "howl";
    row["par4"] = "";
    row["min4"] = 64;
    row["max4"] = 64;

    // +2 to Curses [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "6";
    row["min5"] = 2;
    row["max5"] = 2;

    // 20 - 30% Better Chance of Getting Magic Items
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 30;

    // +5 - 10 to all Attributes
    row["prop7"] = "all-stats";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

  }

  // Carin Shard
  if (row["index"] === "Carin Shard") {

    // +1,25 to Life (Based on Character Level)
    row["prop1"] = "hp/lvl";
    row["par1"] = "10";
    row["min1"] = "";
    row["max1"] = "";

    // +15% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +1,25 to Mana (Based on Character Level)
    row["prop3"] = "mana/lvl";
    row["par3"] = "10";
    row["min3"] = "";
    row["max3"] = "";

    // +30% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // Replenish Life +5
    row["prop5"] = "regen";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // +1 to Necromancer Skill Levels
    row["prop6"] = "nec";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // +2 to Summoning Skills (Necro) [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "8";
    row["min7"] = 2;
    row["max7"] = 2;

    // +3 to Clay Golem ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "Clay Golem";
    row["min8"] = 3;
    row["max8"] = 3;

    // +3 to BloodGolem ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "BloodGolem";
    row["min9"] = 3;
    row["max9"] = 3;

    // +3 to IronGolem ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "IronGolem";
    row["min10"] = 3;
    row["max10"] = 3;

    // +3 to FireGolem ([Class] only)
    row["prop11"] = "skill";
    row["par11"] = "FireGolem";
    row["min11"] = 3;
    row["max11"] = 3;

  }

  // Arm of King Leoric
  if (row["index"] === "Arm of King Leoric") {

    // +2 to Summoning Skills (Necro) [Class only] Skills
    row["prop1"] = "skilltab";
    row["par1"] = "8";
    row["min1"] = 4;
    row["max1"] = 4;

    // 5% Chance to cast level 10 Bone Spirit when struck
    row["prop2"] = "gethit-skill";
    row["par2"] = "93";
    row["min2"] = 5;
    row["max2"] = 10;

    // +1,25 to Mana (Based on Character Level)
    row["prop3"] = "mana/lvl";
    row["par3"] = "10";
    row["min3"] = "";
    row["max3"] = "";

    // Socketed (1 - 2)
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // +10% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // +2 to Poison and Bone Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "7";
    row["min6"] = 2;
    row["max6"] = 2;

    // +2 to Terror ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "77";
    row["min7"] = 2;
    row["max7"] = 2;

    // +2 to Raise Skeletal Mage ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "80";
    row["min8"] = 2;
    row["max8"] = 2;

    // +3 to Skeleton Mastery ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "69";
    row["min9"] = 3;
    row["max9"] = 3;

    // +3 to Raise Skeleton ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "70";
    row["min10"] = 3;
    row["max10"] = 3;

  }

  // Blackhand Key
  if (row["index"] === "Blackhand Key") {

    // +1 to Curses [Class only] Skills
    row["prop1"] = "skilltab";
    row["par1"] = "6";
    row["min1"] = 1;
    row["max1"] = 1;

    // 20% Damage Taken Goes To Mana
    row["prop2"] = "dmg-to-mana";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +50 to Life
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // -2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = -2;
    row["max4"] = -2;

    // +30% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // Fire Resist +37%
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 37;
    row["max6"] = 37;

    // +2 to Necromancer Skill Levels
    row["prop7"] = "nec";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // Level 13 Grim Ward (30/30 Charges)
    row["prop8"] = "charged";
    row["par8"] = "150";
    row["min8"] = 30;
    row["max8"] = 13;

    // +10 - 15% to Poison Skill Damage
    row["prop9"] = "extra-pois";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

    // +1 - 2 to Poison Nova ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "Poison Nova";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Boneshade
  if (row["index"] === "Boneshade") {

    // +2 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +30% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +4 - 5 to Teeth ([Class] only)
    row["prop3"] = "skill";
    row["par3"] = "Teeth";
    row["min3"] = 4;
    row["max3"] = 5;

    // +4 - 5 to Bone Armor ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "Bone Armor";
    row["min4"] = 4;
    row["max4"] = 5;

    // +2 - 3 to Bone Spear ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Bone Spear";
    row["min5"] = 2;
    row["max5"] = 3;

    // +1 - 2 to Bone Spirit ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Bone Spirit";
    row["min6"] = 1;
    row["max6"] = 2;

    // +2 - 3 to Bone Wall ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Bone Wall";
    row["min7"] = 2;
    row["max7"] = 3;

    // 0,5% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop8"] = "mag%/lvl";
    row["par8"] = "4";
    row["min8"] = "";
    row["max8"] = "";

    // +6 to Mana after each Kill
    row["prop9"] = "mana-kill";
    row["par9"] = "";
    row["min9"] = 6;
    row["max9"] = 6;

    // +6 Life after each Kill
    row["prop10"] = "heal-kill";
    row["par10"] = "";
    row["min10"] = 6;
    row["max10"] = 6;

  }


  /*
  =====================================================================================
  ====================================== SWORDS ======================================
  =====================================================================================
  */

  // Krintizs Skewer
  if (row["index"] === "Krintizs Skewer") {

    // Ignore Target's Defense
    row["prop1"] = "ignore-ac";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +10 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +10 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 7% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 7;
    row["max4"] = 7;

    // +50% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Adds 10 - 15 Damage
    row["prop6"] = "dmg-norm";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // 10% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

  }

  // Gleamscythe
  if (row["index"] === "Gleamscythe") {

    // +3 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // +30 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +20 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +20% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +60 - 100% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 100;

    // Adds 3 - 5 Cold Damage
    row["prop6"] = "dmg-cold";
    row["par6"] = "50";
    row["min6"] = 3;
    row["max6"] = 5;

    // Adds 1 - 15 Lightning Damage
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 15;

    // 40 - 60% Extra Gold from Monsters
    row["prop8"] = "gold%";
    row["par8"] = "";
    row["min8"] = 40;
    row["max8"] = 60;

  }

  // Griswolds Edge
  if (row["index"] === "Griswolds Edge") {

    // +10 - 12 to Minimum Fire Damage
    row["prop1"] = "fire-min";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 12;

    // +15 - 25 to Maximum Fire Damage
    row["prop2"] = "fire-max";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 25;

    // +100 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // +15% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // Repairs 1 durability in 10 seconds
    row["prop5"] = "rep-dur";
    row["par5"] = "10";
    row["min5"] = "";
    row["max5"] = "";

    // +80 - 120% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 80;
    row["max6"] = 120;

    // +12 to Strength
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 12;
    row["max7"] = 12;

    // +1  to Barbarian Skill Levels
    row["prop8"] = "bar";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // Hellplague
  if (row["index"] === "Hellplague") {

    // 5% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // 5% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 5;

    // +48 to Minimum Poison Damage
    row["prop3"] = "pois-min";
    row["par3"] = "";
    row["min3"] = 48;
    row["max3"] = 48;

    // +96 to Maximum Poison Damage
    row["prop4"] = "pois-max";
    row["par4"] = "";
    row["min4"] = 96;
    row["max4"] = 96;

    // Poison Length
    row["prop5"] = "pois-len";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 150;

    // +70 - 80% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 80;

    // Adds 25 - 75 Fire Damage
    row["prop7"] = "dmg-fire";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 75;

    // +2 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    // +1 - 2 to Paladin Skill Levels
    row["prop9"] = "pal";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 2;

  }

  // Culwens Point
  if (row["index"] === "Culwens Point") {

    // +1 to All Skills
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // Poison Length Reduced by 50%
    row["prop2"] = "res-pois-len";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +20% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +20% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +80 - 100 to Attack Rating
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 100;

    // +70 - 80% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 80;

    // +15% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

  }

  // Shadowfang
  if (row["index"] === "Shadowfang") {

    // 9% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 9;
    row["max1"] = 9;

    // Cold Resist +20%
    row["prop2"] = "res-cold";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // -2 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = -2;
    row["max3"] = -2;

    // Adds 40 - 60 Cold Damage
    row["prop4"] = "dmg-cold";
    row["par4"] = "150";
    row["min4"] = 40;
    row["max4"] = 60;

    // +100% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 100;

    // 9% Life stolen per hit
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 9;
    row["max6"] = 9;

    // Freezes Target +3
    row["prop7"] = "freeze";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 3;

    // +15% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

    // Prevent Monster Heal
    row["prop9"] = "noheal";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

  }

  // Soulflay
  if (row["index"] === "Soulflay") {

    // 4 - 10% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 4;
    row["max1"] = 10;

    // 4 - 10% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 10;

    // +70 - 100% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 70;
    row["max3"] = 100;

    // All Resistances +10 - 15
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // +10% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +40 - 50% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 50;

    // Repairs 1 durability in 10 seconds
    row["prop7"] = "rep-dur";
    row["par7"] = "10";
    row["min7"] = "";
    row["max7"] = "";

  }

  // Kinemils Awl
  if (row["index"] === "Kinemils Awl") {

    // +100 - 150 to Attack Rating
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 150;

    // +20 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +60 to Minimum Fire Damage
    row["prop3"] = "fire-min";
    row["par3"] = "";
    row["min3"] = 60;
    row["max3"] = 60;

    // +80 to Maximum Fire Damage
    row["prop4"] = "fire-max";
    row["par4"] = "";
    row["min4"] = 80;
    row["max4"] = 80;

    // +80 - 100% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 100;

    // +6 to Holy Fire ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "102";
    row["min6"] = 6;
    row["max6"] = 6;

    // +20% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // +5 - 15% to Fire Skill Damage
    row["prop8"] = "extra-fire";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 15;

    // +2 to Combat Skills (Paladin) [Class only] Skills
    row["prop9"] = "skilltab";
    row["par9"] = "9";
    row["min9"] = 2;
    row["max9"] = 2;

  }

  // Blacktongue
  if (row["index"] === "Blacktongue") {

    // Adds 100 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 340;
    row["max1"] = 340;

    // Prevent Monster Heal
    row["prop2"] = "noheal";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // +60 - 90 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 60;
    row["max3"] = 90;

    // Poison Resist +50%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // +50 - 60% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 60;

    // Poison Length Reduced by 50%
    row["prop6"] = "res-pois-len";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 20 - 30% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 30;

  }

  // Ripsaw
  if (row["index"] === "Ripsaw") {

    // 80% Chance of Open Wounds
    row["prop1"] = "openwounds";
    row["par1"] = "";
    row["min1"] = 80;
    row["max1"] = 80;

    // +15 to Maximum Damage
    row["prop2"] = "dmg-max";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // 6% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 6;

    // +80 - 100% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 80;
    row["max4"] = 100;

    // +10 - 15 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // +30 - 45% Damage to Demons
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 45;

    // 15 - 20% Bonus to Attack Rating
    row["prop7"] = "att%";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

  }

  // The Patriarch
  if (row["index"] === "The Patriarch") {

    // Damage Reduced by 3
    row["prop1"] = "red-dmg";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // Magic Damage Reduced by 3
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // Hit Blinds Target +1
    row["prop3"] = "stupidity";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 150 - 200% Extra Gold from Monsters
    row["prop4"] = "gold%";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 200;

    // +140 - 160% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 160;

    // +10 - 15 to Strength
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // +1 - 3 to Combat Skills (Barbarian) [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "12";
    row["min7"] = 1;
    row["max7"] = 3;

    // 20% Deadly Strike
    row["prop8"] = "deadly";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Coldsteel Eye
  if (row["index"] === "Coldsteel Eye") {

    // Hit Blinds Target +1
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // Slows Target by 30%
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 50% Deadly Strike
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // Durability: 50 of 50
    row["prop4"] = "dur";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // +200 - 250% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 200;
    row["max5"] = 250;

    // +20% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // 6% Mana stolen per hit
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 6;
    row["max7"] = 6;

    // Adds 80 - 100 Cold Damage
    row["prop8"] = "dmg-cold";
    row["par8"] = "75";
    row["min8"] = 80;
    row["max8"] = 100;

    // +10 - 15% to Cold Skill Damage
    row["prop9"] = "extra-cold";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

  }

  // Hexfire
  if (row["index"] === "Hexfire") {

    // +6 - 10 to Hydra
    row["prop1"] = "oskill";
    row["par1"] = "62";
    row["min1"] = 6;
    row["max1"] = 10;

    // Ignore Target's Defense
    row["prop2"] = "ignore-ac";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Fire Resist +25%
    row["prop3"] = "res-fire";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +10% to Maximum Fire Resist
    row["prop4"] = "res-fire-max";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // Adds 80 - 100 Damage
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 100;

    // +140 - 160% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 140;
    row["max6"] = 160;

    // +3 to Fire Skills
    row["prop7"] = "fireskill";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 3;

    // -8 - 12% to Enemy Fire Resistance
    row["prop8"] = "pierce-fire";
    row["par8"] = "";
    row["min8"] = 8;
    row["max8"] = 12;

  }

  // Ginther's Rift
  if (row["index"] === "Ginther's Rift") {

    // Magic Damage Reduced by 7 - 12
    row["prop1"] = "red-mag";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 12;

    // +30% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // Repairs 1 durability in 5 seconds
    row["prop3"] = "rep-dur";
    row["par3"] = "20";
    row["min3"] = "";
    row["max3"] = "";

    // Durability: 40 of 40
    row["prop4"] = "dur";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Adds 80 - 140 Magic Damage
    row["prop5"] = "dmg-mag";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 140;

    // +100 - 150% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 150;

    // 5 - 7% Mana stolen per hit
    row["prop7"] = "manasteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 7;

    // 20% Deadly Strike
    row["prop8"] = "deadly";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Headstriker
  if (row["index"] === "Headstriker") {

    // Prevent Monster Heal
    row["prop1"] = "noheal";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +15 - 20 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 20;

    // 0% Deadly Strike (Based on Character Level)
    row["prop3"] = "deadly/lvl";
    row["par3"] = "12";
    row["min3"] = "";
    row["max3"] = "";

    // +0 to Maximum Damage (Based on Character Level)
    row["prop4"] = "dmg/lvl";
    row["par4"] = "8";
    row["min4"] = "";
    row["max4"] = "";

    // +180 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 180;
    row["max5"] = 200;

    // 15% Chance of Crushing Blow
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

  }

  // Plague Bearer
  if (row["index"] === "Plague Bearer") {

    // +10 - 15% to Poison Skill Damage
    row["prop1"] = "extra-pois";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 15;

    // -10 - 15% to Enemy Poison Resistance
    row["prop2"] = "pierce-pois";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // Adds 10 - 45 Damage
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 45;

    // +180 - 200% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 180;
    row["max4"] = 200;

    // Poison Resist +45%
    row["prop5"] = "res-pois";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 45;

    // +7 - 8 to Rabies ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "238";
    row["min6"] = 7;
    row["max6"] = 8;

    // +10 - 15 to Dexterity
    row["prop7"] = "dex";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // The Atlantian
  if (row["index"] === "The Atlantian") {

    // Durability: 100 of 100
    row["prop1"] = "dur";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // +75 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 75;
    row["max2"] = 75;

    // +16 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 16;
    row["max3"] = 16;

    // +12 to Dexterity
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 12;
    row["max4"] = 12;

    // +8 to Vitality
    row["prop5"] = "vit";
    row["par5"] = "";
    row["min5"] = 8;
    row["max5"] = 8;

    // +200 - 250% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 200;
    row["max6"] = 250;

    // +2 to Paladin Skill Levels
    row["prop7"] = "pal";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // 130% Bonus to Attack Rating
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 130;
    row["max8"] = 130;

    // Socketed (1 - 3)
    row["prop9"] = "sock";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 3;

  }

  // Crainte Vomir
  if (row["index"] === "Crainte Vomir") {

    // Slows Target by 35%
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // --70 to Monster Defense Per Hit
    row["prop2"] = "dmg-ac";
    row["par2"] = "";
    row["min2"] = -70;
    row["max2"] = -70;

    // +35% Faster Run/Walk
    row["prop3"] = "move1";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // Damage Reduced by 10%
    row["prop4"] = "red-dmg%";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +180 - 220% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 180;
    row["max5"] = 220;

    // +50% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // Ignore Target's Defense
    row["prop7"] = "ignore-ac";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Repairs 1 durability in 5 seconds
    row["prop8"] = "rep-dur";
    row["par8"] = "20";
    row["min8"] = "";
    row["max8"] = "";

  }

  // Bing Sz Wang
  if (row["index"] === "Bing Sz Wang") {

    // Requirements --30%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -30;
    row["max1"] = -30;

    // Adds 100 - 180 Cold Damage
    row["prop2"] = "dmg-cold";
    row["par2"] = "75";
    row["min2"] = 100;
    row["max2"] = 180;

    // +20 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Freezes Target +2
    row["prop4"] = "freeze";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // 15% Chance to cast level 10 Frozen Orb on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "64";
    row["min5"] = 15;
    row["max5"] = 10;

    // +130 - 160% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 130;
    row["max6"] = 160;

    // -10 - 15% to Enemy Cold Resistance
    row["prop7"] = "pierce-cold";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // Level 10 Holy Freeze Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Holy Freeze";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // The Vile Husk
  if (row["index"] === "The Vile Husk") {

    // 6% Chance to cast level 6 Amplify Damage on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "66";
    row["min1"] = 6;
    row["max1"] = 6;

    // +7,5% Damage to Undead (Based on Character Level)
    row["prop2"] = "dmg-und/lvl";
    row["par2"] = "60";
    row["min2"] = "";
    row["max2"] = "";

    // Poison Resist +50%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // Adds 250 Poison Damage Over 6 Seconds
    row["prop4"] = "dmg-pois";
    row["par4"] = "150";
    row["min4"] = 426;
    row["max4"] = 426;

    // +150 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 200;

    // +10 to Attack Rating against Undead (Based on Character Level)
    row["prop6"] = "att-und/lvl";
    row["par6"] = "20";
    row["min6"] = "";
    row["max6"] = "";

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

  }

  // Cloudcrack
  if (row["index"] === "Cloudcrack") {

    // 12% Chance to cast level 10 Fist of the Heavens on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "121";
    row["min1"] = 12;
    row["max1"] = 10;

    // Adds 1 - 240 Lightning Damage
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 240;

    // +30 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // +10% to Maximum Lightning Resist
    row["prop5"] = "res-ltng-max";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +150 - 200% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 200;

    // Attacker Takes Lightning Damage of 100
    row["prop7"] = "light-thorns";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // +3 - 4 to Offensive Auras [Class only] Skills
    row["prop8"] = "skilltab";
    row["par8"] = "10";
    row["min8"] = 3;
    row["max8"] = 4;

    // +3 - 4 to Defensive Auras [Class only] Skills
    row["prop9"] = "skilltab";
    row["par9"] = "11";
    row["min9"] = 3;
    row["max9"] = 4;

    // Lightning Resist +30 - 40%
    row["prop10"] = "res-ltng";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 40;

  }

  // Todesfaelle Flamme
  if (row["index"] === "Todesfaelle Flamme") {

    // Adds 140 - 200 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 200;

    // Fire Resist +40%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Fire Absorb 10%
    row["prop3"] = "abs-fire";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 12% Chance to cast level 12 Fire Ball on attack
    row["prop4"] = "att-skill";
    row["par4"] = "47";
    row["min4"] = 12;
    row["max4"] = 12;

    // +160 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 160;
    row["max5"] = 200;

    // Level 10 Enchant (45/45 Charges)
    row["prop6"] = "charged";
    row["par6"] = "52";
    row["min6"] = 45;
    row["max6"] = 10;

    // 12% Chance to cast level 12 Fire Wall on attack
    row["prop7"] = "att-skill";
    row["par7"] = "51";
    row["min7"] = 12;
    row["max7"] = 12;

    // -10 - 15% to Enemy Fire Resistance
    row["prop8"] = "pierce-fire";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Swordguard
  if (row["index"] === "Swordguard") {

    // Requirements --50%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -50;
    row["max1"] = -50;

    // +5 Defense (Based on Character Level)
    row["prop2"] = "ac/lvl";
    row["par2"] = "40";
    row["min2"] = "";
    row["max2"] = "";

    // All Resistances +10 - 20
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // +100 Defense vs. Missile
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // 30% Damage Taken Goes To Mana
    row["prop5"] = "dmg-to-mana";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +170 - 180% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 170;
    row["max6"] = 180;

    // +200 Defense vs. Melee
    row["prop7"] = "ac-hth";
    row["par7"] = "";
    row["min7"] = 200;
    row["max7"] = 200;

    // +20% Faster Hit Recovery
    row["prop8"] = "balance1";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

    // 20% Increased Chance of Blocking
    row["prop9"] = "block";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

    // +30% Increased Attack Speed
    row["prop10"] = "swing1";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 30;

    // Level 5 Cleansing Aura When Equipped
    row["prop11"] = "aura";
    row["par11"] = "Cleansing";
    row["min11"] = 5;
    row["max11"] = 5;

  }

  // Djinnslayer
  if (row["index"] === "Djinnslayer") {

    // +190 - 240% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 190;
    row["max1"] = 240;

    // Adds 250 - 500 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 500;

    // +180 - 230% Damage to Demons
    row["prop3"] = "dmg-demon";
    row["par3"] = "";
    row["min3"] = 180;
    row["max3"] = 230;

    // +200 - 300 to Attack Rating against Demons
    row["prop4"] = "att-demon";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 300;

    // Lightning Absorb 3 - 7%
    row["prop5"] = "abs-ltng";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 7;

    // 3 - 6% Mana stolen per hit
    row["prop6"] = "manasteal";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 6;

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // Adds 250 - 500 Lightning Damage
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 250;
    row["max8"] = 500;

    // 30 - 45% Better Chance of Getting Magic Items
    row["prop9"] = "mag%";
    row["par9"] = "";
    row["min9"] = 30;
    row["max9"] = 45;

  }

  // Bloodmoon
  if (row["index"] === "Bloodmoon") {

    // +210 - 260% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 210;
    row["max1"] = 260;

    // 10 - 15% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // +5 to BloodGolem
    row["prop3"] = "oskill";
    row["par3"] = "BloodGolem";
    row["min3"] = 5;
    row["max3"] = 5;

    // +7 - 13 Life after each Kill
    row["prop4"] = "heal-kill";
    row["par4"] = "";
    row["min4"] = 7;
    row["max4"] = 13;

    // 66% Chance of Open Wounds
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 66;
    row["max5"] = 66;

    // +6 - 10 Life after each Kill
    row["prop6"] = "heal-kill";
    row["par6"] = "";
    row["min6"] = 6;
    row["max6"] = 10;

    // +5 - 15 to all Attributes
    row["prop7"] = "all-stats";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

  }

  // Lightsabre
  if (row["index"] === "Lightsabre") {

    // +7 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 7;

    // 15% Chance to cast level 0 Chain Lightning on attack
    row["prop2"] = "att-skill";
    row["par2"] = "53";
    row["min2"] = 15;
    row["max2"] = 0;

    // Ignore Target's Defense
    row["prop3"] = "ignore-ac";
    row["par3"] = "1";
    row["min3"] = 1;
    row["max3"] = 1;

    // +25 Lightning Absorb
    row["prop4"] = "abs-ltng%";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // +20% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // Adds 60 - 120 Magic Damage
    row["prop6"] = "dmg-mag";
    row["par6"] = "";
    row["min6"] = 60;
    row["max6"] = 120;

    // Adds 1 - 400 Lightning Damage
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 400;

    // 5 - 7% Mana stolen per hit
    row["prop8"] = "manasteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 7;

    // +150 - 200% Enhanced Damage
    row["prop9"] = "dmg%";
    row["par9"] = "";
    row["min9"] = 150;
    row["max9"] = 200;

    // Adds 10 - 30 Damage
    row["prop10"] = "dmg-norm";
    row["par10"] = "";
    row["min10"] = 10;
    row["max10"] = 30;

    // +1 to Telekinesis
    row["prop11"] = "oskill";
    row["par11"] = "Telekinesis";
    row["min11"] = 1;
    row["max11"] = 1;

    // -10 - 15% to Enemy Lightning Resistance
    row["prop12"] = "pierce-ltng";
    row["par12"] = "";
    row["min12"] = 10;
    row["max12"] = 15;

  }

  // Azurewrath
  if (row["index"] === "Azurewrath") {

    // Adds 255 - 510 Magic Damage
    row["prop1"] = "dmg-mag";
    row["par1"] = "";
    row["min1"] = 255;
    row["max1"] = 510;

    // +230 - 270% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 230;
    row["max2"] = 270;

    // Level 10 - 13 Sanctuary Aura When Equipped
    row["prop3"] = "aura";
    row["par3"] = "Sanctuary";
    row["min3"] = 10;
    row["max3"] = 13;

    // Adds 255 - 510 Cold Damage
    row["prop4"] = "dmg-cold";
    row["par4"] = "250";
    row["min4"] = 255;
    row["max4"] = 510;

    // +30% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +10 - 15 to all Attributes
    row["prop6"] = "all-stats";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // +3 to Light Radius
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 3;

    // +2 to All Skills
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    // +250 - 300% Damage to Demons
    row["prop9"] = "dmg-demon";
    row["par9"] = "";
    row["min9"] = 250;
    row["max9"] = 300;

    // Requirements --60%
    row["prop10"] = "ease";
    row["par10"] = "";
    row["min10"] = -60;
    row["max10"] = -60;

    // Damage +66 - 99
    row["prop11"] = "dmg";
    row["par11"] = "";
    row["min11"] = 66;
    row["max11"] = 99;

  }

  // Frostwind
  if (row["index"] === "Frostwind") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // Freezes Target +4
    row["prop2"] = "freeze";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 4;

    // Cannot Be Frozen
    row["prop3"] = "nofreeze";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Adds 237 - 486 Cold Damage
    row["prop4"] = "dmg-cold";
    row["par4"] = "150";
    row["min4"] = 237;
    row["max4"] = 486;

    // +25% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // +7 - 15 Cold Absorb
    row["prop6"] = "abs-cold%";
    row["par6"] = "";
    row["min6"] = 7;
    row["max6"] = 15;

    // +7 - 14 to Arctic Blast
    row["prop7"] = "oskill";
    row["par7"] = "Arctic Blast";
    row["min7"] = 7;
    row["max7"] = 14;

    // -25 - 35% to Enemy Cold Resistance
    row["prop8"] = "pierce-cold";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 35;

    // +7 - 14 to Cyclone Armor
    row["prop9"] = "oskill";
    row["par9"] = "Cyclone Armor";
    row["min9"] = 7;
    row["max9"] = 14;

  }

  // Flamebellow
  if (row["index"] === "Flamebellow") {

    // +170 - 240% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 240;

    // Adds 233 - 482 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 233;
    row["max2"] = 482;

    // +3 to Fire Skills
    row["prop3"] = "fireskill";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

    // +20 - 30 Fire Absorb
    row["prop4"] = "abs-fire%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // 12% Chance to cast level 16 Firestorm on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "Firestorm";
    row["min5"] = 12;
    row["max5"] = 16;

    // +10 - 20 to Strength
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

    // +5 - 10 to Vitality
    row["prop7"] = "vit";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

    // +12 - 18 to Inferno
    row["prop8"] = "oskill";
    row["par8"] = "Inferno";
    row["min8"] = 12;
    row["max8"] = 18;

    // +2 - 3 to Fire Mastery
    row["prop9"] = "oskill";
    row["par9"] = "Fire Mastery";
    row["min9"] = 2;
    row["max9"] = 3;

    // -10 - 15% to Enemy Fire Resistance
    row["prop10"] = "pierce-fire";
    row["par10"] = "";
    row["min10"] = 10;
    row["max10"] = 15;

    // Monster Fire Immunity is Sundered
    row["prop11"] = "pierce-immunity-fire";
    row["par11"] = "";
    row["min11"] = 300;
    row["max11"] = 300;

    // Level 12 - 15 Holy Fire Aura When Equipped
    row["prop12"] = "aura";
    row["par12"] = "Holy Fire";
    row["min12"] = 12;
    row["max12"] = 15;

  }

  // Doombringer
  if (row["index"] === "Doombringer") {

    // Increase Maximum Life 20%
    row["prop1"] = "hp%";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // +180 - 250% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 180;
    row["max2"] = 250;

    // 40% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // Repairs 1 durability in 5 seconds
    row["prop4"] = "rep-dur";
    row["par4"] = "20";
    row["min4"] = 1;
    row["max4"] = 1;

    // Adds 100 - 150 Damage
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 150;

    // 8% Chance to cast level 6 Amplify Damage on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "66";
    row["min6"] = 8;
    row["max6"] = 6;

    // 5 - 7% Life stolen per hit
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 7;

    // +1 - 2 to All Skills
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

    // Level 5 - 7 Fanaticism Aura When Equipped
    row["prop9"] = "aura";
    row["par9"] = "Fanaticism";
    row["min9"] = 5;
    row["max9"] = 7;

  }

  // The Grandfather
  // The Grandfather
  if (row["index"] === "The Grandfather") {

    // +20 to all Attributes
    row["prop1"] = "all-stats";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // +3  to Barbarian Skill Levels
    row["prop2"] = "bar";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // 6 - 8% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 8;

    // 6 - 8% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 6;
    row["max4"] = 8;

    // 100 - 120% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 120;

    // +80 to Life
    row["prop6"] = "hp";
    row["par6"] = "";
    row["min6"] = 80;
    row["max6"] = 80;

    // +2,5 to Maximum Damage (Based on Character Level)
    row["prop7"] = "dmg/lvl";
    row["par7"] = "20";
    row["min7"] = 32;
    row["max7"] = 32;

    // Repairs 1 durability in 10 seconds
    row["prop8"] = "rep-dur";
    row["par8"] = "10";
    row["min8"] = "";
    row["max8"] = "";

    // +200 - 270% Enhanced Damage
    row["prop9"] = "dmg%";
    row["par9"] = "";
    row["min9"] = 280;
    row["max9"] = 370;

    // Socketed (2 - 3)
    row["prop10"] = "sock";
    row["par10"] = "";
    row["min10"] = 2;
    row["max10"] = 3;

  }

  /*
  =====================================================================================
  ====================================== DAGGERS ======================================
  =====================================================================================
  */

  // The Diggler
  if (row["index"] === "The Diggler") {

    // +10 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // +50% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // Cold Resist +25%
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // Fire Resist +25%
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // Ignore Target's Defense
    row["prop6"] = "ignore-ac";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // 30% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

  }

  // The Jade Tan Do
  if (row["index"] === "The Jade Tan Do") {

    // +100 - 150 to Attack Rating
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 150;

    // Cannot Be Frozen
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Adds 180 Poison Damage Over 3 Seconds
    row["prop3"] = "dmg-pois";
    row["par3"] = "75";
    row["min3"] = 615;
    row["max3"] = 615;

    // Poison Resist +95%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 95;
    row["max4"] = 95;

    // +20% to Maximum Poison Resist
    row["prop5"] = "res-pois-max";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +3 - 5 to Poison Dagger ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Poison Dagger";
    row["min6"] = 3;
    row["max6"] = 5;

    // +20% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

  }

  // Irices Shard
  if (row["index"] === "Irices Shard") {

    // +50% Faster Cast Rate
    row["prop1"] = "cast1";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // +50 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +55 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 55;
    row["max3"] = 55;

    // All Resistances +10 - 15
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // +4 - 5 to Teeth ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Teeth";
    row["min5"] = 4;
    row["max5"] = 5;

    // +2 - 3 to Bone Spear ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Bone Spear";
    row["min6"] = 2;
    row["max6"] = 3;

    // Requirements --30%
    row["prop7"] = "ease";
    row["par7"] = "";
    row["min7"] = -30;
    row["max7"] = -30;

  }

  // Spineripper
  if (row["index"] === "Spineripper") {

    // Ignore Target's Defense
    row["prop1"] = "ignore-ac";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // 8% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 8;
    row["max2"] = 8;

    // Prevent Monster Heal
    row["prop3"] = "noheal";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // +15% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +10 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +200 - 240% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 200;
    row["max6"] = 240;

    // Adds 15 - 27 Damage
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 27;

    // +1 to All Skills
    row["prop8"] = "allskills";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // 15% Chance of Crushing Blow
    row["prop9"] = "crush";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

  }

  // Heart Carver
  if (row["index"] === "Heart Carver") {

    // 35% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // Ignore Target's Defense
    row["prop2"] = "ignore-ac";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Adds 15 - 35 Damage
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 35;

    // +190 - 240% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 190;
    row["max4"] = 240;

    // +4 to Find Potion ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "131";
    row["min5"] = 4;
    row["max5"] = 4;

    // +4 to Find Item ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "142";
    row["min6"] = 4;
    row["max6"] = 4;

    // +4 to Grim Ward ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "150";
    row["min7"] = 4;
    row["max7"] = 4;

    // 100 - 120% Extra Gold from Monsters
    row["prop8"] = "gold%";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 120;

    // 15 - 25% Better Chance of Getting Magic Items
    row["prop9"] = "mag%";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 25;

  }

  // Blackbog's Sharp
  if (row["index"] === "Blackbog's Sharp") {

    // Slows Target by 50%
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // +50 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Adds 15 - 45 Damage
    row["prop3"] = "dmg-norm";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 45;

    // +30% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // Adds 488 Poison Damage Over 10 Seconds
    row["prop5"] = "dmg-pois";
    row["par5"] = "250";
    row["min5"] = 500;
    row["max5"] = 500;

    // +5 to Poison Dagger ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "73";
    row["min6"] = 5;
    row["max6"] = 5;

    // +4 to Poison Explosion ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "83";
    row["min7"] = 4;
    row["max7"] = 4;

    // +4 to Poison Nova ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "92";
    row["min8"] = 4;
    row["max8"] = 4;

    // +15 - 25% to Poison Skill Damage
    row["prop9"] = "extra-pois";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 25;

  }

  // Stormspike
  if (row["index"] === "Stormspike") {

    // Adds 1 - 120 Lightning Damage
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 120;

    // Attacker Takes Lightning Damage of 120
    row["prop2"] = "light-thorns";
    row["par2"] = "";
    row["min2"] = 120;
    row["max2"] = 120;

    // 25% Chance to cast level 15 Charged Bolt when struck
    row["prop3"] = "gethit-skill";
    row["par3"] = "38";
    row["min3"] = 25;
    row["max3"] = 15;

    // +150% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 150;

    // Lightning Resist +0% (Based on Character Level)
    row["prop5"] = "res-ltng/lvl";
    row["par5"] = "8";
    row["min5"] = "";
    row["max5"] = "";

    // +8 - 12% to Lightning Skill Damage
    row["prop6"] = "extra-ltng";
    row["par6"] = "";
    row["min6"] = 8;
    row["max6"] = 12;

    // -8 - 12% to Enemy Lightning Resistance
    row["prop7"] = "pierce-ltng";
    row["par7"] = "";
    row["min7"] = 8;
    row["max7"] = 12;

    // Level 8 - 12 Holy Shock Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Holy Shock";
    row["min8"] = 8;
    row["max8"] = 12;

  }

  // Wizardspike
  if (row["index"] === "Wizardspike") {

    // +2 to Mana (Based on Character Level)
    row["prop1"] = "mana/lvl";
    row["par1"] = "16";
    row["min1"] = "";
    row["max1"] = "";

    // Regenerate Mana 15%
    row["prop2"] = "regen-mana";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // Increase Maximum Mana 15%
    row["prop3"] = "mana%";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // All Resistances +75
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 75;
    row["max4"] = 75;

    // Indestructible
    row["prop5"] = "indestruct";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // +50% Faster Cast Rate
    row["prop6"] = "cast1";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // Level 5 Teleport (60/60 Charges)
    row["prop7"] = "charged";
    row["par7"] = "Teleport";
    row["min7"] = 60;
    row["max7"] = 5;

  }

  // Ghostflame
  if (row["index"] === "Ghostflame") {

    // +190 - 240% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 190;
    row["max1"] = 240;

    // Ignore Target's Defense
    row["prop2"] = "ignore-ac";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Adds 250 Magic Damage
    row["prop3"] = "dmg-mag";
    row["par3"] = "";
    row["min3"] = 250;
    row["max3"] = 250;

    // 10 - 15% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // Ethereal
    row["prop5"] = "ethereal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // Indestructible
    row["prop6"] = "indestruct";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // +2 to Light Radius
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // 10% Chance to cast level 15 Blaze when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "Blaze";
    row["min8"] = 10;
    row["max8"] = 15;

    // Socketed (1 - 2)
    row["prop9"] = "sock";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 2;

  }


  /*
  =====================================================================================
  ====================================== AXES ======================================
  =====================================================================================
  */


  // Deathspade
  if (row["index"] === "Deathspade") {

    // Hit Blinds Target +1
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +8 to Minimum Damage
    row["prop2"] = "dmg-min";
    row["par2"] = "";
    row["min2"] = 8;
    row["max2"] = 8;

    // 15% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +4 to Mana after each Kill
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 4;
    row["max4"] = 4;

    // +60 - 70% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 70;

    // +1 to Combat Skills (Barbarian) [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "12";
    row["min6"] = 1;
    row["max6"] = 1;

    // +10 - 15 to Mana
    row["prop7"] = "mana";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

  }

  // Bladebone
  if (row["index"] === "Bladebone") {

    // +100% Damage to Undead
    row["prop1"] = "dmg-undead";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // +40 to Attack Rating against Undead
    row["prop2"] = "att-undead";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +20% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +20 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +8 to Minimum Fire Damage
    row["prop5"] = "fire-min";
    row["par5"] = "";
    row["min5"] = 8;
    row["max5"] = 8;

    // +12 to Maximum Fire Damage
    row["prop6"] = "fire-max";
    row["par6"] = "";
    row["min6"] = 12;
    row["max6"] = 12;

    // +30 - 50% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 50;

    // +10% Faster Run/Walk
    row["prop8"] = "move1";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // Mindrend
  if (row["index"] === "Mindrend") {

    // Hit Blinds Target +2
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // Regenerate Mana 20%
    row["prop2"] = "regen-mana";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +1 to Minimum Lightning Damage
    row["prop3"] = "ltng-min";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // +12 - 15 to Maximum Lightning Damage
    row["prop4"] = "ltng-max";
    row["par4"] = "";
    row["min4"] = 12;
    row["max4"] = 15;

    // +50 - 100 to Attack Rating
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 100;

    // +80 - 110% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 80;
    row["max6"] = 110;

    // 15% Chance of Open Wounds
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // 15% Chance of Crushing Blow
    row["prop8"] = "crush";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;

  }

  // Rakescar
  if (row["index"] === "Rakescar") {

    // +256 to Minimum Poison Damage
    row["prop1"] = "pois-min";
    row["par1"] = "";
    row["min1"] = 256;
    row["max1"] = 256;

    // +256 to Maximum Poison Damage
    row["prop2"] = "pois-max";
    row["par2"] = "";
    row["min2"] = 256;
    row["max2"] = 256;

    // Poison Length
    row["prop3"] = "pois-len";
    row["par3"] = "";
    row["min3"] = 75;
    row["max3"] = 75;

    // +50 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // Poison Resist +50%
    row["prop5"] = "res-pois";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // +75 - 150% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 75;
    row["max6"] = 150;

    // +30% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // Poison Length Reduced by 50%
    row["prop8"] = "res-pois-len";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

  }

  // Fechmars Axe
  if (row["index"] === "Fechmars Axe") {

    // +70 - 90% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 70;
    row["max1"] = 90;

    // Freezes Target +3
    row["prop2"] = "freeze";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // Cold Resist +50%
    row["prop3"] = "res-cold";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // Adds 20 - 25 Cold Damage
    row["prop5"] = "dmg-cold";
    row["par5"] = "3";
    row["min5"] = 20;
    row["max5"] = 25;

    // 10% Chance to cast level 6 Frost Nova on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "Frost Nova";
    row["min6"] = 10;
    row["max6"] = 6;

  }

  // The Chieftan
  if (row["index"] === "The Chieftan") {

    // +100% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // All Resistances +10 - 20
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // +6 to Mana after each Kill
    row["prop3"] = "mana-kill";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 6;

    // +40% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Adds 1 - 75 Lightning Damage
    row["prop5"] = "dmg-ltng";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 75;

    // +1 - 2 to Battle Cry ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Battle Cry";
    row["min6"] = 1;
    row["max6"] = 2;

  }

  // Brainhew
  if (row["index"] === "Brainhew") {

    // +14 to Minimum Damage
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 14;
    row["max1"] = 14;

    // +25 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +4 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // 10 - 13% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 13;

    // +80 - 120% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 120;

    // Adds 35 - 55 Fire Damage
    row["prop6"] = "dmg-fire";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 55;

    // +35% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // Level 3 Blessed Aim Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Blessed Aim";
    row["min8"] = 3;
    row["max8"] = 3;

  }

  // The Humongous
  if (row["index"] === "The Humongous") {

    // +20 - 30 to Strength
    row["prop1"] = "str";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 30;

    // +8 to Minimum Damage
    row["prop2"] = "dmg-min";
    row["par2"] = "";
    row["min2"] = 8;
    row["max2"] = 8;

    // +15 - 25 to Maximum Damage
    row["prop3"] = "dmg-max";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 25;

    // 33% Chance of Crushing Blow
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 33;
    row["max4"] = 33;

    // Requirements -20%
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +120 - 160% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 120;
    row["max6"] = 160;

    // -40% Target Defense
    row["prop7"] = "reduce-ac";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 13% Chance of Crushing Blow
    row["prop8"] = "crush";
    row["par8"] = "";
    row["min8"] = 13;
    row["max8"] = 13;

  }

  // Coldkill
  if (row["index"] === "Coldkill") {

    // Adds 40 Cold Damage
    row["prop1"] = "dmg-cold";
    row["par1"] = "50";
    row["min1"] = 40;
    row["max1"] = 40;

    // Cold Resist +45%
    row["prop2"] = "res-cold";
    row["par2"] = "";
    row["min2"] = 45;
    row["max2"] = 45;

    // +15% to Maximum Cold Resist
    row["prop3"] = "res-cold-max";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +30% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 10% Chance to cast level 10 Ice Blast on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "45";
    row["min5"] = 10;
    row["max5"] = 10;

    // 10% Chance to cast level 5 Frost Nova when struck
    row["prop6"] = "gethit-skill";
    row["par6"] = "44";
    row["min6"] = 10;
    row["max6"] = 5;

    // +150 - 190% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 190;

    // 10% Chance to cast level 10 Glacial Spike on striking
    row["prop8"] = "hit-skill";
    row["par8"] = "Glacial Spike";
    row["min8"] = 10;
    row["max8"] = 10;

  }

  // Butcher's Pupil
  if (row["index"] === "Butcher's Pupil") {

    // 35% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // 25% Chance of Open Wounds
    row["prop2"] = "openwounds";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +150 - 200% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // Repairs 1 durability in 5 seconds
    row["prop4"] = "rep-dur";
    row["par4"] = "20";
    row["min4"] = "";
    row["max4"] = "";

    // +30% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // Adds 30 - 50 Damage
    row["prop6"] = "dmg-norm";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // 3 - 5% Life stolen per hit
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 5;

  }

  // Islestrike
  if (row["index"] === "Islestrike") {

    // +2 to Druid Skill Levels
    row["prop1"] = "dru";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +10 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +10 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // +10 to Vitality
    row["prop4"] = "vit";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +10 to Energy
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +50 Defense vs. Missile
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // 25% Chance of Crushing Blow
    row["prop7"] = "crush";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // +170 - 190% Enhanced Damage
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 170;
    row["max8"] = 190;

    // +3 - 4 to Maul ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "233";
    row["min9"] = 3;
    row["max9"] = 4;

    // +3 - 4 to Fury ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "248";
    row["min10"] = 3;
    row["max10"] = 4;

  }

  // Pompe's Wrath
  if (row["index"] === "Pompe's Wrath") {

    // 15% Chance to cast level 18 Volcano on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "244";
    row["min1"] = 15;
    row["max1"] = 18;

    // Slows Target by 50%
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Adds 150 - 200 Fire Damage
    row["prop3"] = "dmg-fire";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // 15% Chance to cast level 18 Molten Boulder on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Molten Boulder";
    row["min4"] = 15;
    row["max4"] = 18;

    // +140 - 170% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 170;

    // Fire Absorb 10 - 15%
    row["prop6"] = "abs-fire";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

    // -8 - 15% to Enemy Fire Resistance
    row["prop7"] = "pierce-fire";
    row["par7"] = "";
    row["min7"] = 8;
    row["max7"] = 15;

    // +1 - 3 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 3;

  }

  // Guardian Naga
  if (row["index"] === "Guardian Naga") {

    // 10% Chance to cast level 14 Poison Nova on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "92";
    row["min1"] = 10;
    row["max1"] = 14;

    // Attacker Takes Damage of 80
    row["prop2"] = "thorns";
    row["par2"] = "";
    row["min2"] = 80;
    row["max2"] = 80;

    // Poison Resist +40%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // +150 - 180% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 180;

    // Adds 250 Poison Damage Over 10 Seconds
    row["prop5"] = "dmg-pois";
    row["par5"] = "250";
    row["min5"] = 256;
    row["max5"] = 256;

    // +20 to Maximum Damage
    row["prop6"] = "dmg-max";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

  }

  // Warlord's Trust
  if (row["index"] === "Warlord's Trust") {

    // +75 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 75;
    row["max1"] = 75;

    // Replenish Life +20
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +0,5 to Vitality (Based on Character Level)
    row["prop3"] = "vit/lvl";
    row["par3"] = "4";
    row["min3"] = "";
    row["max3"] = "";

    // All Resistances +10 - 15
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // Repairs 1 durability in 4 seconds
    row["prop5"] = "rep-dur";
    row["par5"] = "25";
    row["min5"] = "";
    row["max5"] = "";

    // +175 - 235% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 175;
    row["max6"] = 235;

    // Ethereal
    row["prop7"] = "ethereal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +20% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Spellsteel
  if (row["index"] === "Spellsteel") {

    // Requirements --60%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -60;
    row["max1"] = -60;

    // +100 - 150 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // Magic Damage Reduced by 12 - 15
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 12;
    row["max3"] = 15;

    // +60% Faster Cast Rate
    row["prop4"] = "cast1";
    row["par4"] = "";
    row["min4"] = 60;
    row["max4"] = 60;

    // +165% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 165;
    row["max5"] = 165;

    // Regenerate Mana 25%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // Level 1 Teleport (20/20 Charges)
    row["prop7"] = "charged";
    row["par7"] = "54";
    row["min7"] = 20;
    row["max7"] = 1;

    // Level 3 Decrepify (30/30 Charges)
    row["prop8"] = "charged";
    row["par8"] = "87";
    row["min8"] = 30;
    row["max8"] = 3;

    // Level 10 Holy Bolt (100/100 Charges)
    row["prop9"] = "charged";
    row["par9"] = "101";
    row["min9"] = 100;
    row["max9"] = 10;

    // Level 12 Firestorm (60/60 Charges)
    row["prop10"] = "charged";
    row["par10"] = "225";
    row["min10"] = 60;
    row["max10"] = 12;

    // +0 - 6 to [Class] Skill Levels
    row["prop11"] = "randclassskill";
    row["par11"] = "";
    row["min11"] = 0;
    row["max11"] = 6;

  }

  // Stormrider
  if (row["index"] === "Stormrider") {

    // 10% Chance to cast level 16 Chain Lightning on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "53";
    row["min1"] = 10;
    row["max1"] = 16;

    // 10% Chance to cast level 16 Charged Bolt on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "38";
    row["min2"] = 10;
    row["max2"] = 16;

    // Adds 1 - 400 Lightning Damage
    row["prop3"] = "dmg-ltng";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 400;

    // Adds 35 - 75 Damage
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 35;
    row["max4"] = 75;

    // +175 - 250% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 175;
    row["max5"] = 250;

    // Durability: 50 of 50
    row["prop6"] = "dur";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // Attacker Takes Lightning Damage of 90
    row["prop7"] = "light-thorns";
    row["par7"] = "";
    row["min7"] = 90;
    row["max7"] = 90;

    // 10% Chance to cast level 16 Nova when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "Nova";
    row["min8"] = 10;
    row["max8"] = 16;

    // -8 - 12% to Enemy Lightning Resistance
    row["prop9"] = "pierce-ltng";
    row["par9"] = "";
    row["min9"] = 8;
    row["max9"] = 12;

    // +8 - 12% to Lightning Skill Damage
    row["prop10"] = "extra-ltng";
    row["par10"] = "";
    row["min10"] = 8;
    row["max10"] = 12;

  }

  // Boneslayer Blade
  if (row["index"] === "Boneslayer Blade") {

    // +5 to Attack Rating against Undead (Based on Character Level)
    row["prop1"] = "att-und/lvl";
    row["par1"] = "10";
    row["min1"] = "";
    row["max1"] = "";

    // +2,5% Damage to Undead (Based on Character Level)
    row["prop2"] = "dmg-und/lvl";
    row["par2"] = "20";
    row["min2"] = "";
    row["max2"] = "";

    // +10 - 18 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 18;

    // +25% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 35% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 35;
    row["max5"] = 35;

    // +220 - 260% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 220;
    row["max6"] = 260;

    // Level 20 Holy Bolt (200/200 Charges)
    row["prop7"] = "charged";
    row["par7"] = "101";
    row["min7"] = 200;
    row["max7"] = 20;

    // 50% Chance to cast level 15 Fist of the Heavens when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "121";
    row["min8"] = 50;
    row["max8"] = 15;

  }

  // The Minataur
  if (row["index"] === "The Minataur") {

    // Hit Blinds Target +2
    row["prop1"] = "stupidity";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // Half Freeze Duration
    row["prop2"] = "half-freeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // +30 - 40 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 40;

    // Slows Target by 50%
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 30% Chance of Crushing Blow
    row["prop5"] = "crush";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // Adds 30 - 50 Damage
    row["prop6"] = "dmg-norm";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // +200 - 260% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 200;
    row["max7"] = 260;

    // +1 to Charge
    row["prop8"] = "oskill";
    row["par8"] = "Charge";
    row["min8"] = 1;
    row["max8"] = 1;

    // 20% Chance of Crushing Blow
    row["prop9"] = "crush";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

  }

  // Razoredge
  if (row["index"] === "Razoredge") {

    // +175 - 225% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 175;
    row["max1"] = 225;

    // +40% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // -33% Target Defense
    row["prop3"] = "reduce-ac";
    row["par3"] = "";
    row["min3"] = 33;
    row["max3"] = 33;

    // 50% Deadly Strike
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 50% Chance of Open Wounds
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Attacker Takes Damage of 150
    row["prop6"] = "thorns";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 150;

    // +5 - 10 to all Attributes
    row["prop7"] = "all-stats";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 10;

  }

  // Runemaster
  if (row["index"] === "Runemaster") {

    // +220 - 270% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 220;
    row["max1"] = 270;

    // Socketed (3 - 5)
    row["prop2"] = "sock";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 5;

    // +5% to Maximum Cold Resist
    row["prop3"] = "res-cold-max";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // Cannot Be Frozen
    row["prop4"] = "nofreeze";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // Cold Resist +50%
    row["prop5"] = "res-cold";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Repairs 1 durability in 10 seconds
    row["prop6"] = "rep-dur";
    row["par6"] = "10";
    row["min6"] = "";
    row["max6"] = "";

    // +30% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

  }

  // Cranebeak
  if (row["index"] === "Cranebeak") {

    // +240 - 300% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 240;
    row["max1"] = 300;

    // Adds 1 - 305 Lightning Damage
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 305;

    // +40% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // -25% Target Defense
    row["prop4"] = "reduce-ac";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 20 - 50% Better Chance of Getting Magic Items
    row["prop5"] = "mag%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 50;

    // +6 - 8 to Raven
    row["prop6"] = "oskill";
    row["par6"] = "Raven";
    row["min6"] = 6;
    row["max6"] = 8;

    // 25% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

  }

  // Deathcleaver
  if (row["index"] === "Deathcleaver") {

    // +230 - 280% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 230;
    row["max1"] = 280;

    // 66% Deadly Strike
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 66;
    row["max2"] = 66;

    // -33% Target Defense
    row["prop3"] = "reduce-ac";
    row["par3"] = "";
    row["min3"] = 33;
    row["max3"] = 33;

    // +40% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // +6 - 9 Life after each Kill
    row["prop5"] = "heal-kill";
    row["par5"] = "";
    row["min5"] = 6;
    row["max5"] = 9;

    // Repairs 1 durability in 5 seconds
    row["prop6"] = "rep-dur";
    row["par6"] = "20";
    row["min6"] = "";
    row["max6"] = "";

  }

  // Ethereal Edge
  if (row["index"] === "Ethereal Edge") {

    // +150 - 180% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 180;

    // +35% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // Fire Absorb 10 - 12%
    row["prop3"] = "abs-fire";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 12;

    // +150 - 200% Damage to Demons
    row["prop4"] = "dmg-demon";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 200;

    // +5 - 10 Life after each Demon Kill
    row["prop5"] = "demon-heal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 10;

    // +270 - 350 to Attack Rating
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 270;
    row["max6"] = 350;

    // Ethereal
    row["prop7"] = "ethereal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Indestructible
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // +25 - % Faster Run/Walk
    row["prop9"] = "move1";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

  }

  // Hellslayer
  if (row["index"] === "Hellslayer") {

    // +0,5 to Strength (Based on Character Level)
    row["prop1"] = "str/lvl";
    row["par1"] = "4";
    row["min1"] = "";
    row["max1"] = "";

    // +0,5 to Vitality (Based on Character Level)
    row["prop2"] = "vit/lvl";
    row["par2"] = "4";
    row["min2"] = "";
    row["max2"] = "";

    // +3% Enhanced Maximum Damage (Based on Character Level)
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "24";
    row["min3"] = "";
    row["max3"] = "";

    // Adds 150 - 250 Fire Damage
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 250;

    // +70 - 90 to Life
    row["prop5"] = "hp";
    row["par5"] = "";
    row["min5"] = 70;
    row["max5"] = 90;

    // +120 - 150% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 120;
    row["max6"] = 150;

    // 10% Chance to cast level 20 Fire Ball on attack
    row["prop7"] = "att-skill";
    row["par7"] = "47";
    row["min7"] = 10;
    row["max7"] = 20;

    // +20 - 25% to Fire Skill Damage
    row["prop8"] = "extra-fire";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 25;

    // Fire Resist +30 - 40%
    row["prop9"] = "res-fire";
    row["par9"] = "";
    row["min9"] = 30;
    row["max9"] = 40;

  }

  // Messerschmidt's Reaver
  if (row["index"] === "Messerschmidt's Reaver") {

    // +4% Enhanced Maximum Damage (Based on Character Level)
    row["prop1"] = "dmg%/lvl";
    row["par1"] = "32";
    row["min1"] = "";
    row["max1"] = "";

    // +200% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // +15 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +15 to Dexterity
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +15 to Vitality
    row["prop5"] = "vit";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +15 to Energy
    row["prop6"] = "enr";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // Adds 20 - 240 Fire Damage
    row["prop7"] = "dmg-fire";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 240;

    // Durability: 25 of 25
    row["prop8"] = "dur";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    // 130% Bonus to Attack Rating
    row["prop9"] = "att%";
    row["par9"] = "";
    row["min9"] = 130;
    row["max9"] = 130;

    // +5 - 6 to Axe Mastery ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "128";
    row["min10"] = 5;
    row["max10"] = 6;

    // Level 5 - 6 Might Aura When Equipped
    row["prop11"] = "aura";
    row["par11"] = "Might";
    row["min11"] = 5;
    row["max11"] = 6;

  }

  // Executioner's Justice
  if (row["index"] === "Executioner's Justice") {

    // +300 - 350% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 300;
    row["max1"] = 350;

    // 25% Chance of Crushing Blow
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // -33% Target Defense
    row["prop3"] = "reduce-ac";
    row["par3"] = "";
    row["min3"] = 33;
    row["max3"] = 33;

    // 50% Chance to cast level 6 Decrepify when you Kill an Enemy
    row["prop4"] = "kill-skill";
    row["par4"] = "Decrepify";
    row["min4"] = 50;
    row["max4"] = 6;

    // +50% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // 0,875% Deadly Strike (Based on Character Level)
    row["prop6"] = "deadly/lvl";
    row["par6"] = "7";
    row["min6"] = "";
    row["max6"] = "";

    // Level 6 - 9 Concentration Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "113";
    row["min7"] = 6;
    row["max7"] = 9;

  }

  // Goreshovel
  if (row["index"] === "Goreshovel") {

    // +30% Increased Attack Speed
    row["prop1"] = "swing1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +25 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 60% Chance of Open Wounds
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 60;
    row["max3"] = 60;

    // +40 - 50% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 50;

    // +9 to Maximum Damage
    row["prop5"] = "dmg-max";
    row["par5"] = "";
    row["min5"] = 9;
    row["max5"] = 9;

    // +3 - 5 to Find Item ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "142";
    row["min6"] = 3;
    row["max6"] = 5;

    // 10 - 20% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 20;

  }

  /*
  =====================================================================================
  ====================================== MACES ======================================
  =====================================================================================
  */

  // Felloak
  if (row["index"] === "Felloak") {

    // Lightning Resist +60%
    row["prop1"] = "res-ltng";
    row["par1"] = "";
    row["min1"] = 60;
    row["max1"] = 60;

    // Fire Resist +20%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +5 - 7 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 7;

    // +6 to Minimum Fire Damage
    row["prop4"] = "fire-min";
    row["par4"] = "";
    row["min4"] = 6;
    row["max4"] = 6;

    // +8 to Maximum Fire Damage
    row["prop5"] = "fire-max";
    row["par5"] = "";
    row["min5"] = 8;
    row["max5"] = 8;

    // +70 - 80% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 80;

  }

  // Stoutnail
  if (row["index"] === "Stoutnail") {

    // Attacker Takes Damage of 3 - 10
    row["prop1"] = "thorns";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 10;

    // +100% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // +7 to Vitality
    row["prop3"] = "vit";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 7;

    // Magic Damage Reduced by 2
    row["prop4"] = "red-mag";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // Adds 15 - 20 Magic Damage
    row["prop5"] = "dmg-mag";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 20;

  }

  // Crushflange
  if (row["index"] === "Crushflange") {

    // +15 to Strength
    row["prop1"] = "str";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // Cannot Be Frozen
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // +2 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // Fire Resist +50%
    row["prop4"] = "res-fire";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // +50 - 60% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 60;

    // 33% Chance of Crushing Blow
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 33;
    row["max6"] = 33;

  }

  // Bloodrise
  if (row["index"] === "Bloodrise") {

    // +120% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 120;
    row["max1"] = 120;

    // 50% Bonus to Attack Rating
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 45% Chance of Open Wounds
    row["prop3"] = "openwounds";
    row["par3"] = "";
    row["min3"] = 45;
    row["max3"] = 45;

    // +2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 2;
    row["max4"] = 2;

    // +10% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +3 to Sacrifice
    row["prop6"] = "oskill";
    row["par6"] = "96";
    row["min6"] = 3;
    row["max6"] = 3;

    // 5% Life stolen per hit
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

  }

  // The Generals Tan Do Li Ga
  if (row["index"] === "The Generals Tan Do Li Ga") {

    // +1 to Minimum Damage
    row["prop1"] = "dmg-min";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +20 to Maximum Damage
    row["prop2"] = "dmg-max";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // Slows Target by 50%
    row["prop3"] = "slow";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +25 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 5% Mana stolen per hit
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 5;

    // +70 - 90% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 90;

    // +20% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

    // Repairs 1 durability in 10 seconds
    row["prop9"] = "rep-dur";
    row["par9"] = "10";
    row["min9"] = "";
    row["max9"] = "";

  }

  // Ironstone
  if (row["index"] === "Ironstone") {

    // +100 - 150 to Attack Rating
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 150;

    // +100 - 150% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // +1 to Minimum Lightning Damage
    row["prop3"] = "ltng-min";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // +30 to Maximum Lightning Damage
    row["prop4"] = "ltng-max";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +10 to Strength
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 10% Chance of Crushing Blow
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

  }

  // Bonesob
  if (row["index"] === "Bonesob") {

    // +200 - 300% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 200;
    row["max1"] = 300;

    // 40% Chance of Crushing Blow
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Fire Resist +30%
    row["prop3"] = "res-fire";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // Cold Resist +30%
    row["prop4"] = "res-cold";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +50% Damage to Undead
    row["prop5"] = "dmg-undead";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Repairs 1 durability in 10 seconds
    row["prop6"] = "rep-dur";
    row["par6"] = "10";
    row["min6"] = "";
    row["max6"] = "";

    // +1 - 3  to Barbarian Skill Levels
    row["prop7"] = "bar";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

  }

  // Steeldriver
  if (row["index"] === "Steeldriver") {

    // Requirements --50%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -50;
    row["max1"] = -50;

    // +40% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Heal Stamina Plus 25%
    row["prop3"] = "regen-stam";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +150 - 250% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 250;

    // +0,5 to Strength (Based on Character Level)
    row["prop5"] = "str/lvl";
    row["par5"] = "4";
    row["min5"] = "";
    row["max5"] = "";

  }

  // Dark Clan Crusher
  if (row["index"] === "Dark Clan Crusher") {

    // +2 to Druid Skill Levels
    row["prop1"] = "dru";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +200% Damage to Demons
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // +200 to Attack Rating against Demons
    row["prop3"] = "att-demon";
    row["par3"] = "";
    row["min3"] = 200;
    row["max3"] = 200;

    // +195% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 195;
    row["max4"] = 195;

    // 20 - 25% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 25;

    // +15 Life after each Demon Kill
    row["prop6"] = "demon-heal";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // +2 - 4 to Fury ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Fury";
    row["min7"] = 2;
    row["max7"] = 4;

    // 25% Chance of Crushing Blow
    row["prop8"] = "crush";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Sureshrill Frost
  if (row["index"] === "Sureshrill Frost") {

    // Adds 63 - 112 Cold Damage
    row["prop1"] = "dmg-cold";
    row["par1"] = "125";
    row["min1"] = 63;
    row["max1"] = 112;

    // Cannot Be Frozen
    row["prop2"] = "nofreeze";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // +150 - 180% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 180;

    // Adds 5 - 10 Damage
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // Freezes Target +3
    row["prop5"] = "freeze";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 3;

    // Level 9 Frozen Orb (50/50 Charges)
    row["prop6"] = "charged";
    row["par6"] = "64";
    row["min6"] = 50;
    row["max6"] = 9;

    // 15% Chance to cast level 8 Frozen Orb on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "64";
    row["min7"] = 15;
    row["max7"] = 8;

  }

  // Moonfall
  if (row["index"] === "Moonfall") {

    // 10% Chance to cast level 12 Meteor on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "56";
    row["min1"] = 10;
    row["max1"] = 12;

    // Adds 55 - 115 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 55;
    row["max2"] = 115;

    // Magic Damage Reduced by 9 - 12
    row["prop3"] = "red-mag";
    row["par3"] = "";
    row["min3"] = 9;
    row["max3"] = 12;

    // +120 - 150% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 120;
    row["max4"] = 150;

    // +2 to Light Radius
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 2;

    // Level 11 Meteor (60/60 Charges)
    row["prop6"] = "charged";
    row["par6"] = "56";
    row["min6"] = 60;
    row["max6"] = 11;

    // Adds 10 - 15 Damage
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // +2 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

  }

  // Baezil's Vortex
  if (row["index"] === "Baezil's Vortex") {

    // 15% Chance to cast level 12 Nova on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "48";
    row["min1"] = 15;
    row["max1"] = 12;

    // Adds 1 - 150 Lightning Damage
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 150;

    // +100 to Mana
    row["prop3"] = "mana";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // Lightning Resist +25%
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // +160 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 160;
    row["max5"] = 200;

    // +20% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // Level 15 Nova (80/80 Charges)
    row["prop7"] = "charged";
    row["par7"] = "48";
    row["min7"] = 80;
    row["max7"] = 15;

    // +10 - 15% to Lightning Skill Damage
    row["prop8"] = "extra-ltng";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

  }

  // Earthshaker
  if (row["index"] === "Earthshaker") {

    // 15% Chance to cast level 12 Eruption on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "234";
    row["min1"] = 15;
    row["max1"] = 12;

    // All Resistances +10 - 15
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +180% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 180;
    row["max4"] = 180;

    // Hit Blinds Target +1
    row["prop5"] = "stupidity";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // +3 to Elemental Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "17";
    row["min6"] = 3;
    row["max6"] = 3;

    // Durability: 50 of 50
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // +20% Faster Cast Rate
    row["prop8"] = "cast1";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

  }

  // Bloodtree Stump
  if (row["index"] === "Bloodtree Stump") {

    // 50% Chance of Crushing Blow
    row["prop1"] = "crush";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // +180 - 220% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 180;
    row["max2"] = 220;

    // All Resistances +20
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +25 to Strength
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // +2 to Combat Masteries [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "13";
    row["min5"] = 2;
    row["max5"] = 2;

    // +3 - 4 to Mace Mastery ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "129";
    row["min6"] = 3;
    row["max6"] = 4;

    // Durability: 40 of 40
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // 4 - 8% Life stolen per hit
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 4;
    row["max8"] = 8;

  }

  // The Gavel of Pain
  if (row["index"] === "The Gavel of Pain") {

    // 12% Chance to cast level 6 Amplify Damage on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "66";
    row["min1"] = 12;
    row["max1"] = 6;

    // 12% Chance to cast level 14 Iron Maiden when struck
    row["prop2"] = "gethit-skill";
    row["par2"] = "76";
    row["min2"] = 12;
    row["max2"] = 14;

    // Attacker Takes Damage of 130
    row["prop3"] = "thorns";
    row["par3"] = "";
    row["min3"] = 130;
    row["max3"] = 130;

    // Repairs 1 durability in 10 seconds
    row["prop4"] = "rep-dur";
    row["par4"] = "10";
    row["min4"] = 1;
    row["max4"] = 1;

    // Adds 30 - 50 Damage
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 50;

    // +160 - 200% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 160;
    row["max6"] = 200;

    // Level 8 Amplify Damage (30/30 Charges)
    row["prop7"] = "charged";
    row["par7"] = "66";
    row["min7"] = 30;
    row["max7"] = 8;

    // 25% Bonus to Attack Rating
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Nord's Tenderizer
  if (row["index"] === "Nord's Tenderizer") {

    // +270 - 330% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 270;
    row["max1"] = 330;

    // Freezes Target +2 - 4
    row["prop2"] = "freeze";
    row["par2"] = "";
    row["min2"] = 2;
    row["max2"] = 4;

    // +25% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // Level 16 Blizzard (12/12 Charges)
    row["prop4"] = "charged";
    row["par4"] = "Blizzard";
    row["min4"] = 12;
    row["max4"] = 16;

    // 150 - 180% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 180;

    // +5 - 15 Cold Absorb
    row["prop6"] = "abs-cold%";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // Adds 205 - 455 Cold Damage
    row["prop7"] = "dmg-cold";
    row["par7"] = "125";
    row["min7"] = 205;
    row["max7"] = 455;

    // -15 - 25% to Enemy Cold Resistance
    row["prop8"] = "pierce-cold";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 25;

  }

  // Demonlimb
  if (row["index"] === "Demonlimb") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // Adds 222 - 333 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 222;
    row["max2"] = 333;

    // 7 - 13% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 13;

    // Level 23 Enchant (30/30 Charges)
    row["prop4"] = "charged";
    row["par4"] = "Enchant";
    row["min4"] = 30;
    row["max4"] = 23;

    // Repairs 1 durability in 20 seconds
    row["prop5"] = "rep-dur";
    row["par5"] = "5";
    row["min5"] = "";
    row["max5"] = "";

    // +234% Damage to Demons
    row["prop6"] = "dmg-demon";
    row["par6"] = "";
    row["min6"] = 234;
    row["max6"] = 234;

    // Fire Resist +15 - 20%
    row["prop7"] = "res-fire";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

    // +120 - 150 to Attack Rating against Demons
    row["prop8"] = "att-demon";
    row["par8"] = "";
    row["min8"] = 120;
    row["max8"] = 150;

  }

  // Baranar's Star
  if (row["index"] === "Baranar's Star") {

    // 200% Bonus to Attack Rating
    row["prop1"] = "att%";
    row["par1"] = "";
    row["min1"] = 200;
    row["max1"] = 200;

    // +200% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 200;

    // +15 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +15 to Strength
    row["prop4"] = "str";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +50% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // Durability: 100 of 100
    row["prop6"] = "dur";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // Adds 1 - 333 Lightning Damage
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 333;

    // Adds 1 - 333 Fire Damage
    row["prop8"] = "dmg-fire";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 333;

    // Adds 1 - 333 Cold Damage
    row["prop9"] = "dmg-cold";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 333;

    // Socketed (1 - 2)
    row["prop10"] = "sock";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 2;

  }

  // Horizon's Tornado
  if (row["index"] === "Horizon's Tornado") {

    // +230 - 280% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 230;
    row["max1"] = 280;

    // +50% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Slows Target by 20%
    row["prop3"] = "slow";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 20% Chance to cast level 15 Tornado on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Tornado";
    row["min4"] = 20;
    row["max4"] = 15;

    // Requirements --20%
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -20;
    row["max5"] = -20;

    // +4 - 6 to Tornado ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Tornado";
    row["min6"] = 4;
    row["max6"] = 6;

    // +1 - 2 to Druid Skill Levels
    row["prop7"] = "dru";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // 0,75% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop8"] = "mag%/lvl";
    row["par8"] = "6";
    row["min8"] = "";
    row["max8"] = "";

  }

  // Stone Crusher
  if (row["index"] === "Stone Crusher") {

    // +280 - 320% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 280;
    row["max1"] = 320;

    // +20 - 30 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 30;

    // 40% Chance of Crushing Blow
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 40;

    // -25% Target Defense
    row["prop4"] = "reduce-ac";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // --100 to Monster Defense Per Hit
    row["prop5"] = "dmg-ac";
    row["par5"] = "";
    row["min5"] = -100;
    row["max5"] = -100;

    // Damage +30 - 50
    row["prop6"] = "dmg";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // +25% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

  }

  // Schaefer's Hammer
  if (row["index"] === "Schaefer's Hammer") {

    // 20% Chance to cast level 10 Static Field on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "42";
    row["min1"] = 20;
    row["max1"] = 10;

    // +50 to Life
    row["prop2"] = "hp";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +8 to Attack Rating (Based on Character Level)
    row["prop3"] = "att/lvl";
    row["par3"] = "16";
    row["min3"] = "";
    row["max3"] = "";

    // Lightning Resist +75%
    row["prop4"] = "res-ltng";
    row["par4"] = "";
    row["min4"] = 75;
    row["max4"] = 75;

    // +20% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +2 to Maximum Damage (Based on Character Level)
    row["prop6"] = "dmg/lvl";
    row["par6"] = "16";
    row["min6"] = "";
    row["max6"] = "";

    // Repairs 1 durability in 10 seconds
    row["prop7"] = "rep-dur";
    row["par7"] = "10";
    row["min7"] = 1;
    row["max7"] = 1;

    // +100 - 130% Enhanced Damage
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 130;

    // +1 to Light Radius
    row["prop9"] = "light";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // Adds 50 - 200 Lightning Damage
    row["prop10"] = "dmg-ltng";
    row["par10"] = "";
    row["min10"] = 50;
    row["max10"] = 200;

    // Level 5 - 7 Vigor Aura When Equipped
    row["prop11"] = "aura";
    row["par11"] = "Vigor";
    row["min11"] = 5;
    row["max11"] = 7;

  }

  // Windhammer
  if (row["index"] === "Windhammer") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // 50% Chance of Crushing Blow
    row["prop2"] = "crush";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +60% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 60;
    row["max3"] = 60;

    // 33% Chance to cast level 22 Twister on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Twister";
    row["min4"] = 33;
    row["max4"] = 22;

    // +3 to Hurricane
    row["prop5"] = "oskill";
    row["par5"] = "Hurricane";
    row["min5"] = 3;
    row["max5"] = 3;

    // Socketed (3 - 6)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 6;

    // +60% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 60;
    row["max7"] = 60;

    // 33% Chance to cast level 22 Tornado on striking
    row["prop8"] = "hit-skill";
    row["par8"] = "Tornado";
    row["min8"] = 33;
    row["max8"] = 22;

  }

  // Earthshifter
  if (row["index"] === "Earthshifter") {

    // +250 - 300% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 300;

    // 25% Chance to cast level 14 Eruption on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "Eruption";
    row["min2"] = 25;
    row["max2"] = 14;

    // 33% Chance of Crushing Blow
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 33;
    row["max3"] = 33;

    // +50% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 15% Chance to cast level 25 Volcano on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "Volcano";
    row["min5"] = 15;
    row["max5"] = 25;

    // +7 to Elemental Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "17";
    row["min6"] = 7;
    row["max6"] = 7;

    // +30% Faster Cast Rate
    row["prop7"] = "cast1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // Cannot Be Frozen
    row["prop8"] = "nofreeze";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // The Cranium Basher
  if (row["index"] === "The Cranium Basher") {

    // +40% Increased Attack Speed
    row["prop1"] = "swing1";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // Repairs 1 durability in 10 seconds
    row["prop2"] = "rep-dur";
    row["par2"] = "10";
    row["min2"] = 1;
    row["max2"] = 1;

    // +1 to Strength (Based on Character Level)
    row["prop3"] = "str/lvl";
    row["par3"] = "8";
    row["min3"] = "";
    row["max3"] = "";

    // All Resistances +25
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 75% Chance of Crushing Blow
    row["prop5"] = "crush";
    row["par5"] = "";
    row["min5"] = 75;
    row["max5"] = 75;

    // Adds 20 Damage
    row["prop6"] = "dmg-norm";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +280 - 330% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 280;
    row["max7"] = 330;

    // 4% Chance to cast level 1 Amplify Damage on striking
    row["prop8"] = "hit-skill";
    row["par8"] = "66";
    row["min8"] = 4;
    row["max8"] = 1;

    // Monster Physical Immunity is Sundered
    row["prop9"] = "pierce-immunity-damage";
    row["par9"] = "";
    row["min9"] = 300;
    row["max9"] = 300;

    // Socketed (1 - 3)
    row["prop10"] = "sock";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 3;

  }

  /*
  =====================================================================================
  ====================================== SCEPTERS ======================================
  =====================================================================================
  */
  // Stormeye
  if (row["index"] === "Stormeye") {

    // Adds 1 - 20 Lightning Damage
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 20;

    // Adds 10 - 20 Cold Damage
    row["prop2"] = "dmg-cold";
    row["par2"] = "75";
    row["min2"] = 10;
    row["max2"] = 20;

    // Replenish Life +10
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // +80 - 120% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 80;
    row["max4"] = 120;

    // +3 - 5 to Resist Lightning ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "110";
    row["min5"] = 3;
    row["max5"] = 5;

    // +3 to Holy Shock ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "118";
    row["min6"] = 3;
    row["max6"] = 3;

    // +2 to Fist of the Heavens ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "121";
    row["min7"] = 2;
    row["max7"] = 2;

  }

  // Zakarum's Hand
  if (row["index"] === "Zakarum's Hand") {

    // 8% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 8;
    row["max1"] = 8;

    // Ignore Target's Defense
    row["prop2"] = "ignore-ac";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Regenerate Mana 10%
    row["prop3"] = "regen-mana";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // Heal Stamina Plus 15%
    row["prop4"] = "regen-stam";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // 12% Chance to cast level 6 Blizzard on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "59";
    row["min5"] = 12;
    row["max5"] = 6;

    // +180 - 220% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 180;
    row["max6"] = 220;

    // +30% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // +3 - 5 to Holy Freeze ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "114";
    row["min8"] = 3;
    row["max8"] = 5;

    // +3 - 5 to Holy Shock ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "118";
    row["min9"] = 3;
    row["max9"] = 5;

    // Half Freeze Duration
    row["prop10"] = "half-freeze";
    row["par10"] = "";
    row["min10"] = 1;
    row["max10"] = 1;

  }

  // The Fetid Sprinkler
  if (row["index"] === "The Fetid Sprinkler") {

    // +2 to Paladin Skill Levels
    row["prop1"] = "pal";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // 5% Chance to cast level 1 Decrepify on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "87";
    row["min2"] = 5;
    row["max2"] = 1;

    // 10% Chance to cast level 1 Confuse on striking
    row["prop3"] = "hit-skill";
    row["par3"] = "81";
    row["min3"] = 10;
    row["max3"] = 1;

    // Adds 150 Poison Damage Over 3 Seconds
    row["prop4"] = "dmg-pois";
    row["par4"] = "75";
    row["min4"] = 513;
    row["max4"] = 513;

    // +160 - 190% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 160;
    row["max5"] = 190;

    // +150 - 200 to Attack Rating
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 200;

    // Adds 15 - 25 Damage
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 25;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

  }

  // Hand of Blessed Light
  if (row["index"] === "Hand of Blessed Light") {

    // +2 to Paladin Skill Levels
    row["prop1"] = "pal";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +130 - 160% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 130;
    row["max2"] = 160;

    // 100% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // +50 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // Regenerate Mana 15%
    row["prop5"] = "regen-mana";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +4 to Light Radius
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 4;

    // Adds 20 - 45 Damage
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 45;

    // +4 to Holy Bolt ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "101";
    row["min8"] = 4;
    row["max8"] = 4;

    // +2 - 4 to Fist of the Heavens ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "121";
    row["min9"] = 2;
    row["max9"] = 4;

    // 10% Chance to cast level 12 Fist of the Heavens on striking
    row["prop10"] = "hit-skill";
    row["par10"] = "121";
    row["min10"] = 10;
    row["max10"] = 12;

    // +10 - 15% to Lightning Skill Damage
    row["prop11"] = "extra-ltng";
    row["par11"] = "";
    row["min11"] = 10;
    row["max11"] = 15;

  }

  // The Reedeemer
  if (row["index"] === "The Reedeemer") {

    // +250 - 300% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 300;

    // +250 - 300% Damage to Demons
    row["prop2"] = "dmg-demon";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 300;

    // +2 - 3 to Paladin Skill Levels
    row["prop3"] = "pal";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 3;

    // Requirements --60%
    row["prop4"] = "ease";
    row["par4"] = "";
    row["min4"] = -60;
    row["max4"] = -60;

    // +2 - 4 to Redemption ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Redemption";
    row["min5"] = 2;
    row["max5"] = 4;

    // +2 - 4 to Holy Bolt ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Holy Bolt";
    row["min6"] = 2;
    row["max6"] = 4;

    // +3 to Light Radius
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 3;

    // -33% Target Defense
    row["prop8"] = "reduce-ac";
    row["par8"] = "";
    row["min8"] = 33;
    row["max8"] = 33;

    // Damage +80 - 130
    row["prop9"] = "dmg";
    row["par9"] = "";
    row["min9"] = 80;
    row["max9"] = 130;

    // +2 - 4 to Zeal ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "Zeal";
    row["min10"] = 2;
    row["max10"] = 4;

  }

  // Ironward
  if (row["index"] === "Ironward") {

    // +240 - 290% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 240;
    row["max1"] = 290;

    // Slows Target by 25%
    row["prop2"] = "slow";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 150 - 200% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // +40% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Adds 80 - 240 Magic Damage
    row["prop5"] = "dmg-mag";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 240;

    // Damage Reduced by 4 - 7
    row["prop6"] = "red-dmg";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 7;

    // Damage +150 - 200
    row["prop7"] = "dmg";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 200;

    // +2 - 4 to Combat Skills (Paladin) [Class only] Skills
    row["prop8"] = "skilltab";
    row["par8"] = "9";
    row["min8"] = 2;
    row["max8"] = 4;

    // 33% Chance of Crushing Blow
    row["prop9"] = "crush";
    row["par9"] = "";
    row["min9"] = 33;
    row["max9"] = 33;

  }

  /*
  =====================================================================================
  ====================================== POLEARMS =====================================
  =====================================================================================
  */

  // Dimoaks Hew
  if (row["index"] === "Dimoaks Hew") {

    // +15 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // +100% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // +20% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // -8 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = -8;
    row["max4"] = -8;

    // +4 - 8 to Strength
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 8;

  }

  // Steelgoad
  if (row["index"] === "Steelgoad") {

    // Adds 20 - 35 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 35;

    // 30% Deadly Strike
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +30 - 50 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 50;

    // All Resistances +5 - 10
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 10;

    // +60 - 80% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 80;

    // Durability: 20 - 40 of 20
    row["prop6"] = "dur";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 40;

  }

  // Soul Harvest
  if (row["index"] === "Soul Harvest") {

    // 30% Chance of Open Wounds
    row["prop1"] = "openwounds";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +45 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 45;
    row["max2"] = 45;

    // All Resistances +20
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +50 - 90% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 90;

    // 10% Mana stolen per hit
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +5 to Energy
    row["prop6"] = "enr";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

    // 10% Chance to cast level 5 Amplify Damage on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "66";
    row["min7"] = 10;
    row["max7"] = 5;

  }

  // The Battlebranch
  if (row["index"] === "The Battlebranch") {

    // +30% Increased Attack Speed
    row["prop1"] = "swing1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +10 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +50 - 70% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 70;

    // +50 - 100 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 100;

    // 7% Life stolen per hit
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 7;
    row["max5"] = 7;

    // Socketed (1 - 3)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 3;

  }

  // Woestave
  if (row["index"] === "Woestave") {

    // Slows Target by 50%
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // 50% Chance of Open Wounds
    row["prop2"] = "openwounds";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // Hit Blinds Target +3
    row["prop3"] = "stupidity";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

    // --50 to Monster Defense Per Hit
    row["prop4"] = "dmg-ac";
    row["par4"] = "";
    row["min4"] = -50;
    row["max4"] = -50;

    // Freezes Target +1
    row["prop5"] = "freeze";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // -3 to Light Radius
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = -3;
    row["max6"] = -3;

    // Prevent Monster Heal
    row["prop7"] = "noheal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +60 - 80% Enhanced Damage
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 60;
    row["max8"] = 80;

    // +25% Increased Attack Speed
    row["prop9"] = "swing1";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

  }

  // The Grim Reaper
  if (row["index"] === "The Grim Reaper") {

    // 100% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // Prevent Monster Heal
    row["prop2"] = "noheal";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // 5% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 5;
    row["max3"] = 5;

    // +80 - 120% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 80;
    row["max4"] = 120;

    // +15 to Minimum Damage
    row["prop5"] = "dmg-min";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // 5 - 7% Life stolen per hit
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 7;

    // +20% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // Reanimate As: [Returned]
    row["prop8"] = "reanimate";
    row["par8"] = "589";
    row["min8"] = 80;
    row["max8"] = 80;

  }

  // The Meat Scraper
  if (row["index"] === "The Meat Scraper") {

    // +150 - 200% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // +30% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // 10% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // 50% Chance of Open Wounds
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // 25 - 45% Better Chance of Getting Magic Items
    row["prop5"] = "mag%";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 45;

    // +3 - 5 to Combat Masteries [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "13";
    row["min6"] = 3;
    row["max6"] = 5;

    // +0,5 to Strength (Based on Character Level)
    row["prop7"] = "str/lvl";
    row["par7"] = "4";
    row["min7"] = "";
    row["max7"] = "";

  }

  // Blackleach Blade
  if (row["index"] === "Blackleach Blade") {

    // Requirements --25%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -25;
    row["max1"] = -25;

    // 10% Chance to cast level 5 Decrepify on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "87";
    row["min2"] = 10;
    row["max2"] = 5;

    // -2 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = -2;
    row["max3"] = -2;

    // 8% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 8;

    // +1,25 to Maximum Damage (Based on Character Level)
    row["prop5"] = "dmg/lvl";
    row["par5"] = "10";
    row["min5"] = "";
    row["max5"] = "";

    // +140 - 180% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 140;
    row["max6"] = 180;

    // Ethereal
    row["prop7"] = "ethereal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Indestructible
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // Athena's Wrath
  if (row["index"] === "Athena's Wrath") {

    // +1 - 3 to Druid Skill Levels
    row["prop1"] = "dru";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 3;

    // +15 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +1 to Life (Based on Character Level)
    row["prop4"] = "hp/lvl";
    row["par4"] = "8";
    row["min4"] = "";
    row["max4"] = "";

    // +1,5 to Maximum Damage (Based on Character Level)
    row["prop5"] = "dmg/lvl";
    row["par5"] = "12";
    row["min5"] = "";
    row["max5"] = "";

    // +150 - 180% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 180;

    // +2 - 3 to Shapeshifting [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "16";
    row["min7"] = 2;
    row["max7"] = 3;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

    // --75 to Monster Defense Per Hit
    row["prop9"] = "dmg-ac";
    row["par9"] = "";
    row["min9"] = -75;
    row["max9"] = -75;

  }

  // Pierre Tombale Couant
  if (row["index"] === "Pierre Tombale Couant") {

    // 55% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 55;
    row["max1"] = 55;

    // +3  to Barbarian Skill Levels
    row["prop2"] = "bar";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // +30% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 6% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 6;
    row["max4"] = 6;

    // Adds 20 - 35 Damage
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 35;

    // +160 - 220% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 160;
    row["max6"] = 220;

    // +100 - 200 to Attack Rating
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 200;

    // +3 to Whirlwind ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "151";
    row["min8"] = 3;
    row["max8"] = 3;

    // +35% Increased Attack Speed
    row["prop9"] = "swing1";
    row["par9"] = "";
    row["min9"] = 35;
    row["max9"] = 35;

  }

  // Husoldal Evo
  if (row["index"] === "Husoldal Evo") {

    // Replenish Life +20
    row["prop1"] = "regen";
    row["par1"] = "";
    row["min1"] = 20;
    row["max1"] = 20;

    // +200 - 250 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 250;

    // Prevent Monster Heal
    row["prop3"] = "noheal";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Adds 20 - 32 Damage
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 32;

    // +160 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 160;
    row["max5"] = 200;

    // +20% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // Level 7 - 9 Prayer Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "99";
    row["min7"] = 7;
    row["max7"] = 9;

  }

  // Grim's Burning Dead
  if (row["index"] === "Grim's Burning Dead") {

    // Adds 131 - 232 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 131;
    row["max1"] = 232;

    // Fire Resist +45%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 45;
    row["max2"] = 45;

    // +140 - 180% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 140;
    row["max3"] = 180;

    // Attacker Takes Damage of 90
    row["prop4"] = "thorns";
    row["par4"] = "";
    row["min4"] = 90;
    row["max4"] = 90;

    // Requirements --50%
    row["prop5"] = "ease";
    row["par5"] = "";
    row["min5"] = -50;
    row["max5"] = -50;

    // +5 to Necromancer Skill Levels
    row["prop6"] = "nec";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

    // -50% Target Defense
    row["prop7"] = "reduce-ac";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 50;

    // +20% Enhanced Defense
    row["prop8"] = "ac%";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;

    // +200 - 250 to Attack Rating
    row["prop9"] = "att";
    row["par9"] = "";
    row["min9"] = 200;
    row["max9"] = 250;

    // Reanimate As: [Returned]
    row["prop10"] = "reanimate";
    row["par10"] = "577";
    row["min10"] = 80;
    row["max10"] = 80;

    // +55% Increased Attack Speed
    row["prop11"] = "swing1";
    row["par11"] = "";
    row["min11"] = 55;
    row["max11"] = 55;

  }

  // Bonehew
  if (row["index"] === "Bonehew") {

    // +270 - 320% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 270;
    row["max1"] = 320;

    // +30% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // Level 14 Corpse Explosion (30/30 Charges)
    row["prop3"] = "charged";
    row["par3"] = "Corpse Explosion";
    row["min3"] = 30;
    row["max3"] = 14;

    // 50% Chance to cast level 26 Bone Spear on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Bone Spear";
    row["min4"] = 50;
    row["max4"] = 26;

    // Prevent Monster Heal
    row["prop5"] = "noheal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // Socketed (2 - 3)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

  }

  // Stormspire
  if (row["index"] === "Stormspire") {

    // Lightning Resist +50%
    row["prop1"] = "res-ltng";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 50;

    // 10% Chance to cast level 20 Chain Lightning on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "Chain Lightning";
    row["min2"] = 10;
    row["max2"] = 20;

    // +150 - 250% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 250;

    // -15 - 20% to Enemy Lightning Resistance
    row["prop4"] = "pierce-ltng";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 20;

    // 10% Chance to cast level 20 Charged Bolt on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "Charged Bolt";
    row["min5"] = 10;
    row["max5"] = 20;

    // +30% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 15% Chance to cast level 12 Static Field on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "Static Field";
    row["min7"] = 15;
    row["max7"] = 12;

    // Adds 1 - 999 Lightning Damage
    row["prop8"] = "dmg-ltng";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 999;

    // +13 - 15 to Thunder Storm
    row["prop9"] = "oskill";
    row["par9"] = "Thunder Storm";
    row["min9"] = 13;
    row["max9"] = 15;

    // +1 to Lightning Mastery
    row["prop10"] = "oskill";
    row["par10"] = "Lightning Mastery";
    row["min10"] = 1;
    row["max10"] = 1;

  }

  /*
  =====================================================================================
  ====================================== SPEARS ======================================
  =====================================================================================
  */

  // The Dragon Chang
  if (row["index"] === "The Dragon Chang") {

    // +35 to Attack Rating
    row["prop1"] = "att";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // +10 to Minimum Damage
    row["prop2"] = "dmg-min";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +2 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // +100% Damage to Undead
    row["prop4"] = "dmg-undead";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // Adds 12 - 18 Fire Damage
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 12;
    row["max5"] = 18;

    // +10 - 15% to Fire Skill Damage
    row["prop6"] = "extra-fire";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 15;

  }

  // Razortine
  if (row["index"] === "Razortine") {

    // Slows Target by 25%
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // -50% Target Defense
    row["prop2"] = "reduce-ac";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +15 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +8 to Dexterity
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 8;

    // +30% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // +50 - 80% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 80;

    // 30% Chance of Open Wounds
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

  }

  // Bloodthief
  if (row["index"] === "Bloodthief") {

    // 35% Chance of Open Wounds
    row["prop1"] = "openwounds";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // +10 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 8 - 12% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 8;
    row["max3"] = 12;

    // +26 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 26;
    row["max4"] = 26;

    // +50 - 70% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 70;

    // 15 - 30% Better Chance of Getting Magic Items
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 30;

    // Ethereal
    row["prop7"] = "ethereal";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Indestructible
    row["prop8"] = "indestruct";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

  }

  // Lance of Yaggai
  if (row["index"] === "Lance of Yaggai") {

    // Attacker Takes Damage of 48
    row["prop1"] = "thorns";
    row["par1"] = "";
    row["min1"] = 48;
    row["max1"] = 48;

    // +30 to Minimum Lightning Damage
    row["prop2"] = "ltng-min";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +60 to Maximum Lightning Damage
    row["prop3"] = "ltng-max";
    row["par3"] = "";
    row["min3"] = 60;
    row["max3"] = 60;

    // All Resistances +15
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +40% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // +2 to Amazon Skill Levels
    row["prop6"] = "ama";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

  }

  // The Tannr Gorerod
  if (row["index"] === "The Tannr Gorerod") {

    // +30 to Minimum Fire Damage
    row["prop1"] = "fire-min";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +85 to Maximum Fire Damage
    row["prop2"] = "fire-max";
    row["par2"] = "";
    row["min2"] = 85;
    row["max2"] = 85;

    // +15% to Maximum Fire Resist
    row["prop3"] = "res-fire-max";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +30 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +60 to Attack Rating
    row["prop5"] = "att";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 60;

    // +3 to Light Radius
    row["prop6"] = "light";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

    // Fire Resist +35%
    row["prop7"] = "res-fire";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // +100 - 140% Enhanced Damage
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 100;
    row["max8"] = 140;

  }

  // The Impaler
  if (row["index"] === "The Impaler") {

    // Ignore Target's Defense
    row["prop1"] = "ignore-ac";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +150 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 150;

    // +20% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 40% Chance of Open Wounds
    row["prop4"] = "openwounds";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Prevent Monster Heal
    row["prop5"] = "noheal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // +140 - 170% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 140;
    row["max6"] = 170;

    // +5 to Impale ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "19";
    row["min7"] = 5;
    row["max7"] = 5;

    // +3 to Power Strike ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "14";
    row["min8"] = 3;
    row["max8"] = 3;

    // Repairs 1 durability in 5 seconds
    row["prop9"] = "rep-dur";
    row["par9"] = "20";
    row["min9"] = "";
    row["max9"] = "";

  }

  // Kelpie Snare
  if (row["index"] === "Kelpie Snare") {

    // Slows Target by 75%
    row["prop1"] = "slow";
    row["par1"] = "";
    row["min1"] = 75;
    row["max1"] = 75;

    // Fire Resist +50%
    row["prop2"] = "res-fire";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +1,25 to Life (Based on Character Level)
    row["prop3"] = "hp/lvl";
    row["par3"] = "10";
    row["min3"] = "";
    row["max3"] = "";

    // Adds 30 - 50 Damage
    row["prop4"] = "dmg-norm";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 50;

    // +10 to Strength
    row["prop5"] = "str";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +140 - 180% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 140;
    row["max6"] = 180;

    // Socketed (2 - 3)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 3;

  }

  // Soulfeast Tine
  if (row["index"] === "Soulfeast Tine") {

    // Requirements --20%
    row["prop1"] = "ease";
    row["par1"] = "";
    row["min1"] = -20;
    row["max1"] = -20;

    // 7% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 7;
    row["max2"] = 7;

    // 7% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 7;

    // 20% Slower Stamina Drain
    row["prop4"] = "stamdrain";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +150 - 190% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 190;

    // +150 - 250 to Attack Rating
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 250;

    // Durability: 15 of 15
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // +25% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

  }

  // Hone Sundan
  if (row["index"] === "Hone Sundan") {

    // Socketed (3)
    row["prop1"] = "sock";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // Adds 20 - 40 Damage
    row["prop2"] = "dmg-norm";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 40;

    // 45% Chance of Crushing Blow
    row["prop3"] = "crush";
    row["par3"] = "";
    row["min3"] = 45;
    row["max3"] = 45;

    // Repairs 1 durability in 10 seconds
    row["prop4"] = "rep-dur";
    row["par4"] = "10";
    row["min4"] = "";
    row["max4"] = "";

    // +160 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 160;
    row["max5"] = 200;

    // Ignore Target's Defense
    row["prop6"] = "ignore-ac";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

  }

  // Spire of Honor
  if (row["index"] === "Spire of Honor") {

    // 25% Bonus to Attack Rating
    row["prop1"] = "att%";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // +3 to Light Radius
    row["prop2"] = "light";
    row["par2"] = "";
    row["min2"] = 3;
    row["max2"] = 3;

    // Replenish Life +20
    row["prop3"] = "regen";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +20% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Adds 20 - 40 Damage
    row["prop5"] = "dmg-norm";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 40;

    // +1,5% Damage to Demons (Based on Character Level)
    row["prop6"] = "dmg-dem/lvl";
    row["par6"] = "12";
    row["min6"] = "";
    row["max6"] = "";

    // +150 - 200% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 200;

    // +3 to Combat Skills (Paladin) [Class only] Skills
    row["prop8"] = "skilltab";
    row["par8"] = "9";
    row["min8"] = 3;
    row["max8"] = 3;

    // +25% Enhanced Defense
    row["prop9"] = "ac%";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 25;

    // +3 to Charge ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "107";
    row["min10"] = 3;
    row["max10"] = 3;

    // +30% Increased Attack Speed
    row["prop11"] = "swing1";
    row["par11"] = "";
    row["min11"] = 30;
    row["max11"] = 30;

  }

  // Arioc's Needle
  if (row["index"] === "Arioc's Needle") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // Adds 300 Poison Damage Over 3 Seconds
    row["prop2"] = "dmg-pois";
    row["par2"] = "75";
    row["min2"] = 1023;
    row["max2"] = 1023;

    // 50% Deadly Strike
    row["prop3"] = "deadly";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // Ignore Target's Defense
    row["prop4"] = "ignore-ac";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +3 - 5 to All Skills
    row["prop5"] = "allskills";
    row["par5"] = "";
    row["min5"] = 3;
    row["max5"] = 5;

    // +45% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 45;
    row["max6"] = 45;

    // Socketed (1 - 3)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

  }

  // Steelpillar
  if (row["index"] === "Steelpillar") {

    // +250 - 300% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 250;
    row["max1"] = 300;

    // +25% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // -20% Target Defense
    row["prop3"] = "reduce-ac";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +50 - 80% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 80;

    // +6 to Spear Mastery ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "136";
    row["min5"] = 6;
    row["max5"] = 6;

    // 25% Chance of Crushing Blow
    row["prop6"] = "crush";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // Level 5 Concentration Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "113";
    row["min7"] = 5;
    row["max7"] = 5;

  }

  // Viperfork
  if (row["index"] === "Viperfork") {

    // +190 - 240% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 190;
    row["max1"] = 240;

    // Adds 300 Poison Damage Over 3 Seconds
    row["prop2"] = "dmg-pois";
    row["par2"] = "75";
    row["min2"] = 1023;
    row["max2"] = 1023;

    // +50% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +200 - 250 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 250;

    // 33% Chance to cast level 18 Poison Explosion on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "Poison Explosion";
    row["min5"] = 33;
    row["max5"] = 18;

    // Poison Resist +30 - 50%
    row["prop6"] = "res-pois";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 50;

    // -35 - 40% to Enemy Poison Resistance
    row["prop7"] = "pierce-pois";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 40;

    // 8% Chance to cast level 20 Venom on striking
    row["prop8"] = "hit-skill";
    row["par8"] = "Venom";
    row["min8"] = 8;
    row["max8"] = 20;

  }

  // Lycander's Flank
  if (row["index"] === "Lycander's Flank") {

    // +2 to Amazon Skill Levels
    row["prop1"] = "ama";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +2 - 3 to Javelin and Spear Skills [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = "2";
    row["min2"] = 2;
    row["max2"] = 3;

    // +150 - 200% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // +30% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +20 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +20 to Strength
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +20 to Vitality
    row["prop7"] = "vit";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 5 - 9% Life stolen per hit
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 9;

    // Adds 25 - 50 Damage
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 50;

  }

  // Stoneraven
  if (row["index"] === "Stoneraven") {

    // +230 - 280% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 230;
    row["max1"] = 280;

    // Adds 250 - 300 Magic Damage
    row["prop2"] = "dmg-mag";
    row["par2"] = "";
    row["min2"] = 250;
    row["max2"] = 300;

    // All Resistances +30 - 50
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 50;

    // Level 9 Defiance Aura When Equipped
    row["prop4"] = "aura";
    row["par4"] = "104";
    row["min4"] = 9;
    row["max4"] = 9;

    // +2 - 4 to Javelin and Spear Skills [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "2";
    row["min5"] = 2;
    row["max5"] = 4;

    // Socketed (2 - 3)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 3;

  }

  /*
  =====================================================================================
  ====================================== BOWS ======================================
  =====================================================================================
  */

  // Skystrike
  if (row["index"] === "Skystrike") {

    // Adds 1 - 250 Lightning Damage
    row["prop1"] = "dmg-ltng";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 250;

    // +100 to Attack Rating
    row["prop2"] = "att";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 100;

    // +10 to Energy
    row["prop3"] = "enr";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // +30% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +150 - 200% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 200;

    // 10% Chance to cast level 9 Meteor on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "56";
    row["min6"] = 10;
    row["max6"] = 9;

    // +1 - 2 to Amazon Skill Levels
    row["prop7"] = "ama";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

  }

  // Kuko Shakaku
  if (row["index"] === "Kuko Shakaku") {

    // +3 - 5 to Immolation Arrow ([Class] only)
    row["prop1"] = "skill";
    row["par1"] = "27";
    row["min1"] = 3;
    row["max1"] = 5;

    // Fires Explosive Arrows or Bolts
    row["prop2"] = "explosivearrow";
    row["par2"] = "";
    row["min2"] = 7;
    row["max2"] = 7;

    // +150 - 180% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 180;

    // Piercing Attack
    row["prop4"] = "pierce";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // Adds 80 - 200 Fire Damage
    row["prop5"] = "dmg-fire";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 200;

    // +3 to Bow and Crossbow Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "0";
    row["min6"] = 3;
    row["max6"] = 3;

    // +10 - 20% to Fire Skill Damage
    row["prop7"] = "extra-fire";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 20;

  }

  // Endlesshail
  if (row["index"] === "Endlesshail") {

    // Cold Resist +35%
    row["prop1"] = "res-cold";
    row["par1"] = "";
    row["min1"] = 35;
    row["max1"] = 35;

    // +40 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +50 Defense vs. Missile
    row["prop3"] = "ac-miss";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +3 - 5 to Strafe ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "26";
    row["min4"] = 3;
    row["max4"] = 5;

    // +180 - 220% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 180;
    row["max5"] = 220;

    // Adds 60 - 90 Cold Damage
    row["prop6"] = "dmg-cold";
    row["par6"] = "75";
    row["min6"] = 60;
    row["max6"] = 90;

    // Cannot Be Frozen
    row["prop7"] = "nofreeze";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +10 - 20% to Cold Skill Damage
    row["prop8"] = "extra-cold";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

  }

  // Whichwild String
  if (row["index"] === "Whichwild String") {

    // 8% Chance to cast level 5 Amplify Damage on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "66";
    row["min1"] = 8;
    row["max1"] = 5;

    // All Resistances +40
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // 1% Deadly Strike (Based on Character Level)
    row["prop3"] = "deadly/lvl";
    row["par3"] = "8";
    row["min3"] = "";
    row["max3"] = "";

    // +150 - 170% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 170;

    // Fires Magic Arrows
    row["prop5"] = "magicarrow";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // Socketed (2)
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 2;
    row["max6"] = 2;

    // Adds 60 - 90 Magic Damage
    row["prop7"] = "dmg-mag";
    row["par7"] = "";
    row["min7"] = 60;
    row["max7"] = 90;

  }

  // Cliffkiller
  if (row["index"] === "Cliffkiller") {

    // +2 to Amazon Skill Levels
    row["prop1"] = "ama";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +190 - 230% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 190;
    row["max2"] = 230;

    // +80 Defense vs. Missile
    row["prop3"] = "ac-miss";
    row["par3"] = "";
    row["min3"] = 80;
    row["max3"] = 80;

    // Knockback
    row["prop4"] = "knock";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // +50 to Life
    row["prop5"] = "hp";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // +5 - 10 to Minimum Damage
    row["prop6"] = "dmg-min";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 10;

    // +20 - 30 to Maximum Damage
    row["prop7"] = "dmg-max";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 30;

    // +30% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

  }

  // Magewrath
  if (row["index"] === "Magewrath") {

    // 15% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 15;

    // Magic Damage Reduced by 9 - 13
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 9;
    row["max2"] = 13;

    // +3 to Guided Arrow
    row["prop3"] = "oskill";
    row["par3"] = "22";
    row["min3"] = 3;
    row["max3"] = 3;

    // +200 - 250 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 250;

    // +10 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // Hit Blinds Target +1
    row["prop6"] = "stupidity";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // Adds 25 - 50 Damage
    row["prop7"] = "dmg-norm";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 50;

    // +120 - 150% Enhanced Damage
    row["prop8"] = "dmg%";
    row["par8"] = "";
    row["min8"] = 120;
    row["max8"] = 150;

    // +1 to All Skills
    row["prop9"] = "allskills";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

  }

  // Godstrike Arch
  if (row["index"] === "Godstrike Arch") {

    // +200 - 250% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 200;
    row["max1"] = 250;

    // 100 - 150% Bonus to Attack Rating
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 100;
    row["max2"] = 150;

    // +150 - 220% Damage to Undead
    row["prop3"] = "dmg-undead";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 220;

    // +150 - 220% Damage to Demons
    row["prop4"] = "dmg-demon";
    row["par4"] = "";
    row["min4"] = 150;
    row["max4"] = 220;

    // 15% Chance to cast level 12 Fist of the Heavens on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "121";
    row["min5"] = 15;
    row["max5"] = 12;

    // +50% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 50;
    row["max6"] = 50;

    // Replenish Life +12
    row["prop7"] = "regen";
    row["par7"] = "";
    row["min7"] = 12;
    row["max7"] = 12;

    // 0,75% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop8"] = "mag%/lvl";
    row["par8"] = "6";
    row["min8"] = "";
    row["max8"] = "";

  }

  // Widowmaker
  if (row["index"] === "Widowmaker") {

    // +150 - 200% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // 33% Deadly Strike
    row["prop2"] = "deadly";
    row["par2"] = "";
    row["min2"] = 33;
    row["max2"] = 33;

    // Ignore Target's Defense
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Fires Magic Arrows
    row["prop4"] = "magicarrow";
    row["par4"] = "";
    row["min4"] = 11;
    row["max4"] = 11;

    // +3 - 5 to Guided Arrow
    row["prop5"] = "oskill";
    row["par5"] = "Guided Arrow";
    row["min5"] = 3;
    row["max5"] = 5;

    // Requirements --30%
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = -30;
    row["max6"] = -30;

    // +30% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // 30 - 50% Better Chance of Getting Magic Items
    row["prop8"] = "mag%";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 50;

  }

  // Windforce
  if (row["index"] === "Windforce") {

    // Level 7 - 9 Vigor Aura When Equipped
    row["prop1"] = "aura";
    row["par1"] = "115";
    row["min1"] = 7;
    row["max1"] = 9;

    // +3,125 to Maximum Damage (Based on Character Level)
    row["prop2"] = "dmg/lvl";
    row["par2"] = "25";
    row["min2"] = "";
    row["max2"] = "";

    // Heal Stamina Plus 30%
    row["prop3"] = "regen-stam";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 6 - 8% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 6;
    row["max4"] = 8;

    // Knockback
    row["prop5"] = "knock";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // +250% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 250;
    row["max6"] = 250;

    // +35% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // +10 - 20 to all Attributes
    row["prop8"] = "all-stats";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 20;

    // Socketed (3 - 4)
    row["prop9"] = "sock";
    row["par9"] = "";
    row["min9"] = 3;
    row["max9"] = 4;

  }

  // Lycander's Aim
  if (row["index"] === "Lycander's Aim") {

    // +2 to Amazon Skill Levels
    row["prop1"] = "ama";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +2 to Bow and Crossbow Skills [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = "0";
    row["min2"] = 2;
    row["max2"] = 2;

    // +150 - 200% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // +20% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // +20% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +20 to Dexterity
    row["prop6"] = "dex";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +20 to Energy
    row["prop7"] = "enr";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 5 - 8% Mana stolen per hit
    row["prop8"] = "manasteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 8;

    // Adds 25 - 50 Damage
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 50;

    // -50% Target Defense
    row["prop10"] = "reduce-ac";
    row["par10"] = "";
    row["min10"] = 50;
    row["max10"] = 50;

  }

  // Bloodraven's Charge
  if (row["index"] === "Bloodraven's Charge") {

    row['lvl req'] = 50;

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // 200 - 300% Bonus to Attack Rating
    row["prop2"] = "att%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 300;

    // Fires Explosive Arrows or Bolts
    row["prop3"] = "explosivearrow";
    row["par3"] = "";
    row["min3"] = 13;
    row["max3"] = 13;

    // +2 - 4 to Bow and Crossbow Skills [Class only] Skills
    row["prop4"] = "skilltab";
    row["par4"] = "0";
    row["min4"] = 2;
    row["max4"] = 4;

    // +8 - 10 to Revive
    row["prop5"] = "oskill";
    row["par5"] = "Revive";
    row["min5"] = 8;
    row["max5"] = 10;

    // Reanimate As: [Returned]
    row["prop6"] = "reanimate";
    row["par6"] = "579";
    row["min6"] = 80;
    row["max6"] = 80;

    // Socketed (1 - 2)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // Requirements --70%
    row["prop8"] = "ease";
    row["par8"] = "";
    row["min8"] = -70;
    row["max8"] = -70;

  }

  // Eaglehorn
  if (row["index"] === "Eaglehorn") {

    // Ignore Target's Defense
    row["prop1"] = "ignore-ac";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +6 to Attack Rating (Based on Character Level)
    row["prop2"] = "att/lvl";
    row["par2"] = "12";
    row["min2"] = "";
    row["max2"] = "";

    // +2% Enhanced Maximum Damage (Based on Character Level)
    row["prop3"] = "dmg%/lvl";
    row["par3"] = "16";
    row["min3"] = "";
    row["max3"] = "";

    // +200% Enhanced Damage
    row["prop4"] = "dmg%";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 200;

    // +1 - 3 to Amazon Skill Levels
    row["prop5"] = "ama";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 3;

    // +25 to Dexterity
    row["prop6"] = "dex";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // Socketed (1 - 3)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

    // Piercing Attack
    row["prop8"] = "pierce";
    row["par8"] = "";
    row["min8"] = 33;
    row["max8"] = 33;

  }

  /*
  =====================================================================================
  ====================================== XBOWS ======================================
  =====================================================================================
  */

  // Leadcrow
  if (row["index"] === "Leadcrow") {

    // +10 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // +10 to Life
    row["prop2"] = "hp";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +70% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 70;
    row["max3"] = 70;

    // Poison Resist +30%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 25% Deadly Strike
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // +40 to Attack Rating
    row["prop6"] = "att";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // +15% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // Adds 22 Poison Damage Over 3 Seconds
    row["prop8"] = "dmg-pois";
    row["par8"] = "75";
    row["min8"] = 75;
    row["max8"] = 75;

  }

  // Ichorsting
  if (row["index"] === "Ichorsting") {

    // Adds 30 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 102;
    row["max1"] = 102;

    // +20 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // Piercing Attack
    row["prop3"] = "pierce";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 50;

    // +50 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // +50% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 50;
    row["max5"] = 50;

    // +20% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // Socketed (1 - 3)
    row["prop7"] = "sock";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

  }

  // Hellcast
  if (row["index"] === "Hellcast") {

    // Fires Explosive Arrows or Bolts
    row["prop1"] = "explosivearrow";
    row["par1"] = "";
    row["min1"] = 5;
    row["max1"] = 5;

    // +15% to Maximum Fire Resist
    row["prop2"] = "res-fire-max";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // Fire Resist +15%
    row["prop3"] = "res-fire";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +70 to Attack Rating
    row["prop4"] = "att";
    row["par4"] = "";
    row["min4"] = 70;
    row["max4"] = 70;

    // +20% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +70 - 80% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 70;
    row["max6"] = 80;

    // Adds 35 - 55 Fire Damage
    row["prop7"] = "dmg-fire";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 55;

    // +1 - 3 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 3;

  }

  // Doomspittle
  if (row["index"] === "Doomspittle") {

    // +1 - 2 to Amazon Skill Levels
    row["prop1"] = "ama";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 2;

    // Piercing Attack
    row["prop2"] = "pierce";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // +15 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +60 - 100% Enhanced Damage
    row["prop5"] = "dmg%";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 100;

    // +3 - 4 to Exploding Arrow ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "16";
    row["min6"] = 3;
    row["max6"] = 4;

  }

  // Langer Briser
  if (row["index"] === "Langer Briser") {

    // 10% Chance to cast level 10 Volcano on striking
    row["prop1"] = "hit-skill";
    row["par1"] = "244";
    row["min1"] = 10;
    row["max1"] = 10;

    // +170 - 200% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 170;
    row["max2"] = 200;

    // 30 - 60% Better Chance of Getting Magic Items
    row["prop3"] = "mag%";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 60;

    // +30 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +30 - 50 to Maximum Damage
    row["prop5"] = "dmg-max";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 50;

    // 33% Chance of Open Wounds
    row["prop6"] = "openwounds";
    row["par6"] = "";
    row["min6"] = 33;
    row["max6"] = 33;

    // Adds 1 - 212 Lightning Damage
    row["prop7"] = "dmg-ltng";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 212;

  }

  // Pus Spiter
  if (row["index"] === "Pus Spiter") {

    // Adds 132 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 450;
    row["max1"] = 450;

    // 10% Chance to cast level 5 Lower Resist on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "91";
    row["min2"] = 10;
    row["max2"] = 5;

    // +2 to All Skills
    row["prop3"] = "allskills";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // Requirements --60%
    row["prop4"] = "ease";
    row["par4"] = "";
    row["min4"] = -60;
    row["max4"] = -60;

    // 10% Chance to cast level 8 Poison Nova when struck
    row["prop5"] = "gethit-skill";
    row["par5"] = "92";
    row["min5"] = 10;
    row["max5"] = 8;

    // +20% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +150 - 220% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 150;
    row["max7"] = 220;

    // +5 to Attack Rating (Based on Character Level)
    row["prop8"] = "att/lvl";
    row["par8"] = "10";
    row["min8"] = "";
    row["max8"] = "";

    // -10 - 15% to Enemy Poison Resistance
    row["prop9"] = "pierce-pois";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 15;

  }

  // Buriza-Do Kyanon
  if (row["index"] === "Buriza-Do Kyanon") {

    // Piercing Attack
    row["prop1"] = "pierce";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // +35 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // +75 - 150 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 75;
    row["max3"] = 150;

    // +2,5 to Maximum Damage (Based on Character Level)
    row["prop4"] = "dmg/lvl";
    row["par4"] = "20";
    row["min4"] = "";
    row["max4"] = "";

    // +80% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 80;
    row["max5"] = 80;

    // +150 - 200% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 200;

    // Freezes Target +3
    row["prop7"] = "freeze";
    row["par7"] = "";
    row["min7"] = 3;
    row["max7"] = 3;

    // Adds 100 - 196 Cold Damage
    row["prop8"] = "dmg-cold";
    row["par8"] = "200";
    row["min8"] = 100;
    row["max8"] = 196;

    // +3 - 5 to Freezing Arrow
    row["prop9"] = "oskill";
    row["par9"] = "31";
    row["min9"] = 3;
    row["max9"] = 5;

  }

  // Demon Machine
  if (row["index"] === "Demon Machine") {

    // +666 Defense
    row["prop1"] = "ac";
    row["par1"] = "";
    row["min1"] = 666;
    row["max1"] = 666;

    // +66 to Mana
    row["prop2"] = "mana";
    row["par2"] = "";
    row["min2"] = 66;
    row["max2"] = 66;

    // Piercing Attack
    row["prop3"] = "pierce";
    row["par3"] = "";
    row["min3"] = 66;
    row["max3"] = 66;

    // Fires Explosive Arrows or Bolts
    row["prop4"] = "explosivearrow";
    row["par4"] = "";
    row["min4"] = 6;
    row["max4"] = 6;

    // +66 to Maximum Damage
    row["prop5"] = "dmg-max";
    row["par5"] = "";
    row["min5"] = 66;
    row["max5"] = 66;

    // +123% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 123;
    row["max6"] = 123;

    // +666 to Attack Rating
    row["prop7"] = "att";
    row["par7"] = "";
    row["min7"] = 666;
    row["max7"] = 666;

  }

  // Hellrack
  if (row["index"] === "Hellrack") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // Adds 300 - 500 Fire/Lightning/Cold Damage
    row["prop2"] = "dmg-elem";
    row["par2"] = "33";
    row["min2"] = 300;
    row["max2"] = 500;

    // +20% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // 100 - 150% Bonus to Attack Rating
    row["prop4"] = "att%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // Socketed (2 - 4)
    row["prop5"] = "sock";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 4;

    // Level 18 Immolation Arrow (150/150 Charges)
    row["prop6"] = "charged";
    row["par6"] = "Immolation Arrow";
    row["min6"] = 150;
    row["max6"] = 18;

    // 15% Chance to cast level 10 Lower Resist on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "91";
    row["min7"] = 15;
    row["max7"] = 10;

  }

  // Gutsiphon
  if (row["index"] === "Gutsiphon") {

    // +160 - 220% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 160;
    row["max1"] = 220;

    // Piercing Attack
    row["prop2"] = "pierce";
    row["par2"] = "";
    row["min2"] = 33;
    row["max2"] = 33;

    // 12 - 18% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 12;
    row["max3"] = 18;

    // Slows Target by 25%
    row["prop4"] = "slow";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 33% Chance of Open Wounds
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 33;
    row["max5"] = 33;

    // Monster Physical Immunity is Sundered
    row["prop6"] = "pierce-immunity-damage";
    row["par6"] = "";
    row["min6"] = 300;
    row["max6"] = 300;

    // 0,5% Deadly Strike (Based on Character Level)
    row["prop7"] = "deadly/lvl";
    row["par7"] = "4";
    row["min7"] = "";
    row["max7"] = "";

    // Level 7 - 10 Might Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Might";
    row["min8"] = 7;
    row["max8"] = 10;

  }

  /*
  =====================================================================================
  ====================================== JAVELINS =====================================
  =====================================================================================
  */

  // Demon's Arch
  if (row["index"] === "Demon's Arch") {

    // +160 - 210% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 160;
    row["max1"] = 210;

    // Adds 333 - 666 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 333;
    row["max2"] = 666;

    // 6 - 12% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 12;

    // Replenishes quantity
    row["prop4"] = "rep-quant";
    row["par4"] = "30";
    row["min4"] = "";
    row["max4"] = "";

    // +30% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 30;

    // Adds 333 - 666 Lightning Damage
    row["prop6"] = "dmg-ltng";
    row["par6"] = "";
    row["min6"] = 333;
    row["max6"] = 666;

    // +1% Damage to Demons (Based on Character Level)
    row["prop7"] = "dmg-dem/lvl";
    row["par7"] = "8";
    row["min7"] = "";
    row["max7"] = "";

  }

  // Wraithflight
  if (row["index"] === "Wraithflight") {

    // +150 - 190% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 190;

    // Replenishes quantity
    row["prop2"] = "rep-quant";
    row["par2"] = "40";
    row["min2"] = "";
    row["max2"] = "";

    // 9 - 13% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 9;
    row["max3"] = 13;

    // +15 to Mana after each Kill
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // Ethereal
    row["prop5"] = "ethereal";
    row["par5"] = "";
    row["min5"] = 1;
    row["max5"] = 1;

    // Adds 300 - 500 Magic Damage
    row["prop6"] = "dmg-mag";
    row["par6"] = "";
    row["min6"] = 300;
    row["max6"] = 500;

    // Piercing Attack
    row["prop7"] = "pierce";
    row["par7"] = "";
    row["min7"] = 60;
    row["max7"] = 60;

  }

  // Gargoyle's Bite
  if (row["index"] === "Gargoyle's Bite") {

    // +180 - 230% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 180;
    row["max1"] = 230;

    // Replenishes quantity
    row["prop2"] = "rep-quant";
    row["par2"] = "30";
    row["min2"] = "";
    row["max2"] = "";

    // Adds 300 Poison Damage Over 3 Seconds
    row["prop3"] = "dmg-pois";
    row["par3"] = "75";
    row["min3"] = 1023;
    row["max3"] = 1023;

    // 9 - 15% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 9;
    row["max4"] = 15;

    // +6 to Plague Javelin ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Plague Javelin";
    row["min5"] = 6;
    row["max5"] = 6;

    // -20 - 30% to Enemy Poison Resistance
    row["prop6"] = "pierce-pois";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 30;

    // +40% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 40;
    row["max7"] = 40;

    // +2 to Amazon Skill Levels
    row["prop8"] = "ama";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

  }

  // Thunderstroke
  if (row["index"] === "Thunderstroke") {

    // +150 - 200% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // Adds 1 - 511 Lightning Damage
    row["prop2"] = "dmg-ltng";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 511;

    // 20% Chance to cast level 14 Lightning on striking
    row["prop3"] = "hit-skill";
    row["par3"] = "Lightning";
    row["min3"] = 20;
    row["max3"] = 14;

    // +15% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // -15% to Enemy Lightning Resistance
    row["prop5"] = "pierce-ltng";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +3 to Lightning Bolt ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Lightning Bolt";
    row["min6"] = 3;
    row["max6"] = 3;

    // +2 - 4 to Javelin and Spear Skills [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "2";
    row["min7"] = 2;
    row["max7"] = 4;

    // Replenishes quantity
    row["prop8"] = "rep-quant";
    row["par8"] = "30";
    row["min8"] = "";
    row["max8"] = "";

  }

  /*
  =====================================================================================
  ====================================== THROWING WEAPONS =============================
  =====================================================================================
  */

  // Deathbit
  if (row["index"] === "Deathbit") {

    // 40% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 40;
    row["max1"] = 40;

    // +130 - 180% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 130;
    row["max2"] = 180;

    // +200 - 450 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 200;
    row["max3"] = 450;

    // 7 - 9% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 7;
    row["max4"] = 9;

    // 4 - 6% Mana stolen per hit
    row["prop5"] = "manasteal";
    row["par5"] = "";
    row["min5"] = 4;
    row["max5"] = 6;

    // Replenishes quantity
    row["prop6"] = "rep-quant";
    row["par6"] = "25";
    row["min6"] = "";
    row["max6"] = "";

    // Hit Blinds Target +1
    row["prop7"] = "stupidity";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +30% Increased Attack Speed
    row["prop8"] = "swing1";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

  }

  // The Scalper
  if (row["index"] === "The Scalper") {

    // Replenishes quantity
    row["prop1"] = "rep-quant";
    row["par1"] = "30";
    row["min1"] = "";
    row["max1"] = "";

    // +150 - 200% Enhanced Damage
    row["prop2"] = "dmg%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 200;

    // 25% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +20% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 33% Chance of Open Wounds
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 33;
    row["max5"] = 33;

    // 4 - 6% Life stolen per hit
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 4;
    row["max6"] = 6;

    // +4 to Mana after each Kill
    row["prop7"] = "mana-kill";
    row["par7"] = "";
    row["min7"] = 4;
    row["max7"] = 4;

    // Prevent Monster Heal
    row["prop8"] = "noheal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // +3 to Double Throw ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "140";
    row["min9"] = 3;
    row["max9"] = 3;

    // +3 to Throwing Mastery ([Class] only)
    row["prop10"] = "skill";
    row["par10"] = "135";
    row["min10"] = 3;
    row["max10"] = 3;

  }

  // Warshrike
  if (row["index"] === "Warshrike") {

    // +200 - 250% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 200;
    row["max1"] = 250;

    // Piercing Attack
    row["prop2"] = "pierce";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // 50% Deadly Strike
    row["prop4"] = "deadly";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // Replenishes quantity
    row["prop5"] = "rep-quant";
    row["par5"] = "30";
    row["min5"] = "";
    row["max5"] = "";

    // 25% Chance to cast level 20 Nova on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "Nova";
    row["min6"] = 25;
    row["max6"] = 20;

    // Adds 200 - 300 Magic Damage
    row["prop7"] = "dmg-mag";
    row["par7"] = "";
    row["min7"] = 200;
    row["max7"] = 300;

  }

  // Gimmershred
  if (row["index"] === "Gimmershred") {

    // +160 - 210% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 160;
    row["max1"] = 210;

    // Adds 220 - 500 Fire Damage
    row["prop2"] = "dmg-fire";
    row["par2"] = "";
    row["min2"] = 220;
    row["max2"] = 500;

    // Adds 220 - 500 Cold Damage
    row["prop3"] = "dmg-cold";
    row["par3"] = "100";
    row["min3"] = 220;
    row["max3"] = 500;

    // Adds 220 - 500 Lightning Damage
    row["prop4"] = "dmg-ltng";
    row["par4"] = "";
    row["min4"] = 220;
    row["max4"] = 500;

    // Increased Stack Size
    row["prop5"] = "stack";
    row["par5"] = "";
    row["min5"] = 60;
    row["max5"] = 60;

    // +30% Increased Attack Speed
    row["prop6"] = "swing1";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 15% Chance to cast level 8 Lower Resist on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "91";
    row["min7"] = 15;
    row["max7"] = 8;

    // Replenishes quantity
    row["prop8"] = "rep-quant";
    row["par8"] = "25";
    row["min8"] = "";
    row["max8"] = "";

  }

  // Lacerator
  if (row["index"] === "Lacerator") {

    // +150 - 210% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 210;

    // Replenishes quantity
    row["prop2"] = "rep-quant";
    row["par2"] = "25";
    row["min2"] = "";
    row["max2"] = "";

    // +30% Increased Attack Speed
    row["prop3"] = "swing1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // Prevent Monster Heal
    row["prop4"] = "noheal";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 1;

    // 33% Chance of Open Wounds
    row["prop5"] = "openwounds";
    row["par5"] = "";
    row["min5"] = 33;
    row["max5"] = 33;

    // Hit Causes Monster to Flee 64%
    row["prop6"] = "howl";
    row["par6"] = "";
    row["min6"] = 64;
    row["max6"] = 64;

    // 33% Chance to cast level 6 Amplify Damage on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "Amplify Damage";
    row["min7"] = 33;
    row["max7"] = 6;

    // Level 6 - 8 Fanaticism Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "122";
    row["min8"] = 6;
    row["max8"] = 8;

  }


  /*
  =====================================================================================
  ====================================== KATARS ======================================
  =====================================================================================
  */

  // Cutthroat1
  if (row["index"] === "Cutthroat1") {

    // +2 to Assassin Skill Levels
    row["prop1"] = "ass";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +1 - 2 to Martial Arts [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = "20";
    row["min2"] = 1;
    row["max2"] = 2;

    // +150 - 200% Enhanced Damage
    row["prop3"] = "dmg%";
    row["par3"] = "";
    row["min3"] = 150;
    row["max3"] = 200;

    // +30% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // 20% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 20;

    // +20 to Strength
    row["prop6"] = "str";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;

    // +20 to Dexterity
    row["prop7"] = "dex";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // 5 - 9% Life stolen per hit
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 9;

    // Adds 25 - 50 Damage
    row["prop9"] = "dmg-norm";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 50;

    // 33% Chance of Open Wounds
    row["prop10"] = "openwounds";
    row["par10"] = "";
    row["min10"] = 33;
    row["max10"] = 33;

  }

  // Jadetalon
  if (row["index"] === "Jadetalon") {

    // +190 - 240% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 190;
    row["max1"] = 240;

    // 10 - 15% Mana stolen per hit
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 15;

    // All Resistances +40 - 50
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 40;
    row["max3"] = 50;

    // +30% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +1 - 2 to Shadow Disciplines [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "19";
    row["min5"] = 1;
    row["max5"] = 2;

    // +1 - 2 to Martial Arts [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "20";
    row["min6"] = 1;
    row["max6"] = 2;

    // +30% Faster Block Rate
    row["prop7"] = "block1";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30;

    // +3 to Venom ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "278";
    row["min8"] = 3;
    row["max8"] = 3;

  }

  // Shadowkiller
  if (row["index"] === "Shadowkiller") {

    // +170 - 220% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 220;

    // -25% Target Defense
    row["prop2"] = "reduce-ac";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // Freezes Target +4
    row["prop3"] = "freeze";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

    // +10 - 15 to Mana after each Kill
    row["prop4"] = "mana-kill";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // 25% Chance to cast level 25 Frost Nova on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "Frost Nova";
    row["min5"] = 25;
    row["max5"] = 25;

    // Ethereal
    row["prop6"] = "ethereal";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

    // Indestructible
    row["prop7"] = "indestruct";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // +2 to Assassin Skill Levels
    row["prop8"] = "ass";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    // +3 to Blades of Ice ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "274";
    row["min9"] = 3;
    row["max9"] = 3;

    // -20 - 30% to Enemy Cold Resistance
    row["prop10"] = "pierce-cold";
    row["par10"] = "";
    row["min10"] = 20;
    row["max10"] = 30;

  }

  // Firelizard's Talons
  if (row["index"] === "Firelizard's Talons") {

    // +200 - 270% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 200;
    row["max1"] = 270;

    // +25% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +1 - 3 to Martial Arts [Class only] Skills
    row["prop3"] = "skilltab";
    row["par3"] = "20";
    row["min3"] = 1;
    row["max3"] = 3;

    // Adds 300 - 480 Fire Damage
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 300;
    row["max4"] = 480;

    // Fire Resist +40 - 70%
    row["prop5"] = "res-fire";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 70;

    // +1 - 2 to Wake of Fire Sentry ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Wake of Fire Sentry";
    row["min6"] = 1;
    row["max6"] = 2;

    // +1 - 2 to Inferno Sentry ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Inferno Sentry";
    row["min7"] = 1;
    row["max7"] = 2;

    // +3 - 4 to Fire Skills
    row["prop8"] = "fireskill";
    row["par8"] = "";
    row["min8"] = 3;
    row["max8"] = 4;

    // -20 - 30% to Enemy Fire Resistance
    row["prop9"] = "pierce-fire";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 30;

    // 10% Chance to cast level 25 Eruption on striking
    row["prop10"] = "hit-skill";
    row["par10"] = "234";
    row["min10"] = 10;
    row["max10"] = 25;

  }


  /*
  =====================================================================================
  ====================================== SORC ORBS ====================================
  =====================================================================================
  */


  if (config.remove_tp_from_oculus) {
    // The Oculus
    if (row["index"] === "The Oculus") {

      // +3 to Sorceress Skill Levels
      row["prop1"] = "sor";
      row["par1"] = "";
      row["min1"] = 3;
      row["max1"] = 3;

      // All Resistances +20
      row["prop2"] = "res-all";
      row["par2"] = "";
      row["min2"] = 20;
      row["max2"] = 20;

      // +30% Faster Cast Rate
      row["prop3"] = "cast1";
      row["par3"] = "";
      row["min3"] = 30;
      row["max3"] = 30;

      // +20% Enhanced Defense
      row["prop4"] = "ac%";
      row["par4"] = "";
      row["min4"] = 20;
      row["max4"] = 20;

      // +20 to Vitality
      row["prop5"] = "vit";
      row["par5"] = "";
      row["min5"] = 20;
      row["max5"] = 20;

      // +20 to Energy
      row["prop6"] = "enr";
      row["par6"] = "";
      row["min6"] = 20;
      row["max6"] = 20;

      // +5 to Mana after each Kill
      row["prop7"] = "mana-kill";
      row["par7"] = "";
      row["min7"] = 5;
      row["max7"] = 5;

      // 50% Better Chance of Getting Magic Items
      row["prop8"] = "mag%";
      row["par8"] = "";
      row["min8"] = 50;
      row["max8"] = 50;

      // Remove prop 9 (previus 50% Better Chance of Getting Magic Items)
      row["prop9"] = "";
      row["par9"] = "";
      row["min9"] = "";
      row["max9"] = "";

    }
  }

  // Eschuta's temper
  if (row["index"] === "Eschuta's temper") {

    // +1 - 3 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 3;

    // +40% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +10 - 20% to Fire Skill Damage
    row["prop3"] = "extra-fire";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // +10 - 20% to Lightning Skill Damage
    row["prop4"] = "extra-ltng";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 20;

    // +20 - 30 to Energy
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // -10 - 20% to Enemy Fire Resistance
    row["prop6"] = "pierce-fire";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

    // -10 - 20% to Enemy Lightning Resistance
    row["prop7"] = "pierce-ltng";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 20;

    // Socketed (1 - 2)
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 2;

    // +3 to Lower Resist
    row["prop9"] = "oskill";
    row["par9"] = "91";
    row["min9"] = 3;
    row["max9"] = 3;

  }

  /*
  =====================================================================================
  ====================================== AMULETS ======================================
  =====================================================================================
  */

  // The Eye of Etlich
  if (row["index"] === "The Eye of Etlich") {

    // +10 - 40 Defense vs. Missile
    row["prop1"] = "ac-miss";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 40;

    // +1 - 5 to Light Radius
    row["prop2"] = "light";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 5;

    // +1 to All Skills
    row["prop3"] = "allskills";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // 3 - 7% Life stolen per hit
    row["prop4"] = "lifesteal";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 7;

    // +15 to Minimum Cold Damage
    row["prop5"] = "cold-min";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // +35 to Maximum Cold Damage
    row["prop6"] = "cold-max";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

    // Cold Length +50 - 250
    row["prop7"] = "cold-len";
    row["par7"] = "";
    row["min7"] = 50;
    row["max7"] = 250;

  }

  // The Mahim-Oak Curio
  if (row["index"] === "The Mahim-Oak Curio") {

    // +10 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 10;

    // +10 to Strength
    row["prop2"] = "str";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // +10 to Energy
    row["prop3"] = "enr";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // +10 to Vitality
    row["prop4"] = "vit";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +10 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // 10% Bonus to Attack Rating
    row["prop6"] = "att%";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // All Resistances +10
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

    // +10% Enhanced Defense
    row["prop8"] = "ac%";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;

    // +15% Increased Attack Speed
    row["prop9"] = "swing1";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

    // Adds 35 - 55 Magic Damage
    row["prop10"] = "dmg-mag";
    row["par10"] = "";
    row["min10"] = 35;
    row["max10"] = 55;

  }

  // Saracen's Chance
  if (row["index"] === "Saracen's Chance") {

    // All Resistances +15 - 25
    row["prop1"] = "res-all";
    row["par1"] = "";
    row["min1"] = 15;
    row["max1"] = 25;

    // 10% Chance to cast level 12 Iron Maiden when struck
    row["prop2"] = "gethit-skill";
    row["par2"] = "76";
    row["min2"] = 10;
    row["max2"] = 12;

    // +12 to Strength
    row["prop3"] = "str";
    row["par3"] = "";
    row["min3"] = 12;
    row["max3"] = 12;

    // +12 to Dexterity
    row["prop4"] = "dex";
    row["par4"] = "";
    row["min4"] = 12;
    row["max4"] = 12;

    // +12 to Energy
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 12;
    row["max5"] = 12;

    // +12 to Vitality
    row["prop6"] = "vit";
    row["par6"] = "";
    row["min6"] = 12;
    row["max6"] = 12;

    // 0,75% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop7"] = "mag%/lvl";
    row["par7"] = "6";
    row["min7"] = "";
    row["max7"] = "";

    // 5% Chance to cast level 15 Cyclone Armor when struck
    row["prop8"] = "gethit-skill";
    row["par8"] = "235";
    row["min8"] = 5;
    row["max8"] = 15;

    // 5% Chance to cast level 15 Chain Lightning when struck
    row["prop9"] = "gethit-skill";
    row["par9"] = "53";
    row["min9"] = 5;
    row["max9"] = 15;

  }

  // The Cat's Eye
  if (row["index"] === "The Cat's Eye") {

    // +30% Faster Run/Walk
    row["prop1"] = "move1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // +20% Increased Attack Speed
    row["prop2"] = "swing1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +100 Defense
    row["prop3"] = "ac";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 100;

    // +100 Defense vs. Missile
    row["prop4"] = "ac-miss";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 100;

    // +25 to Dexterity
    row["prop5"] = "dex";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;

    // Increase Maximum Life 9%
    row["prop6"] = "hp%";
    row["par6"] = "";
    row["min6"] = 9;
    row["max6"] = 9;

  }

  // Crescent Moon
  if (row["index"] === "Crescent Moon") {

    // 11 - 15% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 11;
    row["max1"] = 15;

    // Magic Damage Reduced by 10
    row["prop2"] = "red-mag";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 10% Damage Taken Goes To Mana
    row["prop3"] = "dmg-to-mana";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // -2 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = -2;
    row["max4"] = -2;

    // +45 to Mana
    row["prop5"] = "mana";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 45;

    // 3 - 6% Life stolen per hit
    row["prop6"] = "lifesteal";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 6;

    // +1 - 2 to All Skills
    row["prop7"] = "allskills";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;

    // +15 - 25% to Lightning Skill Damage
    row["prop8"] = "extra-ltng";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 25;

    // -8 - 12% to Enemy Lightning Resistance
    row["prop9"] = "pierce-ltng";
    row["par9"] = "";
    row["min9"] = 8;
    row["max9"] = 12;

  }

  // Atma's Scarab
  if (row["index"] === "Atma's Scarab") {

    // Adds 300 Poison Damage Over 3 Seconds
    row["prop1"] = "dmg-pois";
    row["par1"] = "75";
    row["min1"] = 1023;
    row["max1"] = 1023;

    // Poison Resist +75%
    row["prop2"] = "res-pois";
    row["par2"] = "";
    row["min2"] = 75;
    row["max2"] = 75;

    // +3 to Light Radius
    row["prop3"] = "light";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

    // Attacker Takes Damage of 130
    row["prop4"] = "thorns";
    row["par4"] = "";
    row["min4"] = 130;
    row["max4"] = 130;

    // 10% Chance to cast level 6 Amplify Damage on striking
    row["prop5"] = "hit-skill";
    row["par5"] = "66";
    row["min5"] = 10;
    row["max5"] = 6;

    // +6 to Attack Rating (Based on Character Level)
    row["prop6"] = "att/lvl";
    row["par6"] = "12";
    row["min6"] = "";
    row["max6"] = "";

    // Level 12 Thorns Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "103";
    row["min7"] = 12;
    row["max7"] = 12;

  }

  // The Rising Sun
  if (row["index"] === "The Rising Sun") {

    // Absorbs Fire Damage 0 (Based on Character Level)
    row["prop1"] = "abs-fire/lvl";
    row["par1"] = "6";
    row["min1"] = "";
    row["max1"] = "";

    // +4 to Light Radius
    row["prop2"] = "light";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 4;

    // 12% Chance to cast level 20 Meteor on striking
    row["prop3"] = "hit-skill";
    row["par3"] = "56";
    row["min3"] = 12;
    row["max3"] = 20;

    // Adds 90 - 150 Fire Damage
    row["prop4"] = "dmg-fire";
    row["par4"] = "";
    row["min4"] = 90;
    row["max4"] = 150;

    // +2 - 3 to Fire Skills
    row["prop5"] = "fireskill";
    row["par5"] = "";
    row["min5"] = 2;
    row["max5"] = 3;

    // Replenish Life +10
    row["prop6"] = "regen";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // -10 - 15% to Enemy Fire Resistance
    row["prop7"] = "pierce-fire";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 15;

    // Level 15 - 20 Holy Fire Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "102";
    row["min8"] = 15;
    row["max8"] = 20;

  }

  // Seraph's Hymn
  if (row["index"] === "Seraph's Hymn") {

    // +2 to All Skills
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +1 - 2 to Defensive Auras [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = "11";
    row["min2"] = 1;
    row["max2"] = 2;

    // +100 - 150% Damage to Demons
    row["prop3"] = "dmg-demon";
    row["par3"] = "";
    row["min3"] = 100;
    row["max3"] = 150;

    // +100 - 150% Damage to Undead
    row["prop4"] = "dmg-undead";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // +150 - 250 to Attack Rating against Demons
    row["prop5"] = "att-demon";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 250;

    // +150 - 250 to Attack Rating against Undead
    row["prop6"] = "att-undead";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 250;

    // +2 to Light Radius
    row["prop7"] = "light";
    row["par7"] = "";
    row["min7"] = 2;
    row["max7"] = 2;

    // +1 - 2 to Combat Skills (Paladin) [Class only] Skills
    row["prop8"] = "skilltab";
    row["par8"] = "9";
    row["min8"] = 1;
    row["max8"] = 2;

    // +15% Increased Attack Speed
    row["prop9"] = "swing1";
    row["par9"] = "";
    row["min9"] = 15;
    row["max9"] = 15;

  }

  // Metalgrid
  if (row["index"] === "Metalgrid") {

    // 30% Increased Chance of Blocking
    row["prop1"] = "block";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

    // All Resistances +25 - 35
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 35;

    // +400 - 450 to Attack Rating
    row["prop3"] = "att";
    row["par3"] = "";
    row["min3"] = 400;
    row["max3"] = 450;

    // Level 30 IronGolem (11/11 Charges)
    row["prop4"] = "charged";
    row["par4"] = "IronGolem";
    row["min4"] = 11;
    row["max4"] = 30;

    // +6 to Iron Maiden
    row["prop5"] = "oskill";
    row["par5"] = "Iron Maiden";
    row["min5"] = 6;
    row["max5"] = 6;

    // +6 to Golem Mastery
    row["prop6"] = "oskill";
    row["par6"] = "79";
    row["min6"] = 6;
    row["max6"] = 6;

    // +6 to Summon Resist
    row["prop7"] = "oskill";
    row["par7"] = "89";
    row["min7"] = 6;
    row["max7"] = 6;

  }

  /*
  =====================================================================================
  ====================================== RINGS ======================================
  =====================================================================================
  */

  // Manald Heal
  if (row["index"] === "Manald Heal") {

    // 4 - 7% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 4;
    row["max1"] = 7;

    // Replenish Life +5 - 8
    row["prop2"] = "regen";
    row["par2"] = "";
    row["min2"] = 5;
    row["max2"] = 8;

    // +20 to Life
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // Regenerate Mana 20%
    row["prop4"] = "regen-mana";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // Increase Maximum Life 15%
    row["prop5"] = "hp%";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // Heal Stamina Plus 35%
    row["prop6"] = "regen-stam";
    row["par6"] = "";
    row["min6"] = 35;
    row["max6"] = 35;

  }

  // Dwarf Star
  if (row["index"] === "Dwarf Star") {

    // 100% Extra Gold from Monsters
    row["prop1"] = "gold%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // +40 Maximum Stamina
    row["prop2"] = "stam";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // Heal Stamina Plus 15%
    row["prop3"] = "regen-stam";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // +40 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 40;
    row["max4"] = 40;

    // Magic Damage Reduced by 12 - 15
    row["prop5"] = "red-mag";
    row["par5"] = "";
    row["min5"] = 12;
    row["max5"] = 15;

    // +15 Fire Absorb
    row["prop6"] = "abs-fire%";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // +15 - 20 to Strength
    row["prop7"] = "str";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 20;

    // +15 - 20% to Fire Skill Damage
    row["prop8"] = "extra-fire";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;

    // Fire Resist +20 - 30%
    row["prop9"] = "res-fire";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 30;

  }

  // Carrion Wind
  if (row["index"] === "Carrion Wind") {

    // +100 - 160 Defense vs. Missile
    row["prop1"] = "ac-miss";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 160;

    // 6 - 9% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 6;
    row["max2"] = 9;

    // Poison Resist +55 - 75%
    row["prop3"] = "res-pois";
    row["par3"] = "";
    row["min3"] = 55;
    row["max3"] = 75;

    // 25% Chance to cast level 25 Poison Nova on striking
    row["prop4"] = "hit-skill";
    row["par4"] = "Poison Nova";
    row["min4"] = 25;
    row["max4"] = 25;

    // +10 to Plague Poppy
    row["prop5"] = "oskill";
    row["par5"] = "Plague Poppy";
    row["min5"] = 10;
    row["max5"] = 10;

    // 18% Chance to cast level 18 Twister on striking
    row["prop6"] = "hit-skill";
    row["par6"] = "Twister";
    row["min6"] = 18;
    row["max6"] = 18;

    // 15% Damage Taken Goes To Mana
    row["prop7"] = "dmg-to-mana";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // -25 - 35% to Enemy Poison Resistance
    row["prop8"] = "pierce-pois";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 35;

    // +10% to Maximum Poison Resist
    row["prop9"] = "res-pois-max";
    row["par9"] = "";
    row["min9"] = 10;
    row["max9"] = 10;

  }

  // Nature's Peace
  if (row["index"] === "Nature's Peace") {

    // Prevent Monster Heal
    row["prop1"] = "noheal";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // Slain Monsters Rest in Peace
    row["prop2"] = "rip";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

    // Damage Reduced by 7 - 11
    row["prop3"] = "red-dmg";
    row["par3"] = "";
    row["min3"] = 7;
    row["max3"] = 11;

    // All Resistances +20 - 30
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // +5 to Oak Sage
    row["prop5"] = "oskill";
    row["par5"] = "Oak Sage";
    row["min5"] = 5;
    row["max5"] = 5;

    // +5% to Maximum All Resist
    row["prop6"] = "res-all-max";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 5;

  }

  // Wisp
  if (row["index"] === "Wisp") {

    // +10 - 20 Lightning Absorb
    row["prop1"] = "abs-ltng%";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 20;

    // 10% Chance to cast level 16 Lightning on striking
    row["prop2"] = "hit-skill";
    row["par2"] = "Lightning";
    row["min2"] = 10;
    row["max2"] = 16;

    // 20 - 30% Better Chance of Getting Magic Items
    row["prop3"] = "mag%";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 30;

    // Level 12 Oak Sage (33/33 Charges)
    row["prop4"] = "charged";
    row["par4"] = "Oak Sage";
    row["min4"] = 33;
    row["max4"] = 12;

    // Level 12 Heart of Wolverine (33/33 Charges)
    row["prop5"] = "charged";
    row["par5"] = "Heart of Wolverine";
    row["min5"] = 33;
    row["max5"] = 12;

    // Level 12 Spirit of Barbs (33/33 Charges)
    row["prop6"] = "charged";
    row["par6"] = "Spirit of Barbs";
    row["min6"] = 33;
    row["max6"] = 12;

    // 10% Chance to cast level 6 Static Field on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "42";
    row["min7"] = 10;
    row["max7"] = 6;

    // -10 - 15% to Enemy Lightning Resistance
    row["prop8"] = "pierce-ltng";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 15;

    // Adds 1 - 500 Lightning Damage
    row["prop9"] = "dmg-ltng";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 500;

  }

  /*
  ========================= NEW UNIQUES =========================
  */

  // Add New Archon Plate Uniques

  if (row["index"] === "Que-Hegan's Wisdon") {

    // Add Frostfall Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Frostfall Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "cblu",
      "invtransform": "cblu",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-cold",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "res-cold",
      "par5": "",
      "min5": 40,
      "max5": 50,

      "prop6": "res-cold-max",
      "par6": "",
      "min6": 5,
      "max6": 8,

      "prop7": "pierce-cold",
      "par7": "",
      "min7": 20,
      "max7": 20,

      "prop8": "extra-cold",
      "par8": "",
      "min8": 15,
      "max8": 20,

      "prop9": "rep-dur",
      "par9": 10,
      "min9": "",
      "max9": "",

      "*eol\r": 0

    });

    // Add Infernal Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Infernal Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "cred",
      "invtransform": "cred",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-fire",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "res-fire",
      "par5": "",
      "min5": 40,
      "max5": 50,

      "prop6": "res-fire-max",
      "par6": "",
      "min6": 5,
      "max6": 8,

      "prop7": "pierce-fire",
      "par7": "",
      "min7": 20,
      "max7": 20,

      "prop8": "extra-fire",
      "par8": "",
      "min8": 15,
      "max8": 20,

      "prop9": "rep-dur",
      "par9": 10,
      "min9": "",
      "max9": "",

      "*eol\r": 0

    });

    // Add Thunderstrike Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Thunderstrike Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "lyel",
      "invtransform": "lyel",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-light",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "res-ltng",
      "par5": "",
      "min5": 40,
      "max5": 50,

      "prop6": "res-ltng-max",
      "par6": "",
      "min6": 5,
      "max6": 8,

      "prop7": "pierce-ltng",
      "par7": "",
      "min7": 20,
      "max7": 20,

      "prop8": "extra-ltng",
      "par8": "",
      "min8": 15,
      "max8": 20,

      "prop9": "rep-dur",
      "par9": 10,
      "min9": "",
      "max9": "",

      "*eol\r": 0

    });

    // Add Venomous Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Venomous Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "cgrn",
      "invtransform": "cgrn",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-poison",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "res-pois",
      "par5": "",
      "min5": 40,
      "max5": 50,

      "prop6": "res-pois-max",
      "par6": "",
      "min6": 5,
      "max6": 8,

      "prop7": "pierce-pois",
      "par7": "",
      "min7": 20,
      "max7": 20,

      "prop8": "extra-pois",
      "par8": "",
      "min8": 15,
      "max8": 20,

      "prop9": "rep-dur",
      "par9": 10,
      "min9": "",
      "max9": "",

      "*eol\r": 0
    });

    // Add Spectral Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Spectral Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "bwht",
      "invtransform": "bwht",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-magic",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "res-mag",
      "par5": "",
      "min5": 40,
      "max5": 50,

      "prop6": "res-mag-max",
      "par6": "",
      "min6": 5,
      "max6": 8,

      "prop7": "aura",
      "par7": "Minus Enemy Magic Resistance",
      "min7": 1,
      "max7": 1,

      "prop8": "rep-dur",
      "par8": 10,
      "min8": "",
      "max8": "",

      "*eol\r": 0
    });

    // Add Battlemaster Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Battlemaster Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 3,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "whit",
      "invtransform": "whit",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 1,
      "max1": 1,

      "prop2": "cast3",
      "par2": "",
      "min2": 25,
      "max2": 25,

      "prop3": "swing3",
      "par3": "",
      "min3": 25,
      "max3": 25,

      "prop4": "pierce-immunity-damage",
      "par4": "",
      "min4": 300,
      "max4": 300,

      "prop5": "red-dmg%",
      "par5": "",
      "min5": 25,
      "max5": 35,

      "prop6": "balance3",
      "par6": "",
      "min6": 15,
      "max6": 20,

      "prop7": "ignore-ac",
      "par7": "",
      "min7": 1,
      "max7": 1,

      "prop8": "dmg",
      "par8": "",
      "min8": 60,
      "max8": 80,

      "prop9": "rep-dur",
      "par9": 10,
      "min9": "",
      "max9": "",

      "*eol\r": 0
    });

    // Add Arcane Plate
    uniqueitems.rows.push({
      ...row,
      "index": "Arcane Plate",
      "*ID": (uniqueItemID = uniqueItemID + 1),
      "rarity": 1,
      "lvl": 84,
      "lvl req": 70,
      "code": "utp",
      "*ItemName": "Archon Plate",
      "chrtransform": "blac",
      "invtransform": "blac",

      // Properties
      "prop1": "allskills",
      "par1": "",
      "min1": 2,
      "max1": 2,

      "prop2": "cast3",
      "par2": "",
      "min2": 40,
      "max2": 40,

      "prop3": "swing3",
      "par3": "",
      "min3": 40,
      "max3": 40,

      "prop4": "aura",
      "par4": "Conviction",
      "min4": 15,
      "max4": 15,

      "prop5": "res-all",
      "par5": "",
      "min5": 40,
      "max5": 40,

      "prop6": "res-all-max",
      "par6": "",
      "min6": 10,
      "max6": 10,

      "prop7": "nofreeze",
      "par7": "",
      "min7": 1,
      "max7": 1,

      "prop8": "mana-kill",
      "par8": "",
      "min8": 5,
      "max8": 5,

      "prop9": "heal-kill",
      "par9": "",
      "min9": 5,
      "max9": 5,

      "prop10": "rep-dur",
      "par10": 10,
      "min10": "",
      "max10": "",

      "*eol\r": 0
    });
  }
});

// Ethereal Spellweave
uniqueitems.rows.push({

  "index": "Ethereal Spellweave",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 82,
  "lvl req": 62,
  "code": "uth",
  "*ItemName": "Lacquered Plate",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +0 - 6 to [Class] Skill Levels
  "prop1": "randclassskill",
  "par1": "",
  "min1": 0,
  "max1": 6,

  // +40% Faster Run/Walk
  "prop2": "move1",
  "par2": "",
  "min2": 40,
  "max2": 40,

  // 70 - 100% Better Chance of Getting Magic Items
  "prop3": "mag%",
  "par3": "",
  "min3": 70,
  "max3": 100,

  // +40% Faster Cast Rate
  "prop4": "cast1",
  "par4": "",
  "min4": 40,
  "max4": 40,

  // +80 - 90 to Energy
  "prop5": "enr",
  "par5": "",
  "min5": 80,
  "max5": 90,

  // +10 - 15 to Mana after each Kill
  "prop6": "mana-kill",
  "par6": "",
  "min6": 10,
  "max6": 15,

  // Ethereal
  "prop7": "ethereal",
  "par7": "",
  "min7": 1,
  "max7": 1,

  // Indestructible
  "prop8": "indestruct",
  "par8": "",
  "min8": 1,
  "max8": 1,

  // All Resistances +20 - 25
  "prop9": "res-all",
  "par9": "",
  "min9": 20,
  "max9": 25,

  // +13 - 17 to Energy Shield
  "prop10": "oskill",
  "par10": "58",
  "min10": 13,
  "max10": 17,

  // +3 to Mana (Based on Character Level)
  "prop11": "mana/lvl",
  "par11": 24,
  "min11": "",
  "max11": "",

  // Requirements --66%
  "prop12": "ease",
  "par12": "",
  "min12": -66,
  "max12": -66,

});

// Ethereal Warplate
uniqueitems.rows.push({

  "index": "Ethereal Warplate",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 82,
  "lvl req": 62,
  "code": "uth",
  "*ItemName": "Lacquered Plate",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +0 - 6 to [Class] Skill Levels
  "prop1": "randclassskill",
  "par1": "",
  "min1": 0,
  "max1": 6,

  // +40% Faster Run/Walk
  "prop2": "move1",
  "par2": "",
  "min2": 40,
  "max2": 40,

  // 70 - 100% Better Chance of Getting Magic Items
  "prop3": "mag%",
  "par3": "",
  "min3": 70,
  "max3": 100,

  // +40% Increased Attack Speed
  "prop4": "swing1",
  "par4": "",
  "min4": 40,
  "max4": 40,

  // +80 - 90 to Dexterity
  "prop5": "dex",
  "par5": "",
  "min5": 80,
  "max5": 90,

  // +10 - 15 Life after each Kill
  "prop6": "heal-kill",
  "par6": "",
  "min6": 10,
  "max6": 15,

  // Ethereal
  "prop7": "ethereal",
  "par7": "",
  "min7": 1,
  "max7": 1,

  // Indestructible
  "prop8": "indestruct",
  "par8": "",
  "min8": 1,
  "max8": 1,

  // Cannot Be Frozen
  "prop9": "nofreeze",
  "par9": "",
  "min9": 20,
  "max9": 25,

  // +7 - 9 to Critical Strike
  "prop10": "oskill",
  "par10": "9",
  "min10": 7,
  "max10": 9,

  // +3 to Life (Based on Character Level)
  "prop11": "hp/lvl",
  "par11": 24,
  "min11": "",
  "max11": "",

  // Requirements --66%
  "prop12": "ease",
  "par12": "",
  "min12": -66,
  "max12": -66,

});

// Cursed Chest
uniqueitems.rows.push({

  "index": "Cursed Chest",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 56,
  "code": "urs",
  "*ItemName": "Great Hauberk",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // Cursed Chest

  // +5 - 7 to Life Tap
  "prop1": "oskill",
  "par1": "82",
  "min1": 5,
  "max1": 7,

  // +5 - 7 to Lower Resist
  "prop2": "oskill",
  "par2": "91",
  "min2": 5,
  "max2": 7,

  // +5 - 7 to Decrepify
  "prop3": "oskill",
  "par3": "87",
  "min3": 5,
  "max3": 7,

  // +35% Faster Cast Rate
  "prop4": "cast1",
  "par4": "",
  "min4": 35,
  "max4": 35,

  // 0,75% Better Chance of Getting Magic Items (Based on Character Level)
  "prop5": "mag%/lvl",
  "par5": 6,
  "min5": "",
  "max5": "",

  // +2 to All Skills
  "prop6": "allskills",
  "par6": "",
  "min6": 2,
  "max6": 2,

  // Socketed (1 - 2)
  "prop7": "sock",
  "par7": "",
  "min7": 1,
  "max7": 2,

  // Piercing Attack
  "prop8": "pierce",
  "par8": "",
  "min8": 35,
  "max8": 35,

});

// Glacial Embrace
uniqueitems.rows.push({

  "index": "Glacial Embrace",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 73,
  "lvl req": 55,
  "code": "ucl",
  "*ItemName": "Loricated Mail",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "dblu",
  "invtransform": "dblu",
  "*eol\r": 0,

  // 20% Chance to cast level 18 Glacial Spike when struck
  "prop1": "gethit-skill",
  "par1": "55",
  "min1": 20,
  "max1": 18,

  // +1 to Cold Mastery
  "prop2": "oskill",
  "par2": "65",
  "min2": 1,
  "max2": 1,


  // +15 - 20% to Cold Skill Damage
  "prop3": "extra-cold",
  "par3": "",
  "min3": 15,
  "max3": 20,

  // Adds 250 - 300 Cold Damage
  "prop4": "dmg-cold",
  "par4": "100",
  "min4": 250,
  "max4": 300,

  // Cold Resist +25 - 35%
  "prop5": "res-cold",
  "par5": "",
  "min5": 25,
  "max5": 35,

  // Cold Absorb 5 - 10%
  "prop6": "abs-cold",
  "par6": "",
  "min6": 5,
  "max6": 10,

  // +10 - 12 to Chilling Armor
  "prop7": "oskill",
  "par7": "60",
  "min7": 10,
  "max7": 12,

  // +5 - 10% to Maximum Cold Resist
  "prop8": "res-cold-max",
  "par8": "",
  "min8": 5,
  "max8": 10,

});

// Divine Guardian
uniqueitems.rows.push({

  "index": "Divine Guardian",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 72,
  "lvl req": 54,
  "code": "ung",
  "*ItemName": "Diamond Mail",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "bwht",
  "invtransform": "bwht",
  "*eol\r": 0,

  // Increase Maximum Life 10 - 15%
  "prop1": "hp%",
  "par1": "",
  "min1": 10,
  "max1": 15,

  // Increase Maximum Mana 10 - 15%
  "prop2": "mana%",
  "par2": "",
  "min2": 10,
  "max2": 15,

  // Level 5 - 7 Redemption Aura When Equipped
  "prop3": "aura",
  "par3": "124",
  "min3": 5,
  "max3": 7,

  // +200 - 250% Enhanced Defense
  "prop4": "ac%",
  "par4": "",
  "min4": 200,
  "max4": 250,

  // Replenish Life +33
  "prop5": "regen",
  "par5": "",
  "min5": 33,
  "max5": 33,

  // Damage Reduced by 10 - 15%
  "prop6": "red-dmg%",
  "par6": "",
  "min6": 10,
  "max6": 15,

  // All Resistances +8 - 15
  "prop7": "res-all",
  "par7": "",
  "min7": 8,
  "max7": 15,

  // Magic Absorb 15 - 20%
  "prop8": "abs-mag%",
  "par8": "",
  "min8": 15,
  "max8": 20,

});

// Guardian’s Carapace
uniqueitems.rows.push({

  "index": "Guardian's Carapace",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 68,
  "lvl req": 51,
  "code": "ula",
  "*ItemName": "Scarab Husk",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "blac",
  "invtransform": "blac",
  "*eol\r": 0,


  // Level 10 - 12 Defiance Aura When Equipped
  "prop1": "aura",
  "par1": "104",
  "min1": 10,
  "max1": 12,

  // +45% Faster Hit Recovery
  "prop2": "balance1",
  "par2": "",
  "min2": 45,
  "max2": 45,

  // +1 to All Skills
  "prop3": "allskills",
  "par3": "",
  "min3": 1,
  "max3": 1,

  // 30 - 50% Better Chance of Getting Magic Items
  "prop4": "mag%",
  "par4": "",
  "min4": 30,
  "max4": 50,

  // +15 - 20 to all Attributes
  "prop5": "all-stats",
  "par5": "",
  "min5": 15,
  "max5": 20,

  // Cannot Be Frozen
  "prop6": "nofreeze",
  "par6": "",
  "min6": 1,
  "max6": 1,

  // Lightning Resist +20 - 30%
  "prop7": "res-ltng",
  "par7": "",
  "min7": 20,
  "max7": 30,

});

// Fiery Dragonhide
uniqueitems.rows.push({

  "index": "Fiery Dragonhide",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 67,
  "lvl req": 50,
  "code": "uea",
  "*ItemName": "Wyrmhide",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "cred",
  "invtransform": "cred",
  "*eol\r": 0,

  // +3 - 4 to Fire Skills
  "prop1": "fireskill",
  "par1": "",
  "min1": 3,
  "max1": 4,

  // -17 - 25% to Enemy Fire Resistance
  "prop2": "pierce-fire",
  "par2": "",
  "min2": 17,
  "max2": 25,

  // +20 - 30% to Fire Skill Damage
  "prop3": "extra-fire",
  "par3": "",
  "min3": 20,
  "max3": 30,

  // +10 - 15 to Hydra
  "prop4": "oskill",
  "par4": "62",
  "min4": 10,
  "max4": 15,

  // Adds 200 - 300 Fire Damage
  "prop5": "dmg-fire",
  "par5": "",
  "min5": 200,
  "max5": 300,

  // +1 to Fire Mastery
  "prop6": "oskill",
  "par6": "61",
  "min6": 1,
  "max6": 1,

  // 30% Chance to cast level 25 Eruption when struck
  "prop7": "gethit-skill",
  "par7": "234",
  "min7": 30,
  "max7": 25,

  // Fire Absorb 5 - 10%
  "prop8": "abs-fire",
  "par8": "",
  "min8": 5,
  "max8": 10,

});

/*
=====================================================================================
====================================== BELTS ======================================
=====================================================================================
*/

// Crushing Fury
uniqueitems.rows.push({

  "index": "Crushing Fury",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 85,
  "lvl req": 60,
  "code": "uhc",
  "*ItemName": "Colossus Girdle",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // Prevent Monster Heal
  "prop1": "noheal",
  "par1": "",
  "min1": 1,
  "max1": 1,

  // +30 - 40 to Strength
  "prop2": "str",
  "par2": "",
  "min2": 30,
  "max2": 40,

  // 20% Chance of Crushing Blow
  "prop3": "crush",
  "par3": "",
  "min3": 20,
  "max3": 20,

  // 20% Deadly Strike
  "prop4": "deadly",
  "par4": "",
  "min4": 20,
  "max4": 20,

  // Indestructible
  "prop5": "indestruct",
  "par5": "",
  "min5": 1,
  "max5": 1,

  // -35% Target Defense
  "prop6": "reduce-ac",
  "par6": "",
  "min6": 35,
  "max6": 35,

  // 20% Bonus to Attack Rating
  "prop7": "att%",
  "par7": "",
  "min7": 20,
  "max7": 20,

  // +1 to Battle Orders
  "prop8": "oskill",
  "par8": "149",
  "min8": 1,
  "max8": 1

});

// Vengeful Spikes
uniqueitems.rows.push({

  "index": "Vengeful Spikes",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 82,
  "lvl req": 62,
  "code": "utc",
  "*ItemName": "Troll Belt",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // 10% Chance to cast level 15 Bone Armor when struck
  "prop1": "gethit-skill",
  "par1": 68,
  "min1": 10,
  "max1": 15,

  // Damage Reduced by 10 - 15%
  "prop2": "red-dmg%",
  "par2": "",
  "min2": 10,
  "max2": 15,

  // Level 22 - 27 Thorns Aura When Equipped
  "prop3": "aura",
  "par3": 103,
  "min3": 22,
  "max3": 27,

  // Attacker Takes Damage of 4 (Based on Character Level)
  "prop4": "thorns/lvl",
  "par4": 32,
  "min4": "",
  "max4": "",

  // Replenish Life +62
  "prop5": "regen",
  "par5": "",
  "min5": 33,
  "max5": 33,

  // 30 - 50% Better Chance of Getting Magic Items
  "prop6": "mag%",
  "par6": "",
  "min6": 30,
  "max6": 50,

  // +80 - 120 to Life
  "prop7": "hp",
  "par7": "",
  "min7": 80,
  "max7": 120,

  // +30% Faster Run/Walk
  "prop8": "move1",
  "par8": "",
  "min8": 30,
  "max8": 30,

});

/*
  =====================================================================================
  ====================================== SHIELDS ======================================
  =====================================================================================
*/

// Icy Vortex
uniqueitems.rows.push({

  "index": "Icy Vortex",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 85,
  "lvl req": 60,
  "code": "paf",
  "*ItemName": "Vortex Shield",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // All Resistances +30 - 40
  "prop1": "res-all",
  "par1": "",
  "min1": 30,
  "max1": 40,

  // +4 - 5 to Offensive Auras [Class only] Skills
  "prop2": "skilltab",
  "par2": "10",
  "min2": 4,
  "max2": 5,

  // +4 - 5 to Defensive Auras [Class only] Skills
  "prop3": "skilltab",
  "par3": "11",
  "min3": 4,
  "max3": 5,

  // -15 - 20% to Enemy Cold Resistance
  "prop4": "pierce-cold",
  "par4": "",
  "min4": 15,
  "max4": 20,

  // Adds 200 - 300 Cold Damage
  "prop5": "dmg-cold",
  "par5": "75",
  "min5": 200,
  "max5": 300,

  // 25% Chance to cast level 30 Frost Nova on striking
  "prop6": "hit-skill",
  "par6": 44,
  "min6": 25,
  "max6": 30,

  // Level 13 - 15 Holy Freeze Aura When Equipped
  "prop7": "aura",
  "par7": "114",
  "min7": 13,
  "max7": 15,

  // +15 - 20% to Cold Skill Damage
  "prop8": "extra-cold",
  "par8": "",
  "min8": 15,
  "max8": 20,

  // 20% Increased Chance of Blocking
  "prop9": "block",
  "par9": "",
  "min9": 20,
  "max9": 20,

  // Socketed (1 - 2)
  "prop10": "sock",
  "par10": "",
  "min10": 1,
  "max10": 2,

});


// Grave Ward
uniqueitems.rows.push({

  "index": "Grave Ward",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 67,
  "lvl req": 50,
  "code": "neg",
  "*ItemName": "Hellspawn Skull",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +4 - 5 to Summoning Skills (Necro) [Class only] Skills
  "prop1": "skilltab",
  "par1": "8",
  "min1": 4,
  "max1": 5,

  // Level 15 - 20 Thorns Aura When Equipped
  "prop2": "aura",
  "par2": "103",
  "min2": 15,
  "max2": 20,

  // 0,5% Better Chance of Getting Magic Items (Based on Character Level)
  "prop3": "mag%/lvl",
  "par3": "4",
  "min3": "",
  "max3": "",

  // All Resistances +10 - 15
  "prop4": "res-all",
  "par4": "",
  "min4": 10,
  "max4": 15,

  // +20% Faster Block Rate
  "prop5": "block1",
  "par5": "",
  "min5": 20,
  "max5": 20,

  // Half Freeze Duration
  "prop6": "half-freeze",
  "par6": "",
  "min6": 1,
  "max6": 1,

  // Socketed (2)
  "prop7": "sock",
  "par7": "",
  "min7": 2,
  "max7": 2,

  // +35% Faster Run/Walk
  "prop8": "move1",
  "par8": "",
  "min8": 35,
  "max8": 35,

});

// Toxic Blight
uniqueitems.rows.push({

  "index": "Toxic Blight",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 66,
  "lvl req": 49,
  "code": "ned",
  "*ItemName": "Overseer Skull",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "dgrn",
  "invtransform": "dgrn",
  "*eol\r": 0,

  // +2 to Poison and Bone Skills [Class only] Skills
  "prop1": "skilltab",
  "par1": "7",
  "min1": 2,
  "max1": 2,

  // -15 - 25% to Enemy Poison Resistance
  "prop2": "pierce-pois",
  "par2": "",
  "min2": 15,
  "max2": 25,

  // Poison Resist +30 - 40%
  "prop3": "res-pois",
  "par3": "",
  "min3": 30,
  "max3": 40,

  // +15 - 25% to Poison Skill Damage
  "prop4": "extra-pois",
  "par4": "",
  "min4": 15,
  "max4": 25,

  // +30 - 35% Faster Cast Rate
  "prop5": "cast1",
  "par5": "",
  "min5": 30,
  "max5": 35,

  // +20 - 30 to Energy
  "prop6": "enr",
  "par6": "",
  "min6": 20,
  "max6": 30,

  // 20% Increased Chance of Blocking
  "prop7": "block",
  "par7": "",
  "min7": 20,
  "max7": 20,

  // +5% to Maximum Poison Resist
  "prop8": "res-pois-max",
  "par8": "",
  "min8": 5,
  "max8": 5,

});

/*
  =====================================================================================
  ====================================== WEAPONS ======================================
  =====================================================================================
*/

// The Grandmother
uniqueitems.rows.push({

  "index": "The Grandmother",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 80,
  "lvl req": 81,
  "code": "7fb",
  "*ItemName": "Colossus Sword",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // +1 - 2 to All Skills
  "prop1": "allskills",
  "par1": "",
  "min1": 1,
  "max1": 2,

  // Level 5 - 7 Cleansing Aura When Equipped
  "prop2": "aura",
  "par2": 109,
  "min2": 5,
  "max2": 7,

  // Damage +70 - 140
  "prop3": "dmg",
  "par3": "",
  "min3": 70,
  "max3": 140,

  // Damage Reduced by 10 - 15%
  "prop4": "red-dmg%",
  "par4": "",
  "min4": 10,
  "max4": 15,

  // +3 to Blade Mastery
  "prop5": "oskill",
  "par5": "127",
  "min5": 3,
  "max5": 3,

  // Slows Target by 40%
  "prop6": "slow",
  "par6": "",
  "min6": 40,
  "max6": 40,

  // +20% Faster Hit Recovery
  "prop7": "balance1",
  "par7": "",
  "min7": 20,
  "max7": 20,

  // -60% Target Defense
  "prop8": "reduce-ac",
  "par8": "",
  "min8": 60,
  "max8": 60,

  // Requirements --50%
  "prop9": "ease",
  "par9": "",
  "min9": -50,
  "max9": -50

});

// Berserk Strike
uniqueitems.rows.push({

  "index": "Berserk Strike",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 85,
  "lvl req": 66,
  "code": "7wd",
  "*ItemName": "Mythical Sword",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // +1 to Battle Command
  "prop1": "oskill",
  "par1": "155",
  "min1": 1,
  "max1": 1,

  // +4 - 5 to Berserk
  "prop2": "oskill",
  "par2": "152",
  "min2": 4,
  "max2": 5,

  // +5 - 9 Life after each Kill
  "prop3": "heal-kill",
  "par3": "",
  "min3": 5,
  "max3": 9,

  // +5 - 9 to Mana after each Kill
  "prop4": "mana-kill",
  "par4": "",
  "min4": 5,
  "max4": 9,

  // +260 - 300% Enhanced Damage
  "prop5": "dmg%",
  "par5": "",
  "min5": 260,
  "max5": 300,

  // +30% Increased Attack Speed
  "prop6": "swing1",
  "par6": "",
  "min6": 30,
  "max6": 30,

  // Adds 300 - 400 Lightning Damage
  "prop7": "dmg-ltng",
  "par7": "",
  "min7": 300,
  "max7": 400,

  // +50 - 60 to Maximum Damage
  "prop8": "dmg-max",
  "par8": "",
  "min8": 50,
  "max8": 60,

  // 30% Bonus to Attack Rating
  "prop9": "att%",
  "par9": "",
  "min9": 30,
  "max9": 30,

});

// Arctic Conduit
uniqueitems.rows.push({

  "index": "Arctic Conduit",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 83,
  "lvl req": 62,
  "code": "6bs",
  "*ItemName": "Shillelagh",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "dgld",
  "invtransform": "dgld",
  "*eol\r": 0,


  // 20% Chance to cast level 7 Amplify Damage on striking
  "prop1": "hit-skill",
  "par1": "66",
  "min1": 20,
  "max1": 7,

  // Level 25 Holy Freeze Aura When Equipped
  "prop2": "aura",
  "par2": "114",
  "min2": 25,
  "max2": 25,

  // +45% Faster Cast Rate
  "prop3": "cast1",
  "par3": "",
  "min3": 45,
  "max3": 45,

  // +45% Increased Attack Speed
  "prop4": "swing1",
  "par4": "",
  "min4": 45,
  "max4": 45,

  // All Resistances +25 - 35
  "prop5": "res-all",
  "par5": "",
  "min5": 25,
  "max5": 35,

  // 40 - 70% Better Chance of Getting Magic Items
  "prop6": "mag%",
  "par6": "",
  "min6": 40,
  "max6": 70,

  // 450 - 500% Extra Gold from Monsters
  "prop7": "gold%",
  "par7": "",
  "min7": 200,
  "max7": 300,

  // +250 - 330% Enhanced Damage
  "prop8": "dmg%",
  "par8": "",
  "min8": 250,
  "max8": 330,

  // 1% Bonus to Attack Rating (Based on Character Level)
  "prop9": "att%/lvl",
  "par9": 2,
  "min9": "",
  "max9": "",

  // Level 1 Teleport (100/100 Charges)
  "prop10": "charged",
  "par10": "54",
  "min10": 100,
  "max10": 1,

});

// Wraithcaller
uniqueitems.rows.push({

  "index": "Wraithcaller",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 66,
  "lvl req": 60,
  "code": "7tr",
  "*ItemName": "Stygian Pike",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "whit",
  "invtransform": "whit",
  "*eol\r": 0,

  // +40% Increased Attack Speed
  "prop1": "swing1",
  "par1": "",
  "min1": 40,
  "max1": 40,

  // Ethereal
  "prop2": "ethereal",
  "par2": "",
  "min2": 1,
  "max2": 1,

  // Indestructible
  "prop3": "indestruct",
  "par3": "",
  "min3": 1,
  "max3": 1,

  // 50 - 70% Better Chance of Getting Magic Items
  "prop4": "mag%",
  "par4": "",
  "min4": 50,
  "max4": 70,

  // Socketed (1 - 3)
  "prop5": "sock",
  "par5": "",
  "min5": 1,
  "max5": 3,

  // +400 - 450% Enhanced Damage
  "prop6": "dmg%",
  "par6": "",
  "min6": 400,
  "max6": 450,

  // Adds 200 - 250 Fire/Lightning/Cold Damage
  "prop7": "dmg-elem",
  "par7": "33",
  "min7": 200,
  "max7": 250,

  // 30% Chance to cast level 28 Bone Spear on striking
  "prop8": "hit-skill",
  "par8": 84,
  "min8": 30,
  "max8": 28,

  // 30% Bonus to Attack Rating
  "prop9": "att%",
  "par9": "",
  "min9": 30,
  "max9": 30,

});

// Heaven's Embrace
uniqueitems.rows.push({

  "index": "Heaven's Embrace",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 78,
  "lvl req": 58,
  "code": "7bs",
  "*ItemName": "Conquest Sword",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "whit",
  "invtransform": "whit",
  "*eol\r": 0,

  // 30% Chance to cast level 28 Fist of the Heavens on striking
  "prop1": "hit-skill",
  "par1": "121",
  "min1": 30,
  "max1": 28,

  // +35% Increased Attack Speed
  "prop2": "swing1",
  "par2": "",
  "min2": 35,
  "max2": 35,

  // 35% Bonus to Attack Rating
  "prop3": "att%",
  "par3": "",
  "min3": 35,
  "max3": 35,

  // +300 - 350% Enhanced Damage
  "prop4": "dmg%",
  "par4": "",
  "min4": 300,
  "max4": 350,

  // +0,5 to Maximum Damage (Based on Character Level)
  "prop5": "dmg/lvl",
  "par5": 4,
  "min5": "",
  "max5": "",

  // Ignore Target's Defense
  "prop6": "ignore-ac",
  "par6": "",
  "min6": 1,
  "max6": 1,

  // Socketed (1 - 3)
  "prop7": "sock",
  "par7": "",
  "min7": 1,
  "max7": 3,

  // +20 - 30 to Dexterity
  "prop8": "dex",
  "par8": "",
  "min8": 20,
  "max8": 30,

});

// Infernal Sphere
uniqueitems.rows.push({

  "index": "Infernal Sphere",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 56,
  "code": "obd",
  "*ItemName": "Demon Heart",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "cred",
  "invtransform": "cred",
  "*eol\r": 0,

  // +2 to Sorceress Skill Levels
  "prop1": "sor",
  "par1": "",
  "min1": 2,
  "max1": 2,

  // +3 to Fire Spells [Class only] Skills
  "prop2": "skilltab",
  "par2": "3",
  "min2": 3,
  "max2": 3,

  // -25 - 35% to Enemy Fire Resistance
  "prop3": "pierce-fire",
  "par3": "",
  "min3": 25,
  "max3": 35,

  // +20 - 30% to Fire Skill Damage
  "prop4": "extra-fire",
  "par4": "",
  "min4": 20,
  "max4": 30,

  // Level 5 Resist Fire Aura When Equipped
  "prop5": "aura",
  "par5": "100",
  "min5": 5,
  "max5": 5,

  // 25 - 35% Better Chance of Getting Magic Items
  "prop6": "mag%",
  "par6": "",
  "min6": 25,
  "max6": 35,

  // +80 - 120 to Mana
  "prop7": "mana",
  "par7": "",
  "min7": 80,
  "max7": 120,

  // +25 - 30% Faster Cast Rate
  "prop8": "cast1",
  "par8": "",
  "min8": 25,
  "max8": 30,

});

// The Elementalist
uniqueitems.rows.push({

  "index": "The Elementalist",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 83,
  "lvl req": 62,
  "code": "7st",
  "*ItemName": "Ghost Spear",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "lpur",
  "invtransform": "lpur",
  "*eol\r": 0,


  // 70% Chance to cast level 35 Frozen Orb on striking
  "prop1": "hit-skill",
  "par1": "64",
  "min1": 70,
  "max1": 35,

  // 70% Chance to cast level 35 Fire Wall on striking
  "prop2": "hit-skill",
  "par2": "51",
  "min2": 70,
  "max2": 35,

  // 70% Chance to cast level 35 Chain Lightning on striking
  "prop3": "hit-skill",
  "par3": "53",
  "min3": 70,
  "max3": 35,

  // -25 - 30% to Enemy Cold Resistance
  "prop4": "pierce-cold",
  "par4": "",
  "min4": 25,
  "max4": 30,

  // -25 - 30% to Enemy Fire Resistance
  "prop5": "pierce-fire",
  "par5": "",
  "min5": 25,
  "max5": 30,

  // -25 - 30% to Enemy Lightning Resistance
  "prop6": "pierce-ltng",
  "par6": "",
  "min6": 25,
  "max6": 30,

  // +20 - 25% to Cold Skill Damage
  "prop7": "extra-cold",
  "par7": "",
  "min7": 20,
  "max7": 25,

  // +20 - 25% to Fire Skill Damage
  "prop8": "extra-fire",
  "par8": "",
  "min8": 20,
  "max8": 25,

  // +20 - 25% to Lightning Skill Damage
  "prop9": "extra-ltng",
  "par9": "",
  "min9": 20,
  "max9": 25,

  // Ignore Target's Defense
  "prop10": "ignore-ac",
  "par10": "",
  "min10": 1,
  "max10": 1,

  // +50% Increased Attack Speed
  "prop11": "swing1",
  "par11": "",
  "min11": 50,
  "max11": 50,

  // Adds 300 - 350 Fire/Lightning/Cold Damage
  "prop12": "dmg-elem",
  "par12": "",
  "min12": 300,
  "max12": 350,

});

// Soulrender
uniqueitems.rows.push({

  "index": "Soulrender",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 66,
  "lvl req": 49,
  "code": "7cm",
  "*ItemName": "Highland Blade",
  "cost mult": 3,
  "cost add": 5000,
  "chrtransform": "blac",
  "invtransform": "blac",
  "*eol\r": 0,

  // +200 - 250% Damage to Demons
  "prop1": "dmg-demon",
  "par1": "",
  "min1": 200,
  "max1": 250,

  // +200 - 250% Damage to Undead
  "prop2": "dmg-undead",
  "par2": "",
  "min2": 200,
  "max2": 250,

  // +1 to All Skills
  "prop3": "allskills",
  "par3": "",
  "min3": 1,
  "max3": 1,

  // +20% Increased Attack Speed
  "prop4": "swing1",
  "par4": "",
  "min4": 20,
  "max4": 20,

  // +150 - 200% Enhanced Damage
  "prop5": "dmg%",
  "par5": "",
  "min5": 150,
  "max5": 200,

  // 3 - 8% Life stolen per hit
  "prop6": "lifesteal",
  "par6": "",
  "min6": 3,
  "max6": 8,

  // 27% Chance of Crushing Blow
  "prop7": "crush",
  "par7": "",
  "min7": 27,
  "max7": 27,

  // Reanimate As: [Returned]
  "prop8": "reanimate",
  "par8": 440,
  "min8": 30,
  "max8": 30,

});

/*
  =====================================================================================
  ====================================== HELMS ========================================
  =====================================================================================
*/

// Tamer
uniqueitems.rows.push({

  "index": "Tamer",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 24,
  "lvl req": 18,
  "code": "dr5",
  "*ItemName": "Spirit Mask",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +20 - 30 to Life
  "prop1": "hp",
  "par1": "",
  "min1": 20,
  "max1": 30,

  // +1 - 3 to Summoning Skills (Druid) [Class only] Skills
  "prop2": "skilltab",
  "par2": 15,
  "min2": 1,
  "max2": 3,

  // +10 - 15% Faster Run/Walk
  "prop3": "move1",
  "par3": "",
  "min3": 10,
  "max3": 15,

  // +10 - 15% Faster Hit Recovery
  "prop4": "balance1",
  "par4": "",
  "min4": 10,
  "max4": 15,

  // All Resistances +10 - 15
  "prop5": "res-all",
  "par5": "",
  "min5": 10,
  "max5": 15,

});

/*
  =====================================================================================
  ====================================== BOOTS ========================================
  =====================================================================================
*/

// Mage Slippers
uniqueitems.rows.push({

  "index": "Mage Slippers",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 81,
  "lvl req": 60,
  "code": "utb",
  "*ItemName": "Mirrored Boots",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +20% Faster Run/Walk
  "prop1": "move1",
  "par1": "",
  "min1": 20,
  "max1": 20,

  // +10% Faster Cast Rate
  "prop2": "cast1",
  "par2": "",
  "min2": 10,
  "max2": 10,

  // +5 - 10 to all Attributes
  "prop3": "all-stats",
  "par3": "",
  "min3": 5,
  "max3": 10,

  // Increase Maximum Mana 15 - 25%
  "prop4": "mana%",
  "par4": "",
  "min4": 15,
  "max4": 25,

  // 20 - 40% Better Chance of Getting Magic Items
  "prop5": "mag%",
  "par5": "",
  "min5": 20,
  "max5": 40,

  // +5 - 7 Cold Absorb
  "prop6": "abs-cold%",
  "par6": "",
  "min6": 5,
  "max6": 7,

  // +5 - 7 Lightning Absorb
  "prop7": "abs-ltng%",
  "par7": "",
  "min7": 5,
  "max7": 7,

  // +5 - 7 Fire Absorb
  "prop8": "abs-fire%",
  "par8": "",
  "min8": 5,
  "max8": 7,

  // +5 - 7 Magic Absorb
  "prop9": "abs-mag%",
  "par9": "",
  "min9": 5,
  "max9": 7

});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

// cubemain.txt
const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

// Allows rerolling Tyrael's Might
cubemain.rows.push({
  "description": "Gul rune + Ist rune + Rainbow Facet + Tyrael's Might -> Tyraels Might reroll",
  "enabled": 1,
  "version": 100,
  "numinputs": 4,
  "input 1": "Tyrael's Might",
  "input 2": "r25",
  "input 3": "r24",
  "input 4": "jew,uni",
  "output": "Tyrael's Might,reg",
  "lvl": 99,
  "*eol\r": 0
});


D2RMM.writeTsv(cubemainFilename, cubemain);

// item-names.json
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.push(
  {
    "id": 92034,
    "Key": "Frostfall Plate",
    "enUS": "Frostfall Plate",
    "zhTW": "Frostfall Plate",
    "deDE": "Frostfall Plate",
    "esES": "Frostfall Plate",
    "frFR": "Frostfall Plate",
    "itIT": "Frostfall Plate",
    "koKR": "Frostfall Plate",
    "plPL": "Frostfall Plate",
    "esMX": "Frostfall Plate",
    "jaJP": "Frostfall Plate",
    "ptBR": "Frostfall Plate",
    "ruRU": "Frostfall Plate",
    "zhCN": "Frostfall Plate"
  });

itemNames.push(
  {
    "id": 92035,
    "Key": "Infernal Plate",
    "enUS": "Infernal Plate",
    "zhTW": "Infernal Plate",
    "deDE": "Infernal Plate",
    "esES": "Infernal Plate",
    "frFR": "Infernal Plate",
    "itIT": "Infernal Plate",
    "koKR": "Infernal Plate",
    "plPL": "Infernal Plate",
    "esMX": "Infernal Plate",
    "jaJP": "Infernal Plate",
    "ptBR": "Infernal Plate",
    "ruRU": "Infernal Plate",
    "zhCN": "Infernal Plate"
  });

itemNames.push(
  {
    "id": 92036,
    "Key": "Thunderstrike Plate",
    "enUS": "Thunderstrike Plate",
    "zhTW": "Thunderstrike Plate",
    "deDE": "Thunderstrike Plate",
    "esES": "Thunderstrike Plate",
    "frFR": "Thunderstrike Plate",
    "itIT": "Thunderstrike Plate",
    "koKR": "Thunderstrike Plate",
    "plPL": "Thunderstrike Plate",
    "esMX": "Thunderstrike Plate",
    "jaJP": "Thunderstrike Plate",
    "ptBR": "Thunderstrike Plate",
    "ruRU": "Thunderstrike Plate",
    "zhCN": "Thunderstrike Plate"
  });

itemNames.push(
  {
    "id": 92037,
    "Key": "Venomous Plate",
    "enUS": "Venomous Plate",
    "zhTW": "Venomous Plate",
    "deDE": "Venomous Plate",
    "esES": "Venomous Plate",
    "frFR": "Venomous Plate",
    "itIT": "Venomous Plate",
    "koKR": "Venomous Plate",
    "plPL": "Venomous Plate",
    "esMX": "Venomous Plate",
    "jaJP": "Venomous Plate",
    "ptBR": "Venomous Plate",
    "ruRU": "Venomous Plate",
    "zhCN": "Venomous Plate"
  });

itemNames.push(
  {
    "id": 92038,
    "Key": "Spectral Plate",
    "enUS": "Spectral Plate",
    "zhTW": "Spectral Plate",
    "deDE": "Spectral Plate",
    "esES": "Spectral Plate",
    "frFR": "Spectral Plate",
    "itIT": "Spectral Plate",
    "koKR": "Spectral Plate",
    "plPL": "Spectral Plate",
    "esMX": "Spectral Plate",
    "jaJP": "Spectral Plate",
    "ptBR": "Spectral Plate",
    "ruRU": "Spectral Plate",
    "zhCN": "Spectral Plate"
  });

itemNames.push(
  {
    "id": 92039,
    "Key": "Battlemaster Plate",
    "enUS": "Battlemaster Plate",
    "zhTW": "Battlemaster Plate",
    "deDE": "Battlemaster Plate",
    "esES": "Battlemaster Plate",
    "frFR": "Battlemaster Plate",
    "itIT": "Battlemaster Plate",
    "koKR": "Battlemaster Plate",
    "plPL": "Battlemaster Plate",
    "esMX": "Battlemaster Plate",
    "jaJP": "Battlemaster Plate",
    "ptBR": "Battlemaster Plate",
    "ruRU": "Battlemaster Plate",
    "zhCN": "Battlemaster Plate"
  });

itemNames.push(
  {
    "id": 92040,
    "Key": "Arcane Plate",
    "enUS": "Arcane Plate",
    "zhTW": "Arcane Plate",
    "deDE": "Arcane Plate",
    "esES": "Arcane Plate",
    "frFR": "Arcane Plate",
    "itIT": "Arcane Plate",
    "koKR": "Arcane Plate",
    "plPL": "Arcane Plate",
    "esMX": "Arcane Plate",
    "jaJP": "Arcane Plate",
    "ptBR": "Arcane Plate",
    "ruRU": "Arcane Plate",
    "zhCN": "Arcane Plate"
  });

itemNames.push(
  {
    "id": 92042,
    "Key": "Tamer",
    "enUS": "Tamer",
    "zhTW": "Tamer",
    "deDE": "Tamer",
    "esES": "Tamer",
    "frFR": "Tamer",
    "itIT": "Tamer",
    "koKR": "Tamer",
    "plPL": "Tamer",
    "esMX": "Tamer",
    "jaJP": "Tamer",
    "ptBR": "Tamer",
    "ruRU": "Tamer",
    "zhCN": "Tamer"
  });

itemNames.push(
  {
    "id": 92050,
    "Key": "The Grandmother",
    "enUS": "The Grandmother",
    "zhTW": "The Grandmother",
    "deDE": "The Grandmother",
    "esES": "The Grandmother",
    "frFR": "The Grandmother",
    "itIT": "The Grandmother",
    "koKR": "The Grandmother",
    "plPL": "The Grandmother",
    "esMX": "The Grandmother",
    "jaJP": "The Grandmother",
    "ptBR": "The Grandmother",
    "ruRU": "The Grandmother",
    "zhCN": "The Grandmother"
  });

itemNames.push(
  {
    "id": 92051,
    "Key": "Icy Vortex",
    "enUS": "Icy Vortex",
    "zhTW": "Icy Vortex",
    "deDE": "Icy Vortex",
    "esES": "Icy Vortex",
    "frFR": "Icy Vortex",
    "itIT": "Icy Vortex",
    "koKR": "Icy Vortex",
    "plPL": "Icy Vortex",
    "esMX": "Icy Vortex",
    "jaJP": "Icy Vortex",
    "ptBR": "Icy Vortex",
    "ruRU": "Icy Vortex",
    "zhCN": "Icy Vortex"
  });

itemNames.push(
  {
    "id": 92052,
    "Key": "Crushing Fury",
    "enUS": "Crushing Fury",
    "zhTW": "Crushing Fury",
    "deDE": "Crushing Fury",
    "esES": "Crushing Fury",
    "frFR": "Crushing Fury",
    "itIT": "Crushing Fury",
    "koKR": "Crushing Fury",
    "plPL": "Crushing Fury",
    "esMX": "Crushing Fury",
    "jaJP": "Crushing Fury",
    "ptBR": "Crushing Fury",
    "ruRU": "Crushing Fury",
    "zhCN": "Crushing Fury"
  });

itemNames.push(
  {
    "id": 92053,
    "Key": "Vengeful Spikes",
    "enUS": "Vengeful Spikes",
    "zhTW": "Vengeful Spikes",
    "deDE": "Vengeful Spikes",
    "esES": "Vengeful Spikes",
    "frFR": "Vengeful Spikes",
    "itIT": "Vengeful Spikes",
    "koKR": "Vengeful Spikes",
    "plPL": "Vengeful Spikes",
    "esMX": "Vengeful Spikes",
    "jaJP": "Vengeful Spikes",
    "ptBR": "Vengeful Spikes",
    "ruRU": "Vengeful Spikes",
    "zhCN": "Vengeful Spikes"
  });

itemNames.push(
  {
    "id": 92054,
    "Key": "Ethereal Spellweave",
    "enUS": "Ethereal Spellweave",
    "zhTW": "Ethereal Spellweave",
    "deDE": "Ethereal Spellweave",
    "esES": "Ethereal Spellweave",
    "frFR": "Ethereal Spellweave",
    "itIT": "Ethereal Spellweave",
    "koKR": "Ethereal Spellweave",
    "plPL": "Ethereal Spellweave",
    "esMX": "Ethereal Spellweave",
    "jaJP": "Ethereal Spellweave",
    "ptBR": "Ethereal Spellweave",
    "ruRU": "Ethereal Spellweave",
    "zhCN": "Ethereal Spellweave"
  });


itemNames.push(
  {
    "id": 92055,
    "Key": "Ethereal Warplate",
    "enUS": "Ethereal Warplate",
    "zhTW": "Ethereal Warplate",
    "deDE": "Ethereal Warplate",
    "esES": "Ethereal Warplate",
    "frFR": "Ethereal Warplate",
    "itIT": "Ethereal Warplate",
    "koKR": "Ethereal Warplate",
    "plPL": "Ethereal Warplate",
    "esMX": "Ethereal Warplate",
    "jaJP": "Ethereal Warplate",
    "ptBR": "Ethereal Warplate",
    "ruRU": "Ethereal Warplate",
    "zhCN": "Ethereal Warplate"
  });

itemNames.push(
  {
    "id": 92056,
    "Key": "Mage Slippers",
    "enUS": "Mage Slippers",
    "zhTW": "Mage Slippers",
    "deDE": "Mage Slippers",
    "esES": "Mage Slippers",
    "frFR": "Mage Slippers",
    "itIT": "Mage Slippers",
    "koKR": "Mage Slippers",
    "plPL": "Mage Slippers",
    "esMX": "Mage Slippers",
    "jaJP": "Mage Slippers",
    "ptBR": "Mage Slippers",
    "ruRU": "Mage Slippers",
    "zhCN": "Mage Slippers"
  });

itemNames.push(
  {
    "id": 92057,
    "Key": "Cursed Chest",
    "enUS": "Cursed Chest",
    "zhTW": "Cursed Chest",
    "deDE": "Cursed Chest",
    "esES": "Cursed Chest",
    "frFR": "Cursed Chest",
    "itIT": "Cursed Chest",
    "koKR": "Cursed Chest",
    "plPL": "Cursed Chest",
    "esMX": "Cursed Chest",
    "jaJP": "Cursed Chest",
    "ptBR": "Cursed Chest",
    "ruRU": "Cursed Chest",
    "zhCN": "Cursed Chest"
  });

itemNames.push(
  {
    "id": 92058,
    "Key": "Glacial Embrace",
    "enUS": "Glacial Embrace",
    "zhTW": "Glacial Embrace",
    "deDE": "Glacial Embrace",
    "esES": "Glacial Embrace",
    "frFR": "Glacial Embrace",
    "itIT": "Glacial Embrace",
    "koKR": "Glacial Embrace",
    "plPL": "Glacial Embrace",
    "esMX": "Glacial Embrace",
    "jaJP": "Glacial Embrace",
    "ptBR": "Glacial Embrace",
    "ruRU": "Glacial Embrace",
    "zhCN": "Glacial Embrace"
  });

itemNames.push(
  {
    "id": 92059,
    "Key": "Divine Guardian",
    "enUS": "Divine Guardian",
    "zhTW": "Divine Guardian",
    "deDE": "Divine Guardian",
    "esES": "Divine Guardian",
    "frFR": "Divine Guardian",
    "itIT": "Divine Guardian",
    "koKR": "Divine Guardian",
    "plPL": "Divine Guardian",
    "esMX": "Divine Guardian",
    "jaJP": "Divine Guardian",
    "ptBR": "Divine Guardian",
    "ruRU": "Divine Guardian",
    "zhCN": "Divine Guardian"
  });

itemNames.push(
  {
    "id": 92060,
    "Key": "Guardian's Carapace",
    "enUS": "Guardian's Carapace",
    "zhTW": "Guardian's Carapace",
    "deDE": "Guardian's Carapace",
    "esES": "Guardian's Carapace",
    "frFR": "Guardian's Carapace",
    "itIT": "Guardian's Carapace",
    "koKR": "Guardian's Carapace",
    "plPL": "Guardian's Carapace",
    "esMX": "Guardian's Carapace",
    "jaJP": "Guardian's Carapace",
    "ptBR": "Guardian's Carapace",
    "ruRU": "Guardian's Carapace",
    "zhCN": "Guardian's Carapace"
  });

itemNames.push(
  {
    "id": 92061,
    "Key": "Grave Ward",
    "enUS": "Grave Ward",
    "zhTW": "Grave Ward",
    "deDE": "Grave Ward",
    "esES": "Grave Ward",
    "frFR": "Grave Ward",
    "itIT": "Grave Ward",
    "koKR": "Grave Ward",
    "plPL": "Grave Ward",
    "esMX": "Grave Ward",
    "jaJP": "Grave Ward",
    "ptBR": "Grave Ward",
    "ruRU": "Grave Ward",
    "zhCN": "Grave Ward"
  });

itemNames.push(
  {
    "id": 92062,
    "Key": "Fiery Dragonhide",
    "enUS": "Fiery Dragonhide",
    "zhTW": "Fiery Dragonhide",
    "deDE": "Fiery Dragonhide",
    "esES": "Fiery Dragonhide",
    "frFR": "Fiery Dragonhide",
    "itIT": "Fiery Dragonhide",
    "koKR": "Fiery Dragonhide",
    "plPL": "Fiery Dragonhide",
    "esMX": "Fiery Dragonhide",
    "jaJP": "Fiery Dragonhide",
    "ptBR": "Fiery Dragonhide",
    "ruRU": "Fiery Dragonhide",
    "zhCN": "Fiery Dragonhide"
  });

itemNames.push(
  {
    "id": 92063,
    "Key": "Toxic Blight",
    "enUS": "Toxic Blight",
    "zhTW": "Toxic Blight",
    "deDE": "Toxic Blight",
    "esES": "Toxic Blight",
    "frFR": "Toxic Blight",
    "itIT": "Toxic Blight",
    "koKR": "Toxic Blight",
    "plPL": "Toxic Blight",
    "esMX": "Toxic Blight",
    "jaJP": "Toxic Blight",
    "ptBR": "Toxic Blight",
    "ruRU": "Toxic Blight",
    "zhCN": "Toxic Blight"
  });

itemNames.push(
  {
    "id": 92064,
    "Key": "Berserk Strike",
    "enUS": "Berserk Strike",
    "zhTW": "Berserk Strike",
    "deDE": "Berserk Strike",
    "esES": "Berserk Strike",
    "frFR": "Berserk Strike",
    "itIT": "Berserk Strike",
    "koKR": "Berserk Strike",
    "plPL": "Berserk Strike",
    "esMX": "Berserk Strike",
    "jaJP": "Berserk Strike",
    "ptBR": "Berserk Strike",
    "ruRU": "Berserk Strike",
    "zhCN": "Berserk Strike"
  });

itemNames.push(
  {
    "id": 92065,
    "Key": "Arctic Conduit",
    "enUS": "Arctic Conduit",
    "zhTW": "Arctic Conduit",
    "deDE": "Arctic Conduit",
    "esES": "Arctic Conduit",
    "frFR": "Arctic Conduit",
    "itIT": "Arctic Conduit",
    "koKR": "Arctic Conduit",
    "plPL": "Arctic Conduit",
    "esMX": "Arctic Conduit",
    "jaJP": "Arctic Conduit",
    "ptBR": "Arctic Conduit",
    "ruRU": "Arctic Conduit",
    "zhCN": "Arctic Conduit"
  });

itemNames.push(
  {
    "id": 92066,
    "Key": "Wraithcaller",
    "enUS": "Wraithcaller",
    "zhTW": "Wraithcaller",
    "deDE": "Wraithcaller",
    "esES": "Wraithcaller",
    "frFR": "Wraithcaller",
    "itIT": "Wraithcaller",
    "koKR": "Wraithcaller",
    "plPL": "Wraithcaller",
    "esMX": "Wraithcaller",
    "jaJP": "Wraithcaller",
    "ptBR": "Wraithcaller",
    "ruRU": "Wraithcaller",
    "zhCN": "Wraithcaller"
  });

itemNames.push(
  {
    "id": 92067,
    "Key": "Heaven's Embrace",
    "enUS": "Heaven's Embrace",
    "zhTW": "Heaven's Embrace",
    "deDE": "Heaven's Embrace",
    "esES": "Heaven's Embrace",
    "frFR": "Heaven's Embrace",
    "itIT": "Heaven's Embrace",
    "koKR": "Heaven's Embrace",
    "plPL": "Heaven's Embrace",
    "esMX": "Heaven's Embrace",
    "jaJP": "Heaven's Embrace",
    "ptBR": "Heaven's Embrace",
    "ruRU": "Heaven's Embrace",
    "zhCN": "Heaven's Embrace"
  });

itemNames.push(
  {
    "id": 92068,
    "Key": "Infernal Sphere",
    "enUS": "Infernal Sphere",
    "zhTW": "Infernal Sphere",
    "deDE": "Infernal Sphere",
    "esES": "Infernal Sphere",
    "frFR": "Infernal Sphere",
    "itIT": "Infernal Sphere",
    "koKR": "Infernal Sphere",
    "plPL": "Infernal Sphere",
    "esMX": "Infernal Sphere",
    "jaJP": "Infernal Sphere",
    "ptBR": "Infernal Sphere",
    "ruRU": "Infernal Sphere",
    "zhCN": "Infernal Sphere"
  });

itemNames.push(
  {
    "id": 92069,
    "Key": "The Elementalist",
    "enUS": "The Elementalist",
    "zhTW": "The Elementalist",
    "deDE": "The Elementalist",
    "esES": "The Elementalist",
    "frFR": "The Elementalist",
    "itIT": "The Elementalist",
    "koKR": "The Elementalist",
    "plPL": "The Elementalist",
    "esMX": "The Elementalist",
    "jaJP": "The Elementalist",
    "ptBR": "The Elementalist",
    "ruRU": "The Elementalist",
    "zhCN": "The Elementalist"
  });

itemNames.push(
  {
    "id": 92070,
    "Key": "Soulrender",
    "enUS": "Soulrender",
    "zhTW": "Soulrender",
    "deDE": "Soulrender",
    "esES": "Soulrender",
    "frFR": "Soulrender",
    "itIT": "Soulrender",
    "koKR": "Soulrender",
    "plPL": "Soulrender",
    "esMX": "Soulrender",
    "jaJP": "Soulrender",
    "ptBR": "Soulrender",
    "ruRU": "Soulrender",
    "zhCN": "Soulrender"
  });


D2RMM.writeJson(itemNamesFilename, itemNames);


// skills.txt
const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

let skillId = Math.max(...skills.rows.map((row) => row['*Id']));

skills.rows.forEach((row) => {

  if (row["skill"] === "Conviction") {
    skills.rows.push({
      ...row,
      "skill": "Minus Enemy Magic Resistance",
      "*Id": (skillId = skillId + 1),
      "charclass": "",
      "skilldesc": "minus enemy magic resistance",
      "aurastate": "quickness",
      "aurastat1": "magicresist",
      "aurastatcalc1": -35,
      "aurastat2": "",
      "aurastatcalc2": "",
      "aurastat3": "",
      "aurastatcalc3": "",
      "aurastat4": "",
      "aurastatcalc4": "",
      "aurastat5": "",
      "aurastatcalc5": "",
      "aurastat6": "",
      "aurastatcalc6": "",

      "*eol\r": 0
    });

  }
});


D2RMM.writeTsv(skillsFilename, skills);

// skilldesc.txt
const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldesc = D2RMM.readTsv(skilldescFilename);


skilldesc.rows.push({
  "skilldesc": "minus enemy magic resistance",
  "SkillPage": 0,
  "SkillRow": 0,
  "SkillColumn": 0,
  "ListRow": 0,
  "IconCel": 2,
  "str name": "SkillNameMinusEnemyMagicResistance",
  "str short": "SkillNameMinusEnemyMagicResistance",
  "str long": "SkillNameMinusEnemyMagicResistance",
  "str alt": "SkillNameMinusEnemyMagicResistance",
  "*eol\r": 0
});



D2RMM.writeTsv(skilldescFilename, skilldesc);

// skills.json
const skillsJsonFileName = 'local\\lng\\strings\\skills.json';
const skillsJson = D2RMM.readJson(skillsJsonFileName);

skillsJson.push(
  {
    "id": 92041,
    "Key": "SkillNameMinusEnemyMagicResistance",
    "enUS": "Minus Enemy Magic Resistance",
    "zhTW": "Minus Enemy Magic Resistance",
    "deDE": "Minus Enemy Magic Resistance",
    "esES": "Minus Enemy Magic Resistance",
    "frFR": "Minus Enemy Magic Resistance",
    "itIT": "Minus Enemy Magic Resistance",
    "koKR": "Minus Enemy Magic Resistance",
    "plPL": "Minus Enemy Magic Resistance",
    "esMX": "Minus Enemy Magic Resistance",
    "jaJP": "Minus Enemy Magic Resistance",
    "ptBR": "Minus Enemy Magic Resistance",
    "ruRU": "Minus Enemy Magic Resistance",
    "zhCN": "Minus Enemy Magic Resistance"
  }

);

D2RMM.writeJson(skillsJsonFileName, skillsJson);