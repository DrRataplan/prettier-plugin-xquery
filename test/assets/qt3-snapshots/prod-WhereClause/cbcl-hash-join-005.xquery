declare function local:durationOrFloat ($i as xs:integer) {
  (xs:float(123), xs:float(234), xs:duration("P1D"))[$i]
};

for $x in (xs:untypedAtomic("123"), xs:untypedAtomic("234"))
for $y in
  (
    for $z in (1, 2)
    return local:durationOrFloat($z)
  )
where $x = $y
return $x
