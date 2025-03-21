const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const router = express.Router();
const fs = require("fs");

const projects = require("./projects.json");

router.get("/projects", (req, res) => {
    res.json(projects);
  });

router.get('/weather', async (req, res) => {
    const city = req.query.city || 'Halifax';
    const apiKey = '26466829b62f41c0a1e44b2cf9b6a638';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherInfo = {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity
        };
        res.json(weatherInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});


app.use(cors());
app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);