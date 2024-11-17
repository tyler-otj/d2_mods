const weaponBehavior = 0;
const armorBehavior = 1;
const shieldBehavior = 2;

const oneSockItems = [
	'helm', 'boot', 'glov', 'amul', 'ring', 'phlm', 'pelt', 'circ'
];

const twoSockItems = [
	'shie', 'scep', 'wand', 'axe', 'club', 'swor', 'hamm', 'knif', 'mace',
	'jave', 'orb', 'head', 'ashd', 'aspe', 'tors', 'ajav'
];

const fourSockItems = [
	'staf', 'pole', 'spea', 'xbow', 'abow', 'bow'
];

function enable_socketing_item_with_behavior(item, numSockets, applyType){
	item.hasinv = 1;
	item.gemsockets = numSockets;
	item.gemapplytype = applyType;
}

{
	const armorFilename = 'global\\excel\\armor.txt';
	const armor = D2RMM.readTsv(armorFilename);

	armor.rows.forEach(row => { 
		if(row.type == 'shie' || row.type == 'ashd' || row.type == 'head'){
			enable_socketing_item_with_behavior(row, 2, shieldBehavior);
		}else{
			enable_socketing_item_with_behavior(row, 1, armorBehavior);
		}
	});

	D2RMM.writeTsv(armorFilename, armor);
}

{
	const miscFilename = 'global\\excel\\misc.txt';
	const misc = D2RMM.readTsv(miscFilename);

	misc.rows.forEach(row => {
		if(row.type == 'ring' || row.type == 'amul'){
			enable_socketing_item_with_behavior(row, 1, armorBehavior);
		}
	});

	D2RMM.writeTsv(miscFilename, misc);
}

function set_max_num_item_sockets(item, numSockets){
	item.MaxSockets1 = numSockets;
	item.MaxSockets2 = numSockets;
	item.MaxSockets3 = numSockets;
}

{
	const itemtypesFilename = 'global\\excel\\itemtypes.txt';
	const itemtypes = D2RMM.readTsv(itemtypesFilename);

	itemtypes.rows.forEach(row => {
		if(oneSockItems.includes(row.Code)){
			set_max_num_item_sockets(row, 1)
		}else if(twoSockItems.includes(row.Code)){
			set_max_num_item_sockets(row, 2)
		}else if(fourSockItems.includes(row.Code)){
			set_max_num_item_sockets(row, 4)
		}
	});

	D2RMM.writeTsv(itemtypesFilename, itemtypes);
}

const socketUnsocketReqItem = "jew";

function add_empty_socket_recipe(recipes, code) {
	recipes.rows.push({
		description: `Empty Sockets On ${code}`,
		enabled: 1,
		version: 100,
		numinputs: 2,
		'input 1': `"${code},sock"`, //note: we allow unsocketing anything
		'input 2': socketUnsocketReqItem,
		output: '"useitem,rem"',
		'*eol': 0,
	});
}

function help_add_socket_recipe(recipes, descriptionText, code, itemType, numSockets, reqType, reqQuantity){
	recipes.rows.push({
		description: descriptionText,
		enabled: 1,
		version: 100,
		numinputs: 1 + reqQuantity,
		'input 1': `"${code},${itemType},nos"`,
		'input 2': '"' + socketUnsocketReqItem + ',' + reqType + ',qty=' + reqQuantity + '"',
		output: 'useitem',
		'mod 1': 'sock',
		'mod 1 min': numSockets,
		'mod 1 max': numSockets,
		'*eol': 0,
	});
}

function add_socket_item_recipe(recipes, code, numSockets){
	//TODO: does normal socket recipe work for ethereal?
	help_add_socket_recipe(recipes, `Add Sockets To ${code}`, code, "nor", numSockets, "mag", config.normJewels);
	help_add_socket_recipe(recipes, `Add Sockets To ${code}`, code, "mag", numSockets, "mag", config.magJewels);
	help_add_socket_recipe(recipes, `Add Sockets To ${code}`, code, "rar", numSockets, config.rareJewelType, config.rareJewels);
	help_add_socket_recipe(recipes, `Add Sockets To ${code}`, code, "uni", numSockets, config.uniqJewelType, config.uniqJewels);
}

{
	const cubemainFilename = 'global\\excel\\cubemain.txt';
	const cubemain = D2RMM.readTsv(cubemainFilename);

	//Recipe to Unsocket Item in cube
	add_empty_socket_recipe(cubemain, 'weap');
	add_empty_socket_recipe(cubemain, 'shie');
	add_empty_socket_recipe(cubemain, 'armo');
	add_empty_socket_recipe(cubemain, 'ring');
	add_empty_socket_recipe(cubemain, 'amul');
	
	for(const item of oneSockItems){
		add_socket_item_recipe(cubemain, item, 1);
	}
	
	for(const item of twoSockItems){
		add_socket_item_recipe(cubemain, item, 2);
	}
	
	for(const item of fourSockItems){
		add_socket_item_recipe(cubemain, item, 4);
	}

	D2RMM.writeTsv(cubemainFilename, cubemain);
}
