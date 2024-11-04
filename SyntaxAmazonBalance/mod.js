const arrowsItemId = "bowq";
const boltsItemId = "xboq";

function spawn_item_as_rare(item){
	item.Rare = 1;
	item.Normal = 0;
}

function affix_should_apply_to_ammo(affix){
	for(var i = 1; i <= 7; ++i){
		let affixType = affix['itype' + i];
		if(affixType == ''){
			return false;
		}
		
		if(affixType == 'miss' || affixType == arrowsItemId || affixType == boltsItemId || affixType == 'jave'){
			return true;
		}
	}
	return false;
}

//TODO: this is inefficient. We take up another row just for the ammunition entries.
//		it would be better to fall back to this, but prefer to add extra bowq and xboq itype entries to the existing affix (if there's space)
function set_affix_to_spawn_on_ammunition(affixTable, currentAffix){
	affixTable.rows.push({
		Name: currentAffix.Name,
		version: currentAffix.version,
		spawnable: currentAffix.spawnable,
		rare: currentAffix.rare,
		level: currentAffix.level,
		maxlevel: currentAffix.maxlevel,
		levelreq: currentAffix.levelreq,
		frequency: currentAffix.frequency,
		group: currentAffix.group,
		mod1code: currentAffix.mod1code,
		mod1param: currentAffix.mod1param,
		mod1min: currentAffix.mod1min,
		mod1max: currentAffix.mod1max,
		mod2code: currentAffix.mod2code,
		mod2param: currentAffix.mod2param,
		mod2min: currentAffix.mod2min,
		mod2max: currentAffix.mod2max,
		mod3code: currentAffix.mod3code,
		mod3param: currentAffix.mod3param,
		mod3min: currentAffix.mod3min,
		mod3max: currentAffix.mod3max,
		itype1: arrowsItemId,
		itype2: boltsItemId,
		multiply: currentAffix.multiply,
		'add\r': currentAffix['add\r']
	});
}

if(config.drop_magic == true){	
	{ // Set ammunition to spawn as magic or rare
		const itemTypesFilename = 'global\\excel\\itemtypes.txt';
		const item_types = D2RMM.readTsv(itemTypesFilename);

		spawn_item_as_rare(item_types.rows.find(x => x.Code == arrowsItemId));
		spawn_item_as_rare(item_types.rows.find(x => x.Code == boltsItemId));

		D2RMM.writeTsv(itemTypesFilename, item_types);
	}

	{ //Set prefixes
		const magicPrefixFilename = 'global\\excel\\magicprefix.txt';
		const magic_prefixes = D2RMM.readTsv(magicPrefixFilename);

		magic_prefixes.rows.forEach(magic_prefix => {
			if(affix_should_apply_to_ammo(magic_prefix) && Math.floor(magic_prefix.version) >= 1){ //disallow pre v08 prefixes
				set_affix_to_spawn_on_ammunition(magic_prefixes, magic_prefix);
			}
		});

		D2RMM.writeTsv(magicPrefixFilename, magic_prefixes);
	}

	{ //set suffixes
		const magicSuffixFilename = 'global\\excel\\magicsuffix.txt';
		const magic_suffixes = D2RMM.readTsv(magicSuffixFilename);

		magic_suffixes.rows.forEach(magic_suffix => {
			var suffixExistsOnAmulet = affix_should_apply_to_ammo(magic_suffix);

			if((suffixExistsOnAmulet == true && Math.floor(magic_suffix.version) >= 1 && magic_suffix.mod1code.indexOf('cast') == -1) ||
			   (Math.floor(magic_suffix.version) >= 1 && magic_suffix.itype1 == 'weap' && magic_suffix.mod1code.indexOf('swing') != -1)){
				set_affix_to_spawn_on_ammunition(magic_suffixes, magic_suffix);
			}
		});

		D2RMM.writeTsv(magicSuffixFilename, magic_suffixes);
	}
}

