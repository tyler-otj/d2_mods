// sets.txt
const setsFilename = 'global\\excel\\sets.txt';
const sets = D2RMM.readTsv(setsFilename);

sets.rows.forEach((row) => { 

  // Civerb's Vestments
  if (row["index"] === "Civerb's Vestments") {

    // 
    row["PCode2A"] = "res-fire";
    row["PParam2a"] = "";
    row["PMin2a"] = 40;
    row["PMax2a"] = 40;

    // 
    row["FCode1"] = "str";
    row["FParam1"] = "";
    row["FMin1"] = 25;
    row["FMax1"] = 25;

    // 
    row["FCode2"] = "dmg-undead";
    row["FParam2"] = "";
    row["FMin2"] = 400;
    row["FMax2"] = 400;

    // 
    row["FCode3"] = "res-ltng";
    row["FParam3"] = "";
    row["FMin3"] = 40;
    row["FMax3"] = 40;

    // 
    row["FCode4"] = "att%";
    row["FParam4"] = "";
    row["FMin4"] = 40;
    row["FMax4"] = 40;

    // 
    row["FCode5"] = "ac/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Sanctuary";
    row["FMin6"] = 14;
    row["FMax6"] = 14;

  }

  // Hsarus' Defense
  if (row["index"] === "Hsarus' Defense") {

    // 
    row["PCode2A"] = "thorns";
    row["PParam2a"] = "";
    row["PMin2a"] = 100;
    row["PMax2a"] = 100;

    // 
    row["FCode1"] = "nofreeze";
    row["FParam1"] = "";
    row["FMin1"] = 1;
    row["FMax1"] = 1;

    // 
    row["FCode2"] = "dmg-norm";
    row["FParam2"] = "";
    row["FMin2"] = 1;
    row["FMax2"] = 50;

    // 
    row["FCode3"] = "res-ltng";
    row["FParam3"] = "";
    row["FMin3"] = 40;
    row["FMax3"] = 40;

    // 
    row["FCode4"] = "balance2";
    row["FParam4"] = "";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "ac/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Fire Claws";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

    // 
    row["FCode7"] = "oskill";
    row["FParam7"] = "Wearbear";
    row["FMin7"] = 4;
    row["FMax7"] = 4;

    // 
    row["FCode8"] = "oskill";
    row["FParam8"] = "Shape Shifting";
    row["FMin8"] = 4;
    row["FMax8"] = 4;

  }

  // Cleglaw's Brace
  if (row["index"] === "Cleglaw's Brace") {

    // 
    row["PCode2A"] = "crush";
    row["PParam2a"] = "";
    row["PMin2a"] = 35;
    row["PMax2a"] = 35;

    // 
    row["FCode1"] = "ac";
    row["FParam1"] = "";
    row["FMin1"] = 0;
    row["FMax1"] = 0;

    // 
    row["FCode2"] = "dmg-norm";
    row["FParam2"] = "";
    row["FMin2"] = 1;
    row["FMax2"] = 100;

    // 
    row["FCode3"] = "swing2";
    row["FParam3"] = "";
    row["FMin3"] = 20;
    row["FMax3"] = 20;

    // 
    row["FCode4"] = "manasteal";
    row["FParam4"] = "";
    row["FMin4"] = 7;
    row["FMax4"] = 7;

    // 
    row["FCode5"] = "att";
    row["FParam5"] = "";
    row["FMin5"] = 250;
    row["FMax5"] = 250;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Sacrifice";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

    // 
    row["FCode7"] = "ac";
    row["FParam7"] = "";
    row["FMin7"] = 0;
    row["FMax7"] = 0;

  }

  // Iratha's Finery
  if (row["index"] === "Iratha's Finery") {

    // 
    row["PCode2A"] = "ac";
    row["PParam2a"] = "";
    row["PMin2a"] = 250;
    row["PMax2a"] = 250;

    // 
    row["PCode3A"] = "move2";
    row["PParam3a"] = "";
    row["PMin3a"] = 20;
    row["PMax3a"] = 20;

    // 
    row["PCode3B"] = "pierce";
    row["PParam3b"] = "";
    row["PMin3b"] = 35;
    row["PMax3b"] = 35;

    // 
    row["FCode1"] = "dex";
    row["FParam1"] = "";
    row["FMin1"] = 10;
    row["FMax1"] = 10;

    // 
    row["FCode2"] = "res-ltng-max";
    row["FParam2"] = "";
    row["FMin2"] = 5;
    row["FMax2"] = 5;

    // 
    row["FCode3"] = "oskill";
    row["FParam3"] = "Multiple Shot";
    row["FMin3"] = 20;
    row["FMax3"] = 20;

    // 
    row["FCode4"] = "res-pois-max";
    row["FParam4"] = "";
    row["FMin4"] = 5;
    row["FMax4"] = 5;

    // 
    row["FCode5"] = "res-fire-max";
    row["FParam5"] = "";
    row["FMin5"] = 5;
    row["FMax5"] = 5;

    // 
    row["FCode6"] = "res-cold-max";
    row["FParam6"] = "";
    row["FMin6"] = 5;
    row["FMax6"] = 5;

  }

  // Isenhart's Armory
  if (row["index"] === "Isenhart's Armory") {

    // 
    row["PCode2A"] = "att%";
    row["PParam2a"] = "";
    row["PMin2a"] = 35;
    row["PMax2a"] = 35;

    // 
    row["PCode3A"] = "str";
    row["PParam3a"] = "";
    row["PMin3a"] = 25;
    row["PMax3a"] = 25;

    // 
    row["PCode3B"] = "dex";
    row["PParam3b"] = "";
    row["PMin3b"] = 15;
    row["PMax3b"] = 15;

    // 
    row["FCode1"] = "move2";
    row["FParam1"] = "";
    row["FMin1"] = 20;
    row["FMax1"] = 20;

    // 
    row["FCode2"] = "block";
    row["FParam2"] = "";
    row["FMin2"] = 40;
    row["FMax2"] = 40;

    // 
    row["FCode3"] = "lifesteal";
    row["FParam3"] = "";
    row["FMin3"] = 10;
    row["FMax3"] = 10;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Might";
    row["FMin4"] = 14;
    row["FMax4"] = 14;

    // 
    row["FCode5"] = "dmg%/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 25;
    row["FMax5"] = 25;


  }

  // Vidala's Rig
  if (row["index"] === "Vidala's Rig") {

    // 
    row["PCode2A"] = "att";
    row["PParam2a"] = "";
    row["PMin2a"] = 400;
    row["PMax2a"] = 400;

    // 
    row["PCode2B"] = "manasteal";
    row["PParam2b"] = "";
    row["PMin2b"] = 10;
    row["PMax2b"] = 10;

    // 
    row["PCode3A"] = "dex";
    row["PParam3a"] = "";
    row["PMin3a"] = 25;
    row["PMax3a"] = 25;

    // 
    row["FCode1"] = "dmg-cold/lvl";
    row["FParam1"] = 12;

    // 
    row["FCode2"] = "pierce";
    row["FParam2"] = "";
    row["FMin2"] = 50;
    row["FMax2"] = 50;

    // 
    row["FCode3"] = "freeze";
    row["FParam3"] = "";
    row["FMin3"] = 1;
    row["FMax3"] = 1;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Freezing Arrow";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

  }

  // Milabrega's Regalia
  if (row["index"] === "Milabrega's Regalia") {

    // 
    row["PCode2A"] = "att";
    row["PParam2a"] = "";
    row["PMin2a"] = 400;
    row["PMax2a"] = 400;

    // 
    row["PCode2B"] = "dmg-ltng/lvl";
    row["PParam2b"] = 16;

    // 
    row["PCode3A"] = "att%";
    row["PParam3a"] = "";
    row["PMin3a"] = 20;
    row["PMax3a"] = 20;

    // 
    row["PCode3B"] = "nofreeze";
    row["PParam3b"] = "";
    row["PMin3b"] = 1;
    row["PMax3b"] = 1;

    // 
    row["FCode1"] = "pal";
    row["FParam1"] = "";
    row["FMin1"] = 2;
    row["FMax1"] = 2;

    // 
    row["FCode2"] = "lifesteal";
    row["FParam2"] = "";
    row["FMin2"] = 10;
    row["FMax2"] = 10;

    // 
    row["FCode3"] = "manasteal";
    row["FParam3"] = "";
    row["FMin3"] = 10;
    row["FMax3"] = 10;

    // 
    row["FCode4"] = "res-pois";
    row["FParam4"] = "";
    row["FMin4"] = 40;
    row["FMax4"] = 40;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Zeal";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

  }

  // Cathan's Traps
  if (row["index"] === "Cathan's Traps") {

    // 
    row["PCode2A"] = "dmg-fire";
    row["PParam2a"] = "";
    row["PMin2a"] = 1;
    row["PMax2a"] = 50;

    // 
    row["PCode2B"] = "regen-mana";
    row["PParam2b"] = "";
    row["PMin2b"] = 100;
    row["PMax2b"] = 100;

    // 
    row["PCode3A"] = "res-ltng";
    row["PParam3a"] = "";
    row["PMin3a"] = 40;
    row["PMax3a"] = 40;

    // 
    row["FCode1"] = "cast2";
    row["FParam1"] = "";
    row["FMin1"] = 20;
    row["FMax1"] = 20;

    // 
    row["FCode2"] = "mana";
    row["FParam2"] = "";
    row["FMin2"] = 100;
    row["FMax2"] = 100;

    // 
    row["FCode3"] = "red-mag";
    row["FParam3"] = "";
    row["FMin3"] = 10;
    row["FMax3"] = 10;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Fire Ball";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

  }

  // Tancred's Battlegear
  if (row["index"] === "Tancred's Battlegear") {

    // 
    row["PCode2A"] = "dmg-ltng";
    row["PParam2a"] = "";
    row["PMin2a"] = 1;
    row["PMax2a"] = 50;

    // 
    row["PCode3A"] = "lifesteal";
    row["PParam3a"] = "";
    row["PMin3a"] = 10;
    row["PMax3a"] = 10;

    // 
    row["FCode1"] = "slow";
    row["FParam1"] = "";
    row["FMin1"] = 50;
    row["FMax1"] = 50;

    // 
    row["FCode2"] = "manasteal";
    row["FParam2"] = "";
    row["FMin2"] = 10;
    row["FMax2"] = 10;

    // 
    row["FCode3"] = "gold%";
    row["FParam3"] = "";
    row["FMin3"] = 100;
    row["FMax3"] = 100;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Concentrate";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "dmg%/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 25;
    row["FMax5"] = 25;

  }

  // Sigon's Complete Steel
  if (row["index"] === "Sigon's Complete Steel") {

    // 
    row["PCode2A"] = "lifesteal";
    row["PParam2a"] = "";
    row["PMin2a"] = 10;
    row["PMax2a"] = 10;

    // 
    row["PCode3A"] = "thorns";
    row["PParam3a"] = "";
    row["PMin3a"] = 100;
    row["PMax3a"] = 100;

    // 
    row["FCode1"] = "ac";
    row["FParam1"] = "";
    row["FMin1"] = 250;
    row["FMax1"] = 250;

    // 
    row["FCode2"] = "mana";
    row["FParam2"] = "";
    row["FMin2"] = 40;
    row["FMax2"] = 40;

    // 
    row["FCode3"] = "res-fire";
    row["FParam3"] = "";
    row["FMin3"] = 40;
    row["FMax3"] = 40;

    // 
    row["FCode4"] = "dmg-fire";
    row["FParam4"] = "";
    row["FMin4"] = 1;
    row["FMax4"] = 50;

    // 
    row["FCode5"] = "red-dmg";
    row["FParam5"] = "";
    row["FMin5"] = 15;
    row["FMax5"] = 15;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Blessed Hammer";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

  }

  // Infernal Tools
  if (row["index"] === "Infernal Tools") {

    // 
    row["PCode2A"] = "dmg-pois";
    row["PParam2a"] = "";
    row["PMin2a"] = 80;
    row["PMax2a"] = 160;

    // 
    row["FCode1"] = "nec";
    row["FParam1"] = "";
    row["FMin1"] = 1;
    row["FMax1"] = 1;

    // 
    row["FCode2"] = "openwounds";
    row["FParam2"] = "";
    row["FMin2"] = 50;
    row["FMax2"] = 50;

    // 
    row["FCode3"] = "att%";
    row["FParam3"] = "";
    row["FMin3"] = 50;
    row["FMax3"] = 50;

    // 
    row["FCode4"] = "manasteal";
    row["FParam4"] = "";
    row["FMin4"] = 10;
    row["FMax4"] = 10;

    // 
    row["FCode5"] = "mana";
    row["FParam5"] = "";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Corpse Explosion";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

    // 
    row["FCode7"] = "nofreeze";
    row["FParam7"] = "";
    row["FMin7"] = 1;
    row["FMax7"] = 1;

  }

  // Berserker's Garb
  if (row["index"] === "Berserker's Garb") {

    // 
    row["PCode2A"] = "hp";
    row["PParam2a"] = "";
    row["PMin2a"] = 0;
    row["PMax2a"] = 0;

    // 
    row["FCode1"] = "res-pois-len";
    row["FParam1"] = "";
    row["FMin1"] = 100;
    row["FMax1"] = 100;

    // 
    row["FCode2"] = "dmg-pois";
    row["FParam2"] = "";
    row["FMin2"] = 80;
    row["FMax2"] = 160;

    // 
    row["FCode3"] = "oskill";
    row["FParam3"] = "Bash";
    row["FMin3"] = 20;
    row["FMax3"] = 20;

    // 
    row["FCode4"] = "ac/lvl";
    row["FParam4"] = "";
    row["FMin4"] = 25;
    row["FMax4"] = 25;

    // 
    row["FCode5"] = "ac";
    row["FParam5"] = "";
    row["FMin5"] = 0;
    row["FMax5"] = 0;

    // 
    row["FCode6"] = "dmg%/lvl";
    row["FParam6"] = "";
    row["FMin6"] = 25;
    row["FMax6"] = 25;

  }

  // Death's Disguise
  if (row["index"] === "Death's Disguise") {

    // 
    row["PCode2A"] = "lifesteal";
    row["PParam2a"] = "";
    row["PMin2a"] = 10;
    row["PMax2a"] = 10;

    // 
    row["FCode1"] = "att%";
    row["FParam1"] = "";
    row["FMin1"] = 100;
    row["FMax1"] = 100;

    // 
    row["FCode2"] = "dmg-min";
    row["FParam2"] = "";
    row["FMin2"] = 15;
    row["FMax2"] = 15;

    // 
    row["FCode3"] = "oskill";
    row["FParam3"] = "Tiger Strike";
    row["FMin3"] = 20;
    row["FMax3"] = 20;

    // 
    row["FCode4"] = "dmg%/lvl";
    row["FParam4"] = "";
    row["FMin4"] = 25;
    row["FMax4"] = 25;

  }

  // Angelical Raiment
  if (row["index"] === "Angelical Raiment") {

    // 
    row["PCode2A"] = "dex";
    row["PParam2a"] = "";
    row["PMin2a"] = 25;
    row["PMax2a"] = 25;

    // 
    row["PCode3A"] = "mana";
    row["PParam3a"] = "";
    row["PMin3a"] = 50;
    row["PMax3a"] = 50;

    // 
    row["FCode1"] = "mag%";
    row["FParam1"] = "";
    row["FMin1"] = 40;
    row["FMax1"] = 40;

    // 
    row["FCode2"] = "nofreeze";
    row["FParam2"] = "";
    row["FMin2"] = 1;
    row["FMax2"] = 1;

    // 
    row["FCode3"] = "regen-mana";
    row["FParam3"] = "";
    row["FMin3"] = 100;
    row["FMax3"] = 100;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Zeal";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "dmg%/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 25;
    row["FMax5"] = 25;

  }

  // Arctic Gear
  if (row["index"] === "Arctic Gear") {

    // 
    row["PCode2A"] = "str";
    row["PParam2a"] = "";
    row["PMin2a"] = 25;
    row["PMax2a"] = 25;

    // 
    row["PCode3A"] = "hp";
    row["PParam3a"] = "";
    row["PMin3a"] = 0;
    row["PMax3a"] = 0;

    // 
    row["FCode1"] = "nofreeze";
    row["FParam1"] = "";
    row["FMin1"] = 1;
    row["FMax1"] = 1;

    // 
    row["FCode2"] = "oskill";;
    row["FParam2"] = "Freezing Arrow";
    row["FMin2"] = 20;
    row["FMax2"] = 20;

    // 
    row["FCode3"] = "dmg-cold/lvl";
    row["FParam3"] = 12;

  }

  // Arcanna's Tricks
  if (row["index"] === "Arcanna's Tricks") {

    // 
    row["PCode2A"] = "mana";
    row["PParam2a"] = "";
    row["PMin2a"] = 100;
    row["PMax2a"] = 100;

    // 
    row["PCode3A"] = "hp";
    row["PParam3a"] = "";
    row["PMin3a"] = 0;
    row["PMax3a"] = 0;

   // 
    row["PCode3B"] = "regen-mana";
    row["PParam3b"] = "";
    row["PMin3b"] = 0;
    row["PMax3b"] = 0;

    // 
    row["FCode1"] = "cast2";
    row["FParam1"] = "";
    row["FMin1"] = 40;
    row["FMax1"] = 40;

    // 
    row["FCode2"] = "oskill";
    row["FParam2"] = "Nova";
    row["FMin2"] = 20;
    row["FMax2"] = 20;

    // 
    row["FCode3"] = "regen-mana";
    row["FParam3"] = "";
    row["FMin3"] = 100;
    row["FMax3"] = 100;

    // 
    row["FCode4"] = "manasteal";
    row["FParam4"] = "";
    row["FMin4"] = 10;
    row["FMax4"] = 10;

  }

  // Natalya's Odium
  if (row["index"] === "Natalya's Odium") {

    // 
    row["PCode2A"] = "red-mag";
    row["PParam2a"] = "";
    row["PMin2a"] = 15;
    row["PMax2a"] = 15;

    // 
    row["PCode3A"] = "ac";
    row["PParam3a"] = "";
    row["PMin3a"] = 250;
    row["PMax3a"] = 250;

    // 
    row["FCode1"] = "oskill";
    row["FParam1"] = "Amplify Damage";
    row["FMin1"] = 10;
    row["FMax1"] = 10;

    // 
    row["FCode2"] = "ass";
    row["FParam2"] = "";
    row["FMin2"] = 3;
    row["FMax2"] = 3;

  }

  // Aldur's Watchtower
  if (row["index"] === "Aldur's Watchtower") {

    // 
    row["PCode2A"] = "att%";
    row["PParam2a"] = "";
    row["PMin2a"] = 150;
    row["PMax2a"] = 150;

    // 
    row["PCode3A"] = "mag%";
    row["PParam3a"] = "";
    row["PMin3a"] = 50;
    row["PMax3a"] = 50;

    // 
    row["FCode1"] = "dru";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "mana";
    row["FParam2"] = "";
    row["FMin2"] = 150;
    row["FMax2"] = 150;

    // 
    row["FCode3"] = "manasteal";
    row["FParam3"] = "";
    row["FMin3"] = 10;
    row["FMax3"] = 10;

    // 
    row["FCode4"] = "dmg%";
    row["FParam4"] = "";
    row["FMin4"] = 350;
    row["FMax4"] = 350;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Hydra";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "state";
    row["FParam6"] = "fullsetgeneric";
    row["FMin6"] = 1;
    row["FMax6"] = 1;

  }

  // Immortal King
  if (row["index"] === "Immortal King") {

    // 
    row["PCode2A"] = "att";
    row["PParam2a"] = "";
    row["PMin2a"] = 400;
    row["PMax2a"] = 400;

    // 
    row["PCode3A"] = "str";
    row["PParam3a"] = "";
    row["PMin3a"] = 50;
    row["PMax3a"] = 50;

    // 
    row["FCode1"] = "bar";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "red-mag";
    row["FParam2"] = "";
    row["FMin2"] = 15;
    row["FMax2"] = 15;

    // 
    row["FCode3"] = "state";
    row["FParam3"] = "fullsetgeneric";
    row["FMin3"] = 1;
    row["FMax3"] = 1;

    // 
    row["FCode4"] = "att%";
    row["FParam4"] = "";
    row["FMin4"] = 100;
    row["FMax4"] = 100;

    // 
    row["FCode5"] = "red-dmg";
    row["FParam5"] = "";
    row["FMin5"] = 15;
    row["FMax5"] = 15;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Summon Grizzly";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

  }

  // Tal Rasha's Wrappings
  if (row["index"] === "Tal Rasha's Wrappings") {

    // 
    row["PCode2A"] = "regen";
    row["PParam2a"] = "";
    row["PMin2a"] = 30;
    row["PMax2a"] = 30;

    // 
    row["PCode3A"] = "mag%";
    row["PParam3a"] = "";
    row["PMin3a"] = 65;
    row["PMax3a"] = 65;

    // 
    row["FCode1"] = "sor";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "balance2";
    row["FParam2"] = "";
    row["FMin2"] = 25;
    row["FMax2"] = 25;

    // 
    row["FCode3"] = "ac/lvl";
    row["FParam3"] = "";
    row["FMin3"] = 25;
    row["FMax3"] = 25;

    // 
    row["FCode4"] = "state";
    row["FParam4"] = "fullsetgeneric";
    row["FMin4"] = 1;
    row["FMax4"] = 1;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Armageddon";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "ac-miss";
    row["FParam6"] = "";
    row["FMin6"] = 400;
    row["FMax6"] = 400;

  }

  // Griswold's Legacy
  if (row["index"] === "Griswold's Legacy") {

    // 
    row["PCode2A"] = "str";
    row["PParam2a"] = "";
    row["PMin2a"] = 25;
    row["PMax2a"] = 25;

    // 
    row["PCode3A"] = "dex";
    row["PParam3a"] = "";
    row["PMin3a"] = 25;
    row["PMax3a"] = 25;

    // 
    row["FCode1"] = "pal";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "oskill";
    row["FParam2"] = "Hurricane";
    row["FMin2"] = 20;
    row["FMax2"] = 20;

    // 
    row["FCode3"] = "att";
    row["FParam3"] = "";
    row["FMin3"] = 400;
    row["FMax3"] = 400;

    // 
    row["FCode4"] = "state";
    row["FParam4"] = "fullsetgeneric";
    row["FMin4"] = 1;
    row["FMax4"] = 1;

  }

  // Trang-Oul's Avatar
  if (row["index"] === "Trang-Oul's Avatar") {

    // 
    row["PCode2A"] = "regen-mana";
    row["PParam2a"] = "";
    row["PMin2a"] = 110;
    row["PMax2a"] = 110;

    // 
    row["PCode2B"] = "oskill";
    row["PParam2b"] = "Fire Ball";
    row["PMin2b"] = 20;
    row["PMax2b"] = 20;

    // 
    row["PCode3A"] = "regen-mana";
    row["PParam3a"] = "";
    row["PMin3a"] = 20;
    row["PMax3a"] = 20;

    // 
    row["PCode3B"] = "oskill";
    row["PParam3b"] = "Fire Wall";
    row["PMin3b"] = 20;
    row["PMax3b"] = 20;

    // 
    row["PCode4A"] = "regen-mana";
    row["PParam4a"] = "";
    row["PMin4a"] = 20;
    row["PMax4a"] = 20;

    // 
    row["PCode4B"] = "oskill";
    row["PParam4b"] = "Meteor";
    row["PMin4b"] = 20;
    row["PMax4b"] = 20;

    // 
    row["FCode1"] = "nec";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "ac/lvl";
    row["FParam2"] = "";
    row["FMin2"] = 25;
    row["FMax2"] = 25;

    // 
    row["FCode3"] = "state";
    row["FParam3"] = "monsterset";
    row["FMin3"] = 1;
    row["FMax3"] = 1;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Fire Mastery";
    row["FMin4"] = 17;
    row["FMax4"] = 17;

    // 
    row["FCode5"] = "mana";
    row["FParam5"] = "";
    row["FMin5"] = 100;
    row["FMax5"] = 100;

  }

  // M'avina's Battle Hymn
  if (row["index"] === "M'avina's Battle Hymn") {

    // 
    row["PCode2A"] = "str";
    row["PParam2a"] = "";
    row["PMin2a"] = 25;
    row["PMax2a"] = 25;

    // 
    row["PCode3A"] = "dex";
    row["PParam3a"] = "";
    row["PMin3a"] = 25;
    row["PMax3a"] = 25;

    // 
    row["FCode1"] = "ama";
    row["FParam1"] = "";
    row["FMin1"] = 3;
    row["FMax1"] = 3;

    // 
    row["FCode2"] = "ac/lvl";
    row["FParam2"] = "";
    row["FMin2"] = 25;
    row["FMax2"] = 25;

    // 
    row["FCode3"] = "att";
    row["FParam3"] = "";
    row["FMin3"] = 400;
    row["FMax3"] = 400;

    // 
    row["FCode4"] = "mag%";
    row["FParam4"] = "";
    row["FMin4"] = 100;
    row["FMax4"] = 100;

    // 
    row["FCode5"] = "state";
    row["FParam5"] = "fullsetgeneric";
    row["FMin5"] = 1;
    row["FMax5"] = 1;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Raise Skeleton";
    row["FMin5"] = 20;
    row["FMax5"] = 20;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Skeleton Mastery";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

  }

  // The Disciple
  if (row["index"] === "The Disciple") {

    // 
    row["PCode2A"] = "ac";
    row["PParam2a"] = "";
    row["PMin2a"] = 250;
    row["PMax2a"] = 250;

    // 
    row["PCode3A"] = "dmg-pois";
    row["PParam3a"] = "";
    row["PMin3a"] = 80;
    row["PMax3a"] = 160;

    // 
    row["FCode1"] = "str";
    row["FParam1"] = "";
    row["FMin1"] = 25;
    row["FMax1"] = 25;

    // 
    row["FCode2"] = "oskill";
    row["FParam2"] = "Concentration";
    row["FMin2"] = 14;
    row["FMax2"] = 14;

    // 
    row["FCode3"] = "mana";
    row["FParam3"] = "";
    row["FMin3"] = 100;
    row["FMax3"] = 100;

  }

  // Heaven's Brethren
  if (row["index"] === "Heaven's Brethren") {

    // 
    row["PCode2A"] = "lifesteal";
    row["PParam2a"] = "";
    row["PMin2a"] = 10;
    row["PMax2a"] = 10;

    // 
    row["PCode3A"] = "regen";
    row["PParam3a"] = "";
    row["PMin3a"] = 30;
    row["PMax3a"] = 30;

    // 
    row["FCode1"] = "nofreeze";
    row["FParam1"] = "";
    row["FMin1"] = 1;
    row["FMax1"] = 1;

    // 
    row["FCode2"] = "oskill";
    row["FParam2"] = "Tornado";
    row["FMin2"] = 20;
    row["FMax2"] = 20;

    // 
    row["FCode3"] = "light";
    row["FParam3"] = "";
    row["FMin3"] = 5;
    row["FMax3"] = 5;

  }

  // Orphan's Call
  if (row["index"] === "Orphan's Call") {

    // 
    row["PCode2A"] = "hp";
    row["PParam2a"] = "";
    row["PMin2a"] = 0;
    row["PMax2a"] = 0;

    // 
    row["PCode3A"] = "thorns";
    row["PParam3a"] = "";
    row["PMin3a"] = 100;
    row["PMax3a"] = 100;

    // 
    row["FCode1"] = "str";
    row["FParam1"] = "";
    row["FMin1"] = 25;
    row["FMax1"] = 25;

    // 
    row["FCode2"] = "dex";
    row["FParam2"] = "";
    row["FMin2"] = 25;
    row["FMax2"] = 25;

    // 
    row["FCode3"] = "ac/lvl";
    row["FParam3"] = "";
    row["FMin3"] = 25;
    row["FMax3"] = 25;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Fanaticism";
    row["FMin4"] = 14;
    row["FMax4"] = 14;

    // 
    row["FCode5"] = "res-all";
    row["FParam5"] = "";
    row["FMin5"] = 0;
    row["FMax5"] = 0;

  }

  // Hwanin's Majesty
  if (row["index"] === "Hwanin's Majesty") {

    // 
    row["PCode2A"] = "ac";
    row["PParam2a"] = "";
    row["PMin2a"] = 50;
    row["PMax2a"] = 50;

    // 
    row["FCode1"] = "move3";
    row["FParam1"] = "";
    row["FMin1"] = 30;
    row["FMax1"] = 30;

    // 
    row["FCode2"] = "oskill";
    row["FParam2"] = "Maul";
    row["FMin2"] = 20;
    row["FMax2"] = 20;

    // 
    row["FCode3"] = "oskill";
    row["FParam3"] = "Wearbear";
    row["FMin3"] = 4;
    row["FMax3"] = 4;

    // 
    row["FCode4"] = "lifesteal";
    row["FParam4"] = "";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Shape Shifting";
    row["FMin5"] = 4;
    row["FMax5"] = 4;

    // 
    row["FCode6"] = "res-all";
    row["FParam6"] = "";
    row["FMin6"] = 0;
    row["FMax6"] = 0;

    // 
    row["FCode7"] = "dmg%/lvl";
    row["FParam7"] = "";
    row["FMin7"] = 25;
    row["FMax7"] = 25;

  }

  // Sazabi's Grand Tribute
  if (row["index"] === "Sazabi's Grand Tribute") {

    // 
    row["PCode2A"] = "move3";
    row["PParam2a"] = "";
    row["PMin2a"] = 40;
    row["PMax2a"] = 40;

    // 
    row["PCode2B"] = "res-pois-len";
    row["PParam2b"] = "";
    row["PMin2b"] = 100;
    row["PMax2b"] = 100;

    // 
    row["FCode1"] = "lifesteal";
    row["FParam1"] = "";
    row["FMin1"] = 15;
    row["FMax1"] = 15;

    // 
    row["FCode2"] = "red-dmg%";
    row["FParam2"] = "";
    row["FMin2"] = 24;
    row["FMax2"] = 24;

    // 
    row["FCode3"] = "oskill";
    row["FParam3"] = "Fury";
    row["FMin3"] = 20;
    row["FMax3"] = 20;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Shape Shifting";
    row["FMin4"] = 4;
    row["FMax4"] = 4;

    // 
    row["FCode5"] = "oskill";
    row["FParam5"] = "Wearwolf";
    row["FMin5"] = 4;
    row["FMax5"] = 4;

    // 
    row["FCode6"] = "dmg%/lvl";
    row["FParam6"] = "";
    row["FMin6"] = 25;
    row["FMax6"] = 25;

  }

  // Bul-Kathos' Children
  if (row["index"] === "Bul-Kathos' Children") {

    // 
    row["FCode1"] = "att";
    row["FParam1"] = "";
    row["FMin1"] = 500;
    row["FMax1"] = 500;

    // 
    row["FCode2"] = "dmg-undead";
    row["FParam2"] = "";
    row["FMin2"] = 200;
    row["FMax2"] = 200;

    // 
    row["FCode3"] = "dmg-demon";
    row["FParam3"] = "";
    row["FMin3"] = 200;
    row["FMax3"] = 200;

    // 
    row["FCode4"] = "dmg-fire";
    row["FParam4"] = "";
    row["FMin4"] = 200;
    row["FMax4"] = 200;

    // 
    row["FCode5"] = "dmg%/lvl";
    row["FParam5"] = "";
    row["FMin5"] = 25;
    row["FMax5"] = 25;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Enchant";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

    // 
    row["FCode7"] = "lifesteal";
    row["FParam7"] = "";
    row["FMin7"] = 10;
    row["FMax7"] = 10;

    // 
    row["FCode8"] = "deadly";
    row["FParam8"] = "";
    row["FMin8"] = 50;
    row["FMax8"] = 50;

  }

  // Cow King's Leathers
  if (row["index"] === "Cow King's Leathers") {

    // 
    row["PCode2A"] = "res-pois";
    row["PParam2a"] = "";
    row["PMin2a"] = 40;
    row["PMax2a"] = 40;

    // 
    row["PCode2B"] = "ac";
    row["PParam2b"] = "";
    row["PMin2b"] = 500;
    row["PMax2b"] = 500;

    // 
    row["FCode1"] = "hp";
    row["FParam1"] = "";
    row["FMin1"] = 0;
    row["FMax1"] = 0;

    // 
    row["FCode2"] = "mag%";
    row["FParam2"] = "";
    row["FMin2"] = 100;
    row["FMax2"] = 100;

    // 
    row["FCode3"] = "gold%";
    row["FParam3"] = "";
    row["FMin3"] = 150;
    row["FMax3"] = 150;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Lightning Fury";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "str";
    row["FParam5"] = "";
    row["FMin5"] = 25;
    row["FMax5"] = 25;

    // 
    row["FCode6"] = "allskills";
    row["FParam6"] = "";
    row["FMin6"] = 0;
    row["FMax6"] = 0;

    // 
    row["FCode7"] = "allskills";
    row["FParam7"] = "";
    row["FMin7"] = 0;
    row["FMax7"] = 0;

    // 
    row["FCode8"] = "hp";
    row["FParam8"] = "";
    row["FMin8"] = 0;
    row["FMax8"] = 0;

  }

  // Naj's Ancient Set
  if (row["index"] === "Naj's Ancient Set") {

    // 
    row["PCode2A"] = "ac";
    row["PParam2a"] = 250;

    // 
    row["PCode2B"] = "mag%/lvl";
    row["PParam2b"] = 12;

    // 
    row["FCode1"] = "str";
    row["FParam1"] = "";
    row["FMin1"] = 25;
    row["FMax1"] = 25;

    // 
    row["FCode2"] = "dex";
    row["FParam2"] = "";
    row["FMin2"] = 25;
    row["FMax2"] = 25;

    // 
    row["FCode3"] = "mana";
    row["FParam3"] = "";
    row["FMin3"] = 100;
    row["FMax3"] = 100;

    // 
    row["FCode4"] = "regen";
    row["FParam4"] = "";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

    // 
    row["FCode5"] = "hp%";
    row["FParam5"] = "";
    row["FMin5"] = 0;
    row["FMax5"] = 0;

    // 
    row["FCode6"] = "oskill";
    row["FParam6"] = "Hydra";
    row["FMin6"] = 20;
    row["FMax6"] = 20;

    // 
    row["FCode7"] = "hp%";
    row["FParam7"] = "";
    row["FMin7"] = 0;
    row["FMax7"] = 0;

    // 
    row["FCode8"] = "hp";
    row["FParam8"] = "";
    row["FMin8"] = 0;
    row["FMax8"] = 0;

  }

  // McAuley's Folly
  if (row["index"] === "McAuley's Folly") {

    // 
    row["PCode2A"] = "ac";
    row["PParam2a"] = "";
    row["PMin2a"] = 250;
    row["PMax2a"] = 250;

    // 
    row["PCode3A"] = "att";
    row["PParam3a"] = "";
    row["PMin3a"] = 400;
    row["PMax3a"] = 400;

    // 
    row["FCode1"] = "mana";
    row["FParam1"] = "";
    row["FMin1"] = 100;
    row["FMax1"] = 100;

    // 
    row["FCode2"] = "lifesteal";
    row["FParam2"] = "";
    row["FMin2"] = 10;
    row["FMax2"] = 10;

    // 
    row["FCode3"] = "mag%";
    row["FParam3"] = "";
    row["FMin3"] = 50;
    row["FMax3"] = 50;

    // 
    row["FCode4"] = "oskill";
    row["FParam4"] = "Poison Nova";
    row["FMin4"] = 20;
    row["FMax4"] = 20;

  }

});

D2RMM.writeTsv(setsFilename, sets); 