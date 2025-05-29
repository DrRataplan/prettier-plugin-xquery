declare function local:f ($x as xs:integer) as xs:integer {
  $x
};

min(local:f(4) to local:f(10))
