let $f := function (

    $a as array(map(xs:integer, map(xs:integer, map(xs:integer, map(*)))))
  ) as xs:boolean { array:size($a) eq 1 },
  $array := [map {1: map {2: map {true(): false()}}}]
return $f($array)
