import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $f := s:myUnionType1#1
return $f(123.12)
