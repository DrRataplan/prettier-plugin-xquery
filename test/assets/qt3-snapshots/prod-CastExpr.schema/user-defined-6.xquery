import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

(myType:sizeType(2) cast as xs:integer) eq 2
