import express from 'express'
import { getHome } from '../controllers/home.js';

const router = express.Router();

router.get('/', getHome);

/*

    GET -> Read
    POST -> Create
    PATCH -> Update
    DELETE -> Delete

*/

export default router; 