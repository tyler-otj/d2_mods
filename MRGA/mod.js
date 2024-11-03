// Google Docs Changelog
// https://docs.google.com/document/d/1DDkYB7L4mpplHFZEwC6H4hxUwJpuMOWS6Dg3JURI1Ro/edit?usp=sharing

const prefixFilename = 'global\\excel\\magicprefix.txt';
const prefixFile = D2RMM.readTsv(prefixFilename);

const suffixFilename = 'global\\excel\\magicsuffix.txt';
const suffixFile = D2RMM.readTsv(suffixFilename);

prefixFile.rows.forEach((prefix) => {

    // Remove 'light radius' from armors
    if (prefix['mod1code'] == 'light' && prefix['itype1'] == 'armo') {
        prefix = shiftItemTypes(prefix);
    }
    
    // Remove 'hit causes monsters to flee' from all weapons except missle weapons
    else if (prefix['mod1code'] == 'howl') {
        prefix = replaceItemType(prefix, 'weap', 'miss');
    }
    
    // Remove resistances from all weapons except scepters, wands, orbs, staves
    else if (prefix['mod1code'] == 'res-cold' || prefix['mod1code'] == 'res-fire' || prefix['mod1code'] == 'res-ltng' || prefix['mod1code'] == 'res-pois') {
        prefix = replaceItemType(prefix, 'weap', 'rod');
    }
    
    // Set max level for lower tier '% Enhanced Damage' modifiers so they no longer appear on higher level weapons
    else if (prefix['mod1code'] == 'dmg%') {
        if (prefix['Name'] == 'Jagged') {
            pushMod(prefixFile, prefix, 'circ', '', '', '', '', ''); // Create a copy of this mod without 'weap' itype
            prefix['maxlevel'] = 15;
        }
        
        else if (prefix['Name'] == 'Deadly') {
            pushMod(prefixFile, prefix, 'circ', '', '', '', '', '');
            prefix['maxlevel'] = 20;
        }
        
        else if (prefix['Name'] == 'Vicious') {
            prefix['maxlevel'] = 25;
        }
        
        else if (prefix['Name'] == 'Brutal') {
            prefix['maxlevel'] = 30;
        }
        
        else if (prefix['Name'] == 'Massive') {
            prefix['maxlevel'] = 35;
        }
    }
    
    // Set max level for lower tier 'Attack Rating / % Enhanced Damage' modifiers so they no longer appear on higher level weapons
    else if (prefix['mod2code'] == 'dmg%') {
        if (prefix['Name'] == 'Sharp') {
            prefix['maxlevel'] = 20;
        }
        
        else if (prefix['Name'] == 'Fine') {
            prefix['maxlevel'] = 25;
        }
        
        else if (prefix['Name'] == "Warrior's") {
            prefix['maxlevel'] = 30;
        }
        
        else if (prefix['Name'] == "Soldier's") {
            prefix['maxlevel'] = 35;
        }
        
        else if (prefix['Name'] == "Knight's") {
            prefix['maxlevel'] = 40;
            prefix['itype2'] = 'tors';
        }
        
        // Add Attack Rating & Enhanced Damage mod to Body Armors
        else if (prefix['Name'] == "Lord's" || prefix['Name'] == "King's") {
            prefix['itype2'] = 'tors';
        }
    }
    
    // Allow all resistance mod to appear on body armors, allow up to +30 all resistance to appear on rare shields and body armors
    else if (prefix['itype1'] == 'shld') {
        if (prefix['Name'] == 'Shimmering' || prefix['Name'] == 'Rainbow' || prefix['Name'] == 'Scintillating' || prefix['Name'] == 'Prismatic' || prefix['Name'] == 'Chromatic') {
            prefix['itype2'] = 'tors';
            
            if (prefix['Name'] == 'Chromatic') {
                prefix['rare'] = 1;
            }
        }
    }
    
    // Remove + to shadow disciplines and + to masteries skills from standard helmets
    else if (prefix['mod1code'] == 'skilltab' && prefix['itype3'] == 'helm') {
        if (prefix['itype4'] == 'circ') {
            prefix['itype3'] = 'circ';
            prefix['itype4'] = '';
        }
        
        else if (prefix['itype4'] == '') {
            prefix['itype3'] = '';
        }
        
    }
    
    // Set max level for lower tier 'Attack Rating' modifiers so they no longer appear on higher level weapons
    else if (prefix['mod1code'] == 'att' && prefix['itype1'] == 'weap') {
        if (prefix['Name'] == 'Bronze') {
            pushMod(prefixFile, prefix, 'circ', 'ring', 'amul', '', '', ''); // Create a copy of this mod without 'weap' itype
            prefix['maxlevel'] = 15;
        }
        
        else if (prefix['Name'] == 'Iron') {
            pushMod(prefixFile, prefix, 'circ', 'ring', '', '', '', '');
            prefix['maxlevel'] = 20;
        }
        
        else if (prefix['Name'] == "Steel") {
            pushMod(prefixFile, prefix, 'circ', 'ring', '', '', '', '');
            prefix['maxlevel'] = 25;
        }
        
        else if (prefix['Name'] == "Silver") {
            pushMod(prefixFile, prefix, 'circ', 'ring', '', '', '', '');
            prefix['maxlevel'] = 30;
        }
        
        else if (prefix['Name'] == "Gold") {
            pushMod(prefixFile, prefix, 'circ', 'ring', '', '', '', '');
            prefix['maxlevel'] = 35;
        }
    }
    
    // Set max level for lower tier 'Attack Rating & Damage to Demons' modifiers so they no longer appear on higher level weapons
    else if (prefix['mod1code'] == 'att-demon' && prefix['itype1'] == 'weap') {
        if (prefix['Name'] == 'Assamic') {
            pushMod(prefixFile, prefix, 'circ', '', '', '', '', ''); // Create a copy of this mod without 'weap' itype
            prefix['maxlevel'] = 15;
        }
        
        else if (prefix['Name'] == 'Arcadian') {
            pushMod(prefixFile, prefix, 'circ', '', '', '', '', '');
            prefix['maxlevel'] = 30;
        }
        
    }
    
    // Set max level for lower tier 'Attack Rating & Damage to Undead' modifiers so they no longer appear on higher level weapons
    else if (prefix['mod1code'] == 'att-undead' && prefix['itype1'] == 'weap') {
        if (prefix['Name'] == 'Consecrated') {
            prefix['maxlevel'] = 30;
        }
        
    }
    
    // Set max level for lower tier 'cold, fire, light damage' modifiers so they no longer appear on higher level weapons, remove elemental damage from wands & orbs
    else if ((prefix['mod1code'] == 'cold-len' || prefix['mod1code'] == 'fire-min' || prefix['mod1code'] == 'ltng-min') && prefix['itype1'] == 'weap') {
        if (prefix['level'] == 25) {
            pushMod(prefixFile, prefix, 'circ', '', '', '', '', '');
            prefix['maxlevel'] = 30;     
        }
        
        else if (prefix['level'] == 34 || prefix['level'] == 35) {
            prefix['maxlevel'] = 40;
        }
        
        prefix['etype1'] = 'wand';
        prefix['etype2'] = 'orb';
    }
    
    // Remove poison damage from wands & orbs
    else if (prefix['mod1code'] == 'dmg-pois' && prefix['itype1'] == 'weap' && prefix['etype1'] == '') {       
        prefix['etype1'] = 'wand';
        prefix['etype2'] = 'orb';
    }

});

