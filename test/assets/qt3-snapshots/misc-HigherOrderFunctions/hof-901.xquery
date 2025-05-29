declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

let $f := local:g#1
return $f(2)
