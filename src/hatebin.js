/*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.responseText;
            history.replaceState(null, null , response);
            document.title = 'hatebin - ' + response;
        }
    }
    xhttp.open('POST', (document.location.href.substring(0, document.location.href.length - document.location.pathname.length) + '/index.php'), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var encoded = encodeURIComponent(cnt.value.substring(0, 50000));
    xhttp.send('text=' + encoded);
*/

const fetch = require('node-fetch');
const URL = 'https://hatebin.com/index.php';

const hatebin = async m => {
    try {
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'text=' + encodeURIComponent(m)
        });

        if(res.status === 200) {
            const key = (await res.text()).trim(); //	yrhadkwqrs
            return {
                key: key,
                url: 'https://hatebin.com/' + key
            };
        } else {
            throw new Error(`Received status ${res.status} (${res.statusText})`);
        }
    } catch(err) {
        throw err;
    }
}

module.exports = hatebin;