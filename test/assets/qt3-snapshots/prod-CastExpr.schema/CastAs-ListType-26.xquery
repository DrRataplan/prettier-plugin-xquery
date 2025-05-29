import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

let $f as function (xs:string) as xs:integer* :=
  function-lookup(
    QName("http://www.w3.org/XQueryTest/unionListDefined", "myRestrictedList1"),
    1
  )
return $f("123 987 567 456")
