declare function local:integer ($x as xs:decimal) {
  if ($x mod 1 eq 0) then
    xs:integer($x)
  else
    $x
};

(local:integer(2) - local:integer(2)) instance of xs:integer
