{
	const gemsFilename = 'global\\excel\\gems.txt';
	const gems = D2RMM.readTsv(gemsFilename);

	function set_properties(rune, prefix, num, code, min, max, param = ""){
		rune[prefix + "Mod" + num + "Code"] = code;
		rune[prefix + "Mod" + num + "Param"] = param;
		rune[prefix + "Mod" + num + "Min"] = min;
		rune[prefix + "Mod" + num + "Max"] = max;
	}

	function set_weapon_properties(rune, code, min, max, propNum = "1", param = ""){
		set_properties(rune, "weapon", propNum, code, min, max, param);
	}

	function set_armor_properties(rune, code, min, max, propNum = "1", param = ""){
		set_properties(rune, "helm", propNum, code, min, max, param);
	}

	function set_shield_properties(rune, code, min, max, propNum = "1", param = ""){
		set_properties(rune, "shield", propNum, code, min, max, param);
	}

	function set_all_properties(rune, code, wepMin, wepMax, armMin, armMax, shieldMin, shieldMax, propNum = "1", param = ""){
		set_weapon_properties(rune, code, wepMin, wepMax, propNum, param);
		set_armor_properties(rune, code, armMin, armMax, propNum, param);
		set_shield_properties(rune, code, shieldMin, shieldMax, propNum, param);
	}

	function set_all_properties_same(rune, code, min, max, propNum = "1", param = ""){
		set_all_properties(rune, code, min, max, min, max, min, max, propNum, param);
	}

	//runes never use 3rd property sets, always want first.
	function remove_all_secondary_properties(rune){
		set_all_properties_same(rune, "", "", "", "2");
	}


	gems.rows.forEach(row => {


		//GEMS
		
		//Amythyst
		if(row["name"] == "Chipped Amethyst"){
			set_all_properties(row, "res-all", 6, 6, 6, 6, 6, 6);
		}
		else if(row["name"] == "Flawed Amethyst"){
			set_all_properties(row, "res-all", 8, 8, 8, 8, 8, 8);
		}
		else if(row["name"] == "Amethyst"){
			set_all_properties(row, "res-all", 11, 11, 11, 11, 11, 11);
		}
		else if(row["name"] == "Flawless Amethyst"){
			set_all_properties(row, "res-all", 14, 14, 14, 14, 14, 14);
		}
		else if(row["name"] == "Perfect Amethyst"){
			set_all_properties(row, "res-all", 30, 30, 30, 30, 30, 30);
		}
		
		//Saphire
		else if(row["name"] == "Chipped Sapphire"){
			set_all_properties(row, "res-cold", 12, 12, 12, 12, 12, 12);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawed Sapphire"){
			set_all_properties(row, "res-cold", 16, 16, 16, 16, 16, 16);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Sapphire"){
			set_all_properties(row, "res-cold", 22, 22, 22, 22, 22, 22);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawless Sapphire"){
			set_all_properties(row, "res-cold", 28, 28, 28, 28, 28, 28);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Perfect Sapphire"){
			set_all_properties(row, "res-cold", 60, 60, 60, 60, 60, 60);
			remove_all_secondary_properties(row);
		}

		//Emerald
		else if(row["name"] == "Chipped Emerald"){
			set_all_properties(row, "res-pois", 12, 12, 12, 12, 12, 12);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawed Emerald"){
			set_all_properties(row, "res-pois", 16, 16, 16, 16, 16, 16);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Emerald"){
			set_all_properties(row, "res-pois", 22, 22, 22, 22, 22, 22);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawless Emerald"){
			set_all_properties(row, "res-pois", 28, 28, 28, 28, 28, 28);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Perfect Emerald"){
			set_all_properties(row, "res-pois", 60, 60, 60, 60, 60, 60);
			remove_all_secondary_properties(row);
		}
		
		//Ruby
		else if(row["name"] == "Chipped Ruby"){
			set_all_properties(row, "res-fire", 12, 12, 12, 12, 12, 12);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawed Ruby"){
			set_all_properties(row, "res-fire", 16, 16, 16, 16, 16, 16);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Ruby"){
			set_all_properties(row, "res-fire", 22, 22, 22, 22, 22, 22);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawless Ruby"){
			set_all_properties(row, "res-fire", 28, 28, 28, 28, 28, 28);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Perfect Ruby"){
			set_all_properties(row, "res-fire", 60, 60, 60, 60, 60, 60);
			remove_all_secondary_properties(row);
		}
		
		//Topaz
		else if(row["name"] == "Chipped Topaz"){
			set_all_properties(row, "res-ltng", 12, 12, 12, 12, 12, 12);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawed Topaz"){
			set_all_properties(row, "res-ltng", 16, 16, 16, 16, 16, 16);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Topaz"){
			set_all_properties(row, "res-ltng", 22, 22, 22, 22, 22, 22);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Flawless Topaz"){
			set_all_properties(row, "res-ltng", 28, 28, 28, 28, 28, 28);
			remove_all_secondary_properties(row);
		}
		else if(row["name"] == "Perfect Topaz"){
			set_all_properties(row, "res-ltng", 60, 60, 60, 60, 60, 60);
			remove_all_secondary_properties(row);
		}
		
		//Diamond
		else if(row["name"] == "Chipped Diamond"){
			set_all_properties(row, "red-dmg%", 3, 3, 3, 3, 3, 3);
		}
		else if(row["name"] == "Flawed Diamond"){
			set_all_properties(row, "red-dmg%", 5, 5, 5, 5, 5, 5);
		}
		else if(row["name"] == "Diamond"){
			set_all_properties(row, "red-dmg%", 7, 7, 7, 7, 7, 7);
		}
		else if(row["name"] == "Flawless Diamond"){
			set_all_properties(row, "red-dmg%", 9, 9, 9, 9, 9, 9);
		}
		else if(row["name"] == "Perfect Diamond"){
			set_all_properties(row, "red-dmg%", 12, 12, 12, 12, 12, 12);
		}
		
		//Skull
		else if(row["name"] == "Chipped Skull"){
			set_weapon_properties(row, "mag%", 6, 6);
			set_weapon_properties(row, "gold%", 12, 12, "2");
			
			set_armor_properties(row, "mag%", 6, 6);
			set_armor_properties(row, "gold%", 12, 12, "2");
			
			set_shield_properties(row, "mag%", 6, 6);
			set_shield_properties(row, "gold%", 12, 12, "2");
		}

		else if(row["name"] == "Flawed Skull"){
			set_weapon_properties(row, "mag%", 12, 12);
			set_weapon_properties(row, "gold%", 24, 24, "2");
			
			set_armor_properties(row, "mag%", 12, 12);
			set_armor_properties(row, "gold%", 24, 24, "2");
			
			set_shield_properties(row, "mag%", 12, 12);
			set_shield_properties(row, "gold%", 24, 24, "2");
		}

		else if(row["name"] == "Skull"){
			set_weapon_properties(row, "mag%", 24, 24);
			set_weapon_properties(row, "gold%", 48, 48, "2");
			
			set_armor_properties(row, "mag%", 24, 24);
			set_armor_properties(row, "gold%", 48, 48, "2");
			
			set_shield_properties(row, "mag%", 24, 24);
			set_shield_properties(row, "gold%", 48, 48, "2");
		}

		else if(row["name"] == "Flawless Skull"){
			set_weapon_properties(row, "mag%", 48, 48);
			set_weapon_properties(row, "gold%", 96, 96, "2");
			
			set_armor_properties(row, "mag%", 48, 48);
			set_armor_properties(row, "gold%", 96, 96, "2");
			
			set_shield_properties(row, "mag%", 48, 48);
			set_shield_properties(row, "gold%", 96, 96, "2");
		}

		else if(row["name"] == "Perfect Skull"){
			set_weapon_properties(row, "mag%", 100, 100);
			set_weapon_properties(row, "gold%", 200, 200, "2");
			
			set_armor_properties(row, "mag%", 25, 25);
			set_armor_properties(row, "gold%", 50, 50, "2");
			
			set_shield_properties(row, "mag%", 100, 100);
			set_shield_properties(row, "gold%", 200, 200, "2");
		}
		
		//RUNES
		
		//El Rune
		else if(row["name"] == "El Rune"){
			set_all_properties(row, "light", 3, 3, 3, 3, 3, 3);
			remove_all_secondary_properties(row);
		}

		//Eld Rune
		else if(row["name"] == "Eld Rune"){
			set_all_properties(row, "regen-stam", 50, 50, 25, 25, 50, 50);
			remove_all_secondary_properties(row);
		}

		//Tir Rune
		else if(row["name"] == "Tir Rune"){
			set_all_properties(row, "stam", 50, 50, 25, 25, 50, 50);
		}

		//Nef Rune
		else if(row["name"] == "Nef Rune"){
			set_all_properties(row, "heal-kill", 6, 6, 3, 3, 6, 6);
		}
		
		//Eth Rune
		else if(row["name"] == "Eth Rune"){
			set_all_properties(row, "mana-kill", 6, 6, 3, 3, 6, 6);
		}

		//Ith Rune
		else if(row["name"] == "Ith Rune"){
			set_all_properties(row, "move1", 30, 30, 15, 15, 30, 30);
		}

		//Tal Rune
		else if(row["name"] == "Tal Rune"){
			set_all_properties(row, "manasteal", 8, 8, 4, 4, 8, 8);
		}

		//Ral Rune
		else if(row["name"] == "Ral Rune"){
			set_all_properties(row, "lifesteal", 8, 8, 4, 4, 8, 8);
		}

		//Ort Rune
		else if(row["name"] == "Ort Rune"){
			set_all_properties(row, "dmg-to-mana", 24, 24, 12, 12, 24, 24);
		}

		//Thul Rune
		else if(row["name"] == "Thul Rune"){
			set_weapon_properties(row, "openwounds", 60, 60);
			set_armor_properties(row, "block", 15, 15);
			set_shield_properties(row, "block", 30, 30);
		}

		//Amn Rune
		else if(row["name"] == "Amn Rune"){
			set_all_properties(row, "att%", 30, 30, 15, 15, 30, 30);
		}

		//Sol Rune
		else if(row["name"] == "Sol Rune"){
			set_all_properties(row, "regen-mana", 30, 30, 15, 15, 30, 30);
		}

		//Shael Rune
		else if(row["name"] == "Shael Rune"){
			set_weapon_properties(row, "deadly", 60, 60);
			set_armor_properties(row, "ac-miss", 25, 25);
			set_shield_properties(row, "ac-miss", 50, 50);
		}

		//Dol Rune
		else if(row["name"] == "Dol Rune"){
			set_all_properties(row, "mana%", 30, 30, 15, 15, 30, 30);
		}
		
		//Hel Rune
		else if(row["name"] == "Hel Rune"){
			set_weapon_properties(row, "crush", 60, 60);
			set_armor_properties(row, "ac-hth", 25, 25);
			set_shield_properties(row, "ac-hth", 50, 50);
		}
		
		//Io Rune
		else if(row["name"] == "Io Rune"){
			set_all_properties(row, "enr", 20, 20, 10, 10, 20, 20);
		}

		//Lum Rune
		else if(row["name"] == "Lum Rune"){
			set_all_properties(row, "dex", 20, 20, 10, 10, 20, 20);	
		}

		//Ko Rune
		else if(row["name"] == "Ko Rune"){
			set_all_properties(row, "vit", 20, 20, 10, 10, 20, 20);
		}
			
		//Fal Rune
		else if(row["name"] == "Fal Rune"){
			set_all_properties(row, "str", 20, 20, 10, 10, 20, 20);
		}

		//Lem Rune
		else if(row["name"] == "Lem Rune"){
			set_weapon_properties(row, "swing1", 30, 30);
			set_armor_properties(row, "balance1", 20, 20);
			set_shield_properties(row, "block1", 30, 30);
		}

		//Pul Rune
		else if(row["name"] == "Pul Rune"){
			set_all_properties(row, "cast1", 30, 30, 10, 10, 30, 30);
		}

		//Um Rune
		else if(row["name"] == "Um Rune"){
			set_all_properties_same(row, "ease", -100, -100);
			remove_all_secondary_properties(row);
		}

		//Mal Rune
		else if(row["name"] == "Mal Rune"){
			set_all_properties_same(row, "indestruct", 1, 1);	
		}

		//Ist Rune
		else if(row["name"] == "Ist Rune"){
			set_weapon_properties(row, "extra-pois", 15, 15);
			set_armor_properties(row, "res-pois-max", 7, 7);
			set_shield_properties(row, "res-pois-max", 10, 10);
		}
		
		//Gul Rune
		else if(row["name"] == "Gul Rune"){
			set_weapon_properties(row, "extra-cold", 15, 15);
			set_armor_properties(row, "res-cold-max", 7, 7);
			set_shield_properties(row, "res-cold-max", 10, 10);
		}
		
		//Vex Rune
		else if(row["name"] == "Vex Rune"){
			set_weapon_properties(row, "extra-fire", 15, 15);
			set_armor_properties(row, "res-fire-max", 7, 7);
			set_shield_properties(row, "res-fire-max", 10, 10);
		}
		
		//Ohm Rune
		else if(row["name"] == "Ohm Rune"){
			set_weapon_properties(row, "extra-ltng", 15, 15);
			set_armor_properties(row, "res-ltng-max", 7, 7);
			set_shield_properties(row, "res-ltng-max", 10, 10);
		}

		//Lo Rune
		else if(row["name"] == "Lo Rune"){
		set_weapon_properties(row, "dmg", 100, 100);
		set_armor_properties(row, "ac", 250, 250);
		set_shield_properties(row, "ac", 500, 500);
		}

		//Sur Rune
		else if(row["name"] == "Sur Rune"){
			set_all_properties_same(row, "allskills", 3, 3);
		}

		//Ber Rune
		else if(row["name"] == "Ber Rune"){
			set_all_properties_same(row, "oskill", 1, 1, "1", "Teleport");
		}
		
		//Jah Rune
		else if(row["name"] == "Jah Rune"){
			set_weapon_properties(row, "aura", 12, 12, "1", "Fanaticism");
			set_armor_properties(row, "aura", 12, 12, "1", "Vigor");
			set_shield_properties(row, "aura", 12, 12, "1", "Thorns");
		}
		
		//Cham Rune
		else if(row["name"] == "Cham Rune"){
			set_weapon_properties(row, "aura", 12, 12, "1", "Might");
			set_armor_properties(row, "aura", 12, 12, "1", "Meditation");
			set_shield_properties(row, "aura", 12, 12, "1", "Defiance");
		}
		
		//Zod Rune
		else if(row["name"] == "Zod Rune"){
			set_weapon_properties(row, "aura", 12, 12, "1", "Conviction");
			set_armor_properties(row, "aura", 12, 12, "1", "Redemption");
			set_shield_properties(row, "aura", 12, 12, "1", "Holy Freeze");
		}
	});

	D2RMM.writeTsv(gemsFilename, gems);
}

