import { promisify } from 'util';
import mysqlConnection from '../db';
import * as errMsg from "../utils/errorMsg";

const UserModelServices = {
    add: promisify(_add),
    get: promisify(_get)
}


async function _get(cb) {

    try {

        mysqlConnection.query(`
            SELECT * from events_dummy;
        `, (err, rows, fields) => {
            if (err) return cb(errMsg._ERR(err));
            return cb(null, rows);
        });

    } catch (err) {
        return cb(errMsg._ERR(err));
    }
}



async function _add({ name, date, type, description, age, time }, cb) {

    try {

        if(!name || !date || !type || !description || !age || !time){
            throw errMsg.INCOMPLETE_ARGUMENTS;
        }
        type = type.toLowerCase();
        name = name.toLowerCase();

        mysqlConnection.query(`
                INSERT INTO events_dummy (name, date, type, description, age, time) 
                VALUES ('${name}', '${date}', '${type}', '${description}', '${age}', '${time}' );
        `, (err, rows, fields) => {
            if (err) return cb(errMsg._ERR(err));
            return cb(null, rows);
        });

    } catch (err) {
        return cb(errMsg._ERR(err));
    }
}



export default UserModelServices;