const path = require('path')
const express = require('express')
const { application } = require('express')
const app = express()
const port = 3000 // variable for app.listen()
const bodyParser = require('body-parser') // require body parser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { // basic root route
	res.send('Welcome to Data Representation & Querying') // send plain text response
})

app.get('/hello/:name', (req, res) => { // route which takes a parameter "name" 
	res.send(`Hello ${req.params.name}`)  // our paramter is available in req.params
})

app.get('/api/movies', (req, res) => { // route which will return movies in json format
	const mymovies = // variable to store array of objects
		[
			{
				"Title": "Avengers: Infinity War",
				"Year": "2018",
				"imdbID": "tt4154756",
				"Type": "movie",
				"Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
			}, {
				"Title": "Captain America: Civil War", "Year": "2016",
				"imdbID": "tt3498820",
				"Type": "movie",
				"Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
			}
		]
	res.json({movies:mymovies}) // send the response with the contents of the mymovies variable
})

app.get('/test', (req, res) => {
	res.sendFile(__dirname + `/index.html`) // this uses the path package to determine the absolute path of the current directory
})

app.get('/name', (req, res) => {
	res.send(`Hello ${req.query.fname} ${req.query.lname}`)  // Response to GET request from our html form
})

app.post('/name', (req, res) => { // this is a response to a post request to /name, so the request contents won't be visible in the URL
	res.send(`Hello ${req.body.fname} ${req.body.lname}`)
})

app.listen(port, () => { // express function to listen on port 3000 as specified in the port variable above
	console.log(`Example app listening at http://localhost:${port}`)
})