/* eslint-disable no-console */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

const mongo_db_url = process.env.MONGODBURL; 
					const port = process.env.PORT;

mongoose.connect(mongo_db_url!);

const app = express();

app.listen(port,()=>{
	console.log(`App is listening to port: ${port}`);
});

