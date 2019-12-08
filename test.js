const { hastebin } = require('./src');

hastebin("console.log('I am being uploaded through a POST request, wtf?');", 'https://hasteb.in/documents')
    .then(console.log)
    .catch(console.error)