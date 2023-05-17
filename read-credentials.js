"use strict";

const fs = require("fs").promises;

async function readCredentials(file) {
    console.log('[x] Notice: ', 'Credentials Module.');
    let res = [];

   const data = await fs.readFile(file, "binary");
    return JSON.parse(data);
}


module.exports = {
    readCredentials
};