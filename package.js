// package metadata file for Meteor.js

var packageName = 'json-path';  // https://github.com/flitbit/json-path
var where = ['client', 'server'];  // where to install: 'client', 'server', or ['client', 'server']
var packageJson = JSON.parse(Npm.require("fs").readFileSync('packages/json-path/package.json'));

Package.describe({
    name: packageName,
    summary: 'JSON-Path utility (XPath for JSON) for nodejs and modern browsers.',
    version: packageJson.version,
    git: 'https://github.com/flitbit/json-path'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@0.9.2.1', 'METEOR@1.0']);
    api.addFiles([
        'releases/json-path+json-ptr-0.1.3.min.js'
    ], where);
});
