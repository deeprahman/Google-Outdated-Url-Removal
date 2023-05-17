"use strict";

const fs = require("fs").promises;

async function readCsv(file) {
    console.log('[x] Notice: ', 'CSV Module.');
    let res = [];

   const data = await fs.readFile(file, "binary");
    return matchRegEx(data);
}

function matchRegEx(url) {

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    let res;

    if (res = url.match(regex)) {
        return res;
    }
}

module.exports = {
    readCsv
};
