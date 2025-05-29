function ($m as map(xs:integer, xs:string)) as xs:integer {
  map:size($m)
} instance of function (function(*)) as xs:integer
