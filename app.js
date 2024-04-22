import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('myfile.html', { root: __dirname + '/public' }, (err) => {
		if (err) {
			console.error('Error sending file:', err);
			res.status(err.status).end();
		} else {
			console.log('File sent successfully');
		}
	});
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
