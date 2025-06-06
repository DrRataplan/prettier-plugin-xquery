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

declare function local:strange ($n as xs:boolean) as xs:double {
  if ($n) then
    xs:double("NaN")
  else
    xs:double("INF")
};

count(local:primes(100)) gt local:strange(false())
