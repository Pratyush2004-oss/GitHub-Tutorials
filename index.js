import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = './data.json';
const date = moment().subtract(0, 'months').subtract(0, 'weeks').subtract(7, 'days').format();

const data = {
    date: date
};

jsonfile.writeFile(path, data);

simpleGit().add([path]).commit(date, { '--date': date }).push();