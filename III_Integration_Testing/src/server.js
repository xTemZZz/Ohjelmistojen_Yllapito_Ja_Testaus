const express = require('express')
const converter = require('./rgbConverter')
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Hello HEX converters"));

app.get("/hexToRGB", (req, res) => {
	const hex = req.query.hex;
    try{
        const rgb = converter.hexToRGB(hex)
        res.send(rgb);
    } catch(err) {
        res.status(400).json({ error: "Invalid HEX value" })
    }   
});

if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;