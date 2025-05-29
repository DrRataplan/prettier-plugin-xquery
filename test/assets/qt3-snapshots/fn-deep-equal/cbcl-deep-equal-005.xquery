declare function local:f ($x as xs:integer) as xs:integer* {
  1 to $x
};

deep-equal((local:f(3), 2, local:f(1)), (local:f(3), 2))
