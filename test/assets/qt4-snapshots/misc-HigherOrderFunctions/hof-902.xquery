declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

let $f := local:f#3
return $f(2)
