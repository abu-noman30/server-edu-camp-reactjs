const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./Data/Courses.json');

// Get all courses
app.get('/all-courses', (req, res) => {
	res.send(courses);
});

app.get('/', (req, res) => {
	res.send('Server is running......!');
});

app.listen(port, () => {
	console.log(`Server is running at....http://localhost:${port}/ `);
});
