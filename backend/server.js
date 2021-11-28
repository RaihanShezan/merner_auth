import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// setup dotenv, express & morgan
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

// setup mongodb
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log('MongoDB connection error: ', err));

// setup port & listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on https://localhost:${port}`));
