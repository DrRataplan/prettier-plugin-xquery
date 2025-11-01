let $f := function (

    $a as array(function (xs:numeric?) as xs:numeric?)
  ) as xs:boolean { $a(4)(2) = 2 },
  $array := [floor#1, ceiling#1, round#1, name#1]
return $f($array)