// Add +1 to all skills mod for body armor, shields, and helmets, excluding circlets and necro heads
// Share group 111 with 'attack rating & enhanced damage' so body armor can't get both mods together
prefixFile.rows.push({
  'Name': "Skillful",
  'version': 100,
  'spawnable': 1,
  'rare': 1,
  'level': 38,
  'maxlevel': "",
  'levelreq': 30,
  'classspecific': "",
  'class': "",
  'classlevelreq': "",
  'frequency': 5,
  'group': 111,
  'mod1code': "allskills",
  'mod1param': "",
  'mod1min': 1,
  'mod1max': 1,
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
  'itype2': "shld",
  'itype3': "helm",
  'itype4': "",
  'itype5': "",
  'itype6': "",
  'itype7': "",
  'etype1': "circ",
  'etype2': "head",
  'etype3': "",
  'etype4': "",
  'etype5': "",
  'multiply': 0,
  'add\r': 0
});

D2RMM.writeTsv(prefixFilename, prefixFile);


suffixFile.rows.forEach((suffix) => {

    // Remove 'light radius' from armor and missle weapons
    if (suffix['mod1code'] == 'light' && suffix['itype1'] != 'ring') {
        suffix = setItemTypes(suffix, 'rod', 'ring', 'amul', '', '', '', '');
    }
    
    // Remove 'attackers takes damage' from armor beyond lv. 13, excluding circlets
    else if (suffix['mod1code'] == 'thorns' && (suffix['itype3'] == 'circ' || suffix['itype4'] == 'circ')) {
        suffix = setItemTypes(suffix, 'circ', '', '', '', '', '', '');
    }
    
    // Remove knockback from melee weapons
    else if (suffix['mod1code'] == 'knock' && suffix['itype1'] == 'mele') {
        suffix['frequency'] = 0;
    }
    
    // Set max level for 10% IAS to appear on weapons
    else if (suffix['mod1code'] == 'swing1' && suffix['itype1'] == 'weap') {
        suffix['maxlevel'] = 20;
    }
    
    // Allow 10% & 20% faster cast rate on body armors and shields, allow scepters to get 20% faster cast rate
    else if (suffix['mod1code'] == 'cast1' || suffix['mod1code'] == 'cast3') {
        suffix = appendItemTypes(suffix, 'tors', 'shld');
        
        if (suffix['etype1'] == 'scep') {
            suffix['etype1'] = '';
        }
    }
    
    // Remove skill charges from melee weapons and missle weapons
    else if (suffix['mod1code'] == 'charged' && (suffix['itype1'] == 'miss' || suffix['itype1'] == 'spea' || suffix['itype1'] == 'amaz' || suffix['itype1'] == 'scep' ||
                                                 suffix['itype1'] == 'axe'  || suffix['itype1'] == 'pole' || suffix['itype1'] == 'mele' || suffix['itype1'] == 'blun' ||
                                                 suffix['itype1'] == 'club' || suffix['itype1'] == 'mace')) {
        suffix['frequency'] = 0;
    }
    
    // Remove swords from this skill charge
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'swor' && suffix['itype2'] == 'ring' && suffix['itype3'] == 'circ') {
        suffix = shiftItemTypes(suffix);
    }
    
    // Remove hammers/maces/scepters from this skill charge
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'hamm' && suffix['itype4'] == 'ring' && suffix['itype5'] == 'circ') {
        suffix = setItemTypes(suffix, 'ring', 'circ', '', '', '', '', '');
    }
    
    // Remove skill charges for swords and hammers that weren't covered by previous else if checks
    else if (suffix['mod1code'] == 'charged' && ((suffix['itype1'] == 'swor' && suffix['itype2'] == 'axe')  || (suffix['itype1'] == 'swor' && suffix['itype2'] == '') ||
                                                 (suffix['itype1'] == 'hamm' && suffix['itype2'] == 'club') || (suffix['itype1'] == 'hamm' && suffix['itype2'] == ''))) {
        suffix['frequency'] = 0;
    }
    
    // Remove amazon weapons from this skill charge
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'amul' && suffix['itype2'] == 'amaz' && suffix['itype3'] == 'circ') {
        suffix = setItemTypes(suffix, 'amul', 'circ', '', '', '', '', '');
    }
    
    // Remove skill charges for knives
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'knif' && (suffix['itype2'] == '' || suffix['itype2'] == 'club')) {
        suffix['frequency'] = 0;
    }
    
    // Remove skill charges for knives
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'knif' && (suffix['itype2'] == 'amul' || suffix['itype2'] == 'tors' || suffix['itype2'] == 'head')) {
        suffix = shiftItemTypes(suffix);
    }
    
    // Remove skill charges for knives
    else if (suffix['mod1code'] == 'charged' && suffix['itype1'] == 'wand' && suffix['itype2'] == 'knif') {
        suffix = setItemTypes(suffix, 'wand', 'head', '', '', '', '', '');
    }
    
    // Remove lower tier max-dmg from weapons at higher levels
    else if (suffix['mod1code'] == 'dmg-max' && suffix['itype1'] == 'weap') {
        if (suffix['Name'] == 'of Craftsmanship') {
            pushMod(suffixFile, suffix, 'amul', 'ring', '', '', '', ''); // Create a copy of this mod without 'weap' itype
            suffix['maxlevel'] = 10;
        }
        
        else if (suffix['Name'] == 'of Quality') {
            suffix['maxlevel'] = 20;
        }
        
        else if (suffix['Name'] == 'of Maiming') {
            suffix['maxlevel'] = 30;
        }
        
        else if (suffix['Name'] == 'of Slaying') {
            suffix['maxlevel'] = 40;
        }
        
    }
    
    // Remove lower tier min-dmg from weapons at higher levels
    else if (suffix['mod1code'] == 'dmg-min' && suffix['itype1'] == 'weap') {
        if (suffix['Name'] == 'of Worth') {
            suffix['maxlevel'] = 10;
        }
        
        else if (suffix['Name'] == 'of Measure') {
            suffix['maxlevel'] = 25;
        }
        
        else if (suffix['Name'] == 'of Excellence') {
            suffix['maxlevel'] = 40;
        }
        
        
    }
    
    // Remove lower tier cold, fire, light damage from weapons at higher levels
    else if ((suffix['mod1code'] == 'cold-min' || suffix['mod1code'] == 'fire-min' || suffix['mod1code'] == 'ltng-min') && suffix['itype1'] == 'weap' && suffix['itype2'] == '') {
        if (suffix['level'] == 4) {
            suffix['maxlevel'] = 10;
        }
        
        else if (suffix['level'] == 13 || suffix['level'] == 15) {
            suffix['maxlevel'] = 25;
        }
        
        else if (suffix['level'] == 27 || suffix['level'] == 25) {
            suffix['maxlevel'] = 40;
        }    
    }
    
    // Allow missle weapons to get the highest cold, fire, light damage rolls, like melee weapons, since we just removed all of the possible rolls in the above else if after lv 40
    else if ((suffix['mod1code'] == 'cold-min' || suffix['mod1code'] == 'fire-min' || suffix['mod1code'] == 'ltng-min') && suffix['itype1'] == 'mele' && suffix['itype2'] == '') {
         suffix['itype2'] = 'miss';
    }

});

