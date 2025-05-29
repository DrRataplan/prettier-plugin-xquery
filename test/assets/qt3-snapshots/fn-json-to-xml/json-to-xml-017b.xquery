import schema namespace j =  "http://www.w3.org/2005/xpath-functions";

fn:json-to-xml(
  "[1]",
  map {"validate": true()}
) instance of document-node(schema-element(j:array))
