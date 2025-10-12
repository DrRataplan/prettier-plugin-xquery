declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:indent "no";
declare option output:media-type "text/json";
declare option output:encoding "UTF-8";
declare option output:json-node-output-method "xml";

map {
  "book":
    map {
      "title": "Data on the Web",
      "year": 2000,
      "author":
        [
          map {"last": "Abiteboul", "first": "Serge"},
          map {"last": "Buneman", "first": "Peter"},
          map {"last": "Suciu", "first": "Dan"}
        ],
      "xml-content": <simple>text-value</simple>,
      "publisher": "Morgan Kaufmann Publishers",
      "price": 39.95
    }
}
