import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

let $value := myType:sizeType(1)
return ($value eq 1)
