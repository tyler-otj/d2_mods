// gems.txt
const gemsFilename = 'global\\excel\\gems.txt';
const gems = D2RMM.readTsv(gemsFilename);


gems.rows.forEach((row) => {

  // El Rune
  if (row["name"] == "El Rune") {

    // 
    row["weaponMod1Code"] = "light";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 5;
    row["weaponMod1Max"] = 5;

    // Blanks out 2nd code
    row["weaponMod2Code"] = "";
    row["weaponMod2Param"] = "";
    row["weaponMod2Min"] = "";
    row["weaponMod2Max"] = "";

    // 
    row["helmMod1Code"] = "light";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 5;
    row["helmMod1Max"] = 5;

    // Blanks out 2nd code
    row["helmMod2Code"] = "";
    row["helmMod2Param"] = "";
    row["helmMod2Min"] = "";
    row["helmMod2Max"] = "";

    // 
    row["shieldMod1Code"] = "light";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 5;
    row["shieldMod1Max"] = 5;

    // Blanks out 2nd code
    row["shieldMod1Code"] = "";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = "";
    row["shieldMod1Max"] = "";

  }

  // Eld Rune
  if (row["name"] == "Eld Rune") {

    // 
    row["weaponMod1Code"] = "regen-stam";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 50;
    row["weaponMod1Max"] = 50;

    // Blanks out 2nd code
    row["weaponMod2Code"] = "";
    row["weaponMod2Param"] = "";
    row["weaponMod2Min"] = "";
    row["weaponMod2Max"] = "";

    // 
    row["helmMod1Code"] = "regen-stam";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // Blanks out 2nd code
    row["helmMod2Code"] = "";
    row["helmMod2Param"] = "";
    row["helmMod2Min"] = "";
    row["helmMod2Max"] = "";

    // 
    row["shieldMod1Code"] = "regen-stam";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 50;
    row["shieldMod1Max"] = 50;

    // Blanks out 2nd code
    row["shieldMod1Code"] = "";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = "";
    row["shieldMod1Max"] = "";

  }

  // Tir Rune
  if (row["name"] == "Tir Rune") {

    // 
    row["weaponMod1Code"] = "stam";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 50;
    row["weaponMod1Max"] = 50;

    // 
    row["helmMod1Code"] = "stam";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // 
    row["shieldMod1Code"] = "stam";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 50;
    row["shieldMod1Max"] = 50;

  }

  // Nef Rune
  if (row["name"] == "Nef Rune") {

    // 
    row["weaponMod1Code"] = "heal-kill";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 12;
    row["weaponMod1Max"] = 12;

    // 
    row["helmMod1Code"] = "heal-kill";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 6;
    row["helmMod1Max"] = 6;

    // 
    row["shieldMod1Code"] = "heal-kill";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 12;
    row["shieldMod1Max"] = 12;

  }

  // Eth Rune
  if (row["name"] == "Eth Rune") {

    // 
    row["weaponMod1Code"] = "mana-kill";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 12;
    row["weaponMod1Max"] = 12;

    // 
    row["helmMod1Code"] = "mana-kill";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 6;
    row["helmMod1Max"] = 6;

    // 
    row["shieldMod1Code"] = "mana-kill";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 12;
    row["shieldMod1Max"] = 12;

  }

  // Ith Rune
  if (row["name"] == "Ith Rune") {

    // 
    row["weaponMod1Code"] = "dmg-to-mana";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 24;
    row["weaponMod1Max"] = 24;

    // 
    row["helmMod1Code"] = "dmg-to-mana";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 12;
    row["helmMod1Max"] = 12;

    // 
    row["shieldMod1Code"] = "dmg-to-mana";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 24;
    row["shieldMod1Max"] = 24;

  }

  // Tal Rune
  if (row["name"] == "Tal Rune") {

    // 
    row["weaponMod1Code"] = "move1";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "move1";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 15;
    row["helmMod1Max"] = 15;

    // 
    row["shieldMod1Code"] = "move1";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }
  
  // Ral Rune
  if (row["name"] == "Ral Rune") {

    // 
    row["weaponMod1Code"] = "att%";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "att%";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 15;
    row["helmMod1Max"] = 15;

    // 
    row["shieldMod1Code"] = "att%";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }
  
  // Ort Rune
  if (row["name"] == "Ort Rune") {

    // 
    row["weaponMod1Code"] = "regen-mana";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "regen-mana";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 15;
    row["helmMod1Max"] = 15;

    // 
    row["shieldMod1Code"] = "regen-mana";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }

  // Thul Rune
  if (row["name"] == "Thul Rune") {

    // 
    row["weaponMod1Code"] = "mana%";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "mana%";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 15;
    row["helmMod1Max"] = 15;

    // 
    row["shieldMod1Code"] = "mana%";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }

  // Amn Rune
  if (row["name"] == "Amn Rune") {

    // 
    row["weaponMod1Code"] = "dmg";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 50;
    row["weaponMod1Max"] = 50;

    // 
    row["helmMod1Code"] = "ac";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 100;
    row["helmMod1Max"] = 100;

    // 
    row["shieldMod1Code"] = "ac";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 200;
    row["shieldMod1Max"] = 200;

  }

  // Sol Rune
  if (row["name"] == "Sol Rune") {

    // 
    row["weaponMod1Code"] = "enr";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 20;
    row["weaponMod1Max"] = 20;

    // 
    row["helmMod1Code"] = "enr";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 10;
    row["helmMod1Max"] = 10;

    // 
    row["shieldMod1Code"] = "enr";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 20;
    row["shieldMod1Max"] = 20;

  }

  // Shael Rune
  if (row["name"] == "Shael Rune") {

    // 
    row["weaponMod1Code"] = "vit";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 20;
    row["weaponMod1Max"] = 20;

    // 
    row["helmMod1Code"] = "vit";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 10;
    row["helmMod1Max"] = 10;

    // 
    row["shieldMod1Code"] = "vit";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 20;
    row["shieldMod1Max"] = 20;

  }

  // Dol Rune
  if (row["name"] == "Dol Rune") {

    // 
    row["weaponMod1Code"] = "dex";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 20;
    row["weaponMod1Max"] = 20;

    // 
    row["helmMod1Code"] = "dex";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 10;
    row["helmMod1Max"] = 10;

    // 
    row["shieldMod1Code"] = "dex";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 20;
    row["shieldMod1Max"] = 20;

  }

  // Hel Rune
  if (row["name"] == "Hel Rune") {

    // 
    row["weaponMod1Code"] = "str";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 20;
    row["weaponMod1Max"] = 20;

    // 
    row["helmMod1Code"] = "str";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 10;
    row["helmMod1Max"] = 10;

    // 
    row["shieldMod1Code"] = "str";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 20;
    row["shieldMod1Max"] = 20;

  }

  // Io Rune
  if (row["name"] == "Io Rune") {

    // 
    row["weaponMod1Code"] = "openwounds";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 60;
    row["weaponMod1Max"] = 60;

    // 
    row["helmMod1Code"] = "block";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 15;
    row["helmMod1Max"] = 15;

    // 
    row["shieldMod1Code"] = "block";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }

  // Lum Rune
  if (row["name"] == "Lum Rune") {

    // 
    row["weaponMod1Code"] = "deadly";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 60;
    row["weaponMod1Max"] = 60;

    // 
    row["helmMod1Code"] = "ac-miss";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // 
    row["shieldMod1Code"] = "ac-miss";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 50;
    row["shieldMod1Max"] = 50;

  }
  
  // Ko Rune
  if (row["name"] == "Ko Rune") {

    // 
    row["weaponMod1Code"] = "crush";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 60;
    row["weaponMod1Max"] = 60;

    // 
    row["helmMod1Code"] = "ac-hth";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // 
    row["shieldMod1Code"] = "ac-hth";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 50;
    row["shieldMod1Max"] = 50;

  }
  
  // Fal Rune
  if (row["name"] == "Fal Rune") {

    // 
    row["weaponMod1Code"] = "swing1";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "balance1";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 20;
    row["helmMod1Max"] = 20;

    // 
    row["shieldMod1Code"] = "block1";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }

  // Lem Rune
  if (row["name"] == "Lem Rune") {

    // 
    row["weaponMod1Code"] = "cast1";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 30;
    row["weaponMod1Max"] = 30;

    // 
    row["helmMod1Code"] = "cast1";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 10;
    row["helmMod1Max"] = 10;

    // 
    row["shieldMod1Code"] = "cast1";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 30;
    row["shieldMod1Max"] = 30;

  }

  // Pul Rune
  if (row["name"] == "Pul Rune") {

    // 
    row["weaponMod1Code"] = "ease";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 100;
    row["weaponMod1Max"] = 100;

    // Blanks out 2nd code
    row["weaponMod2Code"] = "";
    row["weaponMod2Param"] = "";
    row["weaponMod2Min"] = "";
    row["weaponMod2Max"] = "";

    // 
    row["helmMod1Code"] = "ease";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 100;
    row["helmMod1Max"] = 100;

    // Blanks out 2nd code
    row["helmMod2Code"] = "";
    row["helmMod2Param"] = "";
    row["helmMod2Min"] = "";
    row["helmMod2Max"] = "";

    // 
    row["shieldMod1Code"] = "ease";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 100;
    row["shieldMod1Max"] = 100;

    // Blanks out 2nd code
    row["shieldMod1Code"] = "";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = "";
    row["shieldMod1Max"] = "";

  }

  // Um Rune
  if (row["name"] == "Um Rune") {

    // 
    row["weaponMod1Code"] = "res-all";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 35;
    row["weaponMod1Max"] = 35;

    // 
    row["helmMod1Code"] = "res-all";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // 
    row["shieldMod1Code"] = "res-all";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 35;
    row["shieldMod1Max"] = 35;

  }

  // Mal Rune
  if (row["name"] == "Mal Rune") {

    // 
    row["weaponMod1Code"] = "indestruct";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 1;
    row["weaponMod1Max"] = 1;

    // 
    row["helmMod1Code"] = "indestruct";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 1;
    row["helmMod1Max"] = 1;

    // 
    row["shieldMod1Code"] = "indestruct";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 1;
    row["shieldMod1Max"] = 1;

  }

  // Ist Rune
  if (row["name"] == "Ist Rune") {

    // 
    row["weaponMod1Code"] = "mag%";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 100;
    row["weaponMod1Max"] = 100;

    // 
    row["weaponMod2Code"] = "gold%";
    row["weaponMod2Param"] = "";
    row["weaponMod2Min"] = 200;
    row["weaponMod2Max"] = 200;

    // 
    row["helmMod1Code"] = "mag%";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 25;
    row["helmMod1Max"] = 25;

    // 
    row["helmMod2Code"] = "gold%";
    row["helmMod2Param"] = "";
    row["helmMod2Min"] = 50;
    row["helmMod2Max"] = 50;

    // 
    row["shieldMod1Code"] = "mag%";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 100;
    row["shieldMod1Max"] = 100;

    // 
    row["shieldMod2Code"] = "gold%";
    row["shieldMod2Param"] = "";
    row["shieldMod2Min"] = 200;
    row["shieldMod2Max"] = 200;

  }

  // Gul Rune
  if (row["name"] == "Gul Rune") {

    // 
    row["weaponMod1Code"] = "extra-pois";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 15;
    row["weaponMod1Max"] = 15;

    // 
    row["helmMod1Code"] = "res-pois-max";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 7;
    row["helmMod1Max"] = 7;

    // 
    row["shieldMod1Code"] = "res-pois-max";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 10;
    row["shieldMod1Max"] = 10;

  }

  // Vex Rune
  if (row["name"] == "Vex Rune") {

    // 
    row["weaponMod1Code"] = "extra-cold";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 15;
    row["weaponMod1Max"] = 15;

    // 
    row["helmMod1Code"] = "res-cold-max";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 7;
    row["helmMod1Max"] = 7;

    // 
    row["shieldMod1Code"] = "res-cold-max";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 10;
    row["shieldMod1Max"] = 10;

  }

  // Ohm Rune
  if (row["name"] == "Ohm Rune") {

    // 
    row["weaponMod1Code"] = "extra-fire";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 15;
    row["weaponMod1Max"] = 15;

    // 
    row["helmMod1Code"] = "res-fire-max";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 7;
    row["helmMod1Max"] = 7;

    // 
    row["shieldMod1Code"] = "res-fire-max";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 10;
    row["shieldMod1Max"] = 10;

  }
  
  // Lo Rune
  if (row["name"] == "Lo Rune") {

    // 
    row["weaponMod1Code"] = "extra-ltng";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 15;
    row["weaponMod1Max"] = 15;

    // 
    row["helmMod1Code"] = "res-ltng-max";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 7;
    row["helmMod1Max"] = 7;

    // 
    row["shieldMod1Code"] = "res-ltng-max";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 10;
    row["shieldMod1Max"] = 10;

  }
  
  // Sur Rune
  if (row["name"] == "Sur Rune") {

    // 
    row["weaponMod1Code"] = "dmg%";
    row["weaponMod1Param"] = "";
    row["weaponMod1Min"] = 100;
    row["weaponMod1Max"] = 100;

    // 
    row["helmMod1Code"] = "red-dmg%";
    row["helmMod1Param"] = "";
    row["helmMod1Min"] = 7;
    row["helmMod1Max"] = 7;

    // 
    row["shieldMod1Code"] = "red-dmg%";
    row["shieldMod1Param"] = "";
    row["shieldMod1Min"] = 15;
    row["shieldMod1Max"] = 15;

  }

  // Ber Rune
  if (row["name"] == "Ber Rune") {

    // 
    row["weaponMod1Code"] = "oskill";
    row["weaponMod1Param"] = "Teleport";
    row["weaponMod1Min"] = 1;
    row["weaponMod1Max"] = 1;

    // 
    row["helmMod1Code"] = "oskill";
    row["helmMod1Param"] = "Teleport";
    row["helmMod1Min"] = 1;
    row["helmMod1Max"] = 1;

    // 
    row["shieldMod1Code"] = "oskill";
    row["shieldMod1Param"] = "Teleport";
    row["shieldMod1Min"] = 1;
    row["shieldMod1Max"] = 1;

  }

  // Jah Rune
  if (row["name"] == "Jah Rune") {

    // 
    row["weaponMod1Code"] = "aura";
    row["weaponMod1Param"] = "Fanaticism";
    row["weaponMod1Min"] = 12;
    row["weaponMod1Max"] = 12;

    // 
    row["helmMod1Code"] = "aura";
    row["helmMod1Param"] = "Vigor";
    row["helmMod1Min"] = 12;
    row["helmMod1Max"] = 12;

    // 
    row["shieldMod1Code"] = "aura";
    row["shieldMod1Param"] = "Thorns";
    row["shieldMod1Min"] = 12;
    row["shieldMod1Max"] = 12;

  }
  
  // Cham Rune
  if (row["name"] == "Cham Rune") {


    // 
    row["weaponMod1Code"] = "aura";
    row["weaponMod1Param"] = "Might";
    row["weaponMod1Min"] = 12;
    row["weaponMod1Max"] = 12;

    // 
    row["helmMod1Code"] = "aura";
    row["helmMod1Param"] = "Meditation";
    row["helmMod1Min"] = 12;
    row["helmMod1Max"] = 12;

    // 
    row["shieldMod1Code"] = "aura";
    row["shieldMod1Param"] = "Defiance";
    row["shieldMod1Min"] = 12;
    row["shieldMod1Max"] = 12;

  }

  // Zod Rune
  if (row["name"] == "Zod Rune") {

    // Conviction Aura (Level 10)
    row["weaponMod1Code"] = "aura";
    row["weaponMod1Param"] = "Conviction";
    row["weaponMod1Min"] = 12;
    row["weaponMod1Max"] = 12;

    // 
    row["helmMod1Code"] = "aura";
    row["helmMod1Param"] = "Redemption";
    row["helmMod1Min"] = 12;
    row["helmMod1Max"] = 12;

    // 
    row["shieldMod1Code"] = "aura";
    row["shieldMod1Param"] = "Holy Freeze";
    row["shieldMod1Min"] = 12;
    row["shieldMod1Max"] = 12;

  }


});

D2RMM.writeTsv(gemsFilename, gems);