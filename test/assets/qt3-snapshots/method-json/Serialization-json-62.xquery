declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:indent "no";
declare option output:media-type "text/json";
declare option output:encoding "UTF-8";
declare option output:json-node-output-method "xml";

parse-json(unparsed-text("json/data004.json"))
