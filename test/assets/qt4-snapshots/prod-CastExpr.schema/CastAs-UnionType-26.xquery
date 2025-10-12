import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $f as function (xs:anyAtomicType?) as s:sensitiveUnion? := s:lowercaseName#1
return $f("candlewick")
