declare function local:f () as xs:integer {
  42
};

declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

let $f := local:f#0
return $f()
