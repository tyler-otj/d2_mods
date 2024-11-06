// uniqueitems.txt
const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);


uniqueitems.rows.forEach((row) => {


  /*
  =====================================================================================
  ====================================   Helms   ======================================
  =====================================================================================
  */


  // War Bonnet
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


  // Wormskull
  if (row["index"] === "Wormskull") {

    // +2 to Poison and Bone Skills [Class only] Skills
    row["prop6"] = "skilltab";
    row["par6"] = 7;
    row["min6"] = 2;
    row["max6"] = 2;

    // +25% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

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

    // +2 - 4 to Bone Armor ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Bone Armor";
    row["min5"] = 2;
    row["max5"] = 4;

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

    // +3 to Amazon Skill Levels
    row["prop4"] = "ama";
    row["par4"] = "";
    row["min4"] = 3;
    row["max4"] = 3;

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

    // 20% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 30;

  }


  // Undead Crown
  if (row["index"] === "Undead Crown") {

    // +1 Necro Skills
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // Increase Maximum Mana %
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // Res All 15-25
    row["prop3"] = "res-all";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +2 - 4 to Skeleton Mastery
    row["prop4"] = "skill";
    row["par4"] = "Skeleton Mastery";
    row["min4"] = 2;
    row["max4"] = 4;

    // +2 - 4 to Raise Skeletal Mage
    row["prop5"] = "skill";
    row["par5"] = "Raise Skeletal Mage";
    row["min5"] = 2;
    row["max5"] = 4;

    // +2 - 4 to Raise Skeleton
    row["prop6"] = "skill";
    row["par6"] = "70";
    row["min6"] = 2;
    row["max6"] = 4;
    
    // +2 - 4 to Golem Mastery
    row["prop7"] = "oskill";
    row["par7"] = "79";
    row["min7"] = 2;
    row["max7"] = 4;

    // Blank out value 8
    row["prop8"] = "";
    row["par8"] = "";
    row["min8"] = "";
    row["max8"] = "";

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
    row["prop6"] = "deadly";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

    // 80 - 100% Extra Gold from Monsters
    row["prop7"] = "gold%";
    row["par7"] = "";
    row["min7"] = 100;
    row["max7"] = 100;

    // 30% Better Chance of Getting Magic Items
    row["prop8"] = "mag%";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;
    
  }


  /*
  =====================================================================================
  =====================================  Armors  ======================================
  =====================================================================================
  */


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
    row["min2"] = 24;
    row["max2"] = 24;

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


  // Skin of the Flayerd One
  if (row["index"] === "Skin of the Flayerd One") {

    // +150 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 180;

    // +27 to Dexterity
    row["prop2"] = "dex";
    row["par2"] = "";
    row["min2"] = 27;
    row["max2"] = 27;

    // +25% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +25% Increased Attack Speed
    row["prop4"] = "swing1";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

    // 16% Deadly Strike
    row["prop5"] = "deadly";
    row["par5"] = "";
    row["min5"] = 16;
    row["max5"] = 16;

    // 16% Chance of Open Wounds
    row["prop6"] = "openwounds";
    row["par6"] = "";
    row["min6"] = 16;
    row["max6"] = 16;

    // +20% Faster Run/Walk
    row["prop7"] = "move1";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 25;

    // 5 - 7% Life stolen per hit
    row["prop8"] = "lifesteal";
    row["par8"] = "";
    row["min8"] = 5;
    row["max8"] = 7;

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


  // Crow Caw
  if (row["index"] === "Crow Caw") {

    // 35% Chance of Open Wounds
    row["prop1"] = "openwounds";
    row["par1"] = "";
    row["min1"] = 32;
    row["max1"] = 32;

    // +150 - 180% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 180;

    // +25 to Dexterity
    row["prop3"] = "dex";
    row["par3"] = "";
    row["min3"] = 25;
    row["max3"] = 25;

    // +15% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 17;
    row["max4"] = 17;

    // +20% Increased Attack Speed
    row["prop5"] = "swing1";
    row["par5"] = "";
    row["min5"] = 24;
    row["max5"] = 24;

    // +3 to Raven
    row["prop6"] = "oskill";
    row["par6"] = "Raven";
    row["min6"] = 3;
    row["max6"] = 3;
    
    // 20% Deadly Strike
    row["prop7"] = "deadly";
    row["par7"] = "";
    row["min7"] = 32;
    row["max7"] = 32;

    // +20% Faster Run/Walk
    row["prop8"] = "move1";
    row["par8"] = "";
    row["min8"] = 14;
    row["max8"] = 14;

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

    // -5 - 15% to Enemy Poison Resistance
    row["prop6"] = "pierce-pois";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // +15 - 15% to Poison Skill Damage
    row["prop7"] = "extra-pois";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

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

    // -5 - 15% to Enemy Lightning Resistance
    row["prop5"] = "pierce-ltng";
    row["par5"] = "";
    row["min5"] = 5;
    row["max5"] = 15;

    // +5 - 15% to Lightning Skill Damage
    row["prop6"] = "extra-ltng";
    row["par6"] = "";
    row["min6"] = 5;
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

    // -5 - 15% to Enemy Cold Resistance
    row["prop6"] = "pierce-cold";
    row["par6"] = "";
    row["min6"] = 5;
    row["max6"] = 15;

    // +5 - 15% to Cold Skill Damage
    row["prop7"] = "extra-cold";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 15;

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

    // Socketed 1
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

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


  // Heavenly Garb
  if (row["index"] === "Heavenly Garb") {

    // +100% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 100;
    row["max1"] = 100;

    // All Resistances +10 - 25
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 10;
    row["max2"] = 25;

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

    // Increase Maximum Mana 25%
    row["prop6"] = "mana%";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

    // Level 2 - 3 Meditation Aura When Equipped
    row["prop7"] = "aura";
    row["par7"] = "Meditation";
    row["min7"] = 2;
    row["max7"] = 3;

  }


  // Que-Hegan's Wisdon
  if (row["index"] === "Que-Hegan's Wisdon") {

    // +1 to All Skills
    row["prop1"] = "allskills";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +20 - 30% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 20;
    row["max2"] = 30;

    // +20% Faster Hit Recovery
    row["prop3"] = "balance1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +200 - 250% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 250;

    // +10 - 15 to Mana after each Kill
    row["prop5"] = "mana-kill";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 15;

    // Magic Damage Reduced by 6 - 10
    row["prop6"] = "red-mag";
    row["par6"] = "";
    row["min6"] = 6;
    row["max6"] = 10;

    // All Resistances 30 - 45%
    row["prop7"] = "res-all";
    row["par7"] = "";
    row["min7"] = 30;
    row["max7"] = 45;

  }


  // Boneflesh
  if (row["index"] === "Boneflesh") {

    // 5% Life stolen per hit
    row["prop1"] = "lifesteal";
    row["par1"] = "";
    row["min1"] = 8;
    row["max1"] = 8;

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

    // Ethereal
    row["prop6"] = "ethereal";
    row["par6"] = "";
    row["min6"] = 1;
    row["max6"] = 1;

  }


  // Rattlecage
  if (row["index"] === "Rattlecage") {

    // 25% Chance of Open Wounds
    row["prop1"] = "openwounds";
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
    row["min5"] = 200;
    row["max5"] = 250;

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

    // +24% Faster Hit Recovery
    row["prop4"] = "balance1";
    row["par4"] = "";
    row["min4"] = 24;
    row["max4"] = 24;

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



  // Victors Silk
  if (row["index"] === "Victors Silk") {

    // +30% Faster Hit Recovery
    row["prop1"] = "balance1";
    row["par1"] = "";
    row["min1"] = 30;
    row["max1"] = 30;

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

    // Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 200;
    row["max4"] = 200;

    // All Resistances
    row["prop5"] = "res-all";
    row["par5"] = "";
    row["min5"] = 42;
    row["max5"] = 42;

    // +25% Faster Run/Walk
    row["prop6"] = "move1";
    row["par6"] = "";
    row["min6"] = 25;
    row["max6"] = 25;

  }


  // Corpsemourn
  if (row["index"] === "Corpsemourn") {

    // +25% Faster Run/Walk
    row["prop1"] = "move1";
    row["par1"] = "";
    row["min1"] = 25;
    row["max1"] = 25;

    // +25% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 0,5% Better Chance of Getting Magic Items (Based on Character Level)
    row["prop3"] = "mag%/lvl";
    row["par3"] = "4";
    row["min3"] = "";
    row["max3"] = "";

    // +2 - 3 to Summoning Spells (Necro) [Class only] Skills
    row["prop4"] = "skilltab";
    row["par4"] = 8;
    row["min4"] = 2;
    row["max4"] = 3;

    // +150 - 180% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 150;
    row["max5"] = 180;

    // +3 to Raven
    row["prop6"] = "oskill";
    row["par6"] = "Raven";
    row["min6"] = 3;
    row["max6"] = 3;

    // Requirements --40%
    row["prop7"] = "ease";
    row["par7"] = "";
    row["min7"] = -40;
    row["max7"] = -40;

  }


  // Templar's Might
  if (row["index"] == "Templar's Might") {

    // +150% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 150;
    row["max1"] = 150;

    // +30% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +30% Faster Run/Walk
    row["prop3"] = "move1";
    row["par3"] = "";
    row["min3"] = 30;
    row["max3"] = 30;

    // all attributes 20
    row["prop4"] = "all-stats";
    row["min4"] = 20;
    row["max4"] = 20;

    // Add Might Aura
    row["prop5"] = "aura";
    row["par5"] = "Might";
    row["min5"] = 10;
    row["max5"] = 10;

    // 2 allskills
    row["prop6"] = "allskills";
    row["min6"] = 2;
    row["max6"] = 2;

    // requirement
    row["prop7"] = "ease";
    row["min7"] = -40;
    row["max7"] = -40;
  }


  // Tyrael's Might
  if (row["index"] === "Tyrael's Might") {

    // Allow rerolling multiple times in same game
    row["nolimit"] = 1;

    // Socketed 3
    row["prop1"] = "sock";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // +45% Faster Hit Recovery
    row["prop2"] = "balance1";
    row["par2"] = "";
    row["min2"] = 45;
    row["max2"] = 45;

    // +45% Faster Run/Walk
    row["prop3"] = "move1";
    row["par3"] = "";
    row["min3"] = 45;
    row["max3"] = 45;

    // Salvation aura
    row["prop4"] = "aura";
    row["par4"] = "Salvation";
    row["min4"] = 3;
    row["max4"] = 3;

    // all skills
    row["prop5"] = "allskills";
    row["min5"] = 3;
    row["max5"] = 3;

    // Teleport
    row["prop6"] = "oskill";
    row["par6"] = "Teleport";
    row["min6"] = 1;
    row["max6"] = 1;

    // +300% Enhanced Damage
    row["prop7"] = "dmg%";
    row["par7"] = "";
    row["min7"] = 300;
    row["max7"] = 300;

    // Ethereal
    row["prop8"] = "ethereal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

    // Indestructible
    row["prop9"] = "indestruct";
    row["par9"] = "";
    row["min9"] = 1;
    row["max9"] = 1;

    // +150% Enhanced Defense
    row["prop10"] = "ac%";
    row["par10"] = "";
    row["min10"] = 150;
    row["max10"] = 150;

      // Cannot Be Frozen
    row["prop11"] = "nofreeze";
    row["par11"] = "";
    row["min11"] = 1;
    row["max11"] = 1;

    // Requirements -100%
    row["prop12"] = "ease";
    row["par12"] = "";
    row["min12"] = -100;
    row["max12"] = -100;

  }




  /*
  =====================================================================================
  ====================================== Shields ======================================
  =====================================================================================
  */


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
    row["min2"] = 35;
    row["max2"] = 35;

    // 30% Increased Chance of Blocking
    row["prop3"] = "block";
    row["par3"] = "";
    row["min3"] = 35;
    row["max3"] = 35;

    // +100 - 150% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 100;
    row["max4"] = 150;

    // +30 - 40% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 30;
    row["max5"] = 40;

    // +20% Faster Hit Recovery
    row["prop6"] = "balance1";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

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

    // Socketed (3)
    row["prop3"] = "sock";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 3;

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

    // 50% Chance of Crushing Blow
    row["prop4"] = "crush";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

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

    // +15% Increased Attack Speed
    row["prop7"] = "swing1";
    row["par7"] = "";
    row["min7"] = 15;
    row["max7"] = 15;

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

    // Socketed 3
    row["prop6"] = "sock";
    row["par6"] = "";
    row["min6"] = 3;
    row["max6"] = 3;

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

    // Hit Blinds Target +3
    row["prop8"] = "stupidity";
    row["par8"] = "";
    row["min8"] = 3;
    row["max8"] = 3;

  }


  // Lidless Wall
  if (row["index"] === "Lidless Wall") {

    // +1 to Light Radius
    row["prop1"] = "light";
    row["par1"] = "";
    row["min1"] = 1;
    row["max1"] = 1;

    // +1 to All Skills
    row["prop2"] = "allskills";
    row["par2"] = "";
    row["min2"] = 1;
    row["max2"] = 1;

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
    row["min7"] = 25;
    row["max7"] = 25;

    // Regenerate Mana 33%
    row["prop8"] = "regen-mana";
    row["par8"] = "";
    row["min8"] = 25;
    row["max8"] = 25;

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

    // Socketed 3
    row["prop4"] = "sock";
    row["par4"] = "";
    row["min4"] = 3;
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

    // Durability: 20 of 20
    row["prop7"] = "dur";
    row["par7"] = "";
    row["min7"] = 20;
    row["max7"] = 20;

    // -15 - 20% to Enemy Poison Resistance
    row["prop8"] = "pierce-pois";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 20;

    // +20% Faster Cast Rate
    row["prop9"] = "cast1";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 20;

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

  }


  /*
  =====================================================================================
  =====================================  Gloves  ======================================
  =====================================================================================
  */


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

    // Poison Resist +30%
    row["prop4"] = "res-pois";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 30;

    // +15 - 25 Defense
    row["prop5"] = "ac";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 25;

    // +130 - 160% Enhanced Defense
    row["prop6"] = "ac%";
    row["par6"] = "";
    row["min6"] = 130;
    row["max6"] = 160;

    // Remove 7th mod
    row["prop7"] = "";
    row["par7"] = "";
    row["min7"] = "";
    row["max7"] = "";

  }


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

    // 5% Life stolen per hit
    row["prop7"] = "lifesteal";
    row["par7"] = "";
    row["min7"] = 5;
    row["max7"] = 5;

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

    // +15% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 15;
    row["max3"] = 15;

    // Increase Maximum Mana 15%
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 15;

    // +140 - 180% Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 140;
    row["max5"] = 180;

    // +1 to Summoning Skills (Necro) [Class only] Skills
    row["prop7"] = "skilltab";
    row["par7"] = "8";
    row["min7"] = 1;
    row["max7"] = 1;

  }


  // Chance Guards
  if (row["index"] === "Chance Guards") {

    // Attack Rating
    row["prop8"] = "att";
    row["par8"] = "";
    row["min8"] = 75;
    row["max8"] = 75;

    // Enhanced Defense
    row["prop5"] = "ac%";
    row["par5"] = "";
    row["min5"] = 20;
    row["max5"] = 30;

    // +25 Defense
    row["prop4"] = "ac";
    row["par4"] = "";
    row["min4"] = 25;
    row["max4"] = 25;

    // 25 - 40% Better Chance of Getting Magic Items
    row["prop7"] = "mag%";
    row["par7"] = "";
    row["min7"] = 25;
    row["max7"] = 40;

    //Extra Gold from Monsters
    row["prop7"] = "gold%";
    row["par7"] = "";
    row["min7"] = 200;
    row["max7"] = 200;

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
  ======================================  Boots  ======================================
  =====================================================================================
  */




  // Infernostride
  if (row["index"] === "Infernostride") {

    // Adds 50 - 70 Fire Damage
    row["prop1"] = "dmg-fire";
    row["par1"] = "";
    row["min1"] = 50;
    row["max1"] = 70;

    // +35% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

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

    // +5 - 12% to Fire Skill Damage
    row["prop9"] = "extra-fire";
    row["par9"] = "";
    row["min9"] = 5;
    row["max9"] = 12;

    // +30 - 40 to Mana
    row["prop10"] = "mana";
    row["par10"] = "";
    row["min10"] = 30;
    row["max10"] = 40;

  }


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

    // 4% Mana stolen per hit
    row["prop3"] = "manasteal";
    row["par3"] = "";
    row["min3"] = 4;
    row["max3"] = 4;

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

    // +15% Faster Cast Rate
    row["prop11"] = "cast1";
    row["par11"] = "";
    row["min11"] = 20;
    row["max11"] = 20;

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

    // +40% Faster Run/Walk
    row["prop5"] = "move1";
    row["par5"] = "";
    row["min5"] = 45;
    row["max5"] = 45;

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

    // Regenerate Mana 30%
    row["prop8"] = "regen-mana";
    row["par8"] = "";
    row["min8"] = 15;
    row["max8"] = 15;


    // +15% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 15;
    row["max5"] = 15;

  }

  // Marrowwalk
  if (row["index"] === "Marrowwalk") {

    // +170 - 200% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 170;
    row["max1"] = 200;

    // +35% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 35;
    row["max2"] = 35;

    // +1 to Necromancer Skill Levels
    row["prop3"] = "nec";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

    // Heal Stamina Plus 10%
    row["prop5"] = "regen-stam";
    row["par5"] = "";
    row["min5"] = 10;
    row["max5"] = 10;

    // Regenerate Mana 10%
    row["prop6"] = "regen-mana";
    row["par6"] = "";
    row["min6"] = 15;
    row["max6"] = 15;

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
    row["min10"] = 3;
    row["max10"] = 5;

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
    row["min5"] = 2;
    row["max5"] = 3;

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


  /*
  =====================================================================================
  =====================================   Belts  ======================================
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
    row["max1"] = 20;

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
    row["min7"] = 15;
    row["max7"] = 25;

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


  // Goldwrap
  if (row["index"] === "Goldwrap") {

    // +10 - 14% Increased Attack Speed
    row["prop1"] = "swing1";
    row["par1"] = "";
    row["min1"] = 10;
    row["max1"] = 14;

    //+14% Bonus to Attack Rating
    row["prop8"] = "att%";
    row["par8"] = "";
    row["min8"] = 14;
    row["max8"] = 14;

    // +40-60% Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 40;
    row["max2"] = 60;

    // +25 Defense
    row["prop2"] = "ac";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // 80 - 100% Extra Gold from Monsters
    row["prop2"] = "gold%";
    row["par2"] = "";
    row["min2"] = 80;
    row["max2"] = 100;

    // 30% Better Chance of Getting Magic Items
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 30;
    row["max6"] = 30;

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
  ====================================   Circlets  ====================================
  =====================================================================================
  */


  // Kira's Guardian
  if (row["index"] === "Kira's Guardian") {

    // +2 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // All Resistances +15 - 30
    row["prop2"] = "res-all";
    row["par2"] = "";
    row["min2"] = 15;
    row["max2"] = 30;

    // +20% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +20% Enhanced Defense
    row["prop4"] = "ac%";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 20;

  }


  // Griffon's Eye
  if (row["index"] === "Griffon's Eye") {

    // +3 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // Increase Maximum Mana 25%
    row["prop2"] = "mana%";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // -8 - 15% to Enemy Lightning Resistance
    row["prop3"] = "pierce-ltng";
    row["par3"] = "";
    row["min3"] = 8;
    row["max3"] = 15;

    // -8 - 15% to Enemy Cold Resistance
    row["prop4"] = "pierce-cold";
    row["par4"] = "";
    row["min4"] = 8;
    row["max4"] = 15;

    // -8 - 15% to Enemy Fire Resistance
    row["prop5"] = "pierce-fire";
    row["par5"] = "";
    row["min5"] = 8;
    row["max5"] = 15;

  }


  /*
  =====================================================================================
  ===================================   Axes   ========================================
  =====================================================================================
  */
  

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


  // Runemaster
  if (row["index"] === "Runemaster") {

    // +220 - 270% Enhanced Damage
    row["prop1"] = "dmg%";
    row["par1"] = "";
    row["min1"] = 220;
    row["max1"] = 270;

    // Socketed 4
    row["prop2"] = "sock";
    row["par2"] = "";
    row["min2"] = 5;
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

    // Ethereal
    row["prop8"] = "ethereal";
    row["par8"] = "";
    row["min8"] = 1;
    row["max8"] = 1;

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

    // Ignore Target's Defense
    row["prop3"] = "ignore-ac";
    row["par3"] = "";
    row["min3"] = 1;
    row["max3"] = 1;

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

    // +6 - 9 Life after each Kill
    row["prop6"] = "dmg";
    row["par6"] = "";
    row["min6"] = 220;
    row["max6"] = 220;

    // 60% Chance of Open Wounds
    row["prop7"] = "openwounds";
    row["par7"] = "";
    row["min7"] = 66;
    row["max7"] = 66;

    // Damage
    row["prop8"] = "dmg";
    row["par8"] = "";
    row["min8"] = 285;
    row["max8"] = 327;

  }


  /*
  =====================================================================================
  ==============================   Maces/Hammers   ====================================
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

    // Removes >> Level 16 Blizzard (12/12 Charges)
    row["prop4"] = "";
    row["par4"] = "";
    row["min4"] = "";
    row["max4"] = "";

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

    // Removes >> Level 9 Frozen Orb (50/50 Charges)
    row["prop6"] = "";
    row["par6"] = "";
    row["min6"] = "";
    row["max6"] = "";

    // 15% Chance to cast level 8 Frozen Orb on striking
    row["prop7"] = "hit-skill";
    row["par7"] = "64";
    row["min7"] = 15;
    row["max7"] = 8;

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


  // Moonfall
  if (row["index"] === "Moonfall") {

    // +3 to Fire Skills
    row["prop1"] = "fireskill";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // +25% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +3 - 8% to Fire Skill Damage
    row["prop3"] = "extra-fire";
    row["par3"] = "";
    row["min3"] = 3;
    row["max3"] = 8;

    // +3 to Meteor - ***********************************************TEST************* ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "Meteor";
    row["min4"] = 1;
    row["max4"] = 3;

    // +3 to Firebolt - ***********************************************TEST************* ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "36";
    row["min5"] = 1;
    row["max5"] = 3;

    // +3 to Fireball - ***********************************************TEST************* ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "47";
    row["min6"] = 1;
    row["max6"] = 3;

    // +3 to Inferno - ***********************************************TEST************* ([Class] only)
    row["prop7"] = "Inferno";
    row["par7"] = "";
    row["min7"] = 1;
    row["max7"] = 3;

    // Increase Maximum Mana 20 - 30%
    row["prop8"] = "mana%";
    row["par8"] = "";
    row["min8"] = 20;
    row["max8"] = 30;

    // Regenerate Mana 5%
    row["prop9"] = "regen-mana";
    row["par9"] = "";
    row["min9"] = 20;
    row["max9"] = 30;

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

    // Repairs 1 durability in 10 seconds
    row["prop8"] = "rep-dur";
    row["par8"] = "10";
    row["min8"] = "";
    row["max8"] = "";

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

    // Damage
    row["prop2"] = "dmg";
    row["par2"] = "";
    row["min2"] = 327;
    row["max2"] = 327;

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








  /*
  =====================================================================================
  =================================   Swords   ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ===================================   Bows   ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ================================   Javelins   =======================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ================================   Polearm   ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ===============================   Scepters   ========================================
  =====================================================================================
  */



  /*
  =====================================================================================
  =================================   Wands   =========================================
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

    // +40% Faster Cast Rate
    row["prop5"] = "cast1";
    row["par5"] = "";
    row["min5"] = 40;
    row["max5"] = 40;

    // +2 - 5 to Corpse Explosion ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "74";
    row["min6"] = 2;
    row["max6"] = 5;

    // +2 - 5 to Terror ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "77";
    row["min7"] = 2;
    row["max7"] = 5;

    // +2 - 5 to Amplify Damage ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "66";
    row["min8"] = 2;
    row["max8"] = 5;

    // +2 - 5 to Iron Maiden ([Class] only)
    row["prop9"] = "skill";
    row["par9"] = "76";
    row["min9"] = 2;
    row["max9"] = 5;

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


  // Arm of King Leoric
  if (row["index"] === "Arm of King Leoric") {

    // +2 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +3-5 to Raise Skeletal Mage ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "80";
    row["min5"] = 2;
    row["max5"] = 5;

    // +3-5 to Skeleton Mastery ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "69";
    row["min6"] = 3;
    row["max6"] = 5;

    // +3-5 to Summon Resist
    row["prop7"] = "oskill";
    row["par7"] = "89";
    row["min7"] = 3;
    row["max7"] = 5;

    // +3-5 to Raise Skeleton ([Class] only)
    row["prop8"] = "skill";
    row["par8"] = "70";
    row["min8"] = 3;
    row["max8"] = 5;

    // All Resistances +25 - 30
    row["prop9"] = "res-all";
    row["par9"] = "";
    row["min9"] = 25;
    row["max9"] = 30;

    // Increase Maximum Mana 20 - 30%
    row["prop10"] = "mana%";
    row["par10"] = "";
    row["min10"] = 20;
    row["max10"] = 30;

    // 20% Damage Taken Goes To Mana
    row["prop11"] = "dmg-to-mana";
    row["par11"] = "";
    row["min11"] = 20;
    row["max11"] = 20;

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
    row["min2"] = 35;
    row["max2"] = 35;

    // +3 - 4 to Teeth ([Class] only)
    row["prop3"] = "skill";
    row["par3"] = "Teeth";
    row["min3"] = 3;
    row["max3"] = 4;

    // +3 - 4 to Bone Armor ([Class] only)
    row["prop4"] = "skill";
    row["par4"] = "Bone Armor";
    row["min4"] = 3;
    row["max4"] = 4;

    // +3 - 4 to Bone Spear ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Bone Spear";
    row["min5"] = 3;
    row["max5"] = 4;

    // +3 - 4 to Bone Spirit ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Bone Spirit";
    row["min6"] = 3;
    row["max6"] = 4;

    // +3 - 4 to Bone Wall ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Bone Wall";
    row["min7"] = 3;
    row["max7"] = 4;

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
    row["min2"] = 33;
    row["max2"] = 33;

    // +20% Faster Cast Rate
    row["prop3"] = "cast1";
    row["par3"] = "";
    row["min3"] = 23;
    row["max3"] = 23;

    // Hit Causes Monster to Flee 64%
    row["prop4"] = "howl";
    row["par4"] = "";
    row["min4"] = 63;
    row["max4"] = 63;

    // +2 to Curses [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = "6";
    row["min5"] = 3;
    row["max5"] = 3;

    // 35 - 55% Better Chance of Getting Magic Items
    row["prop6"] = "mag%";
    row["par6"] = "";
    row["min6"] = 53;
    row["max6"] = 53;

    // +13 - 13 to all Attributes
    row["prop7"] = "all-stats";
    row["par7"] = "";
    row["min7"] = 13;
    row["max7"] = 13;

  }


  // Blackhand Key
  if (row["index"] === "Blackhand Key") {

    // +3 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 3;
    row["max1"] = 3;

    // +1 to Curses [Class only] Skills
    row["prop2"] = "skilltab";
    row["par2"] = 6;
    row["min2"] = 1;
    row["max2"] = 1;

    // 20% Damage Taken Goes To Mana
    row["prop3"] = "dmg-to-mana";
    row["par3"] = "";
    row["min3"] = 20;
    row["max3"] = 20;

    // +50 to Life
    row["prop4"] = "hp";
    row["par4"] = "";
    row["min4"] = 50;
    row["max4"] = 50;

    // -2 to Light Radius
    row["prop5"] = "light";
    row["par5"] = "";
    row["min5"] = -2;
    row["max5"] = -2;

    // +40% Faster Cast Rate
    row["prop6"] = "cast1";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // Fire Resist +37%
    row["prop7"] = "res-fire";
    row["par7"] = "";
    row["min7"] = 37;
    row["max7"] = 37;

    // Poison Resist +90%
    row["prop8"] = "res-pois";
    row["par8"] = "";
    row["min8"] = 90;
    row["max8"] = 90;

    // +8 to Mana after each Kill
    row["prop9"] = "mana-kill";
    row["par9"] = "";
    row["min9"] = 8;
    row["max9"] = 8;

  }


  /*
  =====================================================================================
  ============================ Two Handed Axes   ======================================
  =====================================================================================
  */



  /*
  =====================================================================================
  ============================ Two Handed Maces   =====================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ========================== Two Handed Swords   ======================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ================================  Crossbows  ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  =================================  Staves   =========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  =================================  Spears   =========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ===========================  Throwing Weapons   =====================================
  =====================================================================================
  */


  /*
  =====================================================================================
  =================================  Daggers  =========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  =================================   Rings   =========================================
  =====================================================================================
  */



  /*
  =====================================================================================
  =================================   Amulets   =========================================
  =====================================================================================
  */
  

  /*
  =====================================================================================
  ====================================== Charms  ======================================
  =====================================================================================
  */


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
    row["min4"] = 4;
    row["max4"] = 4;

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
  

  /*
  =====================================================================================
  ================================    Amazon   ========================================
  =====================================================================================
  */

  /*
  =====================================================================================
  ================================  Assassin   ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ==============================  Necromancer  ========================================
  =====================================================================================
  */


  // Homunculus
  if (row["index"] === "Homunculus") {

    // +2 to Necromancer Skill Levels
    row["prop1"] = "nec";
    row["par1"] = "";
    row["min1"] = 2;
    row["max1"] = 2;

    // +200% Enhanced Defense
    row["prop2"] = "ac%";
    row["par2"] = "";
    row["min2"] = 150;
    row["max2"] = 200;

    // 2 to Summoning Skills (Necro) [Class only] Skills
    row["prop3"] = "skilltab";
    row["par3"] = "8";
    row["min3"] = 2;
    row["max3"] = 2;

    // All Resistances +30 - 45
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 30;
    row["max4"] = 45;

    // 40% Increased Chance of Blocking
    row["prop5"] = "block";
    row["par5"] = "6";
    row["min5"] = 40;
    row["max5"] = 40;

    // +40% Faster Block Rate
    row["prop6"] = "block1";
    row["par6"] = "";
    row["min6"] = 40;
    row["max6"] = 40;

    // Increase Maximum Mana 33%
    row["prop7"] = "mana%";
    row["par7"] = "";
    row["min7"] = 33;
    row["max7"] = 33;
    
    // Regenerate Mana 33%
    row["prop8"] = "regen-mana";
    row["par8"] = "";
    row["min8"] = 33;
    row["max8"] = 33;

    // +6 to Mana after each Kill
    row["prop9"] = "mana-kill";
    row["par9"] = "";
    row["min9"] = 6;
    row["max9"] = 6;

  }


  // Darkforge Spawn
  if (row["index"] === "Darkforce Spawn") {

    // +140 - 180% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 140;
    row["max1"] = 180;

    // +30% Faster Cast Rate
    row["prop2"] = "cast1";
    row["par2"] = "";
    row["min2"] = 30;
    row["max2"] = 30;

    // +2 - 3 to Summoning Spells (Necro) [Class only] Skills
    row["prop3"] = "skilltab";
    row["par3"] = 8;
    row["min3"] = 2;
    row["max3"] = 3;

    // +2 - 3 to Poison and Bone Skills [Class only] Skills
    row["prop4"] = "skilltab";
    row["par4"] = 7;
    row["min4"] = 2;
    row["max4"] = 3;

    // +2 - 3 to Curses [Class only] Skills
    row["prop5"] = "skilltab";
    row["par5"] = 6;
    row["min5"] = 2;
    row["max5"] = 3;

    // +10 - 15% to Poison Skill Damage
    row["prop6"] = "extra-pois";
    row["par6"] = "";
    row["min6"] = 10;
    row["max6"] = 20;

  }


  // Boneflame
  if (row["index"] === "Boneflame") {

    // +120 - 150% Enhanced Defense
    row["prop1"] = "ac%";
    row["par1"] = "";
    row["min1"] = 120;
    row["max1"] = 150;

    // +25% Faster Run/Walk
    row["prop2"] = "move1";
    row["par2"] = "";
    row["min2"] = 25;
    row["max2"] = 25;

    // +1 to Necromancer Skill Levels
    row["prop3"] = "nec";
    row["par3"] = "";
    row["min3"] = 2;
    row["max3"] = 2;

    // All Resistances +20 - 30
    row["prop4"] = "res-all";
    row["par4"] = "";
    row["min4"] = 20;
    row["max4"] = 30;
  
    // +3 - 4 to Bone Spear ([Class] only)
    row["prop5"] = "skill";
    row["par5"] = "Bone Spear";
    row["min5"] = 3;
    row["max5"] = 4;

    // +3 - 4 to Teeth ([Class] only)
    row["prop6"] = "skill";
    row["par6"] = "Teeth";
    row["min6"] = 3;
    row["max6"] = 4;

    // +3 - 4 to Bone Spirit ([Class] only)
    row["prop7"] = "skill";
    row["par7"] = "Bone Spirit";
    row["min7"] = 3;
    row["max7"] = 4;

    // +30% Faster Cast Rate
    row["prop8"] = "cast1";
    row["par8"] = "";
    row["min8"] = 30;
    row["max8"] = 30;

  }


  /*
  =====================================================================================
  ===============================   Barbarian  ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ================================  Sorceress  ========================================
  =====================================================================================
  */


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

    // Replaces Teleport with >>> 50% Better Chance of Getting Magic Items
    row["prop8"] = "mag%";
    row["par8"] = "";
    row["min8"] = 50;
    row["max8"] = 50;

  }
  
  // Eschuta's temper
  if (row["index"] === "Eschuta's temper") {

    // +1 - 3 to Sorceress Skill Levels
    row["prop1"] = "sor";
    row["par1"] = "";
    row["min1"] = 2;
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


  /*
  =====================================================================================
  ================================    Druid   ========================================
  =====================================================================================
  */


  /*
  =====================================================================================
  ===============================    Paladin   ========================================
  =====================================================================================
  */


});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);