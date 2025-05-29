declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

exists(data(local:f#1))
