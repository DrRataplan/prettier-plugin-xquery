declare default function namespace "http://example.com/functions";

declare variable $f := (
  if (fn:current-date() gt xs:date("1900-01-01")) then
    plus#2
  else
    fn:round#2
);

declare function plus ($x, $y) {
  $x + $y
};

$f(5, 7)
