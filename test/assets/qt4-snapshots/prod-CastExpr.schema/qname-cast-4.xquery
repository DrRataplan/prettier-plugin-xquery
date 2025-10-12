import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

let $var := xs:QName("value1")
return $var cast as myType:QNameBased
