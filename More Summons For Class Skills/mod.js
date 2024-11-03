const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) => { 

    for (const key in row) {

        if ('Valkyrie' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('Clay Golem' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('BloodGolem' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('IronGolem' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('FireGolem' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('Raven' == row['skill'] && key.includes('Param2')) {
            row[key] = 20;
        }

        if ('Summon Spirit Wolf' == row['skill'] && key.includes('Param3')) {
            row[key] = 7;
        }

        if ('Summon Fenris' == row['skill'] && key.includes('Param3')) {
            row[key] = 7;
        }

        if ('Summon Grizzly' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('Shadow Warrior' == row['skill'] && key.includes('petmax')) {
            row[key] = 8;
        }

        if ('Shadow Master' == row['skill'] && key.includes('petmax')) {
            row[key] = 4;
        }

        if ('Hydra' == row['skill'] && key.includes('Param3')) {
            row[key] = 36;
        }

        if ('Hydra' == row['skill'] && key.includes('Param1')) {
            row[key] = 600;
        }

  }

});

D2RMM.writeTsv(skillsFilename, skills); 