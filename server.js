const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

// init Middlware
app.use(express.json({ extended: false }));

app.use('/', require('./routes/api/catagory'));

// Define Routes
app.use('/api/catagory', require('./routes/api/catagory'));
app.use('/api/item', require('./routes/api/item'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
