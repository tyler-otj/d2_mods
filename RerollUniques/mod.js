const recipeFilename = 'global\\excel\\cubemain.txt';
const recipeFile = D2RMM.readTsv(recipeFilename);

const numInputs  = getNumInputs();
const inputArray = readInputs();

const input2 = inputArray[0];
const input3 = inputArray[1];
const input4 = inputArray[2];
const input5 = inputArray[3];
const input6 = inputArray[4];

recipeFile.rows.push({
  'description': "Reroll Unique Weapon No Socket",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"weap,uni,nos"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});

recipeFile.rows.push({
  'description': "Reroll Unique Armor No Socket",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"armo,uni,nos"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});

recipeFile.rows.push({
  'description': "Reroll Unique Jewel",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"jew,uni"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});


if (config.socket) {
    recipeFile.rows.push({
      'description': "Reroll Unique Weapon With Socket",
      'enabled': 1,
      'firstLadderSeason': "",
      'lastLadderSeason': "",
      'min diff': "",
      'version': 100,
      'op': "",
      'param': "",
      'value': "",
      'class': "",
      'numinputs': numInputs,
      'input 1': '"weap,uni,sock=1"',
      'input 2': input2,
      'input 3': input3,
      'input 4': input4,
      'input 5': input5,
      'input 6': input6,
      'input 7': "",
      'output': '"useitem,reg,sock=1"',
      'lvl': 99,
      '*eol': 0
    });
    
    recipeFile.rows.push({
      'description': "Reroll Unique Armor With Socket",
      'enabled': 1,
      'firstLadderSeason': "",
      'lastLadderSeason': "",
      'min diff': "",
      'version': 100,
      'op': "",
      'param': "",
      'value': "",
      'class': "",
      'numinputs': numInputs,
      'input 1': '"armo,uni,sock=1"',
      'input 2': input2,
      'input 3': input3,
      'input 4': input4,
      'input 5': input5,
      'input 6': input6,
      'input 7': "",
      'output': '"useitem,reg,sock=1"',
      'lvl': 99,
      '*eol': 0
    });
}


recipeFile.rows.push({
  'description': "Reroll Unique Ring",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"rin,uni"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});

recipeFile.rows.push({
  'description': "Reroll Unique Amulet",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"amu,uni"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});

recipeFile.rows.push({
  'description': "Reroll Unique Charm",
  'enabled': 1,
  'firstLadderSeason': "",
  'lastLadderSeason': "",
  'min diff': "",
  'version': 100,
  'op': "",
  'param': "",
  'value': "",
  'class': "",
  'numinputs': numInputs,
  'input 1': '"char,uni"',
  'input 2': input2,
  'input 3': input3,
  'input 4': input4,
  'input 5': input5,
  'input 6': input6,
  'input 7': "",
  'output': '"useitem,reg"',
  'lvl': 99,
  '*eol': 0
});


D2RMM.writeTsv(recipeFilename, recipeFile);


const uniquesFilename = 'global\\excel\\uniqueitems.txt';
const uniquesFile = D2RMM.readTsv(uniquesFilename);

uniquesFile.rows.forEach((unique) => {
    if (config.nolimit) {
        unique["nolimit"] = 1;
    }
    
    if (config.uber) {
        if (unique["lvl"] > 99) {
            unique["lvl"] = unique["lvl req"];
        }
    }
});

D2RMM.writeTsv(uniquesFilename, uniquesFile);


function getNumInputs() {
    var numInputs = 1;
    
    if (config["input2"] != "none1") {
        
        if (config["input2"] == "gem1") {
            numInputs += 1;
        }
        else if (config["input2"] == "gem3") {
            numInputs += 3;
        }
        else if (config["input2"] == "skull3") {
            numInputs += 3;
        }
        else if (config["input2"] == "skull6") {
            numInputs += 6;
        }
    }
    
    if (config["input3"] != "none2") {
        numInputs += 1;
    }
    
    if (config["input4"] != "none3") {
        numInputs += 1;
    }
    
    if (config["input5"] != "none4") {
        numInputs += 1;
    }
    
    if (config["input6"] != "none5") {
        numInputs += 1;
    }
    
    return numInputs;
}


function readInputs() {
    
    if (config["input2"] == "none1" && config["input3"] == "none2" && config["input4"] == "none3" &&
        config["input5"] == "none4" && config["input6"] == "none5") {
            
        D2RMM.error("Must have at least 1 item selected in Recipe settings");
    }
    
    var inputArray = ["", "", "", "", ""];
    var idx = 0;
    
    if (config["input2"] != "none1") {
        
        if (config["input2"] == "gem1") {
            inputArray[idx] = '"gem4,qty=1"';
        }
        else if (config["input2"] == "gem3") {
            inputArray[idx] = '"gem4,qty=3"';
        }
        else if (config["input2"] == "skull3") {
            inputArray[idx] = '"skz,qty=3"';
        }
        else if (config["input2"] == "skull6") {
            inputArray[idx] = '"skz,qty=6"';
        }
        
        idx += 1;
    }
    
    if (config["input3"] != "none2") {
        inputArray[idx] = config["input3"];
        idx += 1;
    }
    
    if (config["input4"] != "none3") {
        inputArray[idx] = config["input4"];
        idx += 1;
    }
    
    if (config["input5"] != "none4") {
        inputArray[idx] = config["input5"];
        idx += 1;
    }
    
    if (config["input6"] != "none5") {
        inputArray[idx] = config["input6"];
        idx += 1;
    }

    return inputArray;
}
