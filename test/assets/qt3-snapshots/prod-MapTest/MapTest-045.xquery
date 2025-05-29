function ($m as map(xs:integer, xs:string)) as xs:integer {
  map:size($m)
} instance of function (function (xs:integer) as item()*) as xs:integer
