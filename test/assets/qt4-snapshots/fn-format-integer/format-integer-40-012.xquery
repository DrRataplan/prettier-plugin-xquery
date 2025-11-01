every
  $r in
  (2 to 36), $n in
  (0, 1, 7, 23, 86, 159, 2134672, 105093381562) satisfies
  (format-integer($n, $r || "^X") => parse-integer($r)) eq $n
