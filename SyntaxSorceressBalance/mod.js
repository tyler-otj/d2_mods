const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) => {

    if (row["skill"] == "Frozen Orb") {
		//make forb FCR based - WAY too fast
		//row["localdelay"] = "";
		//row["cltdofunc"] = 29;
		//row["cltmissile"] = "frozenorb";
		//row["cltmissilea"] = "";
		
		//completely remove delay - too fast
		//row["localdelay"] = 0;
	
		//default 25, reduce by ~1/2
		row["localdelay"] = 12;
		
    }else if(row["skill"] == "Nova"){
		//These appear to not be necessary by themselves, because we are using the same par8 (5) multiplier for calculations, so can combine
		//Note that we also have to update the skilldesc to show the synergy text, and that the calculation must match! I.e. we refer to par8 in the desc
		//row.Param7 = 5;
		//row["*Param7 Description"] = "Damage synergy";
		row.EDmgSymPerCalc = "(skill('Static Field'.blvl) + skill('Thunder Storm'.blvl)) * par8";
		//TODO: reduce mana cost slightly
		//TODO: up damage slightly?
	}
	
	//TODO: buff firewall dmg
	//TODO: buff hydra dmg
		//add synergy between firewall and hydra
		//remove firewall synergy with inferno
});

D2RMM.writeTsv(skillsFilename, skills);

/////////////////////////////////////////////////////////////////////////////

const skillDescFileName = 'global\\excel\\skilldesc.txt';
const skillDescs = D2RMM.readTsv(skillDescFileName);

skillDescs.rows.forEach((row) => {
	if(row["skilldesc"] == "nova"){
		row.dsc3line3 = 76;
		row.dsc3texta3 = "Ltngdplev";
		row.dsc3textb3 = "skillname57";
		row.dsc3calca3 = "par8";
	}
});

D2RMM.writeTsv(skillDescFileName, skillDescs);