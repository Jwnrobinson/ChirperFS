import { query }from './index';
import DB from './index';
import express from 'express';
import Chirps from './index';


let router = express.Router();

interface Chirps {
	id: number;
	userid: number;
	message: string;
	location: string;
	create_at: Date;
	username: string;
}
const all = () => query<Chirps[]> ('SELECT chirps.*, users.username FROM chirps JOIN users ON users.id = chirps.userid ORDER BY chirps.id DESC');

const one = (_id: number) => query <Chirps[]>('SELECT chirps.*, users.username FROM chirps JOIN users ON users.id = chirps.userid WHERE chirps.id = ?', [id]);

const insert = (userid: number, message: string) => query< {insertId: number }>('INSERT INTO chirps (userid, message) VALUE (?)', [[userid, message]]);

const update = (message: string, id: number) => query('UPDATE chirps SET message = ? WHERE id = ?', [message, id]);

const destroy = (id: number) => query<Chirps[]>('DELETE FROM chirps WHERE id = ?', [id]);


router.get('/api/chirps', async (_req, res) => {
    try{
        res.json(DB.chirps.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}); 


router.post('/api/chirps', async (_req, res) => {
    DB.chirps.all();
    res.sendStatus(500);
});

module.exports = router;




export default {
    all,
    one,
    insert,
    update,
    destroy

}