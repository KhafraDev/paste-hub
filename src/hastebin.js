/*haste_document.prototype.save= function(t,e) {
    if(this.locked) return !1;
    this.data=t;
    var o=this;
    $.ajax("/documents", {
        type:"post",
        data:t,
        dataType:"json",
        contentType:"application/json; charset=utf-8",
        success:function(n) {
            o.locked= !0,
            o.key=n.key;
            var s=hljs.highlightAuto(t);
            e(null,{value:s.value,key:n.key,language:s.language,lineCount:t.split("\n").length})
        }
    })
};*/

const fetch = require('node-fetch');
const defaultURL = new URL('https://hastebin.com/documents');

const hastebin = async (m, url) => {
    try {
        if(url) url = new URL(url); // can throw error

        const res = await fetch(!url ? defaultURL.href : url.href, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest' // network header
            },
            body: m // most likely encoded on their side
        });

        if(res.status === 200) { // extremely rare
            const json = await res.json();
            return {
                key: json.key,
                url: (!url ? defaultURL.origin : url.origin) + '/' + json.key
            }
        } else {
            throw new Error(`Received status ${res.status} (${res.statusText})`);
        }
    } catch(err) {
        throw err;
    }
}

module.exports = hastebin;