const maxNumGloveSockets = 2;
const maxNumBootSockets = 2;

function enable_socketing_item(item, numSockets, applyType){
	item.hasinv = 1;
	item.gemsockets = numSockets;
	item.gemapplytype = applyType;
}

if(config.socketGloves || config.socketBoots){
	const armorFilename = 'global\\excel\\armor.txt';
	const armor = D2RMM.readTsv(armorFilename);

	armor.rows.forEach(row => { 
		if(config.socketGloves && row.type == 'glov'){
			enable_socketing_item(row, maxNumGloveSockets, config.glovesBehavior);
		}

		if(config.socketBoots && row.type == 'boot'){
			enable_socketing_item(row, maxNumBootSockets, config.bootsBehavior);
		}
	});

	D2RMM.writeTsv(armorFilename, armor);
}

if(config.socketJewelry){
	const miscFilename = 'global\\excel\\misc.txt';
	const misc = D2RMM.readTsv(miscFilename);

	misc.rows.forEach(row => {
		if(row.type == 'ring' || row.type == 'amul'){
			enable_socketing_item(row, 1, config.jewelryBehavior);
		}
	});

	D2RMM.writeTsv(miscFilename, misc);
}

function set_max_num_item_sockets(item, numSockets){
	item.MaxSockets1 = numSockets;
	item.MaxSockets2 = numSockets;
	item.MaxSockets3 = numSockets;
}

if(config.socketJewelry || config.socketBoots || config.socketGloves){
	const itemtypesFilename = 'global\\excel\\itemtypes.txt';
	const itemtypes = D2RMM.readTsv(itemtypesFilename);

	itemtypes.rows.forEach((row) => {
		if(row.Code == 'jave'){
			set_max_num_item_sockets(row, 1);
		}else if(config.socketGloves && row.Code == 'glov'){
			set_max_num_item_sockets(row, maxNumGloveSockets);
		}else if(config.socketBoots && row.Code == 'boot'){
			set_max_num_item_sockets(row, maxNumBootSockets);
		}else if(config.socketJewelry && (row.Code == 'ring' || row.Code == 'amul')){
			set_max_num_item_sockets(row, 1);
		}
	});

	D2RMM.writeTsv(itemtypesFilename, itemtypes);
}

//TODO: Jewel seems a bit too cheap to add sockets to an item...
//		Additionally, random num sockets may be a bit too harsh?
//		Think of alternative recipes, maybe more expensive items can be sacrified for guaranteed higher sockets?
//		Maybe unique jewel guarantees max sockets?
const socketUnsocketReqItem = "jew";

function add_empty_socket_recipe(recipes, code, name) {
	recipes.rows.push({
		description: `Empty Sockets On ${name}`,
		enabled: 1,
		version: 100,
		numinputs: 2,
		'input 1': `"${code},sock"`, //note: we allow unsocketing anything
		'input 2': socketUnsocketReqItem,
		output: '"useitem,rem"',
		'*eol': 0,
	});
}

function help_add_socket_recipe(recipes, descriptionText, code, itemType, minSockets, maxSockets){
	recipes.rows.push({
		description: descriptionText,
		enabled: 1,
		version: 100,
		numinputs: 2,
		'input 1': `"${code},${itemType},nos"`,
		'input 2': socketUnsocketReqItem,
		output: 'useitem',
		'mod 1': 'sock',
		'mod 1 min': minSockets,
		'mod 1 max': maxSockets,
		'*eol': 0,
	});
}

function add_socket_normal_item_recipe(recipes, code, name, minSockets, maxSockets){
	//note: we only allow socketing normal. Add recipe for hig(high quality)/eth(ethereal) items? Can just socket and then upgrade? Check upgrade recipe if this is allowed...
	help_add_socket_recipe(recipes, `Add Sockets To ${name}`, code, "nor", minSockets, maxSockets);
}

function add_socket_non_normal_item_recipe(recipes, code, name){
	help_add_socket_recipe(recipes, `Add Sockets To ${name}`, code, "uni", 1, 1);
	help_add_socket_recipe(recipes, `Add Sockets To ${name}`, code, "rar", 1, 1);
}

{
	const cubemainFilename = 'global\\excel\\cubemain.txt';
	const cubemain = D2RMM.readTsv(cubemainFilename);

	{
		add_empty_socket_recipe(cubemain, 'weap', 'Weapon');
		add_empty_socket_recipe(cubemain, 'armo', 'Armor');
		
		if(config.socketJewelry){
			add_empty_socket_recipe(cubemain, 'ring', 'Ring');
			add_empty_socket_recipe(cubemain, 'amul', 'Amulet');
		}
	}

	if(config.socketNormals){
		add_socket_normal_item_recipe(cubemain, 'weap', 'Weapon', 1, 6);
		add_socket_normal_item_recipe(cubemain, 'armo', 'Armor', 1, 6);
	}
	
	if(config.socketNonNormals){
		add_socket_non_normal_item_recipe(cubemain, 'weap', "Weapon");
		add_socket_non_normal_item_recipe(cubemain, 'armo', "Armor");
	}
	
	if(config.socketJewelry){
		add_socket_normal_item_recipe(cubemain, 'ring', 'Ring', 1, 1);
		add_socket_normal_item_recipe(cubemain, 'amul', 'Amulet', 1, 1);
	}

	D2RMM.writeTsv(cubemainFilename, cubemain);
}