let suffixMaxGroup = Math.max(...suffixFile.rows.map((row) => row['group']));
const dmgRedGroup = suffixMaxGroup + 1;

// Add 5-10% physical damage reduction mod for body armor, shields, and helmets, excluding circlets
suffixFile.rows.push({
  'Name': "of Hardening",
  'version': 100,
  'spawnable': 1,
  'rare': 1,
  'level': 38,
  'maxlevel': "",
  'levelreq': 30,
  'classspecific': "",
  'class': "",
  'classlevelreq': "",
  'frequency': 6,
  'group': dmgRedGroup,
  'mod1code': "red-dmg%",
  'mod1param': "",
  'mod1min': 5,
  'mod1max': 10,
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
  'itype2': "shld",
  'itype3': "helm",
  'itype4': "",
  'itype5': "",
  'itype6': "",
  'itype7': "",
  'etype1': "circ",
  'etype2': "",
  'etype3': "",
  'etype4': "",
  'etype5': "",
  'multiply': 0,
  'add\r': 0
});

D2RMM.writeTsv(suffixFilename, suffixFile);


const recipeFilename = 'global\\excel\\cubemain.txt';
const recipeFile = D2RMM.readTsv(recipeFilename);

recipeFile.rows.forEach((recipe) => {
    
    // Replace SOJ with jewel for socketing rare item recipe
    if (recipe['description'] == '3 Perfect Skull + 1 Rare Item + 1 Stone of Jordan -> Add 1 Socket to Rare Item') {
        recipe['description'] =  '3 Perfect Skull + 1 Rare Item + 1 Jewel -> Add 1 Socket to Rare Item';
        recipe['input 3'] = 'jew';
    }
});

