import schema namespace ss =  "http://www.w3.org/query-test/complexSimple";

let $v := validate { <ss:complexExtendsUnion>1</ss:complexExtendsUnion> }
let $dv := fn:data($v)
return fn:not($dv instance of xs:integer)
