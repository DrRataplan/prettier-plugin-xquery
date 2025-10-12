declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

string(local:f#1)
