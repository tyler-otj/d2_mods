
if (config.torch) {
    const uniquesFilename = "global\\excel\\uniqueitems.txt";
    const uniquesFile     = D2RMM.readTsv(uniquesFilename);
    
    uniquesFile.rows.forEach((unique) => {
        if (unique["index"] == "Hellfire Torch") {
            unique["prop1"] = "allskills";
            unique["min1"]  = 3;
            unique["max1"]  = 3; 
        }
    });
    
    D2RMM.writeTsv(uniquesFilename, uniquesFile);
}


if (config.anni) {
    const miscFilename = "global\\excel\\misc.txt";
    const miscFile     = D2RMM.readTsv(miscFilename);
    
    miscFile.rows.push({
      'name': "Diablo's Soulstone",
      'compactsave': 1,
      'version': 100,
      'level': 0,
      'ShowLevel': 0,
      'levelreq': 0,
      'rarity': 999,
      'spawnable': 0,
      'speed': 0,
      'nodurability': 1,
      'cost': 2000,
      'code': 'dss',
      'alternategfx': 'scr',
      'namestr': 'dss',
      'component': 16,
      'invwidth': 1,
      'invheight': 1,
      'hasinv': 0,
      'gemsockets': 0,
      'gemapplytype': 0,
      'flippyfile': 'flpmss',
      'invfile': 'invmss',
      'Transmogrify': 0,
      'TMogType': 'xxx',
      'useable': 0,
      'type': 'key',
      'dropsound': 'item_gem',
      'dropsfxframe': 12,
      'usesound': 'item_gem',
      'unique': 1,
      'transparent': 0,
      'transtbl': 5,
      'lightradius': 0,
      'belt': 0,
      'autobelt': 0,
      'stackable': 0,
      'minstack': 0,
      'maxstack': 0,
      'spawnstack': 0,
      'missiletype': 0,
      'spellicon': -1,
      'pSpell': -1,
      'durwarning': 0,
      'qntwarning': 0,
      'gemoffset': 0,
      'BetterGem': 'non',
      'bitfield1': 0,
      'CharsiMagicLvl': 255,
      'GheedMagicLvl': 255,
      'AkaraMagicLvl': 255,
      'FaraMagicLvl': 255,
      'LysanderMagicLvl': 255,
      'DrognanMagicLvl': 255,
      'HratliMagicLvl': 255,
      'AlkorMagicLvl': 255,
      'OrmusMagicLvl': 255,
      'ElzixMagicLvl': 255,
      'AshearaMagicLvl': 255,
      'CainMagicLvl': 255,
      'HalbuMagicLvl': 255,
      'MalahMagicLvl': 255,
      'LarzukMagicLvl': 255,
      'AnyaMagicLvl': 255,
      'JamellaMagicLvl': 255,
      'Transform': 0,
      'InvTrans': 0,
      'SkipName': 0,
      'NightmareUpgrade': 'xxx',
      'HellUpgrade': 'xxx',
      'diablocloneweight\r': 1
    });
    
    D2RMM.writeTsv(miscFilename, miscFile);
    
    
    const itemsFilename = "hd\\items\\items.json";
    const itemsFile     = D2RMM.readJson(itemsFilename);
    
    itemsFile.push({ "dss": { "asset": "quest/mephisto_soul_stone" } });
    D2RMM.writeJson(itemsFilename, itemsFile);
    
    
    const cubemainFilename = "global\\excel\\cubemain.txt";
    const cubemainFile     = D2RMM.readTsv(cubemainFilename);
    
    cubemainFile.rows.push({
      "description": "1 Diablo's Horn + 1 Baal's Eye + 1 Mephisto's Brain + 1 Standard of Heroes -> Diablo's Soulstone",
      "enabled": 1,
      "version": 100,
      "numinputs": 4,
      "input 1": "dhn",
      "input 2": "bey",
      "input 3": "mbr",
      "input 4": "std",
      "output": "dss",
      "*eol": 0,
    });
    
    D2RMM.writeTsv(cubemainFilename, cubemainFile);
    
    
    const itemNamesFilename = "local\\lng\\strings\\item-names.json";
    const itemNamesFile = D2RMM.readJson(itemNamesFilename);
    
    itemNamesFile.push(
      {
        "id": D2RMM.getNextStringID(),
        "Key": "dss",
        "enUS": "Diablo's Soulstone",
        "zhTW": "Diablo's Soulstone",
        "deDE": "Diablo's Soulstone",
        "esES": "Diablo's Soulstone",
        "frFR": "Diablo's Soulstone",
        "itIT": "Diablo's Soulstone",
        "koKR": "Diablo's Soulstone",
        "plPL": "Diablo's Soulstone",
        "esMX": "Diablo's Soulstone",
        "jaJP": "Diablo's Soulstone",
        "ptBR": "Diablo's Soulstone",
        "ruRU": "Diablo's Soulstone",
        "zhCN": "Diablo's Soulstone"
      }
    );
    
    D2RMM.writeJson(itemNamesFilename, itemNamesFile);
}
