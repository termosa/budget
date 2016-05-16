var argv = require('yargs').argv;
var path = require('path');

switch (argv._[0]) {
  case 'build':
    build();
    break;
  default:
    console.log("Error: Command not found");
}

function build() {
  var host = argv.h || argv.host || argv._[1];

  if (!host) {
    console.error('Error: Can not build the app without the server host');
    console.error('Provide the Firebase host via shell (npm run build https://my-app.firebaseio.com/)');
    return;
  }

  var settingsFile =
    `window.settings = window.settings || {};\n` +
    `window.settings.firebaseHost = "${host}";`;
  var fs = require('fs');
  fs.writeFile(path.join(__dirname, "public", "settings.js"), settingsFile, function(err) {
    if (err) { return console.error(err); }

    console.log(host, 'is added as the app server');
    console.log('Your app is ready to use: type "npm start" to run it');
  });
}
