import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./Routes/authRoute.js";
import categoryRoute from "./Routes/categoryRoute.js";
import productRoute from "./Routes/productRoute.js";
import cors from 'cors';


// config dotenv
dotenv.config();

// DB config
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/product', productRoute);


// rest API
app.get('/', (req, res) => {
    res.send(`Connected to server successfully in ${process.env.Dev_mode} mode`);
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.Dev_mode} mode on port ${PORT}`.bgCyan.white);
});
