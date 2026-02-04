function hexToRGB(hex) {
    let hexString;
    if (hex[0] === "#"){
        hexString = sliceHex(hex)
    } else {
        hexString = hex
    }
    if (hexString.length != 6){
        throw new Error("Invalid HEX value(s)")
    }
    
    const r = parseInt(hexString.slice(0, 2), 16);
    const g = parseInt(hexString.slice(2, 4), 16);
    const b = parseInt(hexString.slice(4, 6), 16);
    
    if (isNaN(r) || isNaN(g) || isNaN(b)){
        throw new Error("Invalid HEX value(s)")
    }
    return ({red: r, green: g, blue: b})
}

function sliceHex(hex){
   return (hex.slice(1))
}
module.exports = {hexToRGB}