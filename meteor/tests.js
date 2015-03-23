Tinytest.add('JsonPath is exported by package.js', function (test) {
    test.instanceOf(JsonPath, Object);
});
Tinytest.add('JsonPath is is working (basic access only)', function (test) {
    var p = JsonPath.create('../b'),
        data = {
            a: {
                a: "a.a",
                b: "a.b"
            }
        };

    test.equal(p.resolve(data), [data.a.b]);
});
