declare default function namespace "http://example.org";

declare function price () as xs:integer+ {
  100
};

declare function price ($z as xs:integer) as xs:integer+ {
  $z
};

declare function price ($x as xs:integer, $y as xs:integer) as xs:integer+ {
  $x, $y
};

declare function price (
  $x as xs:integer,
  $y as xs:integer,
  $z as xs:integer
) as xs:integer+ {
  $x + $y + $z
};

price(), price(1), price(2, 3), price(4, 5, 6)
