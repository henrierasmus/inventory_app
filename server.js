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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
