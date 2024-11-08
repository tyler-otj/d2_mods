// uniqueitems.txt
const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

let uniqueItemID = Math.max(...uniqueitems.rows.map((row) => row['*ID']));

uniqueitems.rows.forEach((row) => {




/*        _______  _        _______  _______ _________ _______ 
|\     /|(  ____ \( \      (       )(  ____ \\__   __/(  ____ \
| )   ( || (    \/| (      | () () || (    \/   ) (   | (    \/
| (___) || (__    | |      | || || || (__       | |   | (_____ 
|  ___  ||  __)   | |      | |(_)| ||  __)      | |   (_____  )
| (   ) || (      | |      | |   | || (         | |         ) |
| )   ( || (____/\| (____/\| )   ( || (____/\   | |   /\____) |
|/     \|(_______/(_______/|/     \|(_______/   )_(   \______*/

/*=========================Helmets===========================*/




  // Biggin's Bonnet
  if (row["index"] === "War Bonnet") {

    // +45% Faster Run/Walk
    row["prop1"] = "move1";
    row["par1"] = "";
    row["min1"] = 45;
    row["max1"] = 45;

    // 250% Extra Gold from Monsters
    row["prop2"] = "gold%";
    row["par2"] = "";
    row["min2"] = 200;
    row["max2"] = 250;

    // Remove Mods
    row["prop3"] = "";
    row["par3"] = "";
    row["min3"] = "";
    row["max3"] = "";
    
    // Remove Mods
    row["prop4"] = "";
    row["par4"] = "";
    row["min4"] = "";
    row["max4"] = "";

    // Remove Mods
    row["prop5"] = "";
    row["par5"] = "";
    row["min5"] = "";
    row["max5"] = "";
  }

  // Tarnhelm
  if (row["index"] === "Tarnhelm") {

    // +1 to All Skills
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;
  
    // 75% Extra Gold from Monsters
    row["prop2"] = "gold%";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 75;
  
    // 50-75% Better Chance of Getting Magic Items
    row["prop3"] = "mag%";
    row["par3"] = "";
    row["min3"] = 50;
    row["max3"] = 75;
  }

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

    // +1 Necro Skills
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +2 - 4 to Skeleton Mastery
    row["prop2"] = "skill";
    row["par2"] = "Skeleton Mastery";
    row["min2"] = 2;
    row["max2"] = 4;

    // +2 - 4 to Raise Skeletal Mage
    row["prop3"] = "skill";
    row["par3"] = "Raise Skeletal Mage";
    row["min3"] = 2;
    row["max3"] = 4;

    // +2 - 4 to Raise Skeleton
    row["prop4"] = "skill";
    row["par4"] = "70";
    row["min4"] = 2;
    row["max4"] = 4;
    
    // +1,25 to Life (Based on Character Level)
    row["prop5"] = "hp/lvl";
    row["par5"] = "10";
    row["min5"] = "";
    row["max5"] = "";

    // +150 - 200% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 150;
    row["max6"] = 200;

    // Remove Mods
    row["prop7"] = "";
    row["par7"] = "";
    row["min7"] = "";
    row["max7"] = "";

    // Remove Mods
    row["prop8"] = "";
    row["par8"] = "";
    row["min8"] = "";
    row["max8"] = "";
  }

  // Wormskull
  if (row["index"] === "Wormskull") {

    // +2 to Poison and Bone Skills [Class only] Skills
    row["prop1"] = "skilltab";
    row["par1"] = 7;
    row["min1"] = 2;
    row["max1"] = 2;

    // +20% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // +2 - 4 to Teeth
    row["prop3"] = "skill";
    row["par3"] = "Teeth";
    row["min3"] = 2;
    row["max3"] = 4;

    // +2 - 4 to Bone Spear ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "Bone Spear";
    row["min4"] = 2;
    row["max4"] = 4;

    // +1,25 to Mana (Based on Character Level)
    row["prop5"] = "mana/lvl";
    row["par5"] = "10";
    row["min5"] = "";
    row["max5"] = "";
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
  }

  // Valkiry Wing
  if (row["index"] === "Valkiry Wing") {

    // +150 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 200;

    // +25% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +25% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +1-2 to Amazon Skill Levels
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 1;
    row["max4"] = 2;

    // +15% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // Requirements -30%
    row["prop6"] = "ease";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

    // 36% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 36;
    row["max7"] = 36;
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

    // 6 - 9% Life stolen per hit
    row["prop2"] = "lifesteal";
    row["par2"] = "";
    row["min2"] = 6;
    row["max2"] = 9;

    // 6 - 9% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 6;
    row["max3"] = 9;

    // +160 - 200% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 160;
    row["max4"] = 200;

    // 20% Deadly Strike
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

    // 80 - 100% Extra Gold from Monsters
    row["prop6"] = "gold%";
    row["par6"] = "";
    row["min6"] = 100;
    row["max6"] = 100;

    // 30% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 30; 
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

    // 25% Bonus to Attack Rating
    row["prop5"] = "att%";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 25;
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

    // +2  to Barbarian Skill Levels
    row["prop3"] = "bar";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

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

    // 1% Bonus to Attack Rating (Based on Character Level)
    row["prop9"] = "att%/lvl";
    row["par9"] = "2";
    row["min9"] = "";
    row["max9"] = "";
  }

  // Kira's Guardian
  if (row["index"] === "Kira's Guardian") {

    // +2 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;
    
    // +20% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 20;

    // All Resistances +30 - 40
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 40;

    // Remove Mods
    row["prop4"] = "";
    row["par4"] = "";
    row["min4"] = "";
    row["max4"] = "";    
  }

  // Griffon's Eye
  if (row["index"] === "Griffon's Eye") {

    // +1 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +8 - 15% to Lightning Skill Damage
    row["prop6"] = "extra-ltng";
    row["par6"] = "";
    row["min6"] = 8;
    row["max6"] = 15;

    // +8 - 15% to Lightning Skill Damage
    row["prop6"] = "extra-cold";
    row["par6"] = "";
    row["min6"] = 8;
    row["max6"] = 15;
    
    // +8 - 15% to Lightning Skill Damage
    row["prop6"] = "extra-fire";
    row["par6"] = "";
    row["min6"] = 8;
    row["max6"] = 15;

    // Increase Maximum Mana 25%
    row["prop7"] = "mana%";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

  }




/*______  _______  _______  _______  _______  _______ 
(  ___  )(  ____ )(       )(  ___  )(  ____ )(  ____ \
| (   ) || (    )|| () () || (   ) || (    )|| (    \/
| (___) || (____)|| || || || |   | || (____)|| (_____ 
|  ___  ||     __)| |(_)| || |   | ||     __)(_____  )
| (   ) || (\ (   | |   | || |   | || (\ (         ) |
| )   ( || ) \ \__| )   ( || (___) || ) \ \__/\____) |
|/     \||/   \__/|/     \|(_______)|/   \__/\______*/

/*=================Armors===========================*/




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

    // Increase Maximum Mana 25%
    row["prop7"] = "mana%";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // Level 2 - 3 Meditation Aura When Equipped
    row["prop8"] = "aura";
    row["par8"] = "Meditation";
    row["min8"] = 2;
    row["max8"] = 3;
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

    // 25% Deadly Strike
    row["prop1"] = "deadly";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

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
  }

  // Victors Silk
  if (row["index"] === "Victors Silk") {

    // 7% Mana stolen per hit
    row["prop1"] = "manasteal";
    row["par1"] = "";
    row["min1"] = 7;
    row["max1"] = 7;

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

    // +15% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +15% Faster Run/Walk
    row["prop6"] = "move1";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // +15% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;
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

    // Regenerate Mana 25%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;
  }

  // Skin of the Flayerd One
  if (row["index"] === "Skin of the Flayerd One") {

    // +25 to Dexterity
    row["prop1"] = "dex";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // +150 - 190% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 190;

    // +6 to Attack Rating (Based on Character Level)
    row["prop3"] = "att/lvl";
    row["par3"] = "12";
    row["min3"] = "";
    row["max3"] = "";

    // 5 - 7% Mana stolen per hit
    row["prop4"] = "manasteal";
    row["par4"] = "";
    row["min4"] = 5;
    row["max4"] = 7;

    // 5 - 7% Life stolen per hit
    row["prop5"] = "lifesteal";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 7;

    // 36% Deadly Strike
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 36;
    row["max6"] = 36;

    // 36% Chance of Open Wounds
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 36;
    row["max7"] = 36;
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

    // +140 - 200% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 140;
    row["max4"] = 200;

    // +130 - 160% Damage to Demons
    row["prop5"] = "dmg-demon";
    row["par5"] = "";
    row["min5"] = 130;
    row["max5"] = 160;

    // +20% Faster Run/Walk
    row["prop6"] = "move1";
    row["par6"] = "";
    row["min6"] = 20;
    row["max6"] = 20;
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

    // Increase Maximum Mana 25%
    row["prop7"] = "mana%";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // Regenerate Mana 25%
    row["prop8"] = "regen-mana";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

    // +3 to Raven
    row["prop9"] = "oskill";
    row["par9"] = "Raven";
    row["min9"] = 3;
    row["max9"] = 3;
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

    // 15 - 20% Damage Taken Goes To Mana
    row["prop8"] = "dmg-to-mana";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;
  }

  // Tyrael's Might
  if (row["index"] === "Tyrael's Might") {

    // all skills
    row["prop1"] = "allskills";
    row["min1"] = 3;
    row["max1"] = 3;

    // Teleport
    row["prop2"] = "oskill";
    row["par2"] = "Teleport";
    row["min2"] = 1;
    row["max2"] = 1;

    // +45% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 45;
    row["max3"] = 45;

    // +45% Faster Run/Walk
    row["prop4"] = "move1";
    row["par4"] = "";
    row["min4"] = 45;
    row["max4"] = 45;
    
    // +300% Enhanced Damage
    row["prop6"] = "dmg%";
    row["par6"] = "";
    row["min6"] = 300;
    row["max6"] = 300;

    // Cannot Be Frozen
    row["prop7"] = "nofreeze";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 1;

    // Socketed 2
    row["prop8"] = "sock";
    row["par8"] = "";
    row["min8"] = 2;
    row["max8"] = 2;

    // Requirements -100%
    row["prop9"] = "ease";
    row["par9"] = "";
    row["min9"] = -100;
    row["max9"] = -100;
    
    // Salvation aura
    row["prop10"] = "aura";
    row["par10"] = "Salvation";
    row["min10"] = 3;
    row["max10"] = 3;

  }




