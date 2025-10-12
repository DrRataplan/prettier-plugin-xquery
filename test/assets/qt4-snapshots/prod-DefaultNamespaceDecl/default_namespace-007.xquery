declare default function namespace "http://example.org";

declare variable $a := 1;

declare function foo ($a as xs:integer) {
  if ($a > 100) then
    $a
  else
    let $a := $a + 1
    return foo($a)
};

foo($a)
