const fetch = require('node-fetch');
const URL = 'https://hatebin.com/index.php';

/**
 * Upload a paste to hatebin.
 * @param {string} m Text content to upload. 
 */
const hatebin = async m => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'text=' + encodeURIComponent(m)
    });

    if(res.status === 200) {
        const key = (await res.text()).trim(); //	yrhadkwqrs
        return 'https://hatebin.com/' + key
    } else {
        return res.ok;
    }
}

module.exports = hatebin;