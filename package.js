// package metadata file for Meteor.js

var packageName = 'json-path';  // https://github.com/flitbit/json-path
var both = ['client', 'server'];  // both to install: 'client', 'server', or ['client', 'server']
var packageJson = JSON.parse(Npm.require("fs").readFileSync('packages/json-path/package.json'));

Package.describe({
    name: packageName,
    summary: 'JSON-Path utility (XPath for JSON) for nodejs and modern browsers.',
    version: packageJson.version,
    git: 'https://github.com/flitbit/json-path'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@0.9.2.1', 'METEOR@1.0']);
    api.use('json-ptr', both);
    api.use('templating', 'client');

    api.addFiles('index.js', both);
    api.addFiles('meteor/helper.js', 'client');
});

Package.on_test(function (api) {
    api.use(["tinytest", "json-path"]);
    api.use("templating", "client");

    // add stubs
    api.add_files('meteor/tests-client.js', 'client');
    api.add_files('meteor/tests.html', 'client');
    api.add_files('meteor/tests.js', both);
});