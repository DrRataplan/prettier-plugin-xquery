import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $e := <p:a xmlns:p="http://www.example.com/"/>
return node-name($e) castable as s:sensitiveUnion