D2RMM.writeTsv(recipeFilename, recipeFile);


// Shift all item types (itype1-7) to the left
function shiftItemTypes(mod) {
    
    for (let i = 1; i <= 6; i++) {
        const itemType = 'itype' + i;
        const nextItemType = 'itype' + (i + 1);
        mod[itemType] = mod[nextItemType];
    }
    
    mod['itype7'] = '';
    
    return mod;
}


function setItemTypes(mod, type1, type2, type3, type4, type5, type6, type7) {
    
    mod['itype1'] = type1;
    mod['itype2'] = type2;
    mod['itype3'] = type3;
    mod['itype4'] = type4;
    mod['itype5'] = type5;
    mod['itype6'] = type6;
    mod['itype7'] = type7;
    
    return mod;
}


function replaceItemType(mod, currentType, newType) {
    
    for (let i = 1; i <= 7; i++) {
        const itemType = 'itype' + i;
        
        if (mod[itemType] == currentType) {
            mod[itemType] = newType;
        }
    }
    
    return mod;
}


// Append two item types to the next two available spots
function appendItemTypes(mod, type1, type2) {
    var appendCount = 0;
    
    for (let i = 1; i <= 7; i++) {
        const itemType = 'itype' + i;

        if (mod[itemType] == '' && appendCount == 0) {
            mod[itemType] = type1;
            appendCount = 1;
        }
        
        else if (mod[itemType] == '' && appendCount == 1) {
            mod[itemType] = type2;
            appendCount = 2;
        }
    }
    
    return mod;
}


