const hdItemsFilename = 'hd\\items\\items.json';
const hdItems = D2RMM.readJson(hdItemsFilename);

D2RMM.copyFile(
  "hd", // <mod folder>\hd
  "hd", // <d2r folder>\mods\<modname>\<modname>.mpq\data\hd
  true // overwrite any conflicts
);

const newHDItems = [...hdItems];
for (const item of hdItems) {
  // replace terror key with new sprite
  if (item.pk1 !== undefined && config.keyOfTerrorColor !== "default") {
    newHDItems.push({
      pk1: {
        asset: `key/${config.keyOfTerrorColor}_key`
      }
    });
    continue;
  }
  // replace hate key with new sprite
  if (item.pk2 !== undefined && config.keyOfHateColor !== "default") {
    newHDItems.push({
      pk2: {
        asset: `key/${config.keyOfHateColor}_key`
      }
    });
    continue;
  }
  // replace destruction key with new sprite
  if (item.pk3 !== undefined && config.keyOfDestructionColor !== "default") {
    newHDItems.push({
      pk3: {
        asset: `key/${config.keyOfDestructionColor}_key`
      }
    });
    continue;
  }

  newHDItems.push(item);
}
D2RMM.writeJson(hdItemsFilename, newHDItems);
