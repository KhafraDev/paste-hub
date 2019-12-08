const { hastebin, hatebin } = require('../src');

/*
Example usage: (leave argsv empty to default to hastebin.com)
node test/index.test.js https://hasteb.in/documents

Expected return values (key will be different):
{ key: 'tcdkucqrtb', url: 'https://hatebin.com/tcdkucqrtb' }
{ key: 'igehadok', url: 'https://hasteb.in/igehadok' }
*/

const hatebinTest = async () => {
    console.log(await hatebin("console.log('I am uploading from a test with khafradev/paste-hub');"));
}

const hastebinTest = async u => {
    const r = await hastebin("console.log('I am uploading from a test with khafradev/paste-hub');", u || null);
    console.log(r);
}

hatebinTest();
hastebinTest(process.argv[2]);