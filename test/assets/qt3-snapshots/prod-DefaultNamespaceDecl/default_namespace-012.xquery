declare default function namespace "http://example.org";

declare function fn1 ($n as xs:integer) as xs:integer {
  fn2($n)
};

declare function fn2 ($n as xs:integer) as xs:integer {
  if ($n = 1) then
    1
  else
    $n + fn1($n - 1)
};

fn1(4)
