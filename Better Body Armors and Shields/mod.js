// automagic.txt
const automagicFilename = 'global\\excel\\automagic.txt';
const automagic = D2RMM.readTsv(automagicFilename);

let automagicMaxGroupID = Math.max(...automagic.rows.map((row) => row['group']));

const mediumArmorDamageReductionGroupID = (automagicMaxGroupID = automagicMaxGroupID + 1);
const heavyArmorDamageReductionGroupID = (automagicMaxGroupID = automagicMaxGroupID + 1);

const mediumArmorDR = config.medium_armor_dr;
const heavyArmorDR = config.heavy_armor_dr;
const applyToShields = config.shields;

// Add Medium Armor DR
automagic.rows.push({
  'Name': "Medium Armor DR",
  'version': 100,
  'spawnable': 1,
  'rare': "",
  'level': 1,
  'maxlevel': "",
  'levelreq': 1,
  'classspecific': "",
  'class': "",
  'classlevelreq': "",
  'frequency': 1,
  'group': mediumArmorDamageReductionGroupID,
  'mod1code': "red-dmg%",
  'mod1param': "",
  'mod1min': mediumArmorDR,
  'mod1max': mediumArmorDR,
  'mod2code': "",
  'mod2param': "",
  'mod2min': "",
  'mod2max': "",
  'mod3code': "",
  'mod3param': "",
  'mod3min': "",
  'mod3max': "",
  'transformcolor': "",
  'itype1': "tors",
  'itype2': "shie",
  'itype3': "",
  'itype4': "",
  'itype5': "",
  'itype6': "",
  'itype7': "",
  'etype1': "",
  'etype2': "",
  'etype3': "",
  'etype4': "",
  'etype5': "",
  'multiply': 0,
  'add\r': 0
});

// Add Heavy Armor DR
automagic.rows.push({
  'Name': "Heavy Armor DR",
  'version': 100,
  'spawnable': 1,
  'rare': "",
  'level': 1,
  'maxlevel': "",
  'levelreq': 1,
  'classspecific': "",
  'class': "",
  'classlevelreq': "",
  'frequency': 1,
  'group': heavyArmorDamageReductionGroupID,
  'mod1code': "red-dmg%",
  'mod1param': "",
  'mod1min': heavyArmorDR,
  'mod1max': heavyArmorDR,
  'mod2code': "",
  'mod2param': "",
  'mod2min': "",
  'mod2max': "",
  'mod3code': "",
  'mod3param': "",
  'mod3min': "",
  'mod3max': "",
  'transformcolor': "",
  'itype1': "tors",
  'itype2': "shie",
  'itype3': "",
  'itype4': "",
  'itype5': "",
  'itype6': "",
  'itype7': "",
  'etype1': "",
  'etype2': "",
  'etype3': "",
  'etype4': "",
  'etype5': "",
  'multiply': 0,
  'add\r': 0
});

D2RMM.writeTsv(automagicFilename, automagic);


// armor.txt
const armorFilename = 'global\\excel\\armor.txt';
const armor = D2RMM.readTsv(armorFilename);

armor.rows.forEach((row) => {

  if (row["type"] === "tors" && row["speed"] == 5) {
    row["auto prefix"] = mediumArmorDamageReductionGroupID;
  }

  if (row["type"] === "tors" && row["speed"] == 10) {
    row["auto prefix"] = heavyArmorDamageReductionGroupID;
  }

  if (applyToShields) {
    if (row["type"] === "shie" && row["speed"] == 5) {
      row["auto prefix"] = mediumArmorDamageReductionGroupID;
    }

    if (row["type"] === "shie" && row["speed"] == 10) {
      row["auto prefix"] = heavyArmorDamageReductionGroupID;
    }
  }

});

D2RMM.writeTsv(armorFilename, armor);