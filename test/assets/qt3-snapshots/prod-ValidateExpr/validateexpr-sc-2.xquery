import schema namespace ss =  "http://www.w3.org/query-test/complexSimple";

let $v := validate { <ss:emptyMixed>1</ss:emptyMixed> }
let $dv := fn:data($v)
return fn:not($dv instance of xs:integer)
