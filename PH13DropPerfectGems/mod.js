const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

const group = ['Act 1 (H) Good', 'Act 2 (H) Good', 'Act 3 (H) Good', 'Act 4 (H) Good', 'Act 5 (H) Good'];

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];
  if (group.includes(treasureClass)) {
    if (config.othergems) {
      row.Item2 = 'rvl';
      row.Item3 = 'mp5';
      row.Item4 = 'hp5';
      row.Item5 = 'Perfect Gem';
      row.Prob5 = Math.max(Math.round(14 * config.dropRates), 1);
    }
    else {
      row.Item7 = 'Perfect Gem';
      row.Prob7 = Math.max(Math.round(14 * config.dropRates), 1);
      // drop rate adjusting
      for (let i = 1; i <= 7; i++) {
        row['Prob' + i] = Math.round(row['Prob' + i] * 10 * 1.166);
      }
    }
  }
});

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);

