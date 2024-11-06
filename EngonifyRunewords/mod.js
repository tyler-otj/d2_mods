// runes.txt
const runesFilename = 'global\\excel\\runes.txt';
const runes = D2RMM.readTsv(runesFilename);


runes.rows.length = 0;

D2RMM.writeTsv(runesFilename, runes);