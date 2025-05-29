import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $cast := s:lowercaseName#1
return $cast(xs:NCName("ABC123"))
