declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

deep-equal((1, 2, 3, 4, local:f#1), (1, 2, 3, 4, local:f#1))
