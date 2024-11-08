{
	const skillsFilename = 'global\\excel\\skills.txt';
	const skills = D2RMM.readTsv(skillsFilename);

	skills.rows.forEach(row => {
		if(row["skill"] == "Skeleton Mastery"){
			row["Param1"] = 12; //bump hp/level from 8 -> 12
		}else if(row["skill"] == "Golem Mastery"){
			row["Param2"] = 30; //bump hp%/level from 20 -> 30
		}
	});

	D2RMM.writeTsv(skillsFilename, skills);
}

{
	const monstatsFilename = 'global\\excel\\monstats.txt';
	const monstats = D2RMM.readTsv(skillsFilename);

	monstats.rows.forEach(row => {
		if(row["Id"] == "necroskeleton" || row["Id"] == "necromage"){
			row["Velocity"] = 18;
			row["Run"] = 20;
		}
	});

	D2RMM.writeTsv(monstatsFilename, monstats);
}