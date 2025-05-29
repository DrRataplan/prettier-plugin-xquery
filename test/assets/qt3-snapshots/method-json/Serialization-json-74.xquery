declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:indent "no";
declare option output:media-type "text/json";
declare option output:encoding "UTF-8";
declare option output:json-node-output-method "xml";

map {
  "string-value": "a string",
  "numeric-value": 123.456,
  "node-value": element el1 {
      element el2 {
        "simple content"
      }
    },
  xs:integer("123456"): xs:integer("123456"),
  xs:date("2014-09-30"): "date-key",
  "2014-09-30": "string date key",
  "array":
    [xs:integer("123456"), xs:date("2014-09-30"), xs:boolean("true"),
    xs:boolean("false")]
}
