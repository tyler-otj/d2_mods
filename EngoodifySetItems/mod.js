// setitems.txt
const setitemsFilename = 'global\\excel\\setitems.txt';
const setitems = D2RMM.readTsv(setitemsFilename);


setitems.rows.forEach((row) => {

  // Dark Adherent
  if (row["index"] == "Spiritual Custodian") {

    //Change to Quilted Armor and set to 1
    row["item"] = "qui";
    row["ItemName"] = "Quilted Armor";
    row["lvl"] = 1;
    row["lvl req"] = 1;

    // +305-415 Defense >>> Null
    row["prop1"] = "";
    row["par1"] = "";
    row["min1"] = "";
    row["max1"] = "";

    // Fire Resist +50% >>> Light Resist +50%
    row["prop2"] = "res-ltng";
    row["par2"] = "";
    row["min2"] = 50;
    row["max2"] = 50;

    // 25% Chance to Cast Level 3 Nova When Struck >>> Null
    row["prop3"] = "";
    row["par3"] = "";
    row["min3"] = "";
    row["max3"] = "";

  }

  // Laying of Hands
  if (row["index"] == "Laying of Hands") {

    //Change to Leather Gloves and set to 1
    row["item"] = "lgl";
    row["ItemName"] = "Leather Gloves";
    row["lvl"] = 1;
    row["lvl req"] = 1;

    // +25 Defense >>> Null
    row["prop1"] = "";
    row["par1"] = "";
    row["min1"] = "";
    row["max1"] = "";

    // +350 DMG to Deamons >>> Null
    row["prop4"] = "";
    row["par4"] = "";
    row["min4"] = "";
    row["max4"] = "";
    
    // 10% Chance to Cast Level 3 Holy Bolt on Striking >>> Null
    row["prop5"] = "";
    row["par5"] = "";
    row["min5"] = "";
    row["max5"] = "";

  }

  // Credendum
  if (row["index"] == "Credendum") {

    //Change to Belt and set to 1
    row["item"] = "mbl";
    row["ItemName"] = "Belt";
    row["lvl"] = 1;
    row["lvl req"] = 1;

    // +50 Defense >>> Null
    row["prop1"] = "";
    row["par1"] = "";
    row["min1"] = "";
    row["max1"] = "";

  }

  // Rite of Passage
  if (row["index"] == "Rite of Passage") {

    //Change to Boots and set to 1
    row["item"] = "lbt";
    row["ItemName"] = "Boots";
    row["lvl"] = 1;
    row["lvl req"] = 1;

    // +25 Defense >>> Null
    row["prop1"] = "";
    row["par1"] = "";
    row["min1"] = "";
    row["max1"] = "";

  }

  // Telling of Beads
  if (row["index"] == "Telling of Beads") {

    //set to 1
    row["lvl"] = 1;
    row["lvl req"] = 1;

  }

});

D2RMM.writeTsv(setitemsFilename, setitems);