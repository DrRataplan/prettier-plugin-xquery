declare function local:f ($x as xs:integer) as xs:integer {
  $x + 3
};

let $f as function (xs:integer) as xs:integer := local:f#1
return $f(2)
