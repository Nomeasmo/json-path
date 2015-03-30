var data = {
    store:
    {
        book: [
            {
                category: "reference",
                author: "Nigel Rees",
                title: "Sayings of the Century",
                price: 8.95
            },
            {
                category: "fiction",
                author: "Evelyn Waugh",
                title: "Sword of Honour",
                price: 12.99
            },
            {
                category: "fiction",
                author: "Herman Melville",
                title: "Moby Dick",
                isbn: "0-553-21311-3",
                price: 8.99
            },
            {
                category: "fiction",
                author: "J. R. R. Tolkien",
                title: "The Lord of the Rings",
                isbn: "0-395-19395-8",
                price: 22.99
            }
        ]
    }
};

Tinytest.add('jsonPath helper is working', function (test) {
    test.equal(Blaze.toHTMLWithData(Template.basicUse, data), data.store.book[0].author);
});

Tinytest.add('jsonPath helper can be used in block helper', function (test) {
    var html, authors = [];
    html = Blaze.toHTMLWithData(Template.blockUse, data);
    // Ensure template generates each author.
    data.store.book.forEach(function (book) {
        test.isTrue(html.indexOf(book.author) >= 0);
    });
});
