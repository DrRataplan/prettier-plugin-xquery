import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

declare function myType:sizeType ($a as xs:integer) {
  $a + 1
};

myType:sizeType(16) + myType:floatBased(16)
