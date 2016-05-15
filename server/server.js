var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  appId: 'ashdgvon12682762n13921879',
  masterKey: '89d22c0f261be72a88c3a7e100412f36', // Keep this key secret!
  fileKey: '89d22c0f261be72a88c3a7e100412f36ashdgvon12682762n13921879',
  serverURL: 'http://localhost:1337' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});
