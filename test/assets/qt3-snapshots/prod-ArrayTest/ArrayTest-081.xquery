let $f := function ($a as array(array(xs:string*))) as xs:boolean {
    array:size($a) eq 3
  }, $array := [["a", "b"], ["c", "d"], ([], ["e"])]
return $f($array)
