import schema namespace ss =  "http://www.w3.org/query-test/complexSimple";

let $v := validate { <ss:complexExtendsUnion>2</ss:complexExtendsUnion> }
let $dv := fn:data($v)
return ($dv instance of xs:integer)
