declare function local:primes ($s as xs:integer, $n as xs:integer) {
  let $start := if ($s lt 2) then
    2
  else
    $s
  return for $i in $s to $n
    return if (every $x in 2 to ($i - 1) satisfies ($i mod $x ne 0)) then
        $i
      else (
      )
};

not(count(local:primes(2, 100)) ne count(local:primes(100, 200)))
