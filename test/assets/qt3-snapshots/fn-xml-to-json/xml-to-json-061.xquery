import schema default element namespace  "http://www.w3.org/2005/xpath-functions";

xml-to-json(
  validate strict { json-to-xml('{"a":2, "b\\":[null, true, false, "xyz\t"]}') }
)