/* ____   _______  _    _________ _______ 
(  ___ \ (  ____ \( \   \__   __/(  ____ \
| (   ) )| (    \/| (      ) (   | (    \/
| (__/ / | (__    | |      | |   | (_____ 
|  __ (  |  __)   | |      | |   (_____  )
| (  \ \ | (      | |      | |         ) |
| )___) )| (____/\| (____/\| |   /\____) |
|/ \___/ (_______/(_______/)_(   \______*/

/*================Belts==================*/




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

    // +1 to Cold Spells [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = "5";
    row["min6"] = 1;
    row["max6"] = 1;

    // Cold Resist +15%
    row["prop7"] = "res-cold";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

    // +15% to Cold Skill Damage
    row["prop8"] = "extra-cold";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;
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




/* _____  _        _______           _______  _______ 
(  ____ \( \      (  ___  )|\     /|(  ____ \(  ____ \
| (    \/| (      | (   ) || )   ( || (    \/| (    \/
| |      | |      | |   | || |   | || (__    | (_____ 
| | ____ | |      | |   | |( (   ) )|  __)   (_____  )
| | \_  )| |      | |   | | \ \_/ / | (            ) |
| (___) || (____/\| (___) |  \   /  | (____/\/\____) |
(_______)(_______/(_______)   \_/   (_______/\______*/

