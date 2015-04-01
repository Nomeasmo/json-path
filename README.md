json-path (alpha) 
=========

Meteor Version of JSON-Path utility (XPath for JSON) for client and server.

This is a fork of [json-path](https://github.com/flitbit/json-path)

Please refer to this project for the syntax.

## Install

`meteor add nomeasmo:json-path`

## Example

This Meteor package adds the global JsonPath to client and server.

In addition a template helper `JsonPath` is introduced.

Javascript:
```javascript
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

        // Use some wildcards
        var p = path.create("/store/book[*][/author]");
        var res = p.resolve(data);

        // Or even completely lazy style
        var p = path.create("../author");
        var res = p.resolve(data);
```

Template usage:
Using json-path to resolve data from deep data structure.
```html
<template name="basicUse">
    {{jsonPath this "../book[0]/author"}}
</template>
```
Or using json-path in block helper like each to iterate over structures that are hidden a bit deeper.
```html
<template name="blockUse">
    {{#each jsonPath this "../book[*]"}}
        {{author}}
    {{/each}}
</template>
```


