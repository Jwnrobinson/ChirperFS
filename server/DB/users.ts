import { query } from "express";
import DB from './index';


import express from 'express';
let router = express.Router();



router.get('/api/users', async (_req: any, res: { json: (arg0: any) => void; sendStatus: (arg0: number) => void; }) => {
    try{
        res.json(DB.users.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}); 


module.exports = router;

interface Users {
    id?: number;
    username?: string;
    email?: string;
    created_at?: Date;
}

const all = <T = any>(columns: string[] = ['*']) => query<T>('SELECT ?? FROM users', [columns]);

const insert = (_values: any) => query< insert; () =>('INSERT INTO users (username, email, created_at) VALUES?', const []);

export default {
    all,
    insert
};