import express from 'express';

const app = express();

// app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.get('/users', (req, res) => {
	const users = [
		{ name: 'John', age: 30 },
		{ name: 'Jane', age: 25 },
	];

	res.status(200).json({
		status: 'success',
		data: users,
	});
});

export { app };
