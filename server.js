import { app } from './app.js';
import express from 'express';

import dotenv from 'dotenv';

dotenv.config({
	path: './data/config.env',
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
