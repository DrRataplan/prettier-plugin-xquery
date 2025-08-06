declare namespace px = "http://www.example.com/abc";

let $var := <px:someElement>some context</px:someElement>
return namespace-uri-from-QName(node-name($var)) eq
  xs:anyURI("http://www.example.com/abc")
