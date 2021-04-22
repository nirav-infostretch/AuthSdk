const queryString = require('query-string');

const getPasedUrl = () => {
    const url = "https://github.com/sindresorhus/query-string/releases?after=v6.2.0";
    const parsed = queryString.extract(url);
    console.log(parsed);
    return parsed;
}
getPasedUrl();

exports.getPasedUrl = getPasedUrl;