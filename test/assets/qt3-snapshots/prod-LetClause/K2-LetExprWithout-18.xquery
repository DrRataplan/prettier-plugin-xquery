declare function local:foo ($a as xs:integer) {
  if ($a = 3) then
    $a
  else
    let $a := $a
    return local:foo($a + 1)
};

local:foo(1)
