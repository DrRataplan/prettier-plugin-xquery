declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

let $f := xs:date#2
return $f("2008-03-01")
