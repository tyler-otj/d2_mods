{
	const skillsFilename = 'global\\excel\\skills.txt';
	const skills = D2RMM.readTsv(skillsFilename);

	skills.rows.forEach(row => {
		
		//Skeleton Mastery: HP/LVL 8 -> 12
		if(row["skill"] == "Skeleton Mastery"){
			row["Param1"] = 12; 
		}
		
		//Golem Mastery: HP%/LVL 20 -> 30
		if(row["skill"] == "Golem Mastery"){
			row["Param2"] = 30; 
		}
		
		//Bonespear: Extra BS per 10 lvls & Synergy boost
		if(row["skill"] == "Bone Spear"){
			row["srvdofunc"] = 8;
			row["cltdofunc"] = 17;
			row["srvmissilea"] = "bonespear";
			row["cltmissilea"] = "bonespear";
			row["cltmissileb"] = "bonespear";
			row["calc1"] = "(skill('Bone Spear'.lvl) / 10) + 1";
			// Needed for the number of missiles skill description
			row["calc6"] = "skill('Bone Spear'.lvl) - skill('Bone Spear'.blvl)";
			row["Param8"] = 11;
		}

		// Bone Spirit More Synergy Bonus
		if(row["skill"] == "Bone Spirit"){	
			row["Param8"] = 11;
		}

		// Teeth: More Synergy Bonus
		if(row["skill"] === "Teeth") {
			row["Param8"] = 20;	  
			// Use less mana: 2^6/256*6 = 
			row["manashift"] = "6";
		}
	});

	D2RMM.writeTsv(skillsFilename, skills);
}

{
	const monstatsFilename = 'global\\excel\\monstats.txt';
	const monstats = D2RMM.readTsv(monstatsFilename);

	monstats.rows.forEach(row => {
		if(row["Id"] == "necroskeleton" || row["Id"] == "necromage"){
			row["Velocity"] = 25;
			row["Run"] = 25;
		}
	});

	D2RMM.writeTsv(monstatsFilename, monstats);
}

