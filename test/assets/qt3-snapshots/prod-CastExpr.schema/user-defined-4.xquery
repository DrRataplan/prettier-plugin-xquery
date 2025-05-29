import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

let $value := myType:stringBased("valid value 4")
return $value
