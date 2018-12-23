"use strict";

var language = Object();
language.file_extensions = Array();
language.keywords = Array();
language.operators = Array();
language.syntax_rules = Array();

language = function add(file_extension) {
    language.file_extensions.push(file_extension);
}

language = function identify(file_extension) {
    if (typeof language.file_extensions[file_extension] === 'undefined') {
        return false;
    }

    return true;
}

language = function add(keyword) {
    language.keywords.push(keyword);
}

language = function identify(keyword) {
    if (typeof language.keywords[keyword] === 'undefined') {
        return false;
    }

    return true;
}

language = function add(operator) {
    language.operators.push(operator);
}

language = function identify(operator) {
    if (typeof language.operators[operator] === 'undefined') {
        return false;
    }

    return true;
}

module.exports = { language };