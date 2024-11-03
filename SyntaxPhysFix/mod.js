const weaponsFileName = 'global\\excel\\weapons.txt'
const weapons = D2RMM.readTsv(weaponsFileName);

function mult_dmg(weap, mult){
	weap.mindam *= mult;
	weap.maxdam *= mult;
	weap["2handmindam"] *= mult;
	weap["2handmaxdam"] *= mult;
	weap.minmisdam *= mult;
	weap.maxmisdam *= mult;
}

const axeDmg = config.axe;
const swordDmg = config.sword;
const clubDmg = config.club;
const scepterDmg = config.scepter;
const maceDmg = config.mace;
const knifeDmg = config.knife;
const javelinDmg = config.javelin;
const spearDmg = config.spear;
const poleDmg = config.pole;
const bowDmg = config.bow;
const crossbowDmg = config.crossbow;
const amazonBowDmg = config.amazon_bow;
const hammerDmg = config.hammer;
const throwingAxeDmg = config.throwing_axe;
const throwingKnifeDmg = config.throwing_knife;
const clawDmg = config.claw;

weapons.rows.forEach((row) => {
	if(row.type == "axe"){
		mult_dmg(row, axeDmg);
	} else if(row.type == "swor"){
		mult_dmg(row, swordDmg);
	} else if(row.type == "club"){
		mult_dmg(row, clubDmg);
	} else if(row.type == "scep"){
		mult_dmg(row, scepterDmg);
	} else if(row.type == "mace"){
		mult_dmg(row, maceDmg);
	} else if(row.type == "knif"){
		mult_dmg(row, knifeDmg);
	} else if(row.type == "jave"){
		mult_dmg(row, javelinDmg);
	} else if(row.type == "spea"){
		mult_dmg(row, spearDmg);
	} else if(row.type == "pole"){
		mult_dmg(row, poleDmg);
	} else if(row.type == "bow"){
		mult_dmg(row, bowDmg);
	} else if(row.type == "xbow"){
		mult_dmg(row, crossbowDmg);
	} else if(row.type == "abow"){
		mult_dmg(row, amazonBowDmg);
	} else if(row.type == "hamm"){
		mult_dmg(row, hammerDmg);
	} else if(row.type == "taxe"){
		mult_dmg(row, throwingAxeDmg);
	} else if(row.type == "tkni"){
		mult_dmg(row, throwingKnifeDmg);
	} else if(row.type == "h2h"){
		mult_dmg(row, clawDmg);
	} else if(row.type == "h2h2"){
		mult_dmg(row, clawDmg);
	}
});

D2RMM.writeTsv(weaponsFileName, weapons);