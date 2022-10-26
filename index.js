const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./Data/Courses.json');
const courseDetails = require('./Data/Details.json');

// Get all courses
app.get('/all-courses', (req, res) => {
	res.send(courses);
});

// Get course details by course id
app.get('/all-courses/:id', (req, res) => {
	const id = req.params.id;
	const singleCourse = courseDetails.find((cd) => cd.course_id === id);
	if (!singleCourse) res.status(404).send('The course with the given ID was not found.');
	res.send(singleCourse);
});

// Get course details
app.get('/course-details', (req, res) => {
	res.send(courseDetails);
});

// Get course details by course details id
app.get('/course-details/:id', (req, res) => {
	const id = req.params.id;
	const details = courseDetails.find((did) => did._id === id);
	if (!details) res.status(404).send('The course with the given ID was not found.');
	res.send(details);
});

// Server Testing Route
app.get('/', (req, res) => {
	res.send('Server is running......!');
});

// Server Listening Port
app.listen(port, () => {
	console.log(`Server is running at....http://localhost:${port}/ `);
});
