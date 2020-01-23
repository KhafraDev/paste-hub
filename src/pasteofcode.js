const fetch = require('node-fetch');
const { stringify } = require('querystring');

const ofcode = async (code, language) => {
    const res = await fetch('https://paste.ofcode.org/', {
        method: 'POST',
        body: stringify({
            code: code,
            language: language,
            notabot: 'most_likely'
        }),
        redirect: 'manual',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    if(res.status === 302) {
        return res.headers.get('location');
    } else {
        return res.ok;
    }
}

module.exports = ofcode;