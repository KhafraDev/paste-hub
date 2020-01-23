const fetch = require('node-fetch');
const defaultURL = new URL('https://hastebin.com/documents');

/**
 * Upload to hastebin.com or an alternate server running haste-server.
 * @param {string} m Text content to upload. 
 * @param {string} [url=] Alternative server running haste-server to use. 
 */
const hastebin = async (m, url) => {
    if(url) url = new URL(url);

    const res = await fetch(!url ? defaultURL.href : url.href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest' // network header
        },
        body: m // most likely encoded on their side
    });

    if(res.status === 200) {
        const json = await res.json();
        return (!url ? defaultURL.origin : url.origin) + '/' + json.key
    } else {
        return res.ok;
    }
}

module.exports = hastebin;