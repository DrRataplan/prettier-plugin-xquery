import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

let $value := myType:sizeType(20)
return $value
