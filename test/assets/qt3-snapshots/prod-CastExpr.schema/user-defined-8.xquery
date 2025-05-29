import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

(myType:sizeType(16) cast as myType:floatBased) eq 16
