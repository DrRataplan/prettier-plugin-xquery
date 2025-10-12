declare function local:f ($x as xs:integer) as xs:integer {
  $x
};

max(local:f(4) to local:f(10))
