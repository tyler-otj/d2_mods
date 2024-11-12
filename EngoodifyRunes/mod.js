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
		if(row["name"] == "El Rune"){
			set_all_properties(row, "regen-stam", 50, 50, 25, 25, 50, 50);
			remove_all_secondary_properties(row);
		}
		
		else if(row["name"] == "Eld Rune"){
			set_all_properties(row, "stam", 50, 50, 25, 25, 50, 50);
		}
		
		else if(row["name"] == "Tir Rune"){
			set_all_properties(row, "heal-kill", 6, 6, 3, 3, 6, 6);
		}
		
		else if(row["name"] == "Nef Rune"){
			set_all_properties(row, "mana-kill", 6, 6, 3, 3, 6, 6);
		}
		
		else if(row["name"] == "Eth Rune"){
			set_all_properties(row, "dmg-to-mana", 24, 24, 12, 12, 24, 24);
		}
		
		else if(row["name"] == "Ith Rune"){
			set_all_properties(row, "move1", 30, 30, 15, 15, 30, 30);
		}
		
		else if(row["name"] == "Tal Rune"){
			set_all_properties(row, "att%", 30, 30, 15, 15, 30, 30);
		}
		
		else if(row["name"] == "Ral Rune"){
			set_all_properties(row, "regen-mana", 30, 30, 15, 15, 30, 30);
		}
		
		else if(row["name"] == "Ort Rune"){
			set_all_properties(row, "mana%", 30, 30, 15, 15, 30, 30);
		}
		
		else if(row["name"] == "Thul Rune"){
			set_weapon_properties(row, "dmg", 50, 50);
			set_armor_properties(row, "ac", 100, 100);
			set_shield_properties(row, "ac", 200, 200);
		}
		
		else if(row["name"] == "Amn Rune"){
			set_all_properties(row, "enr", 20, 20, 10, 10, 20, 20);
		}
		
		else if(row["name"] == "Sol Rune"){
			set_all_properties(row, "vit", 20, 20, 10, 10, 20, 20);
		}
		
		else if(row["name"] == "Shael Rune"){
			set_all_properties(row, "dex", 20, 20, 10, 10, 20, 20);	
		}
		
		else if(row["name"] == "Dol Rune"){
			set_all_properties(row, "str", 20, 20, 10, 10, 20, 20);
		}
		
		else if(row["name"] == "Hel Rune"){
			set_weapon_properties(row, "openwounds", 60, 60);
			set_armor_properties(row, "block", 15, 15);
			set_shield_properties(row, "block", 30, 30);
		}
		
		else if(row["name"] == "Io Rune"){
			set_weapon_properties(row, "deadly", 60, 60);
			set_armor_properties(row, "ac-miss", 25, 25);
			set_shield_properties(row, "ac-miss", 50, 50);
		}
		
		else if(row["name"] == "Lum Rune"){
			set_weapon_properties(row, "crush", 60, 60);
			set_armor_properties(row, "ac-hth", 25, 25);
			set_shield_properties(row, "ac-hth", 50, 50);
		}
		
		else if(row["name"] == "Ko Rune"){
			set_weapon_properties(row, "swing1", 30, 30);
			set_armor_properties(row, "balance1", 20, 20);
			set_shield_properties(row, "block1", 30, 30);
		}
		
		else if(row["name"] == "Fal Rune"){
			set_all_properties(row, "cast1", 30, 30, 10, 10, 30, 30);
		}
		
		else if(row["name"] == "Lem Rune"){
			set_all_properties_same(row, "ease", 100, 100);
			remove_all_secondary_properties(row);
		}
		
		else if(row["name"] == "Pul Rune"){
			set_all_properties_same(row, "indestruct", 1, 1);	
		}

		else if(row["name"] == "Um Rune"){
			set_all_properties(row, "res-all", 35, 35, 25, 25, 35, 35);
		}
		
		else if(row["name"] == "Mal Rune"){
			set_weapon_properties(row, "dmg%", 100, 100);
			set_armor_properties(row, "red-dmg%", 7, 7);
			set_shield_properties(row, "red-dmg%", 15, 15);
		}

		else if(row["name"] == "Ist Rune"){
			set_weapon_properties(row, "mag%", 100, 100);
			set_weapon_properties(row, "gold%", 200, 200, "2");
			
			set_armor_properties(row, "mag%", 25, 25);
			set_armor_properties(row, "gold%", 50, 50, "2");
			
			set_shield_properties(row, "mag%", 100, 100);
			set_shield_properties(row, "gold%", 200, 200, "2");
		}
		
		else if(row["name"] == "Gul Rune"){
			set_weapon_properties(row, "extra-pois", 15, 15);
			set_armor_properties(row, "res-pois-max", 7, 7);
			set_shield_properties(row, "res-pois-max", 10, 10);
		}
		
		else if(row["name"] == "Vex Rune"){
			set_weapon_properties(row, "extra-cold", 15, 15);
			set_armor_properties(row, "res-cold-max", 7, 7);
			set_shield_properties(row, "res-cold-max", 10, 10);
		}
		
		else if(row["name"] == "Ohm Rune"){
			set_weapon_properties(row, "extra-fire", 15, 15);
			set_armor_properties(row, "res-fire-max", 7, 7);
			set_shield_properties(row, "res-fire-max", 10, 10);
		}
		
		else if(row["name"] == "Lo Rune"){
			set_weapon_properties(row, "extra-ltng", 15, 15);
			set_armor_properties(row, "res-ltng-max", 7, 7);
			set_shield_properties(row, "res-ltng-max", 10, 10);
		}
	
		else if(row["name"] == "Sur Rune"){
			set_all_properties_same(row, "allskills", 3, 3);
		}

		else if(row["name"] == "Ber Rune"){
			set_all_properties_same(row, "oskill", 1, 1, "1", "Teleport");
		}
		
		else if(row["name"] == "Jah Rune"){
			set_weapon_properties(row, "aura", 12, 12, "1", "Fanaticism");
			set_armor_properties(row, "aura", 12, 12, "1", "Vigor");
			set_shield_properties(row, "aura", 12, 12, "1", "Thorns");
		}
		
		else if(row["name"] == "Cham Rune"){
			set_weapon_properties(row, "aura", 12, 12, "1", "Might");
			set_armor_properties(row, "aura", 12, 12, "1", "Meditation");
			set_shield_properties(row, "aura", 12, 12, "1", "Defiance");
		}
		
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

//add better rune conversion recipes
{
	const cubemainFilename = 'global\\excel\\cubemain.txt';
	const cubemain = D2RMM.readTsv(cubemainFilename);

	//Note: we keep 3->1 lower runes, 2->1 high runes
	cubemain.rows.forEach(row => {
		//TODO: modify description to remove gem
		//removes gem requirement for upgrading runes
		if(row["input 1"].startsWith('"r')){
			row["numinputs"] = row["numinputs"] - 1;
			row["input 2"] = "";
		}
	});

	for (let tier = 2; tier <= 33; ++tier){
		let previousTier = tier - 1;
		let output = 'r' + previousTier.toString().padStart(2, '0');

		 let recipe = {
			description: 'Rune ' + tier + ' -> Rune ' + previousTier,
			enabled: 1,
			version: 100,
			numinputs: 1,
			'input 1': 'r' + tier.toString().padStart(2, '0'),
			output: output,
			'output b': output,
			'*eol': 0
		 };
		
		//convert 3->1 runes back down to 3. Otherwise will convert 1->2
		if(tier <= 20){
			recipe['output c'] = output;
		}

		cubemain.rows.push(recipe);
	}

	D2RMM.writeTsv(cubemainFilename, cubemain);
}
