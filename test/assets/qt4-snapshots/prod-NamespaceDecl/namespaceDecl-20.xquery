declare namespace xx = "http://www.example.com/abc123";

let $var := <xx:someElement>some content</xx:someElement>
return namespace-uri-from-QName(node-name($var)) eq
    xs:anyURI("http://www.example.com/abc123")
