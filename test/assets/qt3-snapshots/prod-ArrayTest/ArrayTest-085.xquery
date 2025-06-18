let $f := function (

    $a as array(function (xs:numeric?) as xs:numeric?)
  ) as xs:boolean { array:size($a) eq 0 },
  $array := []
return $f($array)
