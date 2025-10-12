declare variable $a := 1;

declare function local:foo ($a as xs:integer) {
  if ($a > 100) then
    $a
  else
    let $a := $a + 1
    return local:foo($a)
};

local:foo($a)
