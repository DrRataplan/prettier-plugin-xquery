import schema namespace ss =  "http://www.w3.org/query-test/complexSimple";

let $v := validate { <ss:complexExtendsSimple>1</ss:complexExtendsSimple> }
let $dv := fn:data($v)
return ($dv instance of xs:integer)