/*=====================Gloves========================*/




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

    // Adds 100 Poison Damage Over 3 Seconds
    row["prop3"] = "dmg-pois";
    row["par3"] = "75";
    row["min3"] = 340;
    row["max3"] = 340;

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

    // +1 - 2 to Fire Skills
    row["prop7"] = "fireskill";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 2;
  }

  // Souldrain
  if (row["index"] === "Souldrain") {

    // +90 - 120% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 90;
    row["max1"] = 120;

    // 4 - 7% Mana stolen per hit
    row["prop2"] = "manasteal";
    row["par2"] = "";
    row["min2"] = 4;
    row["max2"] = 7;

    // 4 - 7% Life stolen per hit
    row["prop3"] = "lifesteal";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 7;

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




/* ____   _______  _______ _________ _______ 
(  ___ \ (  ___  )(  ___  )\__   __/(  ____ \
| (   ) )| (   ) || (   ) |   ) (   | (    \/
| (__/ / | |   | || |   | |   | |   | (_____ 
|  __ (  | |   | || |   | |   | |   (_____  )
| (  \ \ | |   | || |   | |   | |         ) |
| )___) )| (___) || (___) |   | |   /\____) |
|/ \___/ (_______)(_______)   )_(   \______*/

/*==================Boots==================*/




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
    row["min11"] = 1;
    row["max11"] = 1;
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

    // Increase Maximum Mana 15%
    row["prop4"] = "mana%";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

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
    
    // +20% Faster Cast Rate
    row["prop8"] = "cast1";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 20;
  }




/*______  _______           _        _______ _________ _______ 
(  ___  )(       )|\     /|( \      (  ____ \\__   __/(  ____ \
| (   ) || () () || )   ( || (      | (    \/   ) (   | (    \/
| (___) || || || || |   | || |      | (__       | |   | (_____ 
|  ___  || |(_)| || |   | || |      |  __)      | |   (_____  )
| (   ) || |   | || |   | || |      | (         | |         ) |
| )   ( || )   ( || (___) || (____/\| (____/\   | |   /\____) |
|/     \||/     \|(_______)(_______/(_______/   )_(   \______*/

