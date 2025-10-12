declare function local:f ($x as xs:integer) as xs:integer {
  $x
};

not(not(local:f(1)))
