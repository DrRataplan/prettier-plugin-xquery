import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

let $v := validate { <tc:nillable xsi:nil="false" /> }
return fn:nilled($v)
