import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $element :=
  validate type xs:QName { <a xmlns:p="http://example.com">p:space</a> }
return local-name-from-QName(s:sensitiveUnion($element))
