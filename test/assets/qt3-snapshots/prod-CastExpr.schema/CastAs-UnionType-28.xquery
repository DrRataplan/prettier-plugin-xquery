import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $result := ("a b xs:integer" cast as s:unionOfLists)
return count($result) eq 3 and
    (
      $result instance of Q{http://www.w3.org/XQueryTest/unionListDefined}sensitiveUnion*
    )
