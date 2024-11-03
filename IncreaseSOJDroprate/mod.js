const uniqueitemsFilename = "global\\excel\\uniqueitems.txt";
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

uniqueitems.rows.forEach((row) => {
  const item = row["index"];

  if (item === "The Stone of Jordan") {
      row["rarity"] = Math.floor(row["rarity"] * config.multiplier);
  }
});

D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
