import { Router,Request,Response } from "express";
import { UserSignUp } from "./auth.service";
const router =Router();


router.post('/login', (req, res) => {
    res.send('Login route');
});