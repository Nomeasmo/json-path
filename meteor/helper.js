Meteor.startup(function () {
    Handlebars.registerHelper('jsonPath', function (data, path) {
        var p = JsonPath.create(path || data);
        if (data) {
            return p.resolve(data);
        }
        return this;
    });
});
