import schema namespace j =  "http://www.w3.org/2005/xpath-functions";

(
  fn:json-to-xml(
    '{"a":3, "b":true, "c":null, "d":[], "e":[1E2, ""], "f":{"1":true, "2":false}, "g\n":"h\n"}',
    map {"validate": true(), "escape": true()}
  )
) instance of document-node(schema-element(Q{http://www.w3.org/2005/xpath-functions}map))
