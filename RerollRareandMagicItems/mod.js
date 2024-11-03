let cubemainFilename = "global\\excel\\cubemain.txt";
let cubemain = D2RMM.readTsv(cubemainFilename);

  cubemain.rows.push({
    description: "1 Rare (Any) + 1 Perfect Gem (Any)",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,rar",
    "input 2": "gem4",
    output: "usetype,rar",
    ilvl: 115,
    "*eol/r": 0,
  });

  cubemain.rows.push({
    description: "1 Magic (Any) + 1 Perfect Gem (Any)",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": "any,mag",
    "input 2": "gem4",
    output: "usetype,mag",
    ilvl: 115,
    "*eol/r": 0,
  });

D2RMM.writeTsv(cubemainFilename, cubemain);