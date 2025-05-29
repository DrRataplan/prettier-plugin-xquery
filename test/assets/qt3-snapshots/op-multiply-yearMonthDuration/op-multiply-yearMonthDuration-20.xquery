for $i in
  (-3.9, -3.5, -3.1, -0.9, -0.5, -0.1, +0.1, +0.5, +0.9, +3.1, +3.5, +3.9)
return xs:yearMonthDuration("P1M") * $i
