let $f :=
  function ($a as array(xs:integer)) as xs:boolean { array:size($a) eq 1 },
  $g :=
  function ($n as xs:integer) as array(xs:string) { array { (1 to $n)!"x" } }
return $f($g(0))
