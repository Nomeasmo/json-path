// package metadata file for Meteor.js

var packageName = 'nomeasmo:json-path';  // https://github.com/flitbit/json-path
var both = ['client', 'server'];  // both to install: 'client', 'server', or ['client', 'server']

Package.describe({
    name: packageName,
    summary: 'JSON-Path utility (XPath for JSON) for nodejs and modern browsers.',
    version: "0.1.3",
    git: 'https://github.com/flitbit/json-path'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@0.9.2.1', 'METEOR@1.0']);
    api.use('nomeasmo:json-ptr', both);
    api.use('templating', 'client');

    api.addFiles('index.js', both);
    api.addFiles('meteor/helper.js', 'client');
});

Package.on_test(function (api) {
    api.use(["tinytest", packageName]);
    api.use("templating", "client");

    // add stubs
    api.add_files('meteor/tests-client.js', 'client');
    api.add_files('meteor/tests.html', 'client');
    api.add_files('meteor/tests.js', both);
});