function add_craft_ammunition_recipe(recipes, recipe, itemId, description){
	recipes.rows.push({
		description: recipe.description.replaceAll('Amulet', description),
		enabled: 1,
		version: recipe.version,
		numinputs: recipe.numinputs,
		'input 1': '"' + itemId + ',mag"',
		'input 2': recipe['input 2'],
		'input 3': recipe['input 3'],
		'input 4': recipe['input 4'],
		'input 5': recipe['input 5'],
		'input 6': recipe['input 6'],
		'input 7': recipe['input 7'],
		output: '"usetype,crf,qty=255"',
		lvl: recipe.lvl,
		plvl: recipe.plvl,
		ilvl: recipe.ilvl,
		'mod 1': recipe['mod 1'],
		'mod 1 chance': recipe['mod 1 chance'],
		'mod 1 param': recipe['mod 1 param'],
		'mod 1 min': recipe['mod 1 min'],
		'mod 1 max': recipe['mod 1 max'],
		'mod 2': recipe['mod 2'],
		'mod 2 chance': recipe['mod 2 chance'],
		'mod 2 param': recipe['mod 2 param'],
		'mod 2 min': recipe['mod 2 min'],
		'mod 2 max': recipe['mod 2 max'],
		'mod 3': recipe['mod 3'],
		'mod 3 chance': recipe['mod 3 chance'],
		'mod 3 param': recipe['mod 3 param'],
		'mod 3 min': recipe['mod 3 min'],
		'mod 3 max': recipe['mod 3 max'],
		'mod 4': recipe['mod 4'],
		'mod 4 chance': recipe['mod 4 chance'],
		'mod 4 param': recipe['mod 4 param'],
		'mod 4 min': recipe['mod 4 min'],
		'mod 4 max': recipe['mod 4 max'],
		'mod 5': recipe['mod 5'],
		'mod 5 chance': recipe['mod 5 chance'],
		'mod 5 param': recipe['mod 5 param'],
		'mod 5 min': recipe['mod 5 min'],
		'mod 5 max': recipe['mod 5 max'],
		'b output': recipe['b output'],
		'b lvl': recipe['b lvl'],
		'b plvl': recipe['b plvl'],
		'b ilvl': recipe['b ilvl'],
		'b mod 1': recipe['b mod 1'],
		'b mod 1 chance': recipe['b mod 1 chance'],
		'b mod 1 param': recipe['b mod 1 param'],
		'b mod 1 min': recipe['b mod 1 min'],
		'b mod 1 max': recipe['b mod 1 max'],
		'b mod 2': recipe['b mod 2'],
		'b mod 2 chance': recipe['b mod 2 chance'],
		'b mod 2 param': recipe['b mod 2 param'],
		'b mod 2 min': recipe['b mod 2 min'],
		'b mod 2 max': recipe['b mod 2 max'],
		'b mod 3': recipe['b mod 3'],
		'b mod 3 chance': recipe['b mod 3 chance'],
		'b mod 3 param': recipe['b mod 3 param'],
		'b mod 3 min': recipe['b mod 3 min'],
		'b mod 3 max': recipe['b mod 3 max'],
		'b mod 4': recipe['b mod 4'],
		'b mod 4 chance': recipe['b mod 4 chance'],
		'b mod 4 param': recipe['b mod 4 param'],
		'b mod 4 min': recipe['b mod 4 min'],
		'b mod 4 max': recipe['b mod 4 max'],
		'b mod 5': recipe['b mod 5'],
		'b mod 5 chance': recipe['b mod 5 chance'],
		'b mod 5 param': recipe['b mod 5 param'],
		'b mod 5 min': recipe['b mod 5 min'],
		'b mod 5 max': recipe['b mod 5 max'],
		'b output': recipe['b output'],
		'c output': recipe['c output'],
		'c lvl': recipe['c lvl'],
		'c plvl': recipe['c plvl'],
		'c ilvl': recipe['c ilvl'],
		'c mod 1': recipe['c mod 1'],
		'c mod 1 chance': recipe['c mod 1 chance'],
		'c mod 1 param': recipe['c mod 1 param'],
		'c mod 1 min': recipe['c mod 1 min'],
		'c mod 1 max': recipe['c mod 1 max'],
		'c mod 2': recipe['c mod 2'],
		'c mod 2 chance': recipe['c mod 2 chance'],
		'c mod 2 param': recipe['c mod 2 param'],
		'c mod 2 min': recipe['c mod 2 min'],
		'c mod 2 max': recipe['c mod 2 max'],
		'c mod 3': recipe['c mod 3'],
		'c mod 3 chance': recipe['c mod 3 chance'],
		'c mod 3 param': recipe['c mod 3 param'],
		'c mod 3 min': recipe['c mod 3 min'],
		'c mod 3 max': recipe['c mod 3 max'],
		'c mod 4': recipe['c mod 4'],
		'c mod 4 chance': recipe['c mod 4 chance'],
		'c mod 4 param': recipe['c mod 4 param'],
		'c mod 4 min': recipe['c mod 4 min'],
		'c mod 4 max': recipe['c mod 4 max'],
		'c mod 5': recipe['c mod 5'],
		'c mod 5 chance': recipe['c mod 5 chance'],
		'c mod 5 param': recipe['c mod 5 param'],
		'c mod 5 min': recipe['c mod 5 min'],
		'c mod 5 max': recipe['c mod 5 max'],
		'c output': recipe['c output'],
		'*eol\r': 0
	});
}

if(config.add_recipe == true){
    const cubeMainFilename = 'global\\excel\\cubemain.txt';
    const recipes = D2RMM.readTsv(cubeMainFilename);

    recipes.rows.forEach(recipe => {
        if(recipe.enabled == '1' && recipe['input 1'] == '"amul,mag"' && recipe.output == '"usetype,crf"'){
			add_craft_ammunition_recipe(recipes, recipe, arrowsItemId, 'Arrows');
			add_craft_ammunition_recipe(recipes, recipe, boltsItemId, 'Bolts');
        }
    });

    D2RMM.writeTsv(cubeMainFilename, recipes);
}

{
	const missilesFileName = 'global\\excel\\missiles.txt';
    const missiles = D2RMM.readTsv(missilesFileName);
	
	//TODO: this is retarded, but must loop since API provides no direct access other than with numeric key??
	missiles.rows.forEach(missile => {
		if(missile["Missile"] == "guidedarrow"){
			missile.Pierce = 1;
		}
	});
	
	D2RMM.writeTsv(missilesFileName, missiles);
}

{
	const skillsFileName = 'global\\excel\\skills.txt';
    const skills = D2RMM.readTsv(skillsFileName);
	
	//TODO: this is retarded, but must loop since API provides no direct access other than with numeric key??
	skills.rows.forEach(skill => {
		if(skill["skill"] == "Valkyrie"){
			skill.sumskill5 = "Vigor";
			skill.sumsk5calc = 5;
		}
	});
	
	D2RMM.writeTsv(skillsFileName, skills);
}