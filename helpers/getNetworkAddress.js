'use strict';
const { networkInterfaces } = require('os');

const getNetworkAddress = () => {
    const nets = networkInterfaces();
    let results = null; // Or just '{}', an empty object
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4'&& !net.internal) {
                results = net.address;
            }
        }
    }
    return results;
}

module.exports = getNetworkAddress;