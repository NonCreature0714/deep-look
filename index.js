"use strict"

var app = {};

const dns = require('dns')
const fs = require('fs');
const http = require('http');
const https = require('https');
const net = require('net');
const os = require('os');
const path = require('path');
const url = require('url');


app = function check_OS() {
    return os.platform();
}

app = function get_cwd() {
    return process.cwd()
}
// TODO get host os
// TODO get cwd
// TODO check if there is a git repo
    // TODO get current hostname
    // TODO check of cwd is project root directory
    // TODO recursive up until find root or git directory
// TODO check for network connection
// TODO recursively count files
// TODO recursively count directories
// TODO get file extensions
// TODO check for bash files
// TODO tree from current directory down

module.exports = { app };