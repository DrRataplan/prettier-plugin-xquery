function ($m as map(xs:integer, xs:string)) as xs:integer {
  map:size($m)
} instance of function (map(*)) as xs:integer
