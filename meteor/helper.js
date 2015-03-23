Meteor.startup(function () {
    UI.registerHelper('jsonPath', function (data, path) {
        var p = JsonPath.create(path);
        if (data) {
            return p.resolve(data);
        }
        return this;
    });
});
