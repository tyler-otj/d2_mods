const levelsFilename = "global\\excel\\levels.txt";
const levels = D2RMM.readTsv(levelsFilename);

levels.rows.forEach((row) => {

    if(row["MonLvlEx(H)"] != "") {row["MonLvlEx(H)"] = "85";}

})

D2RMM.writeTsv(levelsFilename, levels);