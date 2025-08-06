import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $fn := s:unionOfLists#1
let $result := $fn("a b xs:integer")
return count($result) eq 3 and
  (
    $result instance of Q{http://www.w3.org/XQueryTest/unionListDefined}sensitiveUnion*
  )
