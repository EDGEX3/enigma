#!/usr/bin/env node
//import
import express from "express";
import { config } from "dotenv";
import chalk from "chalk";
//config
config();
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//routes
 
//server
app.listen(PORT, () => {
  try {
    process.stdout.write(`\x1b[2J`); //clear screen 
    process.stdout.write(`\x1b[0f`); //set cursor to 0,0
    console.log(chalk.bold.blueBright(`Server is activeted on >\n ${chalk.bold.greenBright(`✅ http://localhost:${PORT}/`)}`)); 
  } catch (error) {
    console.log(chalk.red(error));    
  }
});