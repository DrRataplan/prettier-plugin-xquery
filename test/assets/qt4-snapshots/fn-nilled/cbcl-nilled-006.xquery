import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

let $v := validate { <tc:nillable /> }
return fn:nilled($v)
