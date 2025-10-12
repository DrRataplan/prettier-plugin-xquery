function ($m as function (xs:anyAtomicType) as item()*) as xs:integer {
  map:size($m)
} instance of function (map(xs:integer, xs:string)) as xs:integer
