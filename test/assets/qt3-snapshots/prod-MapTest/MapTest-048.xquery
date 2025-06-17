let $f :=
  function ($m as map(xs:integer, xs:string)) as xs:integer { map:size($m) }
return $f(map {})