//since runes have been buffed, remove runewords
{
	const runesFilename = 'global\\excel\\runes.txt';
	const runes = D2RMM.readTsv(runesFilename);
	
	runes.rows.forEach(row => {
		//disable runeword from being created
		row["itype1"] = "";
		row["itype2"] = "";
		
		//be extra paranoid and blank out runes that contribute to this runeword
		for (let rune = 1; rune < 7; ++rune) {
			row["Rune" + rune] = "";
		}
		
		//TODO: can also set "complete" bit to 0?
	});

	D2RMM.writeTsv(runesFilename, runes);
}

function push_downgrade_rune_recipe(recipes, tier, previousTier, outputA, outputB, outputC){
	 recipes.rows.push({
		description: 'Rune ' + tier + ' -> Rune ' + previousTier,
		enabled: 1,
		version: 100,
		numinputs: 1,
		'input 1': 'r' + tier.toString().padStart(2, '0'),
		output: outputA,
		'output b': outputB,
		'output c': outputC,
		'*eol': 0
	 });
}

{
	const cubemainFilename = 'global\\excel\\cubemain.txt';
	const cubemain = D2RMM.readTsv(cubemainFilename);
	
	cubemain.rows.forEach(row => {
		let input = row["input 1"];
		
		if(input.startsWith('"r1') || input.startsWith('"r2') || input.startsWith('"r3')){
			//removes gem requirement for upgrading runes
			if(row["input 2"].length > 0){
				row["numinputs"] -= 1;
				row["input 2"] = "";
			}
			
			//change 3->1 to 2->1 rune upgrade if enabled
			if(!config.classicConversionRates && input.endsWith("qty=3")){
				row["input 1"] = row["input 1"].split('qty=3"').join('qty=2"');
				row["numinputs"] -= 1;
			}
		}else if( //change 3->1 to 2->1 gem upgrade if enabled
			!config.classicConversionRates
			&& (input.startsWith('"g') || input.startsWith('"sk'))
			&& input.endsWith('qty=3"')
		){
			row["numinputs"] -= 1;
			row["input 1"] = row["input 1"].split('qty=3"').join('qty=2"');
		}
	});

	//add downgrade rune recipes
	for (let tier = 2; tier <= 33; ++tier){
		let previousTier = tier - 1;
		let output = 'r' + previousTier.toString().padStart(2, '0');
		
		if(tier <= 21 && config.classicConversionRates){
			push_downgrade_rune_recipe(cubemain, tier, previousTier, output, output, output);
		}else{
			push_downgrade_rune_recipe(cubemain, tier, previousTier, output, output, "");
		}
	}

	D2RMM.writeTsv(cubemainFilename, cubemain);
}
