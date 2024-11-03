const miscexFilename = 'global\\excel\\misc.txt';
const miscex = D2RMM.readTsv(miscexFilename);
const gems = ['Topaz', 'Amethyst', 'Sapphire', 'Ruby', 'Emerald', 'Diamond', 'Skull'];
const merchants = ['Akara', 'Drognan', 'Ormus', 'Lysander', 'Jamella', 'Mallah'];
const runeLevels = {'low': 23, 'mid': 49, 'high': 69};
miscex.rows.forEach((item) => {
  if (item.name.match(/^\w+ Rune$/) != null) {
    const lvl = item.level;
    if (lvl <= runeLevels.low &&
      config.low) {
      applyDiscountAddToMerchants(item)
    } else if (lvl > runeLevels.low &&
      lvl <= runeLevels.mid &&
      config.mid) {
      applyDiscountAddToMerchants(item);
    } else if(lvl > runeLevels.mid &&
      lvl <= runeLevels.high &&
      config.high) {
      applyDiscountAddToMerchants(item);
    }
  }
  gems.forEach((gem) => {
    if (config.chipped) {
      findItemAndAddToMerchants(item, 'Chipped '+gem+'$');
    }
    if (config.flawed) {
      findItemAndAddToMerchants(item, 'Flawed '+gem+'$');
    }
    if (config.regular) {
      findItemAndAddToMerchants(item, '^'+gem+'$');
    }
    if (config.flawless) {
      findItemAndAddToMerchants(item, 'Flawless '+gem+'$');
    }
    if (config.perfect) {
      findItemAndAddToMerchants(item, 'Perfect '+gem+'$');
    }
  });
});
function applyDiscountAddToMerchants(item) {
  if (config.discount) {
    item.cost = item.cost / 10;
  }
  addToMerchants(item);
}
function findItemAndAddToMerchants(item, nameRegex) {
  if (item.name.match(nameRegex) != null) {
    addToMerchants(item);
  }
}
function addToMerchants(item) {
  item.PermStoreItem = 1;
  merchants.forEach((merchant) => {
    item[merchant+'Min'] = 1;
    item[merchant+'Max'] = 1;
  });
}
D2RMM.writeTsv(miscexFilename, miscex);
