let $f := function ($a as array(xs:string?)) as xs:boolean {
    array:size($a) eq 6
  },
  $array := ["a", "b", "c", "d", "e", ()]
return $f($array)
