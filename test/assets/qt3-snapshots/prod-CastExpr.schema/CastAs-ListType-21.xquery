import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $result := ("a b xs:integer" cast as s:listOfUnions)
return count($result) eq 3 and
    $result[1] eq "a" and
    $result[1] instance of xs:NCName and
    $result[1] instance of s:sensitiveUnion
