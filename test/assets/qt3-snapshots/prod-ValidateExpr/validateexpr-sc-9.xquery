import schema namespace ss =  "http://www.w3.org/query-test/complexSimple";

let $v := validate { <ss:complexExtendsList>1</ss:complexExtendsList> }
let $dv := fn:data($v)
return ($dv instance of xs:integer)