/*==========================Amulets==========================*/




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

    // +10 all attributes
    row["prop1"] = "all-stats";
    row["min1"] = 10;
    row["max1"] = 10;

    // Increase Maximum Life 10%
    row["prop2"] = "hp%";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 10;

    // 10% Bonus to Attack Rating
    row["prop3"] = "att%";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 10;

    // All Resistances +10
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 10;

    // +10% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // +10 Defense vs. Missile
    row["prop6"] = "ac-miss";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 10;

    // +10 Defense vs. Melee
    row["prop7"] = "ac-hth";
    row["par7"] = "";
    row["min7"] = 10;
    row["max7"] = 10;

    // 10% Increased Chance of Blocking
    row["prop8"] = "block";
    row["par8"] = "";
    row["min8"] = 10;
    row["max8"] = 10;
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




/*______ _________ _        _______  _______ 
(  ____ )\__   __/( (    /|(  ____ \(  ____ \
| (    )|   ) (   |  \  ( || (    \/| (    \/
| (____)|   | |   |   \ | || |      | (_____ 
|     __)   | |   | (\ \) || | ____ (_____  )
| (\ (      | |   | | \   || | \_  )      ) |
| ) \ \_____) (___| )  \  || (___) |/\____) |
|/   \__/\_______/|/    )_)(_______)\______*/

/*==================Rings==================*/


// Carrion Wind
if (row["index"] === "Carrion Wind") {
  // Poison Damage
  row["prop1"] = "extra-pois";
  row["par1"] = "";
  row["min1"] = 10;
  row["max1"] = 20;
  
  // Enemy Resistance
  row["prop2"] = "pierce-pois";
  row["par2"] = "";
  row["min2"] = 5;
  row["max2"] = 15;
  
  // Adds 70 - 190 Damage
  row["prop3"] = "dmg-pois";
  row["par3"] = "";
  row["min3"] = 100;
  row["max3"] = 190;
  
  // Resist
  row["prop4"] = "res-pois";
  row["par4"] = "";
  row["min4"] = 20;
  row["max4"] = 35;
  
  // +5% to Maximum Resist
  row["prop5"] = "res-pois-max";
  row["par5"] = "";
  row["min5"] = 5;
  row["max5"] = 5;
  
  // +5% to Maximum Resist
  row["prop6"] = "res-pois-max";
  row["par6"] = "";
  row["min6"] = 5;
  row["max6"] = 5;
  
  // +10 to Plague Poppy
  row["prop7"] = "oskill";
  row["par7"] = "Plague Poppy";
  row["min7"] = 10;
  row["max7"] = 10;
}

// Raven Frost
if (row["index"] === "Raven Frost") {
  // Damage
  row["prop1"] = "extra-cold";
  row["par1"] = "";
  row["min1"] = 10;
  row["max1"] = 20;
  
  // Enemy Resistance
  row["prop2"] = "pierce-cold";
  row["par2"] = "";
  row["min2"] = 5;
  row["max2"] = 15;
  
  // Damage
  row["prop3"] = "dmg-cold";
  row["par3"] = "";
  row["min3"] = 23;
  row["max3"] = 42;
  
  // Resist
  row["prop4"] = "res-cold";
  row["par4"] = "";
  row["min4"] = 20;
  row["max4"] = 35;
  
  // +5% to Maximum Resist
  row["prop5"] = "res-cold-max";
  row["par5"] = "";
  row["min5"] = 5;
  row["max5"] = 5;
  
  // Absorb 5%
  row["prop6"] = "abs-cold";
  row["par6"] = "";
  row["min6"] = 5;
  row["max6"] = 5;
  
  // +10 Raven
  row["prop7"] = "oskill";
  row["par7"] = "Raven";
  row["min7"] = 10;
  row["max7"] = 10;
}

// Wisp
if (row["index"] === "Wisp") {
  // Poison Damage
  row["prop1"] = "extra-ltng";
  row["par1"] = "";
  row["min1"] = 10;
  row["max1"] = 20;
  
  // Enemy Resistance
  row["prop2"] = "pierce-ltng";
  row["par2"] = "";
  row["min2"] = 5;
  row["max2"] = 15;
  
  // Adds 35 - 95 Damage
  row["prop3"] = "dmg-ltng";
  row["par3"] = "";
  row["min3"] = 1;
  row["max3"] = 200;
  
  // Resist
  row["prop4"] = "res-ltng";
  row["par4"] = "";
  row["min4"] = 20;
  row["max4"] = 35;
  
  // +5% to Maximum Resist
  row["prop5"] = "res-ltng-max";
  row["par5"] = "";
  row["min5"] = 5;
  row["max5"] = 5;
  
  // Absorb 5%
  row["prop6"] = "abs-ltng";
  row["par6"] = "";
  row["min6"] = 5;
  row["max6"] = 5;
  
  // +10 Thunder Storm
  row["prop7"] = "oskill";
  row["par7"] = "Thunder Storm";
  row["min7"] = 10;
  row["max7"] = 10;
}

