import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $fn :=
  function-lookup(
    QName("http://www.w3.org/XQueryTest/unionListDefined", "unionOfLists"),
    1
  )
let $result := $fn("a b xs:integer")
return count($result) eq 3 and ($result instance of s:sensitiveUnion*)
