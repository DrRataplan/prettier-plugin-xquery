for $i in (-2, -4, -10, -50, +50, +10, +4, +2)
return (xs:yearMonthDuration("P5M") div $i)
