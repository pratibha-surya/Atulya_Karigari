import express from 'express';


import { login, signup } from '../controller/auth.controller.js';
import authMiddleware from '../middleware/authmeddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

export default router;
