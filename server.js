const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors());

// Connect to DB
connectDB();

// init Middlware
app.use(express.json({ extended: false }));

app.use('/', require('./routes/api/catagory'));

// Define Routes
app.use('/api/catagory', require('./routes/api/catagory'));
app.use('/api/item', require('./routes/api/item'));
app.use('/api/brand', require('./routes/api/brand'));

// Serve Static assests in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
