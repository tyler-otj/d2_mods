const pettypeFilename = 'global\\excel\\pettype.txt';
const pettype = D2RMM.readTsv(pettypeFilename);

pettype.rows.forEach((row) => { 

    for (const key in row) {

        if ('valkyrie' == row['pet type'] && key.includes('basemax')) {
            row[key] = 4;
        }

        if ('golem' == row['pet type'] && key.includes('basemax')) {
            row[key] = 4;
        }

        if ('raven' == row['pet type'] && key.includes('basemax')) {
            row[key] = 20;
        }

        if ('spiritwolf' == row['pet type'] && key.includes('basemax')) {
            row[key] = 7;
        }

        if ('fenris' == row['pet type'] && key.includes('basemax')) {
            row[key] = 7;
        }

        if ('grizzly' == row['pet type'] && key.includes('basemax')) {
            row[key] = 4;
        }

        if ('shadowwarrior' == row['pet type'] && key.includes('basemax')) {
            row[key] = 4;
        }

        if ('hydra' == row['pet type'] && key.includes('basemax')) {
            row[key] = 36;
        }

  }

});

D2RMM.writeTsv(pettypeFilename, pettype); 