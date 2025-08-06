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

declare function local:strange ($n as xs:boolean) as xs:float {
  if ($n) then
    xs:float("NaN")
  else
    xs:float("INF")
};

count(local:primes(100)) ge local:strange(false())
