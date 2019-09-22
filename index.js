const express = require('express');
const app = express();
const port = 3000;
const MahaLap = require("./maha-lap");

app.get('/', (req, res) => res.send("เจริญพรจ้า!!!!"));

app.use("/public", express.static("public"));

app.get("/namo", (req, res) => {
    const day = req.query.day;
    const story = req.query.story;
    const time = req.query.time;
    const theHolyNumber = MahaLap.namo(day, story, time);
    res.json({
        result: theHolyNumber
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));