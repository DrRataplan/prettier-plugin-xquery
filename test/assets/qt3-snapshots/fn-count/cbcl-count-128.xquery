declare function local:primes ($n as xs:integer) {
  if ($n lt 2) then
    1
  else
    for $i in 2 to $n
    return if (every $x in 2 to ($i - 1) satisfies ($i mod $x ne 0)) then
        $i
      else (
      )
};

declare function local:square ($n as xs:float) {
  $n * $n
};

count(local:primes(100)) eq local:square(xs:float("4.9"))