// Nagelring
if (row["index"] === "Nagelring") {

  // All Resistances
  row["prop1"] = "res-all";
  row["par1"] = "";
  row["min1"] = 5;
  row["max1"] = 10;

  // Extra Gold from Monsters
  row["prop2"] = "gold%";
  row["par2"] = "";
  row["min2"] = 100;
  row["max2"] = 100;

  // Better Chance of Getting Magic Items
  row["prop3"] = "mag%";
  row["par3"] = "";
  row["min3"] = 15;
  row["max3"] = 30;

  // 50% Slower Stamina Drain
  row["prop4"] = "stamdrain";
  row["par4"] = "";
  row["min4"] = 50;
  row["max4"] = 50;

  // +25% Faster Run/Walk
  row["prop5"] = "move1";
  row["par5"] = "";
  row["min5"] = 25;
  row["max5"] = 25;
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




/*______           _______  _______  _______  _______ 
(  ____ \|\     /|(  ___  )(  ____ )(       )(  ____ \
| (    \/| )   ( || (   ) || (    )|| () () || (    \/
| |      | (___) || (___) || (____)|| || || || (_____ 
| |      |  ___  ||  ___  ||     __)| |(_)| |(_____  )
| |      | (   ) || (   ) || (\ (   | |   | |      ) |
| (____/\| )   ( || )   ( || ) \ \__| )   ( |/\____) |
(_______/|/     \||/     \||/   \__/|/     \|\______*/

/*======================Charms=======================*/


// Hellfire Torch
  if (row["index"] == "Hellfire Torch") {

    // all skills
    row["prop1"] = "allskills";
    row["min1"] = 3;
    row["max1"] = 3;

    // +10 - 20 to all Attributes
    row["prop2"] = "all-stats";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 20;

    // All Resistances +10 - 20
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 20;

    // +4 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 8;

    // remove stat
    row["prop5"] = "";
    row["par5"] = "";
    row["min5"] = "";
    row["max5"] = "";

    // remove stat
    row["prop6"] = "";
    row["par6"] = "";
    row["min6"] = "";
    row["max6"] = "";
  }




/*______  _______  ______   _______ 
(  ___  )(  ____ )(  ___ \ (  ____ \
| (   ) || (    )|| (   ) )| (    \/
| |   | || (____)|| (__/ / | (_____ 
| |   | ||     __)|  __ (  (_____  )
| |   | || (\ (   | (  \ \       ) |
| (___) || ) \ \__| )___) )/\____) |
(_______)|/   \__/|/ \___/ \______*/

/*==============Orbs===============*/




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

  // Eschuta's temper
  if (row["index"] === "Eschuta's temper") {

    // +1 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 2;

    // +40% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +10 - 15% to Fire Skill Damage
    row["prop3"] = "extra-fire";
    row["par3"] = "";
    row["min3"] = 10;
    row["max3"] = 15;

    // +10 - 15% to Lightning Skill Damage
    row["prop4"] = "extra-ltng";
    row["par4"] = "";
    row["min4"] = 10;
    row["max4"] = 15;

    // +20 - 30 to Energy
    row["prop5"] = "enr";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;
  }

  // Death's Fathom
  if (row["index"] === "Fathom") {

    // +1 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 2;

    // +40% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 40;

    // +15 - 30% to Cold Skill Damage
    row["prop3"] = "extra-cold";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 30;

    // +20 - 30 to Energy
    row["prop4"] = "enr";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;

    // Lightning Resist +25 - 40%
    row["prop5"] = "res-ltng";
    row["par5"] = "";
    row["min5"] = 25;
    row["max5"] = 40;

    // Fire Resist +25 - 40%
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 40;
  }




/*        _______  _        ______   _______ 
|\     /|(  ___  )( (    /|(  __  \ (  ____ \
| )   ( || (   ) ||  \  ( || (  \  )| (    \/
| | _ | || (___) ||   \ | || |   ) || (_____ 
| |( )| ||  ___  || (\ \) || |   | |(_____  )
| || || || (   ) || | \   || |   ) |      ) |
| () () || )   ( || )  \  || (__/  )/\____) |
(_______)|/     \||/    )_)(______/ \______*/

/*==================Wands==================*/




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

    // Regenerate Mana 15%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;
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

    // +2 - 4 to Corpse Explosion ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "74";
    row["min6"] = 2;
    row["max6"] = 4;

    // +2 - 4 to Terror ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "77";
    row["min7"] = 2;
    row["max7"] = 4;

    // +2 - 4 to Amplify Damage ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "66";
    row["min8"] = 2;
    row["max8"] = 4;

    // +2 - 4 to Iron Maiden ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "76";
    row["min9"] = 2;
    row["max9"] = 4;
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

    // +1 Necromancer Skills
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +2 to Summoning Spells (Necro) [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = 8;
    row["min2"] = 2;
    row["max2"] = 2;

    // +2 - 4 Skeleton Mastery ([Class] only)
    row["prop3"] = "skill";
    row["par3"] = "69";
    row["min3"] = 2;
    row["max3"] = 4;

    // +2 - 4 Raise Skeleton ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "70";
    row["min4"] = 2;
    row["max4"] = 4;

    // +2 - 4 Raise Skeletal Mage ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "80";
    row["min5"] = 2;
    row["max5"] = 4;

    // +1,25 to Mana (Based on Character Level)
    row["prop6"] = "mana/lvl";
    row["par6"] = "10";
    row["min6"] = "";
    row["max6"] = "";

    // +30% Faster Cast Rate
    row["prop7"] = "cast1";
    row["par7"] = "";
    row["min7"] = 35;
    row["max7"] = 35;

    // Remove Mod
    row["prop8"] = "";
    row["par8"] = "";
    row["min8"] = "";
    row["max8"] = "";

    // Remove Mod
    row["prop9"] = "";
    row["par9"] = "";
    row["min9"] = "";
    row["max9"] = "";

    // Remove Mod
    row["prop10"] = "";
    row["par10"] = "";
    row["min10"] = "";
    row["max10"] = "";

    // Remove Mod
    row["prop11"] = "";
    row["par11"] = "";
    row["min11"] = "";
    row["max11"] = "";
  }

  // Blackhand Key
  if (row["index"] === "Blackhand Key") {

    // +3 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // All Resistances +33
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 33;
    row["max2"] = 33;

    // +33% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 33;
    row["max3"] = 33;

    // 23% Damage Taken Goes To Mana
    row["prop2"] = "dmg-to-mana";
    row["par2"] = "";
    row["min2"] = 23;
    row["max2"] = 23;

    // +53 to Life
    row["prop3"] = "hp";
    row["par3"] = "";
    row["min3"] = 53;
    row["max3"] = 53;

    // -3 to Light Radius
    row["prop4"] = "light";
    row["par4"] = "";
    row["min4"] = -3;
    row["max4"] = -3;

    // +43% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 43;
    row["max5"] = 43;

    // Fire Resist +33%
    row["prop6"] = "res-fire";
    row["par6"] = "";
    row["min6"] = 33;
    row["max6"] = 33;
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




/*______          _________ _______  _        ______   _______ 
(  ____ \|\     /|\__   __/(  ____ \( \      (  __  \ (  ____ \
| (    \/| )   ( |   ) (   | (    \/| (      | (  \  )| (    \/
| (_____ | (___) |   | |   | (__    | |      | |   ) || (_____ 
(_____  )|  ___  |   | |   |  __)   | |      | |   | |(_____  )
      ) || (   ) |   | |   | (      | |      | |   ) |      ) |
/\____) || )   ( |___) (___| (____/\| (____/\| (__/  )/\____) |
\_______)|/     \|\_______/(_______/(_______/(______/ \______*/

/*==========================Shields==========================*/




  // Visceratuant
  if (row["index"] === "Visceratuant") {

    // +2 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
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

    // +15% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 15;
    row["max4"] = 15;

    // +100 - 150% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 100;
    row["max5"] = 150;

    // +30 - 40% Faster Cast Rate
    row["prop6"] = "cast1";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 40;
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



/*______           _______           _        _        _______  _                   _______  _______  ______   _______ 
(  ____ \|\     /|(  ____ )|\     /|( (    /|| \    /\(  ____ \( (    /|  |\     /|(  ____ \(  ___  )(  __  \ (  ____ \
| (    \/| )   ( || (    )|| )   ( ||  \  ( ||  \  / /| (    \/|  \  ( |  | )   ( || (    \/| (   ) || (  \  )| (    \/
| (_____ | (___) || (____)|| |   | ||   \ | ||  (_/ / | (__    |   \ | |  | (___) || (__    | (___) || |   ) || (_____ 
(_____  )|  ___  ||     __)| |   | || (\ \) ||   _ (  |  __)   | (\ \) |  |  ___  ||  __)   |  ___  || |   | |(_____  )
      ) || (   ) || (\ (   | |   | || | \   ||  ( \ \ | (      | | \   |  | (   ) || (      | (   ) || |   ) |      ) |
/\____) || )   ( || ) \ \__| (___) || )  \  ||  /  \ \| (____/\| )  \  |  | )   ( || (____/\| )   ( || (__/  )/\____) |
\_______)|/     \||/   \__/(_______)|/    )_)|_/    \/(_______/|/    )_)  |/     \|(_______/|/     \|(______/ \______*/

/*====================================================Shrunken Heads====================================================*/




// Homunculus
if (row["index"] === "Homunculus") {

  // +2 to Necromancer Skill Levels
  row["prop1"] = "nec";
  row["par1"] = "";
  row["min1"] = 2;
  row["max1"] = 2;
  
  // +2 to Summoning Spells (Necro) [Class only] Skills
  row["prop2"] = "skilltab";
  row["par2"] = 8;
  row["min2"] = 2;
  row["max2"] = 3;

  // +150 - 200% Enhanced Defense
  row["prop3"] = "ac%";
  row["par3"] = "";
  row["min3"] = 150;
  row["max3"] = 200;

  // Regenerate Mana 33%
  row["prop4"] = "regen-mana";
  row["par4"] = "";
  row["min4"] = 33;
  row["max4"] = 33;

  // 40% Increased Chance of Blocking
  row["prop5"] = "block";
  row["par5"] = "";
  row["min5"] = 40;
  row["max5"] = 40;
  
  // +30% Faster Block Rate
  row["prop6"] = "block1";
  row["par6"] = "";
  row["min6"] = 30;
  row["max6"] = 30;

  // +20 to Energy
  row["prop7"] = "enr";
  row["par7"] = "";
  row["min7"] = 20;
  row["max7"] = 20;

  // All Resistances +40
  row["prop8"] = "res-all";
  row["par8"] = "";
  row["min8"] = 40;
  row["max8"] = 40;

  // +6 to Mana after each Kill
  row["prop9"] = "mana-kill";
  row["par9"] = "";
  row["min9"] = 6;
  row["max9"] = 6;
}

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















});




/*        _______           _                _______  ______   ______   _______  ______  
( (    /|(  ____ \|\     /|( \   |\     /|  (  ___  )(  __  \ (  __  \ (  ____ \(  __  \ 
|  \  ( || (    \/| )   ( || (   ( \   / )  | (   ) || (  \  )| (  \  )| (    \/| (  \  )
|   \ | || (__    | | _ | || |    \ (_) /   | (___) || |   ) || |   ) || (__    | |   ) |
| (\ \) ||  __)   | |( )| || |     \   /    |  ___  || |   | || |   | ||  __)   | |   | |
| | \   || (      | || || || |      ) (     | (   ) || |   ) || |   ) || (      | |   ) |
| )  \  || (____/\| () () || (____/\| |     | )   ( || (__/  )| (__/  )| (____/\| (__/  )
|/    )_)(_______/(_______)(_______/\_/     |/     \|(______/ (______/ (_______/(_____*/

/*==================================Newly Added========================================*/


// "Sightless Eye",
uniqueitems.rows.push({

  "index": "Sightless Eye",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 67,
  "code": "amu",
  "*ItemName": "Amulet",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,


  // +6 to Attack Rating (Based on Character Level)
  "prop1": "att/lvl",
  "par1": "12",
  "min1": "",
  "max1": "",

  // IAS
  "prop2": "swing1",
  "par2": "",
  "min2": 20,
  "max2": 20,

  // Deadly Strike
  "prop3": "deadly",
  "par3": "",
  "min3": 15,
  "max3": 25,

  // Open Wounds
  "prop4": "openwounds",
  "par4": "",
  "min4": 15,
  "max4": 25,

  // Mana Steal
  "prop5": "manasteal",
  "par5": "",
  "min5": 4,
  "max5": 12,

  // Faster Run/Walk
  "prop6": "move1",
  "par6": "",
  "min6": 15,
  "max6": 15,

});

// "Bloodstone Signet"
uniqueitems.rows.push({

  "index": "Bloodstone Signet",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 67,
  "code": "rin",
  "*ItemName": "Ring",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,

  // Attack Rating
  "prop1": "att",
  "par1": "",
  "min1": 350,
  "max1": 520,

  // Lifesteal
  "prop2": "lifesteal",
  "par2": "",
  "min2": 4,
  "max2": 7,

  // manasteal
  "prop3": "manasteal",
  "par3": "",
  "min3": 4,
  "max3": 7,

    // +115 Defense vs. Missile
  "prop4": "ac-miss",
  "par4": "",
  "min4": 115,
  "max4": 115,

  // Crushing Blow
  "prop5": "red-dmg%",
  "par5": "",
  "min5": 15,
  "max5": 15,

  // all res
  "prop6": "res-all",
  "par6": "",
  "min6": 5,
  "max6": 15,

});

// "Voidcaller"
uniqueitems.rows.push({

  "index": "Voidcaller",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 67,
  "code": "amu",
  "*ItemName": "Amulet",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,
  

  "prop1": "extra-cold",
  "par1": "",
  "min1": 10,
  "max1": 20,
  
  "prop2": "extra-fire",
  "par2": "",
  "min2": 10,
  "max2": 20,

  "prop3": "extra-pois",
  "par3": "",
  "min3": 10,
  "max3": 20,

  "prop4": "extra-ltng",
  "par4": "",
  "min4": 10,
  "max4": 20,

  "prop5": "cast1",
  "par5": "",
  "min5": 25,
  "max5": 25,

  "prop6": "mana%",
  "par6": "",
  "min6": 25,
  "max6": 25,

  "prop7": "regen-mana",
  "par7": "",
  "min7": 25,
  "max7": 25,

  
});

// "Battleborn Heart"
uniqueitems.rows.push({

  "index": "Battleborn Heart",
  "*ID": (uniqueItemID = uniqueItemID + 1),
  "version": 100,
  "enabled": 1,
  "ladder": 1,
  "rarity": 1,
  "nolimit": "",
  "lvl": 75,
  "lvl req": 67,
  "code": "amu",
  "*ItemName": "Amulet",
  "cost mult": 3,
  "cost add": 5000,
  "*eol\r": 0,
    




  // Lifesteal
  "prop1": "lifesteal",
  "par1": "",
  "min1": 8,
  "max1": 12,

  // manasteal
  "prop2": "manasteal",
  "par2": "",
  "min2": 8,
  "max2": 12,

  // Increase Maximum Life%
  "prop3": "hp%",
  "par3": "",
  "min3": 15,
  "max3": 20,

  // Attack Rating
  "prop4": "att%",
  "par4": "",
  "min4": 15,
  "max4": 20,

  // 25% Chance of Crushing Blow
  "prop5": "crush",
  "par5": "",
  "min5": 15,
  "max5": 25,

  // all res
  "prop6": "res-all",
  "par6": "",
  "min6": 15,
  "max6": 30,
    
});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

// item-names.json
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.push(
  {
    "id": 92034,
    "Key": "Sightless Eye",
    "enUS": "Sightless Eye",
    "zhTW": "Sightless Eye",
    "deDE": "Sightless Eye",
    "esES": "Sightless Eye",
    "frFR": "Sightless Eye",
    "itIT": "Sightless Eye",
    "koKR": "Sightless Eye",
    "plPL": "Sightless Eye",
    "esMX": "Sightless Eye",
    "jaJP": "Sightless Eye",
    "ptBR": "Sightless Eye",
    "ruRU": "Sightless Eye",
    "zhCN": "Sightless Eye"
  });

itemNames.push(
  {
    "id": 92035,
    "Key": "Bloodstone Signet",
    "enUS": "Bloodstone Signet",
    "zhTW": "Bloodstone Signet",
    "deDE": "Bloodstone Signet",
    "esES": "Bloodstone Signet",
    "frFR": "Bloodstone Signet",
    "itIT": "Bloodstone Signet",
    "koKR": "Bloodstone Signet",
    "plPL": "Bloodstone Signet",
    "esMX": "Bloodstone Signet",
    "jaJP": "Bloodstone Signet",
    "ptBR": "Bloodstone Signet",
    "ruRU": "Bloodstone Signet",
    "zhCN": "Bloodstone Signet"
  });

itemNames.push(
  {
    "id": 92036,
    "Key": "Voidcaller",
    "enUS": "Voidcaller",
    "zhTW": "Voidcaller",
    "deDE": "Voidcaller",
    "esES": "Voidcaller",
    "frFR": "Voidcaller",
    "itIT": "Voidcaller",
    "koKR": "Voidcaller",
    "plPL": "Voidcaller",
    "esMX": "Voidcaller",
    "jaJP": "Voidcaller",
    "ptBR": "Voidcaller",
    "ruRU": "Voidcaller",
    "zhCN": "Voidcaller"
  });

itemNames.push(
  {
    "id": 92037,
    "Key": "Battleborn Heart",
    "enUS": "Battleborn Heart",
    "zhTW": "Battleborn Heart",
    "deDE": "Battleborn Heart",
    "esES": "Battleborn Heart",
    "frFR": "Battleborn Heart",
    "itIT": "Battleborn Heart",
    "koKR": "Battleborn Heart",
    "plPL": "Battleborn Heart",
    "esMX": "Battleborn Heart",
    "jaJP": "Battleborn Heart",
    "ptBR": "Battleborn Heart",
    "ruRU": "Battleborn Heart",
    "zhCN": "Battleborn Heart"
  });

D2RMM.writeJson(itemNamesFilename, itemNames);