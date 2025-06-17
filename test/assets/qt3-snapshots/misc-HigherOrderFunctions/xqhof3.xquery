import module namespace func = "http://snelson.org.uk/functions/functional";

declare function local:fib2_aux (
  $result as xs:integer,
  $next as xs:integer,
  $n
) as xs:integer* {
  if ($n eq 0) then (
  ) else (
    $result, local:fib2_aux($next, $next + $result, $n - 1)
  )
};

declare function local:fib2 ($n) as xs:integer* {
  local:fib2_aux(0, 1, $n)
};

declare function local:map-pairs ($f, $a, $b) {
  for-each-pair($a, $b, $f)
};

string-join(
  for $a in
    subsequence(
      let $interleave :=
        func:curry(local:map-pairs#3)(function ($a, $b) { $a, $b })
      let $enumerate := $interleave(0 to 49)
      return $enumerate(local:fib2(50)),
      1,
      100
    )
  return string($a),
  "
"
)
