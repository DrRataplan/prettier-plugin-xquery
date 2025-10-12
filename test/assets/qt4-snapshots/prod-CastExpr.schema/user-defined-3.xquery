import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

let $value := myType:sizeType(1) + myType:sizeType(2)
return $value
