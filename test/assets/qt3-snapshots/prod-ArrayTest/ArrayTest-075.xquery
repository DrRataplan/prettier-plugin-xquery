let $f := function ($a as array(xs:string)) as xs:boolean {
    array:size($a) ge 0
  }, $array := ["a", "b", "c", "d", "e", 0]
return $f($array)
