declare default function namespace "http://example.com/hof-006";

declare function g ($x as xs:integer) as xs:integer {
  $x + 1
};

let $f := g#1
return $f(21)