// Push a pre-existing mod with new itypes and etypes
function pushMod(file, mod, type1, type2, type3, etype1, etype2, etype3) {
    file.rows.push({
        'Name': mod['Name'],
        'version': mod['version'],
        'spawnable': mod['spawnable'],
        'rare': mod['rare'],
        'level': mod['level'],
        'maxlevel': mod['maxlevel'],
        'levelreq': mod['levelreq'],
        'classspecific': mod['classspecific'],
        'class': mod['class'],
        'classlevelreq': mod['classlevelreq'],
        'frequency': mod['frequency'],
        'group': mod['group'],
        'mod1code': mod['mod1code'],
        'mod1param': mod['mod1param'],
        'mod1min': mod['mod1min'],
        'mod1max': mod['mod1max'],
        'mod2code': mod['mod2code'],
        'mod2param': mod['mod2param'],
        'mod2min': mod['mod2min'],
        'mod2max': mod['mod2max'],
        'mod3code': mod['mod3code'],
        'mod3param': mod['mod3param'],
        'mod3min': mod['mod3min'],
        'mod3max': mod['mod3max'],
        'transformcolor': mod['transformcolor'],
        'itype1': type1,
        'itype2': type2,
        'itype3': type3,
        'itype4': "",
        'itype5': "",
        'itype6': "",
        'itype7': "",
        'etype1': etype1,
        'etype2': etype2,
        'etype3': etype3,
        'etype4': "",
        'etype5': "",
        'multiply': mod['multiply'],
        'add\r': mod['add\r']
    });
}


// Enable test mode to make almost all items drop rare
if (config.allRare){
    const ratioFilename = 'global\\excel\\itemratio.txt';
    const ratioFile = D2RMM.readTsv(ratioFilename);
    
    ratioFile.rows.forEach((ratio) => {

        ratio['Rare'] = 1;
        ratio['RareDivisor'] = 1;
        ratio['RareMin'] = 0;
    });
    
    D2RMM.writeTsv(ratioFilename, ratioFile);
}
