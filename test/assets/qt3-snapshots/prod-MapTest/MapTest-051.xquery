function ($m as map(xs:decimal, xs:string+)) as xs:integer {
  map:size($m)
} instance of function (map(xs:integer, xs:string)) as xs:integer
