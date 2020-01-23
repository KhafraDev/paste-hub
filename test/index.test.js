const { hastebin, hatebin, ofcode } = require('../src');
const assert = require('assert');

describe('Paste-Hub supports multiple formats.', () => {
    it('Hatebin.com | A Hastebin alternative', async () => {
        const paste = await hatebin('Uploading a paste using @khafradev/paste-hub!');
        assert.strictEqual(typeof paste, 'string');
    });

    it('paste.ofcode.org A place to paste code', async () => {
        const paste = await ofcode('Hello, world!', 'python');
        assert.strictEqual(typeof paste, 'string');
    });

    describe('Hastebin.com or Servers running haste-server', () => {
        it('hastebin.com should not error out!', async () => {
            await assert.doesNotReject(hastebin('Uploading a paste using @khafradev/paste-hub!'));
        });

        it('an alternative server (https://hastebin-plus.herokuapp.com/) should not error out!', async () => {
            await assert.doesNotReject(hastebin('Uploading a paste using @khafradev/paste-hub!', 'https://hastebin-plus.herokuapp.com/documents'));
        });

        it('Passing an invalid URL should reject', async () => {
            await assert.rejects(hastebin('Not uploading a paste!', 'not a url, lol'));
        });
    });
});

