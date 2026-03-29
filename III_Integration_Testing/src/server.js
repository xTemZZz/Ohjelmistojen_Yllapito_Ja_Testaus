const express = require('express')
const converter = require('./rgbConverter')
const app = express()
const port = 3000

// Serve static files
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/hexToRGB", (req, res) => {
    const hex = req.query.hex;
    try {
        const rgb = converter.hexToRGB(hex)
        res.json(rgb);
    } catch(err) {
        res.status(400).json({ error: "Invalid HEX value" })
    }   
});

app.get("/rgbToHEX", (req, res) => {
    const r = parseInt(req.query.r);
    const g = parseInt(req.query.g);
    const b = parseInt(req.query.b);
    
    if (isNaN(r) || isNaN(g) || isNaN(b) || 
        r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return res.status(400).json({ error: "Invalid RGB values" });
    }
    
    const hex = "#" + 
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
    
    res.json({ hex: hex.toUpperCase() });
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`Server: http://localhost:${port}`));
}

module.exports = app;