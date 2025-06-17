let $f :=
  function ($a as array(xs:anyAtomicType+)) as xs:boolean {
    array:size($a) eq 6
  },
  $array := ["a", "b", "c", "d", "e", map {}]
return $f($array)
