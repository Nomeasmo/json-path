json-path (alpha) 
=========

Meteor Version of JSON-Path utility (XPath for JSON) for client and server.

This is a fork of [json-path](https://github.com/flitbit/json-path)

Please refer to this project for the syntax.

## Install

`meteor add xx:json-path`

## Example

This Meteor package also adds the global JsonPath to client and server.

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
```html
<template name="jsonPath">
   {{jsonPath store '../author'}}
</template>
```


