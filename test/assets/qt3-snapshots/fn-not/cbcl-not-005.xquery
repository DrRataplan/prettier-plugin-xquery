declare function local:f ($x as xs:integer) as xs:integer* {
  1 to $x
};

not(exists(local:f(0)))
