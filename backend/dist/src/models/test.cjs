"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlVersion = void 0;
const test = require('sqlite3');
const sqlVersion = () => { console.log(test.VERSION); };
exports.sqlVersion = sqlVersion;
