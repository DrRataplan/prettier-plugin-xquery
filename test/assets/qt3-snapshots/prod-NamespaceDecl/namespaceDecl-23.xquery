declare namespace abc = "http://www.example.com/abc&amp;";

let $var := <abc:someElement>some content</abc:someElement>
return namespace-uri-from-QName(node-name($var)) eq
  xs:anyURI("http://www.example.com/abc&amp;")
